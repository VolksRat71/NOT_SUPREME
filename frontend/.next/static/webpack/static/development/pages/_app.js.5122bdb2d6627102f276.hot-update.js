webpackHotUpdate("static\\development\\pages\\_app.js",{

/***/ "./components/CartItem.js":
/*!********************************!*\
  !*** ./components/CartItem.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _lib_formatMoney__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../lib/formatMoney */ "./lib/formatMoney.js");
/* harmony import */ var _RemoveFromCart__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./RemoveFromCart */ "./components/RemoveFromCart.js");
var _jsxFileName = "C:\\Users\\natha\\Desktop\\Current Projects\\advancedReact\\frontend\\components\\CartItem.js";





var CartItemStyles = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].li.withConfig({
  displayName: "CartItem__CartItemStyles",
  componentId: "jd68dz-0"
})(["padding:1rem o;border-bottom:1px solid ", ";display:grid;align-items:center;grid-template-columns:auto 1fr auto;img{margin-right:10px}h3,p{margin:0;}"], function (props) {
  return props.theme.lightgrey;
});

var CartItem = function CartItem(_ref) {
  var cartItem = _ref.cartItem;
  // first check if item exists
  if (!cartItem.item) return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(CartItemStyles, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, "This Item has been removed."));
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(CartItemStyles, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    width: "100",
    src: cartItem.item.image,
    alt: cartItem.item.title,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "cart-item-details",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, cartItem.item.title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, Object(_lib_formatMoney__WEBPACK_IMPORTED_MODULE_3__["default"])(cartItem.item.price * cartItem.quantity), ' - ', react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("em", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, cartItem.quantity, " \xD7 ", Object(_lib_formatMoney__WEBPACK_IMPORTED_MODULE_3__["default"])(cartItem.item.price), "/each"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_RemoveFromCart__WEBPACK_IMPORTED_MODULE_4__["default"], {
    id: cartItem.id,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }));
};

CartItem.propTypes = {
  cartItem: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (CartItem);

/***/ })

})
//# sourceMappingURL=_app.js.5122bdb2d6627102f276.hot-update.js.map