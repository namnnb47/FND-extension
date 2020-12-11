/* in-content.js
 *
 * This file has an example on how to communicate with other parts of the extension through a long lived connection (port) and also through short lived connections (chrome.runtime.sendMessage).
 *
 * Note that in this scenario the port is open from the popup, but other extensions may open it from the background page or not even have either background.js or popup.js.
 * */

import axios from "axios";
const cookie = require('./cookie');
//port
const url = 'https://vayvonthechap.com:8080/predict';

// Extension port to communicate with the popup, also helps detecting when it closes
let port = null;

// Send messages to the open port (Popup)
const sendPortMessage = data => port.postMessage(data);

// Handle incoming popup messages
var token;
var username;

const popupMessageHandler = (arr) => {
    // console.log('in-content.js - message from popup:',u_token = message);
    console.log('in-content.js - message from popup:', arr);
    token = arr.message;
    username = arr.email;
    console.log("token: " + token + "\n" + "username: " + username)
    // if (message) {

    //     if (message.action === 'sign-in') {
    //         cookie.setCookie('user', message.user, 1)
    //     }
    //     if (message.action === 'sign-out') {
    //         cookie.setCookie('user', null, 0)
    //     }
    // }
}


var articleNodesList = []
// const token = localStorage.getItem("TOKEN");
const handleScroll = () => {
    
    console.log('scrolling .. ')
    const val = document.body.scrollTop || document.documentElement.scrollTop
    // console.log(val)
    // console.log("token: "+token)
    var labelNews;
    
    if(!token==null || !token==""){
        articleNodesList.map(articleNode => {
            if (!articleNode.isLoading && !articleNode.isLoaded ) {
                const article = articleNode.articleNode
               
                var top = article.getBoundingClientRect().top 
                // console.log("top: " + top)
                if (article.getBoundingClientRect().top < val) {
                    articleNode.isLoading = true
                    const result = document.createElement("div");
                    result.id = "data-fake";

                    let newTH = document.createElement('button');
                    newTH.id = "children";
                    newTH.innerHTML = 'Click to detect';
                    newTH.onclick = function () {
                        detect();              
                    };
                    
                    result.appendChild(newTH);
                    if (article.lastChild.id === 'data-fake') {
                                
                        article.removeChild(article.lastChild);
                    }
                    article.appendChild(result);
                    console.log(article.textContent);
                    function insertNews(label, text2) {
                        const formatYmd = date => date.toISOString().slice(0, 10);
                        formatYmd(new Date());
                        var data2 = {
                            "dateDetected": formatYmd(new Date()),
                            "emailAddress": username,
                            "isDeleted": true,
                            "labelIdId": label,
                            "newsContent": text2
                        }
                        var json2 = JSON.stringify(data2);
                        var request2_ = new XMLHttpRequest();
                        request2_.open("POST", "https://sub.vayvonthechap.com:8080/api/articles", true);
                        request2_.setRequestHeader("Content-type", "application/json");
                        request2_.setRequestHeader("Authorization", "Bearer " + token);
    
                        request2_.send(json2);
                        request2_.onreadystatechange = function () {
                            if (request2_.readyState == request2_.DONE) {
                                var response2 = request2_.responseText;
                                var obj2 = JSON.parse(response2);
                                console.log(obj2);
                            }
                        }
     }
    
                    function detect() {
                        if (article.lastChild.id === 'data-fake') {
                                
                            article.removeChild(article.lastChild);
                        }
                        axios.post(url, { text: article.textContent }).then(res => {
                            const pred = res.data;
                            var text2 = article.textContent;
                            if (pred > 1) {
                                result.innerHTML = `<span class='label label-warning'>Noise - This is not political news ${Math.round((pred-1) * 100)} %</span>`
                                labelNews='0';
                            }
                            else if (pred == -1) {
                                result.innerHTML = `<span class='label label-warning'>Noise - This text is too short</span>`
                                labelNews='0';
                            }
                            else if (pred > 0.5 && pred < 1) {
                                result.innerHTML = `<span class='label label-danger'>Fake ${Math.round(pred * 100)} %</span>`
                                labelNews = '2';
                            }
                            else if (pred < 0.5 && pred > 0) {
                                result.innerHTML = `<span class='label label-success'>True ${Math.round((1 - pred) * 100)} %</span>`
                                labelNews = '1';
                            }
    
                            console.log({ pred, innerHTML: result.innerHTML })
    
    
                            if (article.lastChild.id === 'data-fake') {
                                
                                article.removeChild(article.lastChild);
                            }
                            article.appendChild(result);
                            console.log(labelNews);
                            articleNode.isLoading = false;
                            articleNode.isLoaded = true;
                            if (labelNews === '1' || labelNews === '2') {
                                console.log(text2);
                                insertNews(labelNews, text2);
                            }
    
                        });
                    }
                }
            }
        })
    }
    //fetch api detect and show label
    
}

const setUpArticles = () => {
    console.log('setUpArticles')
    // var articlePosts = getElementByXpath("//*[@data-test-id='post-content']");
    var articleNodes = getElementByXpath("//*[@data-test-id='comment']");
    articleNodesList = []

    // if (articlePosts.snapshotLength != null) {
    for (var i = 0; i < articleNodes.snapshotLength; i++) {
        articleNodesList.push({
            isLoaded: false,
            isLoading: false,
            articleNode: articleNodes.snapshotItem(i),

        })
    }



}

window.onload = () => {
    setUpArticles()
}

window.onscroll = () => {
    handleScroll()
}

// Start scripts after setting up the connection to popup]
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

    setUpArticles()


    try {

        // articleNodes.snapshotLength
        // for (var i = 0; i < 10; i++) {
        //     const article = articleNodes.snapshotItem(i);
        //     const result = document.createElement("div");
        //     result.id = "data-fake";
        //     axios.post(url, { text: article.textContent }).then(res => {
        //         console.log({res});
        //         const pred = Math.abs(Number(res.data))

        //         if (pred > 1) {
        //             result.innerHTML = `<span class='label label-warning'>Noise - This is not political news ${(pred - 1) * 100} %</span>`
        //         }
        //         else if (pred < 0) {
        //             result.innerHTML = `<span class='label label-warning'>Noise - This text is too short</span>`
        //         }
        //         else if (pred > 0.5 && pred <= 1) {
        //             result.innerHTML = `<span class='label label-danger'>Fake ${pred * 100} %</span>`
        //         }
        //         else if (pred < 0.5 && pred >= 0) {
        //             result.innerHTML = `<span class='label label-success'>True ${(1 - pred) * 100} %</span>`
        //         }
        //         console.log({pred, innerHTML: result.innerHTML})
        //         if (article.lastChild.id === 'data-fake') {
        //             article.removeChild(article.lastChild);
        //         }
        //         article.appendChild(result);
        //     });

        // }
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