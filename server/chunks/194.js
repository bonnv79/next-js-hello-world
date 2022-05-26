exports.id = 194;
exports.ids = [194];
exports.modules = {

/***/ 6194:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "zx": () => (/* reexport */ Button),
  "Zb": () => (/* reexport */ Card),
  "oG": () => (/* reexport */ ComponentLabel),
  "II": () => (/* reexport */ Input)
});

// EXTERNAL MODULE: ./components/Input/styles.module.scss
var styles_module = __webpack_require__(5123);
var styles_module_default = /*#__PURE__*/__webpack_require__.n(styles_module);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./components/Input/index.js
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



function Input(props) {
  return /*#__PURE__*/jsx_runtime_.jsx("input", _objectSpread({
    className: `${(styles_module_default()).input} ${props.className}`
  }, props));
}
/* harmony default export */ const components_Input = ((/* unused pure expression or super */ null && (Input)));
// EXTERNAL MODULE: ./components/ComponentLabel/styles.module.scss
var ComponentLabel_styles_module = __webpack_require__(7982);
var ComponentLabel_styles_module_default = /*#__PURE__*/__webpack_require__.n(ComponentLabel_styles_module);
;// CONCATENATED MODULE: ./components/ComponentLabel/index.js



function ComponentLabel({
  label,
  children
}) {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: (ComponentLabel_styles_module_default()).container,
    children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
      className: (ComponentLabel_styles_module_default()).label,
      children: label
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: (ComponentLabel_styles_module_default()).children,
      children: children
    })]
  });
}
/* harmony default export */ const components_ComponentLabel = ((/* unused pure expression or super */ null && (ComponentLabel)));
// EXTERNAL MODULE: ./components/Button/styles.module.scss
var Button_styles_module = __webpack_require__(9536);
var Button_styles_module_default = /*#__PURE__*/__webpack_require__.n(Button_styles_module);
;// CONCATENATED MODULE: ./components/Button/index.js
function Button_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function Button_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { Button_ownKeys(Object(source), true).forEach(function (key) { Button_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { Button_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function Button_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



function Button(props) {
  return /*#__PURE__*/jsx_runtime_.jsx("button", Button_objectSpread({
    className: `${(Button_styles_module_default()).button} ${props.className}`
  }, props));
}
/* harmony default export */ const components_Button = ((/* unused pure expression or super */ null && (Button)));
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./components/Card/styles.module.scss
var Card_styles_module = __webpack_require__(5583);
var Card_styles_module_default = /*#__PURE__*/__webpack_require__.n(Card_styles_module);
;// CONCATENATED MODULE: ./components/Card/index.js




function Card(props) {
  const {
    href,
    title,
    children = 'Click to view page details'
  } = props;
  return /*#__PURE__*/jsx_runtime_.jsx((link_default()), {
    href: href,
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
      className: (Card_styles_module_default()).card,
      children: [/*#__PURE__*/jsx_runtime_.jsx("h2", {
        children: title
      }), /*#__PURE__*/jsx_runtime_.jsx("p", {
        children: children
      })]
    })
  });
}
/* harmony default export */ const components_Card = ((/* unused pure expression or super */ null && (Card)));
;// CONCATENATED MODULE: ./components/index.js





/***/ }),

/***/ 9536:
/***/ ((module) => {

// Exports
module.exports = {
	"button": "styles_button__4NrmU"
};


/***/ }),

/***/ 5583:
/***/ ((module) => {

// Exports
module.exports = {
	"card": "styles_card__Inpy6"
};


/***/ }),

/***/ 7982:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "styles_container__XQHsr",
	"label": "styles_label__ayW3e",
	"children": "styles_children__rGto8"
};


/***/ }),

/***/ 5123:
/***/ ((module) => {

// Exports
module.exports = {
	"input": "styles_input__qIlfQ"
};


/***/ })

};
;