webpackHotUpdate("static\\development\\pages\\reset.js",{

/***/ "./pages/reset.js":
/*!************************!*\
  !*** ./pages/reset.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_ResetPassword__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/ResetPassword */ "./components/ResetPassword.js");
var _jsxFileName = "C:\\Users\\natha\\Desktop\\Current Projects\\advancedReact\\frontend\\pages\\reset.js";



var Reset = function Reset(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_ResetPassword__WEBPACK_IMPORTED_MODULE_1__["default"], {
    resetToken: props.query.resetToken,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Reset);
    (function (Component, route) {
      if(!Component) return
      if (false) {}
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/reset")
  
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=reset.js.746256a6a5e757e22d6c.hot-update.js.map