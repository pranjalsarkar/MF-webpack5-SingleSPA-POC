/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/single-spa-html/lib/single-spa-html.js":
/*!*************************************************************!*\
  !*** ./node_modules/single-spa-html/lib/single-spa-html.js ***!
  \*************************************************************/
/*! unknown exports (runtime-defined) */
/*! exports [maybe provided (runtime-defined)] [maybe used (runtime-defined)] */
/*! runtime requirements: top-level-this-exports, __webpack_exports__, module */
/***/ (function(module, exports) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = singleSpaHtml;

  function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);

    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object);
      if (enumerableOnly) symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
      keys.push.apply(keys, symbols);
    }

    return keys;
  }

  function _objectSpread(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i] != null ? arguments[i] : {};

      if (i % 2) {
        ownKeys(Object(source), true).forEach(function (key) {
          _defineProperty(target, key, source[key]);
        });
      } else if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
      } else {
        ownKeys(Object(source)).forEach(function (key) {
          Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
      }
    }

    return target;
  }

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }

  var defaultOpts = {
    template: "",
    domElementGetter: null
  };

  function singleSpaHtml(opts) {
    if (!opts) {
      throw Error("single-spa-html must be called with an opts object");
    }

    opts = _objectSpread(_objectSpread({}, defaultOpts), opts);

    if ((typeof opts.template !== "string" || opts.template.trim().length === 0) && typeof opts.template !== "function") {
      throw Error("single-spa-html must be passed a 'template' opt that is a non empty string or function");
    }

    if (opts.domElementGetter && typeof opts.domElementGetter !== "function") {
      throw Error("single-spa-html was given 'opts.domElementGetter', but it isn't a function");
    }

    return {
      bootstrap: bootstrap.bind(null, opts),
      mount: mount.bind(null, opts),
      unmount: unmount.bind(null, opts)
    };
  }

  function bootstrap(opts, props) {
    return Promise.resolve();
  }

  function mount(opts, props) {
    return Promise.resolve(typeof opts.template === "function" ? opts.template(props) : opts.template).then(function (template) {
      var domElementGetter = chooseDomElementGetter(opts, props);
      var domEl = domElementGetter(props);

      if (!domEl) {
        throw Error("single-spa-html: domElementGetter did not return a valid dom element");
      }

      domEl.innerHTML = template;
    });
  }

  function unmount(opts, props) {
    return Promise.resolve().then(function () {
      var domElementGetter = chooseDomElementGetter(opts, props);
      var domEl = domElementGetter(props);

      if (!domEl) {
        throw Error("single-spa-html: domElementGetter did not return a valid dom element");
      }

      domEl.innerHTML = "";
    });
  }

  function chooseDomElementGetter(opts, props) {
    if (props.domElement) {
      return function () {
        return props.domElement;
      };
    } else if (props.domElementGetter) {
      return props.domElementGetter;
    } else if (opts.domElementGetter) {
      return opts.domElementGetter;
    } else {
      return defaultDomElementGetter(props);
    }
  }

  function defaultDomElementGetter(props) {
    var name = props.appName || props.name;

    if (!name) {
      throw Error("single-spa-html was not given an application name as a prop, so it can't make a unique dom element container for the ht l application");
    }

    var htmlId = "single-spa-application:".concat(name);
    return function defaultDomEl() {
      var domElement = document.getElementById(htmlId);

      if (!domElement) {
        domElement = document.createElement("div");
        domElement.id = htmlId;
        document.body.appendChild(domElement);
      }

      return domElement;
    };
  }
});

/***/ }),

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

/***/ }),

/***/ "webpack/container/reference/store":
/*!************************!*\
  !*** external "store" ***!
  \************************/
/*! unknown exports (runtime-defined) */
/*! exports [maybe provided (runtime-defined)] [maybe used (runtime-defined)] */
/*! runtime requirements: module */
/***/ ((module) => {

"use strict";
module.exports = store;

/***/ }),

/***/ "webpack/container/remote-overrides/3a82c4":
/*!**********************************************************!*\
  !*** remote overrides single-spa-html = single-spa-html ***!
  \**********************************************************/
/*! unknown exports (runtime-defined) */
/*! exports [maybe provided (runtime-defined)] [maybe used (runtime-defined)] */
/*! runtime requirements: module, __webpack_require__.e, __webpack_require__, __webpack_require__.* */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = (external) => {
	if(external.override) external.override(Object.assign({
		"single-spa-html": () => {
			return __webpack_require__.e("webpack_container_overridable_single-spa-html_single-spa-html").then(() => {
				return () => __webpack_require__(/*! single-spa-html */ "webpack/container/overridable/single-spa-html=single-spa-html?41f2")
			})
		}
	}, __webpack_require__.O));
	return external;
};

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => module['default'] :
/******/ 				() => module;
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/ensure chunk */
/******/ 	(() => {
/******/ 		__webpack_require__.f = {};
/******/ 		// This file contains only the entry chunk.
/******/ 		// The chunk loading function for additional chunks
/******/ 		__webpack_require__.e = (chunkId) => {
/******/ 			return Promise.all(Object.keys(__webpack_require__.f).reduce((promises, key) => {
/******/ 				__webpack_require__.f[key](chunkId, promises);
/******/ 				return promises;
/******/ 			}, []));
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get javascript chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference async chunks
/******/ 		__webpack_require__.u = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "" + chunkId + ".js";
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/overridables */
/******/ 	(() => {
/******/ 		__webpack_require__.O = {};
/******/ 		var installedModules = {};
/******/ 		var idToNameMapping = {
/******/ 			"webpack/container/overridable/single-spa-html=single-spa-html?41f2": "single-spa-html",
/******/ 			"webpack/container/overridable/single-spa-html=single-spa-html?2348": "single-spa-html"
/******/ 		};
/******/ 		var initialOverridables = {
/******/ 			"webpack/container/overridable/single-spa-html=single-spa-html?2348": "./node_modules/single-spa-html/lib/single-spa-html.js"
/******/ 		};
/******/ 		for(var id in initialOverridables) if(__webpack_require__.o(initialOverridables, id)) __webpack_modules__[id] = ((id) => (module) => {
/******/ 			// Handle case when module is used sync
/******/ 			installedModules[id] = 0;
/******/ 			var override = __webpack_require__.O[idToNameMapping[id]];
/******/ 			module.exports = override ? override()() : __webpack_require__(initialOverridables[id]);
/******/ 		})(id);
/******/ 		var chunkMapping = {
/******/ 			"webpack_container_overridable_single-spa-html_single-spa-html": [
/******/ 				"webpack/container/overridable/single-spa-html=single-spa-html?41f2"
/******/ 			]
/******/ 		};
/******/ 		var fallbackMapping = {
/******/ 			"webpack/container/overridable/single-spa-html=single-spa-html?41f2": () => {
/******/ 				return __webpack_require__.e("node_modules_single-spa-html_lib_single-spa-html_js").then(() => () => __webpack_require__("./node_modules/single-spa-html/lib/single-spa-html.js"));
/******/ 			}
/******/ 		};
/******/ 		__webpack_require__.f.overridables = (chunkId, promises) => {
/******/ 			if(__webpack_require__.o(chunkMapping, chunkId)) {
/******/ 				chunkMapping[chunkId].forEach((id) => {
/******/ 					promises.push(__webpack_require__.o(installedModules, id) ? installedModules[id] : installedModules[id] = Promise.resolve((__webpack_require__.O[idToNameMapping[id]] || fallbackMapping[id])()).then((factory) => {
/******/ 						installedModules[id] = 0;
/******/ 						__webpack_modules__[id] = (module) => {
/******/ 							module.exports = factory();
/******/ 						}
/******/ 					}))
/******/ 				});
/******/ 			}
/******/ 		}
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "http://localhost:3009/";
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/remotes loading */
/******/ 	(() => {
/******/ 		var installedModules = {};
/******/ 		var chunkMapping = {};
/******/ 		var idToExternalAndNameMapping = {};
/******/ 		__webpack_require__.f.remotes = (chunkId, promises) => {
/******/ 			if(__webpack_require__.o(chunkMapping, chunkId)) {
/******/ 				chunkMapping[chunkId].forEach((id) => {
/******/ 					if(__webpack_require__.o(installedModules, id)) return installedModules[id] && promises.push(installedModules[id]);
/******/ 					var data = idToExternalAndNameMapping[id];
/******/ 					var onError = (error) => {
/******/ 						if(error && typeof error.message === "string") error.message += '\nwhile loading "' + data[2] + '" from ' + data[1];
/******/ 						__webpack_modules__[id] = () => {
/******/ 							throw error;
/******/ 						}
/******/ 						delete installedModules[id];
/******/ 					};
/******/ 					var onFactory = (factory) => {
/******/ 						__webpack_modules__[id] = (module) => {
/******/ 							module.exports = factory();
/******/ 						}
/******/ 					};
/******/ 					try {
/******/ 						var promise = __webpack_require__(data[0])(__webpack_require__(data[1])).get(data[2]);
/******/ 						if(promise && promise.then) {
/******/ 							promises.push(installedModules[id] = promise.then(onFactory, onError));
/******/ 						} else {
/******/ 							onFactory(promise);
/******/ 						}
/******/ 					} catch(error) {
/******/ 						onError(error);
/******/ 					}
/******/ 				});
/******/ 			}
/******/ 		}
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// Promise = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		
/******/ 		__webpack_require__.f.j = (chunkId, promises) => {
/******/ 				// JSONP chunk loading for javascript
/******/ 				var installedChunkData = __webpack_require__.o(installedChunks, chunkId) ? installedChunks[chunkId] : undefined;
/******/ 				if(installedChunkData !== 0) { // 0 means "already installed".
/******/ 		
/******/ 					// a Promise means "currently loading".
/******/ 					if(installedChunkData) {
/******/ 						promises.push(installedChunkData[2]);
/******/ 					} else {
/******/ 						if("node_modules_single-spa-html_lib_single-spa-html_js" == chunkId) {
/******/ 							// setup Promise in chunk cache
/******/ 							var promise = new Promise((resolve, reject) => {
/******/ 								installedChunkData = installedChunks[chunkId] = [resolve, reject];
/******/ 							});
/******/ 							promises.push(installedChunkData[2] = promise);
/******/ 		
/******/ 							// start chunk loading
/******/ 							var url = __webpack_require__.p + __webpack_require__.u(chunkId);
/******/ 							var loadingEnded = () => {
/******/ 								if(__webpack_require__.o(installedChunks, chunkId)) {
/******/ 									installedChunkData = installedChunks[chunkId];
/******/ 									if(installedChunkData !== 0) installedChunks[chunkId] = undefined;
/******/ 									if(installedChunkData) return installedChunkData[1];
/******/ 								}
/******/ 							};
/******/ 							var script = document.createElement('script');
/******/ 							var onScriptComplete;
/******/ 		
/******/ 							script.charset = 'utf-8';
/******/ 							script.timeout = 120;
/******/ 							if (__webpack_require__.nc) {
/******/ 								script.setAttribute("nonce", __webpack_require__.nc);
/******/ 							}
/******/ 							script.src = url;
/******/ 		
/******/ 							// create error before stack unwound to get useful stacktrace later
/******/ 							var error = new Error();
/******/ 							onScriptComplete = (event) => {
/******/ 								onScriptComplete = () => {
/******/ 		
/******/ 								}
/******/ 								// avoid mem leaks in IE.
/******/ 								script.onerror = script.onload = null;
/******/ 								clearTimeout(timeout);
/******/ 								var reportError = loadingEnded();
/******/ 								if(reportError) {
/******/ 									var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 									var realSrc = event && event.target && event.target.src;
/******/ 									error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 									error.name = 'ChunkLoadError';
/******/ 									error.type = errorType;
/******/ 									error.request = realSrc;
/******/ 									reportError(error);
/******/ 								}
/******/ 							}
/******/ 							;
/******/ 							var timeout = setTimeout(() => {
/******/ 								onScriptComplete({ type: 'timeout', target: script })
/******/ 							}, 120000);
/******/ 							script.onerror = script.onload = onScriptComplete;
/******/ 							document.head.appendChild(script);
/******/ 						} else installedChunks[chunkId] = 0;
/******/ 					}
/******/ 				}
/******/ 		};
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no deferred startup
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		function webpackJsonpCallback(data) {
/******/ 			var chunkIds = data[0];
/******/ 			var moreModules = data[1];
/******/ 		
/******/ 			var runtime = data[3];
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0, resolves = [];
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					resolves.push(installedChunks[chunkId][0]);
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			for(moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 				}
/******/ 			}
/******/ 			if(runtime) runtime(__webpack_require__);
/******/ 			if(parentJsonpFunction) parentJsonpFunction(data);
/******/ 			while(resolves.length) {
/******/ 				resolves.shift()();
/******/ 			}
/******/ 		
/******/ 		};
/******/ 		
/******/ 		var jsonpArray = window["webpackJsonpproduct"] = window["webpackJsonpproduct"] || [];
/******/ 		var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 		jsonpArray.push = webpackJsonpCallback;
/******/ 		var parentJsonpFunction = oldJsonpFunction;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// module factories are used so entry inlining is disabled
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/index.js");
/******/ })()
;
//# sourceMappingURL=main.js.map