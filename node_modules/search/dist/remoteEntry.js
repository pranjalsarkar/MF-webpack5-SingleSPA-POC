var nav;nav =
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "webpack/container/entry/nav":
/*!***********************!*\
  !*** container entry ***!
  \***********************/
/*! unknown exports (runtime-defined) */
/*! exports [maybe provided (runtime-defined)] [maybe used (runtime-defined)] */
/*! runtime requirements: __webpack_require__.d, __webpack_require__.o, __webpack_exports__, __webpack_require__.e, __webpack_require__, __webpack_require__.* */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

var moduleMap = {
	"Header": () => {
		return Promise.all([__webpack_require__.e("webpack_container_overridable_react-dom_react-dom-webpack_container_overridable_react_react-w-e328a6"), __webpack_require__.e("src_header_js")]).then(() => () => __webpack_require__(/*! ./src/header */ "./src/header.js"));
	},
	"Footer": () => {
		return Promise.all([__webpack_require__.e("webpack_container_overridable_react-dom_react-dom-webpack_container_overridable_react_react-w-e328a6"), __webpack_require__.e("src_footer_js")]).then(() => () => __webpack_require__(/*! ./src/footer */ "./src/footer.js"));
	}
};
var get = (module) => {
	return (
		__webpack_require__.o(moduleMap, module)
			? moduleMap[module]()
			: Promise.resolve().then(() => {
				throw new Error('Module "' + module + '" does not exist in container.');
			})
	);
};
var override = (override) => {
	Object.assign(__webpack_require__.O, override);
};

// This exports getters to disallow modifications
__webpack_require__.d(exports, {
	get: () => get,
	override: () => override
});

/***/ }),

/***/ "webpack/container/reference/store":
/*!************************!*\
  !*** external "store" ***!
  \************************/
/*! unknown exports (runtime-defined) */
/*! exports [maybe provided (runtime-defined)] [maybe used (runtime-defined)] */
/*! runtime requirements: module */
/***/ ((module) => {

module.exports = store;

/***/ }),

/***/ "webpack/container/remote-overrides/bf6653":
/*!**************************************************************************************************!*\
  !*** remote overrides react = react, react-dom = react-dom, single-spa-react = single-spa-react ***!
  \**************************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! exports [maybe provided (runtime-defined)] [maybe used (runtime-defined)] */
/*! runtime requirements: module, __webpack_require__.e, __webpack_require__, __webpack_require__.* */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = (external) => {
	if(external.override) external.override(Object.assign({
		"react": () => {
			return __webpack_require__.e("webpack_container_overridable_react_react-_6e18").then(() => {
				return () => __webpack_require__(/*! react */ "webpack/container/overridable/react=react?6e18")
			})
		},
		"react-dom": () => {
			return __webpack_require__.e("webpack_container_overridable_react-dom_react-dom").then(() => {
				return () => __webpack_require__(/*! react-dom */ "webpack/container/overridable/react-dom=react-dom?492c")
			})
		},
		"single-spa-react": () => {
			return __webpack_require__.e("webpack_container_overridable_single-spa-react_single-spa-react").then(() => {
				return () => __webpack_require__(/*! single-spa-react */ "webpack/container/overridable/single-spa-react=single-spa-react?745b")
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
/******/ 			"webpack/container/overridable/react-dom=react-dom?8116": "react-dom",
/******/ 			"webpack/container/overridable/react=react?c4bc": "react",
/******/ 			"webpack/container/overridable/single-spa-react=single-spa-react?55d1": "single-spa-react",
/******/ 			"webpack/container/overridable/react=react?ad51": "react",
/******/ 			"webpack/container/overridable/react=react?6e18": "react",
/******/ 			"webpack/container/overridable/react-dom=react-dom?492c": "react-dom",
/******/ 			"webpack/container/overridable/single-spa-react=single-spa-react?745b": "single-spa-react"
/******/ 		};
/******/ 		// no overridables in initial chunks
/******/ 		var chunkMapping = {
/******/ 			"webpack_container_overridable_react-dom_react-dom-webpack_container_overridable_react_react-w-e328a6": [
/******/ 				"webpack/container/overridable/react-dom=react-dom?8116",
/******/ 				"webpack/container/overridable/react=react?c4bc",
/******/ 				"webpack/container/overridable/single-spa-react=single-spa-react?55d1"
/******/ 			],
/******/ 			"webpack_container_overridable_react_react-_ad51": [
/******/ 				"webpack/container/overridable/react=react?ad51"
/******/ 			],
/******/ 			"webpack_container_overridable_react_react-_6e18": [
/******/ 				"webpack/container/overridable/react=react?6e18"
/******/ 			],
/******/ 			"webpack_container_overridable_react-dom_react-dom": [
/******/ 				"webpack/container/overridable/react-dom=react-dom?492c"
/******/ 			],
/******/ 			"webpack_container_overridable_single-spa-react_single-spa-react": [
/******/ 				"webpack/container/overridable/single-spa-react=single-spa-react?745b"
/******/ 			]
/******/ 		};
/******/ 		var fallbackMapping = {
/******/ 			"webpack/container/overridable/react-dom=react-dom?8116": () => {
/******/ 				return Promise.all([__webpack_require__.e("vendors-node_modules_react-dom_index_js"), __webpack_require__.e("webpack_container_overridable_react_react-_ad51")]).then(() => () => __webpack_require__("../../node_modules/react-dom/index.js"));
/******/ 			},
/******/ 			"webpack/container/overridable/react=react?c4bc": () => {
/******/ 				return Promise.all([__webpack_require__.e("vendors-node_modules_react_index_js"), __webpack_require__.e("node_modules_object-assign_index_js-node_modules_prop-types_checkPropTypes_js")]).then(() => () => __webpack_require__("../../node_modules/react/index.js"));
/******/ 			},
/******/ 			"webpack/container/overridable/single-spa-react=single-spa-react?55d1": () => {
/******/ 				return __webpack_require__.e("node_modules_single-spa-react_lib_single-spa-react_js").then(() => () => __webpack_require__("../../node_modules/single-spa-react/lib/single-spa-react.js"));
/******/ 			},
/******/ 			"webpack/container/overridable/react=react?ad51": () => {
/******/ 				return __webpack_require__.e("vendors-node_modules_react_index_js").then(() => () => __webpack_require__("../../node_modules/react/index.js"));
/******/ 			},
/******/ 			"webpack/container/overridable/react=react?6e18": () => {
/******/ 				return Promise.all([__webpack_require__.e("vendors-node_modules_react_index_js"), __webpack_require__.e("node_modules_object-assign_index_js-node_modules_prop-types_checkPropTypes_js")]).then(() => () => __webpack_require__("../../node_modules/react/index.js"));
/******/ 			},
/******/ 			"webpack/container/overridable/react-dom=react-dom?492c": () => {
/******/ 				return Promise.all([__webpack_require__.e("vendors-node_modules_react-dom_index_js"), __webpack_require__.e("webpack_container_overridable_react_react-_ad51")]).then(() => () => __webpack_require__("../../node_modules/react-dom/index.js"));
/******/ 			},
/******/ 			"webpack/container/overridable/single-spa-react=single-spa-react?745b": () => {
/******/ 				return __webpack_require__.e("node_modules_single-spa-react_lib_single-spa-react_js").then(() => () => __webpack_require__("../../node_modules/single-spa-react/lib/single-spa-react.js"));
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
/******/ 		__webpack_require__.p = "http://localhost:3007/";
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/remotes loading */
/******/ 	(() => {
/******/ 		var installedModules = {};
/******/ 		var chunkMapping = {
/******/ 			"src_footer_js": [
/******/ 				"webpack/container/remote/store/store"
/******/ 			]
/******/ 		};
/******/ 		var idToExternalAndNameMapping = {
/******/ 			"webpack/container/remote/store/store": [
/******/ 				"webpack/container/remote-overrides/bf6653",
/******/ 				"webpack/container/reference/store",
/******/ 				"store"
/******/ 			]
/******/ 		};
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
/******/ 			"nav": 0
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
/******/ 						if(!/^webpack_container_overridable_(react(\-dom_react\-dom(|\-webpack_container_overridable_react_react\-w\-e328a6)|_react\-_(6e18|ad51))|single\-spa\-react_single\-spa\-react)$/.test(chunkId)) {
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
/******/ 		var jsonpArray = window["webpackJsonpsearch"] = window["webpackJsonpsearch"] || [];
/******/ 		var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 		jsonpArray.push = webpackJsonpCallback;
/******/ 		var parentJsonpFunction = oldJsonpFunction;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// module factories are used so entry inlining is disabled
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__("webpack/container/entry/nav");
/******/ })()
;
//# sourceMappingURL=remoteEntry.js.map