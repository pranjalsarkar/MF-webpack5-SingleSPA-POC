(window["webpackJsonpsearch"] = window["webpackJsonpsearch"] || []).push([["src_header_js"],{

/***/ "./src/header.js":
/*!***********************!*\
  !*** ./src/header.js ***!
  \***********************/
/*! namespace exports */
/*! export bootstrap [provided] [maybe used (runtime-defined)] [usage prevents renaming] */
/*! export mount [provided] [maybe used (runtime-defined)] [usage prevents renaming] */
/*! export unmount [provided] [maybe used (runtime-defined)] [usage prevents renaming] */
/*! other exports [not provided] [maybe used (runtime-defined)] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "bootstrap": () => /* binding */ bootstrap,
/* harmony export */   "mount": () => /* binding */ mount,
/* harmony export */   "unmount": () => /* binding */ unmount
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/container/overridable/react=react?c4bc");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "webpack/container/overridable/react-dom=react-dom?8116");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var single_spa_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! single-spa-react */ "webpack/container/overridable/single-spa-react=single-spa-react?55d1");
/* harmony import */ var single_spa_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(single_spa_react__WEBPACK_IMPORTED_MODULE_2__);




const Header = () => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "mui-appbar mui--appbar-line-height"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("table", {
    width: "100%"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tbody", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", {
    style: {
      verticalAlign: "middle"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
    className: "mui--appbar-height mui--text-display1",
    style: {
      paddingLeft: "1em"
    }
  }, "Welcome Member"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
    className: "mui--appbar-height mui--text-display1",
    align: "right",
    style: {
      paddingRight: "1em"
    }
  }, "Hi! Member | Log out")))));
};

const headerLifecycles = single_spa_react__WEBPACK_IMPORTED_MODULE_2___default()({
  React: (react__WEBPACK_IMPORTED_MODULE_0___default()),
  ReactDOM: (react_dom__WEBPACK_IMPORTED_MODULE_1___default()),
  rootComponent: Header
});
const bootstrap = headerLifecycles.bootstrap;
const mount = headerLifecycles.mount;
const unmount = headerLifecycles.unmount;

/***/ })

}]);
//# sourceMappingURL=src_header_js.js.map