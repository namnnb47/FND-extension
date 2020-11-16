(()=>{var __webpack_modules__={8730:module=>{eval('function setCookie(cname, cvalue, exdays) {\n    var d = new Date();\n    d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);\n    var expires = "expires=" + d.toUTCString();\n    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";\n}\n\nfunction getCookie(cname) {\n    var name = cname + "=";\n    var decodedCookie = decodeURIComponent(document.cookie);\n    var ca = decodedCookie.split(\';\');\n    for (var i = 0; i < ca.length; i++) {\n        var c = ca[i];\n        while (c.charAt(0) == \' \') {\n            c = c.substring(1);\n        }\n        if (c.indexOf(name) == 0) {\n            return c.substring(name.length, c.length);\n        }\n    }\n    return "";\n}\n\nmodule.exports = {\n    setCookie,\n    getCookie\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jaHJvbWUtZXh0ZW5zaW9uLXRlbXBsYXRlLy4vc3JjL2pzL2Nvb2tpZS5qcz80YjJjIl0sIm5hbWVzIjpbInNldENvb2tpZSIsImNuYW1lIiwiY3ZhbHVlIiwiZXhkYXlzIiwiZCIsIkRhdGUiLCJzZXRUaW1lIiwiZ2V0VGltZSIsImV4cGlyZXMiLCJ0b1VUQ1N0cmluZyIsImRvY3VtZW50IiwiY29va2llIiwiZ2V0Q29va2llIiwibmFtZSIsImRlY29kZWRDb29raWUiLCJkZWNvZGVVUklDb21wb25lbnQiLCJjYSIsInNwbGl0IiwiaSIsImxlbmd0aCIsImMiLCJjaGFyQXQiLCJzdWJzdHJpbmciLCJpbmRleE9mIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUEsU0FBU0EsU0FBVCxDQUFtQkMsS0FBbkIsRUFBMEJDLE1BQTFCLEVBQWtDQyxNQUFsQyxFQUEwQztBQUN0QyxRQUFJQyxJQUFJLElBQUlDLElBQUosRUFBUjtBQUNBRCxNQUFFRSxPQUFGLENBQVVGLEVBQUVHLE9BQUYsS0FBZUosU0FBTyxFQUFQLEdBQVUsRUFBVixHQUFhLEVBQWIsR0FBZ0IsSUFBekM7QUFDQSxRQUFJSyxVQUFVLGFBQVlKLEVBQUVLLFdBQUYsRUFBMUI7QUFDQUMsYUFBU0MsTUFBVCxHQUFrQlYsUUFBUSxHQUFSLEdBQWNDLE1BQWQsR0FBdUIsR0FBdkIsR0FBNkJNLE9BQTdCLEdBQXVDLFNBQXpEO0FBQ0g7O0FBRUQsU0FBU0ksU0FBVCxDQUFtQlgsS0FBbkIsRUFBMEI7QUFDdEIsUUFBSVksT0FBT1osUUFBUSxHQUFuQjtBQUNBLFFBQUlhLGdCQUFnQkMsbUJBQW1CTCxTQUFTQyxNQUE1QixDQUFwQjtBQUNBLFFBQUlLLEtBQUtGLGNBQWNHLEtBQWQsQ0FBb0IsR0FBcEIsQ0FBVDtBQUNBLFNBQUksSUFBSUMsSUFBSSxDQUFaLEVBQWVBLElBQUdGLEdBQUdHLE1BQXJCLEVBQTZCRCxHQUE3QixFQUFrQztBQUM5QixZQUFJRSxJQUFJSixHQUFHRSxDQUFILENBQVI7QUFDQSxlQUFPRSxFQUFFQyxNQUFGLENBQVMsQ0FBVCxLQUFlLEdBQXRCLEVBQTJCO0FBQzNCRCxnQkFBSUEsRUFBRUUsU0FBRixDQUFZLENBQVosQ0FBSjtBQUNDO0FBQ0QsWUFBSUYsRUFBRUcsT0FBRixDQUFVVixJQUFWLEtBQW1CLENBQXZCLEVBQTBCO0FBQzFCLG1CQUFPTyxFQUFFRSxTQUFGLENBQVlULEtBQUtNLE1BQWpCLEVBQXlCQyxFQUFFRCxNQUEzQixDQUFQO0FBQ0M7QUFDSjtBQUNELFdBQU8sRUFBUDtBQUNIOztBQUVESyxPQUFPQyxPQUFQLEdBQWlCO0FBQ2J6QixhQURhO0FBRWJZO0FBRmEsQ0FBakIiLCJmaWxlIjoiODczMC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBzZXRDb29raWUoY25hbWUsIGN2YWx1ZSwgZXhkYXlzKSB7XHJcbiAgICB2YXIgZCA9IG5ldyBEYXRlKCk7XHJcbiAgICBkLnNldFRpbWUoZC5nZXRUaW1lKCkgKyAoZXhkYXlzKjI0KjYwKjYwKjEwMDApKTtcclxuICAgIHZhciBleHBpcmVzID0gXCJleHBpcmVzPVwiKyBkLnRvVVRDU3RyaW5nKCk7XHJcbiAgICBkb2N1bWVudC5jb29raWUgPSBjbmFtZSArIFwiPVwiICsgY3ZhbHVlICsgXCI7XCIgKyBleHBpcmVzICsgXCI7cGF0aD0vXCI7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldENvb2tpZShjbmFtZSkge1xyXG4gICAgdmFyIG5hbWUgPSBjbmFtZSArIFwiPVwiO1xyXG4gICAgdmFyIGRlY29kZWRDb29raWUgPSBkZWNvZGVVUklDb21wb25lbnQoZG9jdW1lbnQuY29va2llKTtcclxuICAgIHZhciBjYSA9IGRlY29kZWRDb29raWUuc3BsaXQoJzsnKTtcclxuICAgIGZvcih2YXIgaSA9IDA7IGkgPGNhLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgdmFyIGMgPSBjYVtpXTtcclxuICAgICAgICB3aGlsZSAoYy5jaGFyQXQoMCkgPT0gJyAnKSB7XHJcbiAgICAgICAgYyA9IGMuc3Vic3RyaW5nKDEpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoYy5pbmRleE9mKG5hbWUpID09IDApIHtcclxuICAgICAgICByZXR1cm4gYy5zdWJzdHJpbmcobmFtZS5sZW5ndGgsIGMubGVuZ3RoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gXCJcIjtcclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSB7XHJcbiAgICBzZXRDb29raWUsXHJcbiAgICBnZXRDb29raWUsXHJcbn0iXX0=\n//# sourceURL=webpack-internal:///8730\n')}},__webpack_module_cache__={};function __webpack_require__(c){if(__webpack_module_cache__[c])return __webpack_module_cache__[c].exports;var Q=__webpack_module_cache__[c]={exports:{}};return __webpack_modules__[c](Q,Q.exports,__webpack_require__),Q.exports}(()=>{eval("// const popup = require('./popup')\nconst cookie = __webpack_require__(8730);\n\ndocument.querySelector('#sign_out').addEventListener('click', () => {\n    // chrome.runtime.sendMessage({ message: 'sign_out' }, function (response) {\n    //     if (response.message === 'success') {\n    //         window.location.replace('popup.html');\n    //     }\n    // });\n\n    cookie.setCookie('user', null, 0);\n    // popup.sendPortMessage({\n    //     action: 'sign-out',\n    //     user: null,\n    // })\n    console.log('SIGN OUT');\n\n    window.location.replace('popup.html');\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNDg0NS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovL2Nocm9tZS1leHRlbnNpb24tdGVtcGxhdGUvLi9zcmMvanMvbWFpbi1zY3JpcHQuanM/MWUwZSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBjb25zdCBwb3B1cCA9IHJlcXVpcmUoJy4vcG9wdXAnKVxyXG5jb25zdCBjb29raWUgPSByZXF1aXJlKCcuL2Nvb2tpZScpXHJcblxyXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc2lnbl9vdXQnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgIC8vIGNocm9tZS5ydW50aW1lLnNlbmRNZXNzYWdlKHsgbWVzc2FnZTogJ3NpZ25fb3V0JyB9LCBmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuICAgIC8vICAgICBpZiAocmVzcG9uc2UubWVzc2FnZSA9PT0gJ3N1Y2Nlc3MnKSB7XHJcbiAgICAvLyAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZXBsYWNlKCdwb3B1cC5odG1sJyk7XHJcbiAgICAvLyAgICAgfVxyXG4gICAgLy8gfSk7XHJcblxyXG4gICAgY29va2llLnNldENvb2tpZSgndXNlcicsIG51bGwsIDApXHJcbiAgICAvLyBwb3B1cC5zZW5kUG9ydE1lc3NhZ2Uoe1xyXG4gICAgLy8gICAgIGFjdGlvbjogJ3NpZ24tb3V0JyxcclxuICAgIC8vICAgICB1c2VyOiBudWxsLFxyXG4gICAgLy8gfSlcclxuICAgIGNvbnNvbGUubG9nKCdTSUdOIE9VVCcpXHJcbiAgICBcclxuICAgIHdpbmRvdy5sb2NhdGlvbi5yZXBsYWNlKCdwb3B1cC5odG1sJyk7XHJcbn0pOyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///4845\n")})()})();
