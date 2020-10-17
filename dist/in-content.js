/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ({

/***/ 2:
/***/ (function(module, exports) {

eval("/* in-content.js\n *\n * This file has an example on how to communicate with other parts of the extension through a long lived connection (port) and also through short lived connections (chrome.runtime.sendMessage).\n *\n * Note that in this scenario the port is open from the popup, but other extensions may open it from the background page or not even have either background.js or popup.js.\n * */\n\n// Extension port to communicate with the popup, also helps detecting when it closes\nlet port = null;\n\n// Send messages to the open port (Popup)\nconst sendPortMessage = data => port.postMessage(data);\n\n// Handle incoming popup messages\nconst popupMessageHandler = message => console.log('in-content.js - message from popup:', message);\n\n// Start scripts after setting up the connection to popup\nchrome.extension.onConnect.addListener(popupPort => {\n    // Listen for popup messages\n    popupPort.onMessage.addListener(popupMessageHandler);\n    // Set listener for disconnection (aka. popup closed)\n    popupPort.onDisconnect.addListener(() => {\n        console.log('in-content.js - disconnected from popup');\n    });\n    // Make popup port accessible to other methods\n    port = popupPort;\n    // Perform any logic or set listeners\n    sendPortMessage('message from in-content.js');\n    let articleNodes = getElementByXpath(\"//*[@data-test-id='comment']\");\n    try {\n        for (var i = 0; i < articleNodes.snapshotLength; i++) {\n            const article = articleNodes.snapshotItem(i);\n            const result = document.createElement(\"div\");\n            result.id = \"data-fake\";\n            result.innerHTML = Boolean(Math.round(Math.random())) ? \"<span class='label label-success'>Fake new: 3%</span>\" : \"<span class='label label-danger'>Fake new: 95%</span>\";\n            if (article.lastChild.id === 'data-fake') {\n                article.removeChild(article.lastChild);\n            }\n            article.appendChild(result);\n        }\n        // let thisNode = articleNodes.iterateNext();\n        // while (thisNode) {\n        //     console.log(thisNode.textContent);\n        //     \n        //     thisNode = articleNodes.iterateNext();\n        // }\n    } catch (e) {\n        alert('Error: Document tree modified during iteration ' + e);\n    }\n});\n\n// Response handler for short lived messages\nconst handleBackgroundResponse = response => console.log('in-content.js - Received response:', response);\n\n// Send a message to background.js\nchrome.runtime.sendMessage('Message from in-content.js!', handleBackgroundResponse);\nfunction getElementByXpath(path) {\n    return document.evaluate(path, document, null, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zcmMvanMvaW4tY29udGVudC5qcz9iODc5Il0sInNvdXJjZXNDb250ZW50IjpbIi8qIGluLWNvbnRlbnQuanNcbiAqXG4gKiBUaGlzIGZpbGUgaGFzIGFuIGV4YW1wbGUgb24gaG93IHRvIGNvbW11bmljYXRlIHdpdGggb3RoZXIgcGFydHMgb2YgdGhlIGV4dGVuc2lvbiB0aHJvdWdoIGEgbG9uZyBsaXZlZCBjb25uZWN0aW9uIChwb3J0KSBhbmQgYWxzbyB0aHJvdWdoIHNob3J0IGxpdmVkIGNvbm5lY3Rpb25zIChjaHJvbWUucnVudGltZS5zZW5kTWVzc2FnZSkuXG4gKlxuICogTm90ZSB0aGF0IGluIHRoaXMgc2NlbmFyaW8gdGhlIHBvcnQgaXMgb3BlbiBmcm9tIHRoZSBwb3B1cCwgYnV0IG90aGVyIGV4dGVuc2lvbnMgbWF5IG9wZW4gaXQgZnJvbSB0aGUgYmFja2dyb3VuZCBwYWdlIG9yIG5vdCBldmVuIGhhdmUgZWl0aGVyIGJhY2tncm91bmQuanMgb3IgcG9wdXAuanMuXG4gKiAqL1xuXG4vLyBFeHRlbnNpb24gcG9ydCB0byBjb21tdW5pY2F0ZSB3aXRoIHRoZSBwb3B1cCwgYWxzbyBoZWxwcyBkZXRlY3Rpbmcgd2hlbiBpdCBjbG9zZXNcbmxldCBwb3J0ID0gbnVsbDtcblxuLy8gU2VuZCBtZXNzYWdlcyB0byB0aGUgb3BlbiBwb3J0IChQb3B1cClcbmNvbnN0IHNlbmRQb3J0TWVzc2FnZSA9IGRhdGEgPT4gcG9ydC5wb3N0TWVzc2FnZShkYXRhKTtcblxuLy8gSGFuZGxlIGluY29taW5nIHBvcHVwIG1lc3NhZ2VzXG5jb25zdCBwb3B1cE1lc3NhZ2VIYW5kbGVyID0gbWVzc2FnZSA9PiBjb25zb2xlLmxvZygnaW4tY29udGVudC5qcyAtIG1lc3NhZ2UgZnJvbSBwb3B1cDonLCBtZXNzYWdlKTtcblxuLy8gU3RhcnQgc2NyaXB0cyBhZnRlciBzZXR0aW5nIHVwIHRoZSBjb25uZWN0aW9uIHRvIHBvcHVwXG5jaHJvbWUuZXh0ZW5zaW9uLm9uQ29ubmVjdC5hZGRMaXN0ZW5lcihwb3B1cFBvcnQgPT4ge1xuICAgIC8vIExpc3RlbiBmb3IgcG9wdXAgbWVzc2FnZXNcbiAgICBwb3B1cFBvcnQub25NZXNzYWdlLmFkZExpc3RlbmVyKHBvcHVwTWVzc2FnZUhhbmRsZXIpO1xuICAgIC8vIFNldCBsaXN0ZW5lciBmb3IgZGlzY29ubmVjdGlvbiAoYWthLiBwb3B1cCBjbG9zZWQpXG4gICAgcG9wdXBQb3J0Lm9uRGlzY29ubmVjdC5hZGRMaXN0ZW5lcigoKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdpbi1jb250ZW50LmpzIC0gZGlzY29ubmVjdGVkIGZyb20gcG9wdXAnKTtcbiAgICB9KTtcbiAgICAvLyBNYWtlIHBvcHVwIHBvcnQgYWNjZXNzaWJsZSB0byBvdGhlciBtZXRob2RzXG4gICAgcG9ydCA9IHBvcHVwUG9ydDtcbiAgICAvLyBQZXJmb3JtIGFueSBsb2dpYyBvciBzZXQgbGlzdGVuZXJzXG4gICAgc2VuZFBvcnRNZXNzYWdlKCdtZXNzYWdlIGZyb20gaW4tY29udGVudC5qcycpO1xuICAgIGxldCBhcnRpY2xlTm9kZXMgPSBnZXRFbGVtZW50QnlYcGF0aChcIi8vKltAZGF0YS10ZXN0LWlkPSdjb21tZW50J11cIik7XG4gICAgdHJ5IHtcbiAgICAgICAgZm9yICggdmFyIGk9MCA7IGkgPCBhcnRpY2xlTm9kZXMuc25hcHNob3RMZW5ndGg7IGkrKyApIHtcbiAgICAgICAgICAgIGNvbnN0IGFydGljbGUgPSBhcnRpY2xlTm9kZXMuc25hcHNob3RJdGVtKGkpO1xuICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICAgIHJlc3VsdC5pZCA9IFwiZGF0YS1mYWtlXCI7XG4gICAgICAgICAgICByZXN1bHQuaW5uZXJIVE1MID0gQm9vbGVhbihNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkpKSA/IFwiPHNwYW4gY2xhc3M9J2xhYmVsIGxhYmVsLXN1Y2Nlc3MnPkZha2UgbmV3OiAzJTwvc3Bhbj5cIiA6IFwiPHNwYW4gY2xhc3M9J2xhYmVsIGxhYmVsLWRhbmdlcic+RmFrZSBuZXc6IDk1JTwvc3Bhbj5cIjtcbiAgICAgICAgICAgIGlmIChhcnRpY2xlLmxhc3RDaGlsZC5pZCA9PT0gJ2RhdGEtZmFrZScpIHtcbiAgICAgICAgICAgICAgICBhcnRpY2xlLnJlbW92ZUNoaWxkKGFydGljbGUubGFzdENoaWxkKTtcbiAgICAgICAgICAgIH0gICBcbiAgICAgICAgICAgIGFydGljbGUuYXBwZW5kQ2hpbGQocmVzdWx0KTtcbiAgICAgICAgfVxuICAgICAgICAvLyBsZXQgdGhpc05vZGUgPSBhcnRpY2xlTm9kZXMuaXRlcmF0ZU5leHQoKTtcbiAgICAgICAgLy8gd2hpbGUgKHRoaXNOb2RlKSB7XG4gICAgICAgIC8vICAgICBjb25zb2xlLmxvZyh0aGlzTm9kZS50ZXh0Q29udGVudCk7XG4gICAgICAgIC8vICAgICBcbiAgICAgICAgLy8gICAgIHRoaXNOb2RlID0gYXJ0aWNsZU5vZGVzLml0ZXJhdGVOZXh0KCk7XG4gICAgICAgIC8vIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGFsZXJ0KCdFcnJvcjogRG9jdW1lbnQgdHJlZSBtb2RpZmllZCBkdXJpbmcgaXRlcmF0aW9uICcgKyBlKTtcbiAgICB9XG59KTtcblxuLy8gUmVzcG9uc2UgaGFuZGxlciBmb3Igc2hvcnQgbGl2ZWQgbWVzc2FnZXNcbmNvbnN0IGhhbmRsZUJhY2tncm91bmRSZXNwb25zZSA9IHJlc3BvbnNlID0+XG4gICAgY29uc29sZS5sb2coJ2luLWNvbnRlbnQuanMgLSBSZWNlaXZlZCByZXNwb25zZTonLCByZXNwb25zZSk7XG5cbi8vIFNlbmQgYSBtZXNzYWdlIHRvIGJhY2tncm91bmQuanNcbmNocm9tZS5ydW50aW1lLnNlbmRNZXNzYWdlKCdNZXNzYWdlIGZyb20gaW4tY29udGVudC5qcyEnLCBoYW5kbGVCYWNrZ3JvdW5kUmVzcG9uc2UpO1xuZnVuY3Rpb24gZ2V0RWxlbWVudEJ5WHBhdGgocGF0aCkge1xuICAgIHJldHVybiBkb2N1bWVudC5ldmFsdWF0ZShwYXRoLCBkb2N1bWVudCwgbnVsbCwgWFBhdGhSZXN1bHQuT1JERVJFRF9OT0RFX1NOQVBTSE9UX1RZUEUsIG51bGwpO1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9qcy9pbi1jb250ZW50LmpzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///2\n");

/***/ })

/******/ });