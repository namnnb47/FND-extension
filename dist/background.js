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
/******/ 	return __webpack_require__(__webpack_require__.s = 10);
/******/ })
/************************************************************************/
/******/ ({

/***/ 10:
/***/ (function(module, exports) {

eval("/* background.js\r\n *\r\n * This file has an example of how to make variables accessible to other scripts of the extension.\r\n *\r\n * It also shows how to handle short lived messages from other scripts, in this case, from in-content.js\r\n *\r\n * Note that not all extensions need of a background.js file, but extensions that need to persist data after a popup has closed may need of it.\r\n */\n\n// A sample object that will be exposed further down and used on popup.js\nconst sampleBackgroundGlobal = {\n    message: 'This object comes from background.js'\n};\n\n// Listen to short lived messages from in-content.js\nchrome.runtime.onMessage.addListener((message, sender, sendResponse) => {\n    // Perform any ther actions depending on the message\n    console.log('background.js - received message from in-content.js:', message);\n    // Respond message\n    sendResponse(message);\n});\n\n// Make variables accessible from chrome.extension.getBackgroundPage()\nwindow.sampleBackgroundGlobal = sampleBackgroundGlobal;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTAuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL2pzL2JhY2tncm91bmQuanM/YmMzYiJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiBiYWNrZ3JvdW5kLmpzXHJcbiAqXHJcbiAqIFRoaXMgZmlsZSBoYXMgYW4gZXhhbXBsZSBvZiBob3cgdG8gbWFrZSB2YXJpYWJsZXMgYWNjZXNzaWJsZSB0byBvdGhlciBzY3JpcHRzIG9mIHRoZSBleHRlbnNpb24uXHJcbiAqXHJcbiAqIEl0IGFsc28gc2hvd3MgaG93IHRvIGhhbmRsZSBzaG9ydCBsaXZlZCBtZXNzYWdlcyBmcm9tIG90aGVyIHNjcmlwdHMsIGluIHRoaXMgY2FzZSwgZnJvbSBpbi1jb250ZW50LmpzXHJcbiAqXHJcbiAqIE5vdGUgdGhhdCBub3QgYWxsIGV4dGVuc2lvbnMgbmVlZCBvZiBhIGJhY2tncm91bmQuanMgZmlsZSwgYnV0IGV4dGVuc2lvbnMgdGhhdCBuZWVkIHRvIHBlcnNpc3QgZGF0YSBhZnRlciBhIHBvcHVwIGhhcyBjbG9zZWQgbWF5IG5lZWQgb2YgaXQuXHJcbiAqL1xyXG5cclxuLy8gQSBzYW1wbGUgb2JqZWN0IHRoYXQgd2lsbCBiZSBleHBvc2VkIGZ1cnRoZXIgZG93biBhbmQgdXNlZCBvbiBwb3B1cC5qc1xyXG5jb25zdCBzYW1wbGVCYWNrZ3JvdW5kR2xvYmFsID0ge1xyXG4gICAgbWVzc2FnZTogJ1RoaXMgb2JqZWN0IGNvbWVzIGZyb20gYmFja2dyb3VuZC5qcydcclxufTtcclxuXHJcbi8vIExpc3RlbiB0byBzaG9ydCBsaXZlZCBtZXNzYWdlcyBmcm9tIGluLWNvbnRlbnQuanNcclxuY2hyb21lLnJ1bnRpbWUub25NZXNzYWdlLmFkZExpc3RlbmVyKChtZXNzYWdlLCBzZW5kZXIsIHNlbmRSZXNwb25zZSkgPT4ge1xyXG4gICAgLy8gUGVyZm9ybSBhbnkgdGhlciBhY3Rpb25zIGRlcGVuZGluZyBvbiB0aGUgbWVzc2FnZVxyXG4gICAgY29uc29sZS5sb2coJ2JhY2tncm91bmQuanMgLSByZWNlaXZlZCBtZXNzYWdlIGZyb20gaW4tY29udGVudC5qczonLCBtZXNzYWdlKTtcclxuICAgIC8vIFJlc3BvbmQgbWVzc2FnZVxyXG4gICAgc2VuZFJlc3BvbnNlKG1lc3NhZ2UpO1xyXG59KTtcclxuXHJcbi8vIE1ha2UgdmFyaWFibGVzIGFjY2Vzc2libGUgZnJvbSBjaHJvbWUuZXh0ZW5zaW9uLmdldEJhY2tncm91bmRQYWdlKClcclxud2luZG93LnNhbXBsZUJhY2tncm91bmRHbG9iYWwgPSBzYW1wbGVCYWNrZ3JvdW5kR2xvYmFsO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL2pzL2JhY2tncm91bmQuanMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7QUFTQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///10\n");

/***/ })

/******/ });