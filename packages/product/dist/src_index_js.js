(window["webpackJsonpproduct"] = window["webpackJsonpproduct"] || []).push([["src_index_js"],{

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
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
/* harmony import */ var single_spa_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! single-spa-html */ "webpack/container/overridable/single-spa-html=single-spa-html?2348");
/* harmony import */ var single_spa_html__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(single_spa_html__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _prod__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./prod */ "./src/prod.js");
/* harmony import */ var store_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! store/store */ "webpack/container/remote/store/store");
/* harmony import */ var store_store__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(store_store__WEBPACK_IMPORTED_MODULE_2__);



const template = `
<div
  class="product-images"
  style="display: grid; grid-template-columns: repeat(5, 20%);"
>
</div>
`;
const jsComponent = single_spa_html__WEBPACK_IMPORTED_MODULE_0___default()({
  template
});
jsComponent.originalMount = jsComponent.mount;

jsComponent.mount = function (opts, props) {
  return jsComponent.originalMount(opts, props).then(() => {
    const el = document.querySelector(".product-images");
    const html = _prod__WEBPACK_IMPORTED_MODULE_1__.default.map((item, index) => `
<img src="${item.image}" style="max-width: 100%" data-index="${index}" data-foodName="${item.foodName}" />
<div>${item.foodName}-${item.price}</div>
          `).join("");
    el.innerHTML = html;
    document.querySelectorAll(".product-images img").forEach(el => el.addEventListener("click", evt => {
      //console.log(evt.target.getAttribute('data-foodName'));
      //alert(evt.target.getAttribute('data-foodName'));
      (store_store__WEBPACK_IMPORTED_MODULE_2___default().image) = parseInt(evt.target.getAttribute("data-index"));
    }));
  });
};

const bootstrap = jsComponent.bootstrap;
const mount = jsComponent.mount;
const unmount = jsComponent.unmount;

/***/ }),

/***/ "./src/prod.js":
/*!*********************!*\
  !*** ./src/prod.js ***!
  \*********************/
/*! namespace exports */
/*! export default [provided] [used] [could be renamed] */
/*! other exports [not provided] [unused] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ([{
  foodName: 'Club Sandwich',
  image: 'https://punampaul.com/wp-content/uploads/2020/03/Veg-Toast-Sandwich.jpg',
  price: 250
}, {
  foodName: 'Cola',
  image: 'https://thumbs.dreamstime.com/z/colorful-cold-drinks-plastic-cups-beach-ice-86654583.jpg',
  price: 100
}]);

/***/ })

}]);
//# sourceMappingURL=src_index_js.js.map