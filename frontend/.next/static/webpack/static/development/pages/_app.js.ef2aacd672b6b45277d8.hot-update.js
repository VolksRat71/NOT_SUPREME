webpackHotUpdate("static\\development\\pages\\_app.js",{

/***/ "./components/Header.js":
/*!******************************!*\
  !*** ./components/Header.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! nprogress */ "./node_modules/nprogress/nprogress.js");
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(nprogress__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Nav__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Nav */ "./components/Nav.js");
/* harmony import */ var _Cart__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Cart */ "./components/Cart.js");
/* harmony import */ var _Search__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Search */ "./components/Search.js");
var _jsxFileName = "C:\\Users\\natha\\Desktop\\Current Projects\\advancedReact\\frontend\\components\\Header.js";









next_router__WEBPACK_IMPORTED_MODULE_3___default.a.onRouteChangeStart = function () {
  nprogress__WEBPACK_IMPORTED_MODULE_4___default.a.start();
};

next_router__WEBPACK_IMPORTED_MODULE_3___default.a.onRouteChangeComplete = function () {
  nprogress__WEBPACK_IMPORTED_MODULE_4___default.a.done();
};

next_router__WEBPACK_IMPORTED_MODULE_3___default.a.onRouteChangeError = function () {
  nprogress__WEBPACK_IMPORTED_MODULE_4___default.a.done();
};

var Logo = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].h1.withConfig({
  displayName: "Header__Logo",
  componentId: "sc-1oh6523-0"
})(["font-size:4rem;margin-left:2rem;position:relative;z-index:2;transform:skew(-7deg);a{background:", ";padding:0.5rem 1rem;color:white;text-transform:uppercase;text-decoration:none;}@media (max-width:1300px){margin:0;text-align:center;}"], function (props) {
  return props.theme.red;
});
var StyledHeader = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].header.withConfig({
  displayName: "Header__StyledHeader",
  componentId: "sc-1oh6523-1"
})([".bar{border-bottom:10px solid ", ";display:grid;grid-template-columns:auto 1fr;justify-content:space-between;align-items:stretch;@media (max-width:1300px){grid-template-columns:1fr;justify-content:center;}}.sub-bar{display:grid;grid-template-columns:1fr auto;border-bottom:1px solid ", ";}"], function (props) {
  return props.theme.black;
}, function (props) {
  return props.theme.lightgrey;
});

var Header = function Header(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledHeader, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "bar",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Logo, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  }, "Not Supreme"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Nav__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "sub-bar",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Search__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Cart__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./components/Search.js":
/*!******************************!*\
  !*** ./components/Search.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var downshift__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! downshift */ "./node_modules/downshift/dist/downshift.esm.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_adopt__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-adopt */ "./node_modules/react-adopt/dist/index.m.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! graphql-tag */ "./node_modules/graphql-tag/src/index.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lodash.debounce */ "./node_modules/lodash.debounce/index.js");
/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash_debounce__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _styles_DropDown__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./styles/DropDown */ "./components/styles/DropDown.js");
var _jsxFileName = "C:\\Users\\natha\\Desktop\\Current Projects\\advancedReact\\frontend\\components\\Search.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }









var AutoComplete =
/*#__PURE__*/
function (_Component) {
  _inherits(AutoComplete, _Component);

  function AutoComplete() {
    _classCallCheck(this, AutoComplete);

    return _possibleConstructorReturn(this, _getPrototypeOf(AutoComplete).apply(this, arguments));
  }

  _createClass(AutoComplete, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles_DropDown__WEBPACK_IMPORTED_MODULE_6__["SearchStyles"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        type: "search",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles_DropDown__WEBPACK_IMPORTED_MODULE_6__["DropDown"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        },
        __self: this
      }, "Items will go here"))));
    }
  }]);

  return AutoComplete;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (AutoComplete);

/***/ }),

/***/ "./components/styles/DropDown.js":
/*!***************************************!*\
  !*** ./components/styles/DropDown.js ***!
  \***************************************/
/*! exports provided: DropDown, DropDownItem, SearchStyles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DropDown", function() { return DropDown; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DropDownItem", function() { return DropDownItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchStyles", function() { return SearchStyles; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

var DropDown = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "DropDown",
  componentId: "sc-1ow82qq-0"
})(["position:absolute;width:100%;z-index:2;border:1px solid ", ";"], function (props) {
  return props.theme.lightgrey;
});
var DropDownItem = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "DropDown__DropDownItem",
  componentId: "sc-1ow82qq-1"
})(["border-bottom:1px solid ", ";background:", ";padding:1rem;transition:all 0.2s;", ";display:flex;align-items:center;border-left:10px solid ", ";img{margin-right:10px;}"], function (props) {
  return props.theme.lightgrey;
}, function (props) {
  return props.highlighted ? '#f7f7f7' : 'white';
}, function (props) {
  return props.highlighted ? 'padding-left: 2rem;' : null;
}, function (props) {
  return props.highlighted ? props.theme.lightgrey : 'white';
});
var glow = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["keyframes"])(["from{box-shadow:0 0 0px yellow;}to{box-shadow:0 0 10px 1px yellow;}"]);
var SearchStyles = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "DropDown__SearchStyles",
  componentId: "sc-1ow82qq-2"
})(["position:relative;input{width:100%;padding:10px;border:0;font-size:2rem;&.loading{animation:", " 0.5s ease-in-out infinite alternate;}}"], glow);


/***/ }),

/***/ "./node_modules/compute-scroll-into-view/es/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/compute-scroll-into-view/es/index.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function isElement(el) {
  return el != null && typeof el === 'object' && el.nodeType === 1;
}

function canOverflow(overflow, skipOverflowHiddenElements) {
  if (skipOverflowHiddenElements && overflow === 'hidden') {
    return false;
  }

  return overflow !== 'visible' && overflow !== 'clip';
}

function isScrollable(el, skipOverflowHiddenElements) {
  if (el.clientHeight < el.scrollHeight || el.clientWidth < el.scrollWidth) {
    var style = getComputedStyle(el, null);
    return canOverflow(style.overflowY, skipOverflowHiddenElements) || canOverflow(style.overflowX, skipOverflowHiddenElements);
  }

  return false;
}

function alignNearest(scrollingEdgeStart, scrollingEdgeEnd, scrollingSize, scrollingBorderStart, scrollingBorderEnd, elementEdgeStart, elementEdgeEnd, elementSize) {
  if (elementEdgeStart < scrollingEdgeStart && elementEdgeEnd > scrollingEdgeEnd || elementEdgeStart > scrollingEdgeStart && elementEdgeEnd < scrollingEdgeEnd) {
    return 0;
  }

  if (elementEdgeStart < scrollingEdgeStart && elementSize < scrollingSize || elementEdgeEnd > scrollingEdgeEnd && elementSize > scrollingSize) {
    return elementEdgeStart - scrollingEdgeStart - scrollingBorderStart;
  }

  if (elementEdgeEnd > scrollingEdgeEnd && elementSize < scrollingSize || elementEdgeStart < scrollingEdgeStart && elementSize > scrollingSize) {
    return elementEdgeEnd - scrollingEdgeEnd + scrollingBorderEnd;
  }

  return 0;
}

/* harmony default export */ __webpack_exports__["default"] = (function (target, options) {
  var scrollMode = options.scrollMode,
      block = options.block,
      inline = options.inline,
      boundary = options.boundary,
      skipOverflowHiddenElements = options.skipOverflowHiddenElements;
  var checkBoundary = typeof boundary === 'function' ? boundary : function (node) {
    return node !== boundary;
  };

  if (!isElement(target)) {
    throw new TypeError('Invalid target');
  }

  var scrollingElement = document.scrollingElement || document.documentElement;
  var frames = [];
  var cursor = target;

  while (isElement(cursor) && checkBoundary(cursor)) {
    cursor = cursor.parentNode;

    if (cursor === scrollingElement) {
      frames.push(cursor);
      break;
    }

    if (cursor === document.body && isScrollable(cursor) && !isScrollable(document.documentElement)) {
      continue;
    }

    if (isScrollable(cursor, skipOverflowHiddenElements)) {
      frames.push(cursor);
    }
  }

  var viewportWidth = window.visualViewport ? visualViewport.width : innerWidth;
  var viewportHeight = window.visualViewport ? visualViewport.height : innerHeight;
  var viewportX = window.scrollX || pageXOffset;
  var viewportY = window.scrollY || pageYOffset;

  var _target$getBoundingCl = target.getBoundingClientRect(),
      targetHeight = _target$getBoundingCl.height,
      targetWidth = _target$getBoundingCl.width,
      targetTop = _target$getBoundingCl.top,
      targetRight = _target$getBoundingCl.right,
      targetBottom = _target$getBoundingCl.bottom,
      targetLeft = _target$getBoundingCl.left;

  var targetBlock = block === 'start' || block === 'nearest' ? targetTop : block === 'end' ? targetBottom : targetTop + targetHeight / 2;
  var targetInline = inline === 'center' ? targetLeft + targetWidth / 2 : inline === 'end' ? targetRight : targetLeft;
  var computations = [];

  for (var index = 0; index < frames.length; index++) {
    var frame = frames[index];

    var _frame$getBoundingCli = frame.getBoundingClientRect(),
        _height = _frame$getBoundingCli.height,
        _width = _frame$getBoundingCli.width,
        _top = _frame$getBoundingCli.top,
        right = _frame$getBoundingCli.right,
        bottom = _frame$getBoundingCli.bottom,
        _left = _frame$getBoundingCli.left;

    if (scrollMode === 'if-needed' && targetTop >= 0 && targetLeft >= 0 && targetBottom <= viewportHeight && targetRight <= viewportWidth && targetTop >= _top && targetBottom <= bottom && targetLeft >= _left && targetRight <= right) {
      return computations;
    }

    var frameStyle = getComputedStyle(frame);
    var borderLeft = parseInt(frameStyle.borderLeftWidth, 10);
    var borderTop = parseInt(frameStyle.borderTopWidth, 10);
    var borderRight = parseInt(frameStyle.borderRightWidth, 10);
    var borderBottom = parseInt(frameStyle.borderBottomWidth, 10);
    var blockScroll = 0;
    var inlineScroll = 0;
    var scrollbarWidth = 'offsetWidth' in frame ? frame.offsetWidth - frame.clientWidth - borderLeft - borderRight : 0;
    var scrollbarHeight = 'offsetHeight' in frame ? frame.offsetHeight - frame.clientHeight - borderTop - borderBottom : 0;

    if (scrollingElement === frame) {
      if (block === 'start') {
        blockScroll = targetBlock;
      } else if (block === 'end') {
        blockScroll = targetBlock - viewportHeight;
      } else if (block === 'nearest') {
        blockScroll = alignNearest(viewportY, viewportY + viewportHeight, viewportHeight, borderTop, borderBottom, viewportY + targetBlock, viewportY + targetBlock + targetHeight, targetHeight);
      } else {
        blockScroll = targetBlock - viewportHeight / 2;
      }

      if (inline === 'start') {
        inlineScroll = targetInline;
      } else if (inline === 'center') {
        inlineScroll = targetInline - viewportWidth / 2;
      } else if (inline === 'end') {
        inlineScroll = targetInline - viewportWidth;
      } else {
        inlineScroll = alignNearest(viewportX, viewportX + viewportWidth, viewportWidth, borderLeft, borderRight, viewportX + targetInline, viewportX + targetInline + targetWidth, targetWidth);
      }

      blockScroll = Math.max(0, blockScroll + viewportY);
      inlineScroll = Math.max(0, inlineScroll + viewportX);
    } else {
      if (block === 'start') {
        blockScroll = targetBlock - _top - borderTop;
      } else if (block === 'end') {
        blockScroll = targetBlock - bottom + borderBottom + scrollbarHeight;
      } else if (block === 'nearest') {
        blockScroll = alignNearest(_top, bottom, _height, borderTop, borderBottom + scrollbarHeight, targetBlock, targetBlock + targetHeight, targetHeight);
      } else {
        blockScroll = targetBlock - (_top + _height / 2) + scrollbarHeight / 2;
      }

      if (inline === 'start') {
        inlineScroll = targetInline - _left - borderLeft;
      } else if (inline === 'center') {
        inlineScroll = targetInline - (_left + _width / 2) + scrollbarWidth / 2;
      } else if (inline === 'end') {
        inlineScroll = targetInline - right + borderRight + scrollbarWidth;
      } else {
        inlineScroll = alignNearest(_left, right, _width, borderLeft, borderRight + scrollbarWidth, targetInline, targetInline + targetWidth, targetWidth);
      }

      var scrollLeft = frame.scrollLeft,
          scrollTop = frame.scrollTop;
      blockScroll = Math.max(0, Math.min(scrollTop + blockScroll, frame.scrollHeight - _height + scrollbarHeight));
      inlineScroll = Math.max(0, Math.min(scrollLeft + inlineScroll, frame.scrollWidth - _width + scrollbarWidth));
      targetBlock += scrollTop - blockScroll;
      targetInline += scrollLeft - inlineScroll;
    }

    computations.push({
      el: frame,
      top: blockScroll,
      left: inlineScroll
    });
  }

  return computations;
});

/***/ }),

/***/ "./node_modules/downshift/dist/downshift.esm.js":
/*!******************************************************!*\
  !*** ./node_modules/downshift/dist/downshift.esm.js ***!
  \******************************************************/
/*! exports provided: default, resetIdCounter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resetIdCounter", function() { return resetIdCounter; });
/* harmony import */ var compute_scroll_into_view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! compute-scroll-into-view */ "./node_modules/compute-scroll-into-view/es/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);




function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

// istanbul ignore next
var statusDiv = typeof document === 'undefined' ? null : document.getElementById('a11y-status-message');
var statuses = [];
/**
 * @param {String} status the status message
 */

function setStatus(status) {
  var isSameAsLast = statuses[statuses.length - 1] === status;

  if (isSameAsLast) {
    statuses = statuses.concat([status]);
  } else {
    statuses = [status];
  }

  var div = getStatusDiv(); // Remove previous children

  while (div.lastChild) {
    div.removeChild(div.firstChild);
  }

  statuses.filter(Boolean).forEach(function (statusItem, index) {
    div.appendChild(getStatusChildDiv(statusItem, index));
  });
}
/**
 * @param {String} status the status message
 * @param {Number} index the index
 * @return {HTMLElement} the child node
 */


function getStatusChildDiv(status, index) {
  var display = index === statuses.length - 1 ? 'block' : 'none';
  var childDiv = document.createElement('div');
  childDiv.style.display = display;
  childDiv.textContent = status;
  return childDiv;
}
/**
 * Get the status node or create it if it does not already exist
 * @return {HTMLElement} the status node
 */


function getStatusDiv() {
  if (statusDiv) {
    return statusDiv;
  }

  statusDiv = document.createElement('div');
  statusDiv.setAttribute('id', 'a11y-status-message');
  statusDiv.setAttribute('role', 'status');
  statusDiv.setAttribute('aria-live', 'assertive');
  statusDiv.setAttribute('aria-relevant', 'additions text');
  Object.assign(statusDiv.style, {
    border: '0',
    clip: 'rect(0 0 0 0)',
    height: '1px',
    margin: '-1px',
    overflow: 'hidden',
    padding: '0',
    position: 'absolute',
    width: '1px'
  });
  document.body.appendChild(statusDiv);
  return statusDiv;
}

var unknown =  true ? '__autocomplete_unknown__' : undefined;
var mouseUp =  true ? '__autocomplete_mouseup__' : undefined;
var itemMouseEnter =  true ? '__autocomplete_item_mouseenter__' : undefined;
var keyDownArrowUp =  true ? '__autocomplete_keydown_arrow_up__' : undefined;
var keyDownArrowDown =  true ? '__autocomplete_keydown_arrow_down__' : undefined;
var keyDownEscape =  true ? '__autocomplete_keydown_escape__' : undefined;
var keyDownEnter =  true ? '__autocomplete_keydown_enter__' : undefined;
var clickItem =  true ? '__autocomplete_click_item__' : undefined;
var blurInput =  true ? '__autocomplete_blur_input__' : undefined;
var changeInput =  true ? '__autocomplete_change_input__' : undefined;
var keyDownSpaceButton =  true ? '__autocomplete_keydown_space_button__' : undefined;
var clickButton =  true ? '__autocomplete_click_button__' : undefined;
var blurButton =  true ? '__autocomplete_blur_button__' : undefined;
var controlledPropUpdatedSelectedItem =  true ? '__autocomplete_controlled_prop_updated_selected_item__' : undefined;
var touchStart =  true ? '__autocomplete_touchstart__' : undefined;

var stateChangeTypes = /*#__PURE__*/Object.freeze({
  unknown: unknown,
  mouseUp: mouseUp,
  itemMouseEnter: itemMouseEnter,
  keyDownArrowUp: keyDownArrowUp,
  keyDownArrowDown: keyDownArrowDown,
  keyDownEscape: keyDownEscape,
  keyDownEnter: keyDownEnter,
  clickItem: clickItem,
  blurInput: blurInput,
  changeInput: changeInput,
  keyDownSpaceButton: keyDownSpaceButton,
  clickButton: clickButton,
  blurButton: blurButton,
  controlledPropUpdatedSelectedItem: controlledPropUpdatedSelectedItem,
  touchStart: touchStart
});

var idCounter = 0;
/**
 * Accepts a parameter and returns it if it's a function
 * or a noop function if it's not. This allows us to
 * accept a callback, but not worry about it if it's not
 * passed.
 * @param {Function} cb the callback
 * @return {Function} a function
 */

function cbToCb(cb) {
  return typeof cb === 'function' ? cb : noop;
}

function noop() {}
/**
 * Scroll node into view if necessary
 * @param {HTMLElement} node the element that should scroll into view
 * @param {HTMLElement} rootNode the root element of the component
 */


function scrollIntoView(node, rootNode) {
  if (node === null) {
    return;
  }

  var actions = Object(compute_scroll_into_view__WEBPACK_IMPORTED_MODULE_0__["default"])(node, {
    boundary: rootNode,
    block: 'nearest',
    scrollMode: 'if-needed'
  });
  actions.forEach(function (_ref) {
    var el = _ref.el,
        top = _ref.top,
        left = _ref.left;
    el.scrollTop = top;
    el.scrollLeft = left;
  });
}
/**
 * @param {HTMLElement} parent the parent node
 * @param {HTMLElement} child the child node
 * @return {Boolean} whether the parent is the child or the child is in the parent
 */


function isOrContainsNode(parent, child) {
  return parent === child || parent.contains && parent.contains(child);
}
/**
 * Simple debounce implementation. Will call the given
 * function once after the time given has passed since
 * it was last called.
 * @param {Function} fn the function to call after the time
 * @param {Number} time the time to wait
 * @return {Function} the debounced function
 */


function debounce(fn, time) {
  var timeoutId;

  function cancel() {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
  }

  function wrapper() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    cancel();
    timeoutId = setTimeout(function () {
      timeoutId = null;
      fn.apply(void 0, args);
    }, time);
  }

  wrapper.cancel = cancel;
  return wrapper;
}
/**
 * This is intended to be used to compose event handlers.
 * They are executed in order until one of them sets
 * `event.preventDownshiftDefault = true`.
 * @param {...Function} fns the event handler functions
 * @return {Function} the event handler to add to an element
 */


function callAllEventHandlers() {
  for (var _len2 = arguments.length, fns = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    fns[_key2] = arguments[_key2];
  }

  return function (event) {
    for (var _len3 = arguments.length, args = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
      args[_key3 - 1] = arguments[_key3];
    }

    return fns.some(function (fn) {
      if (fn) {
        fn.apply(void 0, [event].concat(args));
      }

      return event.preventDownshiftDefault || event.hasOwnProperty('nativeEvent') && event.nativeEvent.preventDownshiftDefault;
    });
  };
}
/**
 * This return a function that will call all the given functions with
 * the arguments with which it's called. It does a null-check before
 * attempting to call the functions and can take any number of functions.
 * @param {...Function} fns the functions to call
 * @return {Function} the function that calls all the functions
 */


function callAll() {
  for (var _len4 = arguments.length, fns = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
    fns[_key4] = arguments[_key4];
  }

  return function () {
    for (var _len5 = arguments.length, args = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
      args[_key5] = arguments[_key5];
    }

    fns.forEach(function (fn) {
      if (fn) {
        fn.apply(void 0, args);
      }
    });
  };
}
/**
 * This generates a unique ID for an instance of Downshift
 * @return {String} the unique ID
 */


function generateId() {
  return String(idCounter++);
}
/**
 * Resets idCounter to 0. Used for SSR.
 */


function resetIdCounter() {
  idCounter = 0;
}
/**
 * @param {Object} param the downshift state and other relevant properties
 * @return {String} the a11y status message
 */


function getA11yStatusMessage(_ref2) {
  var isOpen = _ref2.isOpen,
      highlightedItem = _ref2.highlightedItem,
      selectedItem = _ref2.selectedItem,
      resultCount = _ref2.resultCount,
      previousResultCount = _ref2.previousResultCount,
      itemToString = _ref2.itemToString;

  if (!isOpen) {
    if (selectedItem) {
      return itemToString(selectedItem);
    } else {
      return '';
    }
  }

  if (!resultCount) {
    return 'No results.';
  } else if (!highlightedItem || resultCount !== previousResultCount) {
    return resultCount + " " + (resultCount === 1 ? 'result is' : 'results are') + " available, use up and down arrow keys to navigate.";
  }

  return itemToString(highlightedItem);
}
/**
 * Takes an argument and if it's an array, returns the first item in the array
 * otherwise returns the argument
 * @param {*} arg the maybe-array
 * @param {*} defaultValue the value if arg is falsey not defined
 * @return {*} the arg or it's first item
 */


function unwrapArray(arg, defaultValue) {
  arg = Array.isArray(arg) ?
  /* istanbul ignore next (preact) */
  arg[0] : arg;

  if (!arg && defaultValue) {
    return defaultValue;
  } else {
    return arg;
  }
}
/**
 * @param {Object} element (P)react element
 * @return {Boolean} whether it's a DOM element
 */


function isDOMElement(element) {
  // then we assume this is react
  return typeof element.type === 'string';
}
/**
 * @param {Object} element (P)react element
 * @return {Object} the props
 */


function getElementProps(element) {
  return element.props;
}
/**
 * Throws a helpful error message for required properties. Useful
 * to be used as a default in destructuring or object params.
 * @param {String} fnName the function name
 * @param {String} propName the prop name
 */


function requiredProp(fnName, propName) {
  // eslint-disable-next-line no-console
  console.error("The property \"" + propName + "\" is required in \"" + fnName + "\"");
}

var stateKeys = ['highlightedIndex', 'inputValue', 'isOpen', 'selectedItem', 'type'];
/**
 * @param {Object} state the state object
 * @return {Object} state that is relevant to downshift
 */

function pickState(state) {
  if (state === void 0) {
    state = {};
  }

  var result = {};
  stateKeys.forEach(function (k) {
    if (state.hasOwnProperty(k)) {
      result[k] = state[k];
    }
  });
  return result;
}
/**
 * Normalizes the 'key' property of a KeyboardEvent in IE/Edge
 * @param {Object} event a keyboardEvent object
 * @return {String} keyboard key
 */


function normalizeArrowKey(event) {
  var key = event.key,
      keyCode = event.keyCode;
  /* istanbul ignore next (ie) */

  if (keyCode >= 37 && keyCode <= 40 && key.indexOf('Arrow') !== 0) {
    return "Arrow" + key;
  }

  return key;
}
/**
 * Simple check if the value passed is object literal
 * @param {*} obj any things
 * @return {Boolean} whether it's object literal
 */


function isPlainObject(obj) {
  return Object.prototype.toString.call(obj) === '[object Object]';
}

var Downshift =
/*#__PURE__*/
function (_Component) {
  _inheritsLoose(Downshift, _Component);

  function Downshift(_props) {
    var _this = _Component.call(this, _props) || this;

    _this.id = _this.props.id || "downshift-" + generateId();
    _this.menuId = _this.props.menuId || _this.id + "-menu";
    _this.labelId = _this.props.labelId || _this.id + "-label";
    _this.inputId = _this.props.inputId || _this.id + "-input";

    _this.getItemId = _this.props.getItemId || function (index) {
      return _this.id + "-item-" + index;
    };

    _this.input = null;
    _this.items = [];
    _this.itemCount = null;
    _this.previousResultCount = 0;
    _this.timeoutIds = [];

    _this.internalSetTimeout = function (fn, time) {
      var id = setTimeout(function () {
        _this.timeoutIds = _this.timeoutIds.filter(function (i) {
          return i !== id;
        });
        fn();
      }, time);

      _this.timeoutIds.push(id);
    };

    _this.setItemCount = function (count) {
      _this.itemCount = count;
    };

    _this.unsetItemCount = function () {
      _this.itemCount = null;
    };

    _this.setHighlightedIndex = function (highlightedIndex, otherStateToSet) {
      if (highlightedIndex === void 0) {
        highlightedIndex = _this.props.defaultHighlightedIndex;
      }

      if (otherStateToSet === void 0) {
        otherStateToSet = {};
      }

      otherStateToSet = pickState(otherStateToSet);

      _this.internalSetState(_extends({
        highlightedIndex: highlightedIndex
      }, otherStateToSet));
    };

    _this.clearSelection = function (cb) {
      _this.internalSetState({
        selectedItem: null,
        inputValue: '',
        isOpen: false
      }, cb);
    };

    _this.selectItem = function (item, otherStateToSet, cb) {
      otherStateToSet = pickState(otherStateToSet);

      _this.internalSetState(_extends({
        isOpen: false,
        highlightedIndex: _this.props.defaultHighlightedIndex,
        selectedItem: item,
        inputValue: _this.isControlledProp('selectedItem') ? _this.props.defaultInputValue : _this.props.itemToString(item)
      }, otherStateToSet), cb);
    };

    _this.selectItemAtIndex = function (itemIndex, otherStateToSet, cb) {
      var item = _this.items[itemIndex];

      if (item == null) {
        return;
      }

      _this.selectItem(item, otherStateToSet, cb);
    };

    _this.selectHighlightedItem = function (otherStateToSet, cb) {
      return _this.selectItemAtIndex(_this.getState().highlightedIndex, otherStateToSet, cb);
    };

    _this.internalSetState = function (stateToSet, cb) {
      var isItemSelected, onChangeArg;
      var onStateChangeArg = {};
      var isStateToSetFunction = typeof stateToSet === 'function'; // we want to call `onInputValueChange` before the `setState` call
      // so someone controlling the `inputValue` state gets notified of
      // the input change as soon as possible. This avoids issues with
      // preserving the cursor position.
      // See https://github.com/paypal/downshift/issues/217 for more info.

      if (!isStateToSetFunction && stateToSet.hasOwnProperty('inputValue')) {
        _this.props.onInputValueChange(stateToSet.inputValue, _extends({}, _this.getStateAndHelpers(), stateToSet));
      }

      return _this.setState(function (state) {
        state = _this.getState(state);
        var newStateToSet = isStateToSetFunction ? stateToSet(state) : stateToSet; // Your own function that could modify the state that will be set.

        newStateToSet = _this.props.stateReducer(state, newStateToSet); // checks if an item is selected, regardless of if it's different from
        // what was selected before
        // used to determine if onSelect and onChange callbacks should be called

        isItemSelected = newStateToSet.hasOwnProperty('selectedItem'); // this keeps track of the object we want to call with setState

        var nextState = {}; // this is just used to tell whether the state changed

        var nextFullState = {}; // we need to call on change if the outside world is controlling any of our state
        // and we're trying to update that state. OR if the selection has changed and we're
        // trying to update the selection

        if (isItemSelected && newStateToSet.selectedItem !== state.selectedItem) {
          onChangeArg = newStateToSet.selectedItem;
        }

        newStateToSet.type = newStateToSet.type || unknown;
        Object.keys(newStateToSet).forEach(function (key) {
          // onStateChangeArg should only have the state that is
          // actually changing
          if (state[key] !== newStateToSet[key]) {
            onStateChangeArg[key] = newStateToSet[key];
          } // the type is useful for the onStateChangeArg
          // but we don't actually want to set it in internal state.
          // this is an undocumented feature for now... Not all internalSetState
          // calls support it and I'm not certain we want them to yet.
          // But it enables users controlling the isOpen state to know when
          // the isOpen state changes due to mouseup events which is quite handy.


          if (key === 'type') {
            return;
          }

          nextFullState[key] = newStateToSet[key]; // if it's coming from props, then we don't care to set it internally

          if (!_this.isControlledProp(key)) {
            nextState[key] = newStateToSet[key];
          }
        }); // if stateToSet is a function, then we weren't able to call onInputValueChange
        // earlier, so we'll call it now that we know what the inputValue state will be.

        if (isStateToSetFunction && newStateToSet.hasOwnProperty('inputValue')) {
          _this.props.onInputValueChange(newStateToSet.inputValue, _extends({}, _this.getStateAndHelpers(), newStateToSet));
        }

        return nextState;
      }, function () {
        // call the provided callback if it's a function
        cbToCb(cb)(); // only call the onStateChange and onChange callbacks if
        // we have relevant information to pass them.

        var hasMoreStateThanType = Object.keys(onStateChangeArg).length > 1;

        if (hasMoreStateThanType) {
          _this.props.onStateChange(onStateChangeArg, _this.getStateAndHelpers());
        }

        if (isItemSelected) {
          _this.props.onSelect(stateToSet.selectedItem, _this.getStateAndHelpers());
        }

        if (onChangeArg !== undefined) {
          _this.props.onChange(onChangeArg, _this.getStateAndHelpers());
        } // this is currently undocumented and therefore subject to change
        // We'll try to not break it, but just be warned.


        _this.props.onUserAction(onStateChangeArg, _this.getStateAndHelpers());
      });
    };

    _this.rootRef = function (node) {
      return _this._rootNode = node;
    };

    _this.getRootProps = function (_temp, _temp2) {
      var _extends2;

      var _ref = _temp === void 0 ? {} : _temp,
          _ref$refKey = _ref.refKey,
          refKey = _ref$refKey === void 0 ? 'ref' : _ref$refKey,
          rest = _objectWithoutPropertiesLoose(_ref, ["refKey"]);

      var _ref2 = _temp2 === void 0 ? {} : _temp2,
          _ref2$suppressRefErro = _ref2.suppressRefError,
          suppressRefError = _ref2$suppressRefErro === void 0 ? false : _ref2$suppressRefErro;

      // this is used in the render to know whether the user has called getRootProps.
      // It uses that to know whether to apply the props automatically
      _this.getRootProps.called = true;
      _this.getRootProps.refKey = refKey;
      _this.getRootProps.suppressRefError = suppressRefError;

      var _this$getState = _this.getState(),
          isOpen = _this$getState.isOpen;

      return _extends((_extends2 = {}, _extends2[refKey] = _this.rootRef, _extends2.role = 'combobox', _extends2['aria-expanded'] = isOpen, _extends2['aria-haspopup'] = 'listbox', _extends2['aria-owns'] = isOpen ? _this.menuId : null, _extends2['aria-labelledby'] = _this.labelId, _extends2), rest);
    };

    _this.keyDownHandlers = {
      ArrowDown: function ArrowDown(event) {
        event.preventDefault();
        var amount = event.shiftKey ? 5 : 1;
        this.moveHighlightedIndex(amount, {
          type: keyDownArrowDown
        });
      },
      ArrowUp: function ArrowUp(event) {
        event.preventDefault();
        var amount = event.shiftKey ? -5 : -1;
        this.moveHighlightedIndex(amount, {
          type: keyDownArrowUp
        });
      },
      Enter: function Enter(event) {
        var _this$getState2 = this.getState(),
            isOpen = _this$getState2.isOpen,
            highlightedIndex = _this$getState2.highlightedIndex;

        if (isOpen && highlightedIndex != null) {
          event.preventDefault();
          var item = this.items[highlightedIndex];
          var itemNode = this.getItemNodeFromIndex(highlightedIndex);

          if (item == null || itemNode && itemNode.hasAttribute('disabled')) {
            return;
          }

          this.selectHighlightedItem({
            type: keyDownEnter
          });
        }
      },
      Escape: function Escape(event) {
        event.preventDefault();
        this.reset({
          type: keyDownEscape
        });
      }
    };
    _this.buttonKeyDownHandlers = _extends({}, _this.keyDownHandlers, {
      ' ': function _(event) {
        event.preventDefault();
        this.toggleMenu({
          type: keyDownSpaceButton
        });
      }
    });

    _this.getToggleButtonProps = function (_temp3) {
      var _ref3 = _temp3 === void 0 ? {} : _temp3,
          onClick = _ref3.onClick,
          onPress = _ref3.onPress,
          onKeyDown = _ref3.onKeyDown,
          onKeyUp = _ref3.onKeyUp,
          onBlur = _ref3.onBlur,
          rest = _objectWithoutPropertiesLoose(_ref3, ["onClick", "onPress", "onKeyDown", "onKeyUp", "onBlur"]);

      var _this$getState3 = _this.getState(),
          isOpen = _this$getState3.isOpen;

      var enabledEventHandlers = {
        onClick: callAllEventHandlers(onClick, _this.button_handleClick),
        onKeyDown: callAllEventHandlers(onKeyDown, _this.button_handleKeyDown),
        onKeyUp: callAllEventHandlers(onKeyUp, _this.button_handleKeyUp),
        onBlur: callAllEventHandlers(onBlur, _this.button_handleBlur)
      };
      var eventHandlers = rest.disabled ? {} : enabledEventHandlers;
      return _extends({
        type: 'button',
        role: 'button',
        'aria-label': isOpen ? 'close menu' : 'open menu',
        'aria-haspopup': true,
        'data-toggle': true
      }, eventHandlers, rest);
    };

    _this.button_handleKeyUp = function (event) {
      // Prevent click event from emitting in Firefox
      event.preventDefault();
    };

    _this.button_handleKeyDown = function (event) {
      var key = normalizeArrowKey(event);

      if (_this.buttonKeyDownHandlers[key]) {
        _this.buttonKeyDownHandlers[key].call(_assertThisInitialized(_assertThisInitialized(_this)), event);
      }
    };

    _this.button_handleClick = function (event) {
      event.preventDefault(); // handle odd case for Safari and Firefox which
      // don't give the button the focus properly.

      /* istanbul ignore if (can't reasonably test this) */

      if (_this.props.environment.document.activeElement === _this.props.environment.document.body) {
        event.target.focus();
      } // to simplify testing components that use downshift, we'll not wrap this in a setTimeout
      // if the NODE_ENV is test. With the proper build system, this should be dead code eliminated
      // when building for production and should therefore have no impact on production code.


      if (false) {} else {
        // Ensure that toggle of menu occurs after the potential blur event in iOS
        _this.internalSetTimeout(function () {
          return _this.toggleMenu({
            type: clickButton
          });
        });
      }
    };

    _this.button_handleBlur = function (event) {
      var blurTarget = event.target; // Save blur target for comparison with activeElement later
      // Need setTimeout, so that when the user presses Tab, the activeElement is the next focused element, not body element

      _this.internalSetTimeout(function () {
        if (!_this.isMouseDown && (_this.props.environment.document.activeElement == null || _this.props.environment.document.activeElement.id !== _this.inputId) && _this.props.environment.document.activeElement !== blurTarget // Do nothing if we refocus the same element again (to solve issue in Safari on iOS)
        ) {
            _this.reset({
              type: blurButton
            });
          }
      });
    };

    _this.getLabelProps = function (props) {
      return _extends({
        htmlFor: _this.inputId,
        id: _this.labelId
      }, props);
    };

    _this.getInputProps = function (_temp4) {
      var _ref4 = _temp4 === void 0 ? {} : _temp4,
          onKeyDown = _ref4.onKeyDown,
          onBlur = _ref4.onBlur,
          onChange = _ref4.onChange,
          onInput = _ref4.onInput,
          onChangeText = _ref4.onChangeText,
          rest = _objectWithoutPropertiesLoose(_ref4, ["onKeyDown", "onBlur", "onChange", "onInput", "onChangeText"]);

      var onChangeKey;
      var eventHandlers = {};
      /* istanbul ignore next (preact) */

      onChangeKey = 'onChange';

      var _this$getState4 = _this.getState(),
          inputValue = _this$getState4.inputValue,
          isOpen = _this$getState4.isOpen,
          highlightedIndex = _this$getState4.highlightedIndex;

      if (!rest.disabled) {
        var _eventHandlers;

        eventHandlers = (_eventHandlers = {}, _eventHandlers[onChangeKey] = callAllEventHandlers(onChange, onInput, _this.input_handleChange), _eventHandlers.onKeyDown = callAllEventHandlers(onKeyDown, _this.input_handleKeyDown), _eventHandlers.onBlur = callAllEventHandlers(onBlur, _this.input_handleBlur), _eventHandlers);
      }
      /* istanbul ignore if (react-native) */


      return _extends({
        'aria-autocomplete': 'list',
        'aria-activedescendant': isOpen && typeof highlightedIndex === 'number' && highlightedIndex >= 0 ? _this.getItemId(highlightedIndex) : null,
        'aria-controls': isOpen ? _this.menuId : null,
        'aria-labelledby': _this.labelId,
        // https://developer.mozilla.org/en-US/docs/Web/Security/Securing_your_site/Turning_off_form_autocompletion
        // revert back since autocomplete="nope" is ignored on latest Chrome and Opera
        autoComplete: 'off',
        value: inputValue,
        id: _this.inputId
      }, eventHandlers, rest);
    };

    _this.input_handleKeyDown = function (event) {
      var key = normalizeArrowKey(event);

      if (key && _this.keyDownHandlers[key]) {
        _this.keyDownHandlers[key].call(_assertThisInitialized(_assertThisInitialized(_this)), event);
      }
    };

    _this.input_handleChange = function (event) {
      _this.internalSetState({
        type: changeInput,
        isOpen: true,
        inputValue: event.target.value
      });
    };

    _this.input_handleTextChange
    /* istanbul ignore next (react-native) */
    = function (text) {
      _this.internalSetState({
        type: changeInput,
        isOpen: true,
        inputValue: text
      });
    };

    _this.input_handleBlur = function () {
      // Need setTimeout, so that when the user presses Tab, the activeElement is the next focused element, not the body element
      _this.internalSetTimeout(function () {
        var downshiftButtonIsActive = _this.props.environment.document && _this.props.environment.document.activeElement.dataset.toggle && _this._rootNode && _this._rootNode.contains(_this.props.environment.document.activeElement);

        if (!_this.isMouseDown && !downshiftButtonIsActive) {
          _this.reset({
            type: blurInput
          });
        }
      });
    };

    _this.menuRef = function (node) {
      _this._menuNode = node;
    };

    _this.getMenuProps = function (_temp5, _temp6) {
      var _extends3;

      var _ref5 = _temp5 === void 0 ? {} : _temp5,
          _ref5$refKey = _ref5.refKey,
          refKey = _ref5$refKey === void 0 ? 'ref' : _ref5$refKey,
          ref = _ref5.ref,
          props = _objectWithoutPropertiesLoose(_ref5, ["refKey", "ref"]);

      var _ref6 = _temp6 === void 0 ? {} : _temp6,
          _ref6$suppressRefErro = _ref6.suppressRefError,
          suppressRefError = _ref6$suppressRefErro === void 0 ? false : _ref6$suppressRefErro;

      _this.getMenuProps.called = true;
      _this.getMenuProps.refKey = refKey;
      _this.getMenuProps.suppressRefError = suppressRefError;
      return _extends((_extends3 = {}, _extends3[refKey] = callAll(ref, _this.menuRef), _extends3.role = 'listbox', _extends3['aria-labelledby'] = props && props['aria-label'] ? null : _this.labelId, _extends3.id = _this.menuId, _extends3), props);
    };

    _this.getItemProps = function (_temp7) {
      var _enabledEventHandlers;

      var _ref7 = _temp7 === void 0 ? {} : _temp7,
          onMouseMove = _ref7.onMouseMove,
          onMouseDown = _ref7.onMouseDown,
          onClick = _ref7.onClick,
          onPress = _ref7.onPress,
          index = _ref7.index,
          _ref7$item = _ref7.item,
          item = _ref7$item === void 0 ?  false ?
      /* istanbul ignore next */
      undefined : requiredProp('getItemProps', 'item') : _ref7$item,
          rest = _objectWithoutPropertiesLoose(_ref7, ["onMouseMove", "onMouseDown", "onClick", "onPress", "index", "item"]);

      if (index === undefined) {
        _this.items.push(item);

        index = _this.items.indexOf(item);
      } else {
        _this.items[index] = item;
      }

      var onSelectKey = 'onClick';
      var customClickHandler = onClick;
      var enabledEventHandlers = (_enabledEventHandlers = {
        // onMouseMove is used over onMouseEnter here. onMouseMove
        // is only triggered on actual mouse movement while onMouseEnter
        // can fire on DOM changes, interrupting keyboard navigation
        onMouseMove: callAllEventHandlers(onMouseMove, function () {
          if (index === _this.getState().highlightedIndex) {
            return;
          }

          _this.setHighlightedIndex(index, {
            type: itemMouseEnter
          }); // We never want to manually scroll when changing state based
          // on `onMouseMove` because we will be moving the element out
          // from under the user which is currently scrolling/moving the
          // cursor


          _this.avoidScrolling = true;

          _this.internalSetTimeout(function () {
            return _this.avoidScrolling = false;
          }, 250);
        }),
        onMouseDown: callAllEventHandlers(onMouseDown, function (event) {
          // This prevents the activeElement from being changed
          // to the item so it can remain with the current activeElement
          // which is a more common use case.
          event.preventDefault();
        })
      }, _enabledEventHandlers[onSelectKey] = callAllEventHandlers(customClickHandler, function () {
        _this.selectItemAtIndex(index, {
          type: clickItem
        });
      }), _enabledEventHandlers); // Passing down the onMouseDown handler to prevent redirect
      // of the activeElement if clicking on disabled items

      var eventHandlers = rest.disabled ? {
        onMouseDown: enabledEventHandlers.onMouseDown
      } : enabledEventHandlers;
      return _extends({
        id: _this.getItemId(index),
        role: 'option',
        'aria-selected': _this.getState().selectedItem === item
      }, eventHandlers, rest);
    };

    _this.clearItems = function () {
      _this.items = [];
    };

    _this.reset = function (otherStateToSet, cb) {
      if (otherStateToSet === void 0) {
        otherStateToSet = {};
      }

      otherStateToSet = pickState(otherStateToSet);

      _this.internalSetState(function (_ref8) {
        var selectedItem = _ref8.selectedItem;
        return _extends({
          isOpen: false,
          highlightedIndex: _this.props.defaultHighlightedIndex,
          inputValue: _this.props.itemToString(selectedItem)
        }, otherStateToSet);
      }, cb);
    };

    _this.toggleMenu = function (otherStateToSet, cb) {
      if (otherStateToSet === void 0) {
        otherStateToSet = {};
      }

      otherStateToSet = pickState(otherStateToSet);

      _this.internalSetState(function (_ref9) {
        var isOpen = _ref9.isOpen;
        return _extends({
          isOpen: !isOpen
        }, otherStateToSet);
      }, function () {
        var _this$getState5 = _this.getState(),
            isOpen = _this$getState5.isOpen;

        if (isOpen) {
          // highlight default index
          _this.setHighlightedIndex(undefined, otherStateToSet);
        }

        cbToCb(cb)();
      });
    };

    _this.openMenu = function (cb) {
      _this.internalSetState({
        isOpen: true
      }, cb);
    };

    _this.closeMenu = function (cb) {
      _this.internalSetState({
        isOpen: false
      }, cb);
    };

    _this.updateStatus = debounce(function () {
      var state = _this.getState();

      var item = _this.items[state.highlightedIndex];

      var resultCount = _this.getItemCount();

      var status = _this.props.getA11yStatusMessage(_extends({
        itemToString: _this.props.itemToString,
        previousResultCount: _this.previousResultCount,
        resultCount: resultCount,
        highlightedItem: item
      }, state));

      _this.previousResultCount = resultCount;
      setStatus(status);
    }, 200);

    var _state = _this.getState({
      highlightedIndex: _this.props.defaultHighlightedIndex,
      isOpen: _this.props.defaultIsOpen,
      inputValue: _this.props.defaultInputValue,
      selectedItem: _this.props.defaultSelectedItem
    });

    if (_state.selectedItem != null) {
      _state.inputValue = _this.props.itemToString(_state.selectedItem);
    }

    _this.state = _state;
    return _this;
  }

  var _proto = Downshift.prototype;

  /**
   * Clear all running timeouts
   */
  _proto.internalClearTimeouts = function internalClearTimeouts() {
    this.timeoutIds.forEach(function (id) {
      clearTimeout(id);
    });
    this.timeoutIds = [];
  };
  /**
   * Gets the state based on internal state or props
   * If a state value is passed via props, then that
   * is the value given, otherwise it's retrieved from
   * stateToMerge
   *
   * This will perform a shallow merge of the given state object
   * with the state coming from props
   * (for the controlled component scenario)
   * This is used in state updater functions so they're referencing
   * the right state regardless of where it comes from.
   *
   * @param {Object} stateToMerge defaults to this.state
   * @return {Object} the state
   */


  _proto.getState = function getState(stateToMerge) {
    var _this2 = this;

    if (stateToMerge === void 0) {
      stateToMerge = this.state;
    }

    return Object.keys(stateToMerge).reduce(function (state, key) {
      state[key] = _this2.isControlledProp(key) ? _this2.props[key] : stateToMerge[key];
      return state;
    }, {});
  };
  /**
   * This determines whether a prop is a "controlled prop" meaning it is
   * state which is controlled by the outside of this component rather
   * than within this component.
   * @param {String} key the key to check
   * @return {Boolean} whether it is a controlled controlled prop
   */


  _proto.isControlledProp = function isControlledProp(key) {
    return this.props[key] !== undefined;
  };

  _proto.getItemCount = function getItemCount() {
    // things read better this way. They're in priority order:
    // 1. `this.itemCount`
    // 2. `this.props.itemCount`
    // 3. `this.items.length`
    var itemCount = this.items.length;

    if (this.itemCount != null) {
      itemCount = this.itemCount;
    } else if (this.props.itemCount !== undefined) {
      itemCount = this.props.itemCount;
    }

    return itemCount;
  };

  _proto.getItemNodeFromIndex = function getItemNodeFromIndex(index) {
    return this.props.environment.document.getElementById(this.getItemId(index));
  };

  _proto.scrollHighlightedItemIntoView = function scrollHighlightedItemIntoView() {
    /* istanbul ignore else (react-native) */
    {
      var node = this.getItemNodeFromIndex(this.getState().highlightedIndex);
      this.props.scrollIntoView(node, this._rootNode);
    }
  };

  _proto.moveHighlightedIndex = function moveHighlightedIndex(amount, otherStateToSet) {
    if (this.getState().isOpen) {
      this.changeHighlightedIndex(amount, otherStateToSet);
    } else {
      this.setHighlightedIndex(undefined, _extends({
        isOpen: true
      }, otherStateToSet));
    }
  };

  _proto.changeHighlightedIndex = function changeHighlightedIndex(moveAmount, otherStateToSet) {
    var itemsLastIndex = this.getItemCount() - 1;

    if (itemsLastIndex < 0) {
      return;
    }

    var _this$getState6 = this.getState(),
        highlightedIndex = _this$getState6.highlightedIndex;

    var baseIndex = highlightedIndex;

    if (baseIndex === null) {
      baseIndex = moveAmount > 0 ? -1 : itemsLastIndex + 1;
    }

    var newIndex = baseIndex + moveAmount;

    if (newIndex < 0) {
      newIndex = itemsLastIndex;
    } else if (newIndex > itemsLastIndex) {
      newIndex = 0;
    }

    this.setHighlightedIndex(newIndex, otherStateToSet);
  };

  _proto.getStateAndHelpers = function getStateAndHelpers() {
    var _this$getState7 = this.getState(),
        highlightedIndex = _this$getState7.highlightedIndex,
        inputValue = _this$getState7.inputValue,
        selectedItem = _this$getState7.selectedItem,
        isOpen = _this$getState7.isOpen;

    var itemToString = this.props.itemToString;
    var id = this.id;
    var getRootProps = this.getRootProps,
        getToggleButtonProps = this.getToggleButtonProps,
        getLabelProps = this.getLabelProps,
        getMenuProps = this.getMenuProps,
        getInputProps = this.getInputProps,
        getItemProps = this.getItemProps,
        openMenu = this.openMenu,
        closeMenu = this.closeMenu,
        toggleMenu = this.toggleMenu,
        selectItem = this.selectItem,
        selectItemAtIndex = this.selectItemAtIndex,
        selectHighlightedItem = this.selectHighlightedItem,
        setHighlightedIndex = this.setHighlightedIndex,
        clearSelection = this.clearSelection,
        clearItems = this.clearItems,
        reset = this.reset,
        setItemCount = this.setItemCount,
        unsetItemCount = this.unsetItemCount,
        setState = this.internalSetState;
    return {
      // prop getters
      getRootProps: getRootProps,
      getToggleButtonProps: getToggleButtonProps,
      getLabelProps: getLabelProps,
      getMenuProps: getMenuProps,
      getInputProps: getInputProps,
      getItemProps: getItemProps,
      // actions
      reset: reset,
      openMenu: openMenu,
      closeMenu: closeMenu,
      toggleMenu: toggleMenu,
      selectItem: selectItem,
      selectItemAtIndex: selectItemAtIndex,
      selectHighlightedItem: selectHighlightedItem,
      setHighlightedIndex: setHighlightedIndex,
      clearSelection: clearSelection,
      clearItems: clearItems,
      setItemCount: setItemCount,
      unsetItemCount: unsetItemCount,
      setState: setState,
      // props
      itemToString: itemToString,
      // derived
      id: id,
      // state
      highlightedIndex: highlightedIndex,
      inputValue: inputValue,
      isOpen: isOpen,
      selectedItem: selectedItem
    };
  }; //////////////////////////// ROOT


  _proto.componentDidMount = function componentDidMount() {
    var _this3 = this;

    /* istanbul ignore if (react-native) */
    if ("development" !== 'production' && !false && this.getMenuProps.called && !this.getMenuProps.suppressRefError) {
      validateGetMenuPropsCalledCorrectly(this._menuNode, this.getMenuProps);
    }
    /* istanbul ignore if (react-native) */


    {
      var targetWithinDownshift = function (target, checkActiveElement) {
        if (checkActiveElement === void 0) {
          checkActiveElement = true;
        }

        var document = _this3.props.environment.document;
        return [_this3._rootNode, _this3._menuNode].some(function (contextNode) {
          return contextNode && (isOrContainsNode(contextNode, target) || checkActiveElement && isOrContainsNode(contextNode, document.activeElement));
        });
      }; // this.isMouseDown helps us track whether the mouse is currently held down.
      // This is useful when the user clicks on an item in the list, but holds the mouse
      // down long enough for the list to disappear (because the blur event fires on the input)
      // this.isMouseDown is used in the blur handler on the input to determine whether the blur event should
      // trigger hiding the menu.


      var onMouseDown = function () {
        _this3.isMouseDown = true;
      };

      var onMouseUp = function (event) {
        _this3.isMouseDown = false; // if the target element or the activeElement is within a downshift node
        // then we don't want to reset downshift

        var contextWithinDownshift = targetWithinDownshift(event.target);

        if (!contextWithinDownshift && _this3.getState().isOpen) {
          _this3.reset({
            type: mouseUp
          }, function () {
            return _this3.props.onOuterClick(_this3.getStateAndHelpers());
          });
        }
      }; // Touching an element in iOS gives focus and hover states, but touching out of
      // the element will remove hover, and persist the focus state, resulting in the
      // blur event not being triggered.


      var onTouchStart = function (event) {
        var contextWithinDownshift = targetWithinDownshift(event.target, false);

        if (!contextWithinDownshift && _this3.getState().isOpen) {
          _this3.reset({
            type: touchStart
          }, function () {
            return _this3.props.onOuterClick(_this3.getStateAndHelpers());
          });
        }
      };

      this.props.environment.addEventListener('mousedown', onMouseDown);
      this.props.environment.addEventListener('mouseup', onMouseUp);
      this.props.environment.addEventListener('touchstart', onTouchStart);

      this.cleanup = function () {
        _this3.internalClearTimeouts();

        _this3.updateStatus.cancel();

        _this3.props.environment.removeEventListener('mousedown', onMouseDown);

        _this3.props.environment.removeEventListener('mouseup', onMouseUp);

        _this3.props.environment.removeEventListener('touchstart', onTouchStart);
      };
    }
  };

  _proto.componentDidUpdate = function componentDidUpdate(prevProps, prevState) {
    if (true) {
      validateControlledUnchanged(prevProps, this.props);
      /* istanbul ignore if (react-native) */

      if (this.getMenuProps.called && !this.getMenuProps.suppressRefError) {
        validateGetMenuPropsCalledCorrectly(this._menuNode, this.getMenuProps);
      }
    }

    if (this.isControlledProp('selectedItem') && this.props.selectedItemChanged(prevProps.selectedItem, this.props.selectedItem)) {
      this.internalSetState({
        type: controlledPropUpdatedSelectedItem,
        inputValue: this.props.itemToString(this.props.selectedItem)
      });
    }

    var current = this.props.highlightedIndex === undefined ? this.state : this.props;
    var prev = prevProps.highlightedIndex === undefined ? prevState : prevProps;

    if (current.highlightedIndex !== prev.highlightedIndex && !this.avoidScrolling) {
      this.scrollHighlightedItemIntoView();
    }
    /* istanbul ignore else (react-native) */


    this.updateStatus();
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    this.cleanup(); // avoids memory leak
  };

  _proto.render = function render() {
    var children = unwrapArray(this.props.children, noop); // because the items are rerendered every time we call the children
    // we clear this out each render and it will be populated again as
    // getItemProps is called.

    this.clearItems(); // we reset this so we know whether the user calls getRootProps during
    // this render. If they do then we don't need to do anything,
    // if they don't then we need to clone the element they return and
    // apply the props for them.

    this.getRootProps.called = false;
    this.getRootProps.refKey = undefined;
    this.getRootProps.suppressRefError = undefined; // we do something similar for getMenuProps

    this.getMenuProps.called = false;
    this.getMenuProps.refKey = undefined;
    this.getMenuProps.suppressRefError = undefined; // we do something similar for getLabelProps

    this.getLabelProps.called = false; // and something similar for getInputProps

    this.getInputProps.called = false;
    var element = unwrapArray(children(this.getStateAndHelpers()));

    if (!element) {
      return null;
    }

    if (this.getRootProps.called || this.props.suppressRefError) {
      if ("development" !== 'production' && !this.getRootProps.suppressRefError && !this.props.suppressRefError) {
        validateGetRootPropsCalledCorrectly(element, this.getRootProps);
      }

      return element;
    } else if (isDOMElement(element)) {
      // they didn't apply the root props, but we can clone
      // this and apply the props ourselves
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.cloneElement(element, this.getRootProps(getElementProps(element)));
    }
    /* istanbul ignore else */


    if (true) {
      // they didn't apply the root props, but they need to
      // otherwise we can't query around the autocomplete
      throw new Error('downshift: If you return a non-DOM element, you must use apply the getRootProps function');
    }
    /* istanbul ignore next */


    return undefined;
  };

  return Downshift;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);

Downshift.defaultProps = {
  defaultHighlightedIndex: null,
  defaultSelectedItem: null,
  defaultInputValue: '',
  defaultIsOpen: false,
  getA11yStatusMessage: getA11yStatusMessage,
  itemToString: function itemToString(i) {
    if (i == null) {
      return '';
    }

    if ("development" !== 'production' && isPlainObject(i) && !i.hasOwnProperty('toString')) {
      // eslint-disable-next-line no-console
      console.warn('downshift: An object was passed to the default implementation of `itemToString`. You should probably provide your own `itemToString` implementation. Please refer to the `itemToString` API documentation.', 'The object that was passed:', i);
    }

    return String(i);
  },
  onStateChange: noop,
  onInputValueChange: noop,
  onUserAction: noop,
  onChange: noop,
  onSelect: noop,
  onOuterClick: noop,
  selectedItemChanged: function selectedItemChanged(prevItem, item) {
    return prevItem !== item;
  },
  environment: typeof window === 'undefined'
  /* istanbul ignore next (ssr) */
  ? {} : window,
  stateReducer: function stateReducer(state, stateToSet) {
    return stateToSet;
  },
  suppressRefError: false,
  scrollIntoView: scrollIntoView
};
Downshift.stateChangeTypes = stateChangeTypes;
 true ? Downshift.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,
  defaultHighlightedIndex: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number,
  defaultSelectedItem: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.any,
  defaultInputValue: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
  defaultIsOpen: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,
  getA11yStatusMessage: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,
  itemToString: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,
  onChange: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,
  onSelect: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,
  onStateChange: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,
  onInputValueChange: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,
  onUserAction: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,
  onOuterClick: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,
  selectedItemChanged: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,
  stateReducer: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,
  itemCount: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number,
  id: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
  environment: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.shape({
    addEventListener: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,
    removeEventListener: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,
    document: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.shape({
      getElementById: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,
      activeElement: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.any,
      body: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.any
    })
  }),
  suppressRefError: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,
  scrollIntoView: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,
  // things we keep in state for uncontrolled components
  // but can accept as props for controlled components

  /* eslint-disable react/no-unused-prop-types */
  selectedItem: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.any,
  isOpen: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,
  inputValue: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
  highlightedIndex: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number,
  labelId: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
  inputId: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
  menuId: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
  getItemId: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func
  /* eslint-enable react/no-unused-prop-types */

} : undefined;

function validateGetMenuPropsCalledCorrectly(node, _ref10) {
  var refKey = _ref10.refKey;

  if (!node) {
    // eslint-disable-next-line no-console
    console.error("downshift: The ref prop \"" + refKey + "\" from getMenuProps was not applied correctly on your menu element.");
  }
}

function validateGetRootPropsCalledCorrectly(element, _ref11) {
  var refKey = _ref11.refKey;
  var refKeySpecified = refKey !== 'ref';
  var isComposite = !isDOMElement(element);

  if (isComposite && !refKeySpecified) {
    // eslint-disable-next-line no-console
    console.error('downshift: You returned a non-DOM element. You must specify a refKey in getRootProps');
  } else if (!isComposite && refKeySpecified) {
    // eslint-disable-next-line no-console
    console.error("downshift: You returned a DOM element. You should not specify a refKey in getRootProps. You specified \"" + refKey + "\"");
  }

  if (!getElementProps(element)[refKey]) {
    // eslint-disable-next-line no-console
    console.error("downshift: You must apply the ref prop \"" + refKey + "\" from getRootProps onto your root element.");
  }
}

function validateControlledUnchanged(prevProps, nextProps) {
  var warningDescription = "This prop should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled Downshift element for the lifetime of the component. More info: https://github.com/paypal/downshift#control-props";
  ['selectedItem', 'isOpen', 'inputValue', 'highlightedIndex'].forEach(function (propKey) {
    if (prevProps[propKey] !== undefined && nextProps[propKey] === undefined) {
      // eslint-disable-next-line no-console
      console.error("downshift: A component has changed the controlled prop \"" + propKey + "\" to be uncontrolled. " + warningDescription);
    } else if (prevProps[propKey] === undefined && nextProps[propKey] !== undefined) {
      // eslint-disable-next-line no-console
      console.error("downshift: A component has changed the uncontrolled prop \"" + propKey + "\" to be controlled. " + warningDescription);
    }
  });
}

/* harmony default export */ __webpack_exports__["default"] = (Downshift);



/***/ }),

/***/ "./node_modules/lodash.debounce/index.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash.debounce/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** Used as the `TypeError` message for "Functions" methods. */
var FUNC_ERROR_TEXT = 'Expected a function';

/** Used as references for various `Number` constants. */
var NAN = 0 / 0;

/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/** Used to match leading and trailing whitespace. */
var reTrim = /^\s+|\s+$/g;

/** Used to detect bad signed hexadecimal string values. */
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

/** Used to detect binary string values. */
var reIsBinary = /^0b[01]+$/i;

/** Used to detect octal string values. */
var reIsOctal = /^0o[0-7]+$/i;

/** Built-in method references without a dependency on `root`. */
var freeParseInt = parseInt;

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString = objectProto.toString;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max,
    nativeMin = Math.min;

/**
 * Gets the timestamp of the number of milliseconds that have elapsed since
 * the Unix epoch (1 January 1970 00:00:00 UTC).
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Date
 * @returns {number} Returns the timestamp.
 * @example
 *
 * _.defer(function(stamp) {
 *   console.log(_.now() - stamp);
 * }, _.now());
 * // => Logs the number of milliseconds it took for the deferred invocation.
 */
var now = function() {
  return root.Date.now();
};

/**
 * Creates a debounced function that delays invoking `func` until after `wait`
 * milliseconds have elapsed since the last time the debounced function was
 * invoked. The debounced function comes with a `cancel` method to cancel
 * delayed `func` invocations and a `flush` method to immediately invoke them.
 * Provide `options` to indicate whether `func` should be invoked on the
 * leading and/or trailing edge of the `wait` timeout. The `func` is invoked
 * with the last arguments provided to the debounced function. Subsequent
 * calls to the debounced function return the result of the last `func`
 * invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the debounced function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.debounce` and `_.throttle`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to debounce.
 * @param {number} [wait=0] The number of milliseconds to delay.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=false]
 *  Specify invoking on the leading edge of the timeout.
 * @param {number} [options.maxWait]
 *  The maximum time `func` is allowed to be delayed before it's invoked.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new debounced function.
 * @example
 *
 * // Avoid costly calculations while the window size is in flux.
 * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
 *
 * // Invoke `sendMail` when clicked, debouncing subsequent calls.
 * jQuery(element).on('click', _.debounce(sendMail, 300, {
 *   'leading': true,
 *   'trailing': false
 * }));
 *
 * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
 * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
 * var source = new EventSource('/stream');
 * jQuery(source).on('message', debounced);
 *
 * // Cancel the trailing debounced invocation.
 * jQuery(window).on('popstate', debounced.cancel);
 */
function debounce(func, wait, options) {
  var lastArgs,
      lastThis,
      maxWait,
      result,
      timerId,
      lastCallTime,
      lastInvokeTime = 0,
      leading = false,
      maxing = false,
      trailing = true;

  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  wait = toNumber(wait) || 0;
  if (isObject(options)) {
    leading = !!options.leading;
    maxing = 'maxWait' in options;
    maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }

  function invokeFunc(time) {
    var args = lastArgs,
        thisArg = lastThis;

    lastArgs = lastThis = undefined;
    lastInvokeTime = time;
    result = func.apply(thisArg, args);
    return result;
  }

  function leadingEdge(time) {
    // Reset any `maxWait` timer.
    lastInvokeTime = time;
    // Start the timer for the trailing edge.
    timerId = setTimeout(timerExpired, wait);
    // Invoke the leading edge.
    return leading ? invokeFunc(time) : result;
  }

  function remainingWait(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime,
        result = wait - timeSinceLastCall;

    return maxing ? nativeMin(result, maxWait - timeSinceLastInvoke) : result;
  }

  function shouldInvoke(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime;

    // Either this is the first call, activity has stopped and we're at the
    // trailing edge, the system time has gone backwards and we're treating
    // it as the trailing edge, or we've hit the `maxWait` limit.
    return (lastCallTime === undefined || (timeSinceLastCall >= wait) ||
      (timeSinceLastCall < 0) || (maxing && timeSinceLastInvoke >= maxWait));
  }

  function timerExpired() {
    var time = now();
    if (shouldInvoke(time)) {
      return trailingEdge(time);
    }
    // Restart the timer.
    timerId = setTimeout(timerExpired, remainingWait(time));
  }

  function trailingEdge(time) {
    timerId = undefined;

    // Only invoke if we have `lastArgs` which means `func` has been
    // debounced at least once.
    if (trailing && lastArgs) {
      return invokeFunc(time);
    }
    lastArgs = lastThis = undefined;
    return result;
  }

  function cancel() {
    if (timerId !== undefined) {
      clearTimeout(timerId);
    }
    lastInvokeTime = 0;
    lastArgs = lastCallTime = lastThis = timerId = undefined;
  }

  function flush() {
    return timerId === undefined ? result : trailingEdge(now());
  }

  function debounced() {
    var time = now(),
        isInvoking = shouldInvoke(time);

    lastArgs = arguments;
    lastThis = this;
    lastCallTime = time;

    if (isInvoking) {
      if (timerId === undefined) {
        return leadingEdge(lastCallTime);
      }
      if (maxing) {
        // Handle invocations in a tight loop.
        timerId = setTimeout(timerExpired, wait);
        return invokeFunc(lastCallTime);
      }
    }
    if (timerId === undefined) {
      timerId = setTimeout(timerExpired, wait);
    }
    return result;
  }
  debounced.cancel = cancel;
  debounced.flush = flush;
  return debounced;
}

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return !!value && (type == 'object' || type == 'function');
}

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return !!value && typeof value == 'object';
}

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike(value) && objectToString.call(value) == symbolTag);
}

/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */
function toNumber(value) {
  if (typeof value == 'number') {
    return value;
  }
  if (isSymbol(value)) {
    return NAN;
  }
  if (isObject(value)) {
    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
    value = isObject(other) ? (other + '') : other;
  }
  if (typeof value != 'string') {
    return value === 0 ? value : +value;
  }
  value = value.replace(reTrim, '');
  var isBinary = reIsBinary.test(value);
  return (isBinary || reIsOctal.test(value))
    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
    : (reIsBadHex.test(value) ? NAN : +value);
}

module.exports = debounce;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ })

})
//# sourceMappingURL=_app.js.ef2aacd672b6b45277d8.hot-update.js.map