/* in-content.js
 *
 * This file has an example on how to communicate with other parts of the extension through a long lived connection (port) and also through short lived connections (chrome.runtime.sendMessage).
 *
 * Note that in this scenario the port is open from the popup, but other extensions may open it from the background page or not even have either background.js or popup.js.
 * */

import axios from "axios";
const url = 'https://vayvonthechap.com:8080/predict';

// Extension port to communicate with the popup, also helps detecting when it closes
let port = null;

// Send messages to the open port (Popup)
const sendPortMessage = data => port.postMessage(data);

// Handle incoming popup messages
const popupMessageHandler = message => console.log('in-content.js - message from popup:', message);

// Start scripts after setting up the connection to popup
chrome.extension.onConnect.addListener(popupPort => {
    // Listen for popup messages
    popupPort.onMessage.addListener(popupMessageHandler);
    // Set listener for disconnection (aka. popup closed)
    popupPort.onDisconnect.addListener(() => {
        console.log('in-content.js - disconnected from popup');
    });
    // Make popup port accessible to other methods
    port = popupPort;
    // Perform any logic or set listeners
    sendPortMessage('message from in-content.js');
    let articleNodes = getElementByXpath("//*[@data-test-id='comment']");
    try {
        // articleNodes.snapshotLength
        for (var i = 0; i < 30; i++) {
            const article = articleNodes.snapshotItem(i);
            const result = document.createElement("div");
            result.id = "data-fake";
            axios.post(url, {text: article.textContent}).then(res => {
                console.log(res);
                const pred = Math.abs(Number(res.data.result))
                if(pred > 1){
                    result.innerHTML = `<span class='label label-warning'>Noise</span>`
                }else if (pred > 0.5) {
                    result.innerHTML = `<span class='label label-danger'>Fake ${pred*100} %</span>`
                }else if(pred < 0.5 ) {
                    result.innerHTML = `<span class='label label-success'>True ${(1-pred)*100} %</span>`
                }

            });
            if (article.lastChild.id === 'data-fake') {
                article.removeChild(article.lastChild);
            }
            article.appendChild(result);
            
        }
        // let thisNode = articleNodes.iterateNext();
        // while (thisNode) {
        //     console.log(thisNode.textContent);
        //     
        //     thisNode = articleNodes.iterateNext();
        // }
    } catch (e) {
        alert('Error: Document tree modified during iteration ' + e);
    }
});

// Response handler for short lived messages
const handleBackgroundResponse = response =>
    console.log('in-content.js - Received response:', response);

// Send a message to background.js
chrome.runtime.sendMessage('Message from in-content.js!', handleBackgroundResponse);
function getElementByXpath(path) {
    return document.evaluate(path, document, null, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null);
}