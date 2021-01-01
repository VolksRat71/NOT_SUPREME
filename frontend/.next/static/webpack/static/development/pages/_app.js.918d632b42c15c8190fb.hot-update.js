webpackHotUpdate("static\\development\\pages\\_app.js",{

/***/ "./components/Cart.js":
/*!****************************!*\
  !*** ./components/Cart.js ***!
  \****************************/
/*! exports provided: default, LOCAL_STATE_QUERY, TOGGLE_CART_MUTATION */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOCAL_STATE_QUERY", function() { return LOCAL_STATE_QUERY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TOGGLE_CART_MUTATION", function() { return TOGGLE_CART_MUTATION; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-apollo */ "./node_modules/react-apollo/react-apollo.browser.umd.js");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! graphql-tag */ "./node_modules/graphql-tag/src/index.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_adopt__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-adopt */ "./node_modules/react-adopt/dist/index.m.js");
/* harmony import */ var _styles_CartStyles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles/CartStyles */ "./components/styles/CartStyles.js");
/* harmony import */ var _styles_Supreme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./styles/Supreme */ "./components/styles/Supreme.js");
/* harmony import */ var _styles_CloseButton__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./styles/CloseButton */ "./components/styles/CloseButton.js");
/* harmony import */ var _styles_SickButton__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./styles/SickButton */ "./components/styles/SickButton.js");
/* harmony import */ var _User__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./User */ "./components/User.js");
/* harmony import */ var _CartItem__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./CartItem */ "./components/CartItem.js");
/* harmony import */ var _lib_calcTotalPrice__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../lib/calcTotalPrice */ "./lib/calcTotalPrice.js");
/* harmony import */ var _lib_formatMoney__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../lib/formatMoney */ "./lib/formatMoney.js");
var _jsxFileName = "C:\\Users\\natha\\Desktop\\Current Projects\\advancedReact\\frontend\\components\\Cart.js";

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n    mutation {\n        toggleCart @client\n    }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    query {\n        cartOpen @client\n    }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }













var LOCAL_STATE_QUERY = graphql_tag__WEBPACK_IMPORTED_MODULE_2___default()(_templateObject());
var TOGGLE_CART_MUTATION = graphql_tag__WEBPACK_IMPORTED_MODULE_2___default()(_templateObject2());

var Cart = function Cart() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_User__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, function (_ref) {
    var me = _ref.data.me;
    if (!me) return null;
    var firstName = me.name.split(" ")[0];
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_1__["Mutation"], {
      mutation: TOGGLE_CART_MUTATION,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31
      },
      __self: this
    }, function (toggleCart) {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_1__["Query"], {
        query: LOCAL_STATE_QUERY,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        },
        __self: this
      }, function (_ref2) {
        var data = _ref2.data;
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles_CartStyles__WEBPACK_IMPORTED_MODULE_4__["default"], {
          open: data.cartOpen,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 34
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("header", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 35
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles_CloseButton__WEBPACK_IMPORTED_MODULE_6__["default"], {
          onClick: toggleCart,
          title: "close",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 36
          },
          __self: this
        }, "\xD7"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles_Supreme__WEBPACK_IMPORTED_MODULE_5__["default"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 37
          },
          __self: this
        }, firstName.toUpperCase(), "'S CART"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 38
          },
          __self: this
        }, "You have ", me.cart.length, " item", me.cart.length === 1 ? '' : 's', " in your cart.")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 40
          },
          __self: this
        }, me.cart.map(function (cartItem) {
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_CartItem__WEBPACK_IMPORTED_MODULE_9__["default"], {
            key: cartItem.id,
            cartItem: cartItem,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 41
            },
            __self: this
          });
        })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("footer", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 43
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 44
          },
          __self: this
        }, Object(_lib_formatMoney__WEBPACK_IMPORTED_MODULE_11__["default"])(Object(_lib_calcTotalPrice__WEBPACK_IMPORTED_MODULE_10__["default"])(me.cart))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles_SickButton__WEBPACK_IMPORTED_MODULE_7__["default"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 45
          },
          __self: this
        }, "Checkout")));
      });
    });
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Cart);


/***/ }),

/***/ "./node_modules/react-adopt/dist/index.m.js":
/*!**************************************************!*\
  !*** ./node_modules/react-adopt/dist/index.m.js ***!
  \**************************************************/
/*! exports provided: adopt, Adopt */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "adopt", function() { return adopt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Adopt", function() { return Adopt; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var extendStatics=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])};function __extends(e,t){function r(){this.constructor=e}extendStatics(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}var __assign=Object.assign||function(e){for(var t,r=1,n=arguments.length;n>r;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e};function __rest(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&0>t.indexOf(n)&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);n.length>o;o++)0>t.indexOf(n[o])&&(r[n[o]]=e[n[o]])}return r}var commonjsGlobal="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function unwrapExports(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function createCommonjsModule(e,t){return e(t={exports:{}},t.exports),t.exports}var hoistNonReactStatics=createCommonjsModule(function(e,t){var r,n,o,a,s,i,p,c;e.exports=(r={childContextTypes:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},n={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},o=Object.defineProperty,a=Object.getOwnPropertyNames,s=Object.getOwnPropertySymbols,i=Object.getOwnPropertyDescriptor,c=(p=Object.getPrototypeOf)&&p(Object),function e(t,u,l){if("string"!=typeof u){if(c){var f=p(u);f&&f!==c&&e(t,f,l)}var d=a(u);s&&(d=d.concat(s(u)));for(var y=0;d.length>y;++y){var m=d[y];if(!(r[m]||n[m]||l&&l[m])){var v=i(u,m);try{o(t,m,v)}catch(e){}}}return t}return t})}),getDisplayName_1=createCommonjsModule(function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return e.displayName||e.name||("string"==typeof e&&e.length>0?e:"Unknown")}}),getDisplayName=unwrapExports(getDisplayName_1),values=Object.values,keys=Object.keys,assign=Object.assign;function omit(e,t){return keys(t).filter(function(t){return-1===e.indexOf(t)}).reduce(function(e,r){return __assign({},e,((n={})[r]=t[r],n));var n},{})}function prop(e,t){return t[e]}var isFn=function(e){return!!e&&"function"==typeof e},isValidRenderProp=function(e){return react__WEBPACK_IMPORTED_MODULE_0___default.a.isValidElement(e)||isFn(e)};function adopt(e,t){if(!values(e).some(isValidRenderProp))throw Error("The render props object mapper just accept valid elements as value");var r=keys(e),n=function(e){var t=e.render,r=e.children,n=__rest(e,["render","children"]);return t&&isFn(t)?t(n):r&&isFn(r)&&r(n)};n.displayName="Adopt";return r.reduce(function(n,o,a){var s=prop(o,e),i=getDisplayName(n),p=getDisplayName(s),c=a===r.length-1,u=function(e){var r=e.render,a=e.children,i=__rest(e,["render","children"]);return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(n,__assign({},i),function(e){var n=omit(keys(i),e),p=r&&isFn(r)?r:a,u=function(e){var r,a=assign({},n,((r={})[o]=e,r)),s=t&&isFn(t)&&c?t(a):a;return p&&isFn(p)?p(s):null};return isFn(s)?react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(s,assign({},i,e,{render:u})):react__WEBPACK_IMPORTED_MODULE_0___default.a.cloneElement(s,{},u)})};return u.displayName=i+"("+p+")",isFn(s)?hoistNonReactStatics(u,s):u},n)}var Adopt=function(e){function t(t){var r=e.call(this,t)||this;return r.Composed=adopt(t.mapper,r.props.mapProps),r}return __extends(t,e),t.prototype.render=function(){var e=this.props,t=__rest(e,["mapper","mapProps"]);return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(this.Composed,__assign({},t))},t}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);
//# sourceMappingURL=index.m.js.map

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ })

})
//# sourceMappingURL=_app.js.918d632b42c15c8190fb.hot-update.js.map