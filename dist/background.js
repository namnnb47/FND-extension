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
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */,
/* 1 */
/***/ (function(module, exports) {

eval("/* background.js\n *\n * This file has an example of how to make variables accessible to other scripts of the extension.\n *\n * It also shows how to handle short lived messages from other scripts, in this case, from in-content.js\n *\n * Note that not all extensions need of a background.js file, but extensions that need to persist data after a popup has closed may need of it.\n */\n\n// A sample object that will be exposed further down and used on popup.js\nconst sampleBackgroundGlobal = {\n    message: 'This object comes from background.js'\n};\n\n// Listen to short lived messages from in-content.js\nchrome.runtime.onMessage.addListener((message, sender, sendResponse) => {\n    // Perform any ther actions depending on the message\n    console.log('background.js - received message from in-content.js:', message);\n    // Respond message\n    sendResponse(message);\n});\n\n// Make variables accessible from chrome.extension.getBackgroundPage()\nwindow.sampleBackgroundGlobal = sampleBackgroundGlobal;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zcmMvanMvYmFja2dyb3VuZC5qcz9iYzNiIl0sInNvdXJjZXNDb250ZW50IjpbIi8qIGJhY2tncm91bmQuanNcbiAqXG4gKiBUaGlzIGZpbGUgaGFzIGFuIGV4YW1wbGUgb2YgaG93IHRvIG1ha2UgdmFyaWFibGVzIGFjY2Vzc2libGUgdG8gb3RoZXIgc2NyaXB0cyBvZiB0aGUgZXh0ZW5zaW9uLlxuICpcbiAqIEl0IGFsc28gc2hvd3MgaG93IHRvIGhhbmRsZSBzaG9ydCBsaXZlZCBtZXNzYWdlcyBmcm9tIG90aGVyIHNjcmlwdHMsIGluIHRoaXMgY2FzZSwgZnJvbSBpbi1jb250ZW50LmpzXG4gKlxuICogTm90ZSB0aGF0IG5vdCBhbGwgZXh0ZW5zaW9ucyBuZWVkIG9mIGEgYmFja2dyb3VuZC5qcyBmaWxlLCBidXQgZXh0ZW5zaW9ucyB0aGF0IG5lZWQgdG8gcGVyc2lzdCBkYXRhIGFmdGVyIGEgcG9wdXAgaGFzIGNsb3NlZCBtYXkgbmVlZCBvZiBpdC5cbiAqL1xuXG4vLyBBIHNhbXBsZSBvYmplY3QgdGhhdCB3aWxsIGJlIGV4cG9zZWQgZnVydGhlciBkb3duIGFuZCB1c2VkIG9uIHBvcHVwLmpzXG5jb25zdCBzYW1wbGVCYWNrZ3JvdW5kR2xvYmFsID0ge1xuICAgIG1lc3NhZ2U6ICdUaGlzIG9iamVjdCBjb21lcyBmcm9tIGJhY2tncm91bmQuanMnXG59O1xuXG4vLyBMaXN0ZW4gdG8gc2hvcnQgbGl2ZWQgbWVzc2FnZXMgZnJvbSBpbi1jb250ZW50LmpzXG5jaHJvbWUucnVudGltZS5vbk1lc3NhZ2UuYWRkTGlzdGVuZXIoKG1lc3NhZ2UsIHNlbmRlciwgc2VuZFJlc3BvbnNlKSA9PiB7XG4gICAgLy8gUGVyZm9ybSBhbnkgdGhlciBhY3Rpb25zIGRlcGVuZGluZyBvbiB0aGUgbWVzc2FnZVxuICAgIGNvbnNvbGUubG9nKCdiYWNrZ3JvdW5kLmpzIC0gcmVjZWl2ZWQgbWVzc2FnZSBmcm9tIGluLWNvbnRlbnQuanM6JywgbWVzc2FnZSk7XG4gICAgLy8gUmVzcG9uZCBtZXNzYWdlXG4gICAgc2VuZFJlc3BvbnNlKG1lc3NhZ2UpO1xufSk7XG5cbi8vIE1ha2UgdmFyaWFibGVzIGFjY2Vzc2libGUgZnJvbSBjaHJvbWUuZXh0ZW5zaW9uLmdldEJhY2tncm91bmRQYWdlKClcbndpbmRvdy5zYW1wbGVCYWNrZ3JvdW5kR2xvYmFsID0gc2FtcGxlQmFja2dyb3VuZEdsb2JhbDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvanMvYmFja2dyb3VuZC5qcyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7OztBQVNBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///1\n");

/***/ })
/******/ ]);