/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([["pages/index"],{

/***/ "./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F&absolutePagePath=F%3A%5CPlatzi%5Cnext-js%5Cpages%5Cindex.tsx!":
/*!*********************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F&absolutePagePath=F%3A%5CPlatzi%5Cnext-js%5Cpages%5Cindex.tsx! ***!
  \*********************************************************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("\n    (window.__NEXT_P = window.__NEXT_P || []).push([\n      \"/\",\n      function () {\n        return __webpack_require__(/*! ./pages/index.tsx */ \"./pages/index.tsx\");\n      }\n    ]);\n    if(true) {\n      module.hot.dispose(function () {\n        window.__NEXT_P.push([\"/\"])\n      });\n    }\n  //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWNsaWVudC1wYWdlcy1sb2FkZXIuanM/cGFnZT0lMkYmYWJzb2x1dGVQYWdlUGF0aD1GJTNBJTVDUGxhdHppJTVDbmV4dC1qcyU1Q3BhZ2VzJTVDaW5kZXgudHN4IS5qcyIsIm1hcHBpbmdzIjoiO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxtQkFBTyxDQUFDLDRDQUFtQjtBQUMxQztBQUNBO0FBQ0EsT0FBTyxJQUFVO0FBQ2pCLE1BQU0sVUFBVTtBQUNoQjtBQUNBLE9BQU87QUFDUDtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8/NjQ5OCJdLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgICAod2luZG93Ll9fTkVYVF9QID0gd2luZG93Ll9fTkVYVF9QIHx8IFtdKS5wdXNoKFtcbiAgICAgIFwiL1wiLFxuICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gcmVxdWlyZShcIi4vcGFnZXMvaW5kZXgudHN4XCIpO1xuICAgICAgfVxuICAgIF0pO1xuICAgIGlmKG1vZHVsZS5ob3QpIHtcbiAgICAgIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbiAoKSB7XG4gICAgICAgIHdpbmRvdy5fX05FWFRfUC5wdXNoKFtcIi9cIl0pXG4gICAgICB9KTtcbiAgICB9XG4gICJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F&absolutePagePath=F%3A%5CPlatzi%5Cnext-js%5Cpages%5Cindex.tsx!\n");

/***/ }),

/***/ "./components/avocadoItem/avocadoItem.tsx":
/*!************************************************!*\
  !*** ./components/avocadoItem/avocadoItem.tsx ***!
  \************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var context_AppContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! context/AppContext */ \"./context/AppContext.js\");\n\n\n\n\n\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar AvocadoItem = function(param) {\n    var productList = param.productList;\n    var _this1 = _this;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_3__.useContext)(context_AppContext__WEBPACK_IMPORTED_MODULE_4__.AppContext), addToCart = ref.addToCart, removeFromCart = ref.removeFromCart, state = ref.state;\n    var handdledAddToCart = function(product) {\n        return function() {\n            addToCart(product);\n        //console.log(state);\n        };\n    };\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"row\",\n        children: productList.map(function(product) {\n            /*#__PURE__*/ return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"col-md-4 cursor-pointer my-3\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"card text-center\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                            href: \"/product/[id]\",\n                            as: \"/product/\".concat(product.id),\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                src: product.image,\n                                alt: product.name,\n                                width: 200,\n                                height: 200,\n                                quality: 85\n                            }, void 0, false, {\n                                fileName: \"F:\\\\Platzi\\\\next-js\\\\components\\\\avocadoItem\\\\avocadoItem.tsx\",\n                                lineNumber: 25,\n                                columnNumber: 25\n                            }, _this1)\n                        }, product.id, false, {\n                            fileName: \"F:\\\\Platzi\\\\next-js\\\\components\\\\avocadoItem\\\\avocadoItem.tsx\",\n                            lineNumber: 24,\n                            columnNumber: 21\n                        }, _this1),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"card-body\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                    children: product.name\n                                }, void 0, false, {\n                                    fileName: \"F:\\\\Platzi\\\\next-js\\\\components\\\\avocadoItem\\\\avocadoItem.tsx\",\n                                    lineNumber: 28,\n                                    columnNumber: 25\n                                }, _this1),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"muted\",\n                                    children: product.price\n                                }, void 0, false, {\n                                    fileName: \"F:\\\\Platzi\\\\next-js\\\\components\\\\avocadoItem\\\\avocadoItem.tsx\",\n                                    lineNumber: 29,\n                                    columnNumber: 25\n                                }, _this1),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"text-truncate\",\n                                    children: product['attributes'].description\n                                }, void 0, false, {\n                                    fileName: \"F:\\\\Platzi\\\\next-js\\\\components\\\\avocadoItem\\\\avocadoItem.tsx\",\n                                    lineNumber: 30,\n                                    columnNumber: 25\n                                }, _this1)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"F:\\\\Platzi\\\\next-js\\\\components\\\\avocadoItem\\\\avocadoItem.tsx\",\n                            lineNumber: 27,\n                            columnNumber: 25\n                        }, _this1),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"card-footer\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                className: \"btn\",\n                                onClick: handdledAddToCart(product),\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                    src: \"https://erickperez.dev/wp-content/uploads/2022/03/basket.png\",\n                                    alt: \"\"\n                                }, void 0, false, {\n                                    fileName: \"F:\\\\Platzi\\\\next-js\\\\components\\\\avocadoItem\\\\avocadoItem.tsx\",\n                                    lineNumber: 34,\n                                    columnNumber: 33\n                                }, _this1)\n                            }, void 0, false, {\n                                fileName: \"F:\\\\Platzi\\\\next-js\\\\components\\\\avocadoItem\\\\avocadoItem.tsx\",\n                                lineNumber: 33,\n                                columnNumber: 29\n                            }, _this1)\n                        }, void 0, false, {\n                            fileName: \"F:\\\\Platzi\\\\next-js\\\\components\\\\avocadoItem\\\\avocadoItem.tsx\",\n                            lineNumber: 32,\n                            columnNumber: 25\n                        }, _this1)\n                    ]\n                }, void 0, true, {\n                    fileName: \"F:\\\\Platzi\\\\next-js\\\\components\\\\avocadoItem\\\\avocadoItem.tsx\",\n                    lineNumber: 23,\n                    columnNumber: 21\n                }, _this1)\n            }, product.id, false, {\n                fileName: \"F:\\\\Platzi\\\\next-js\\\\components\\\\avocadoItem\\\\avocadoItem.tsx\",\n                lineNumber: 21,\n                columnNumber: 21\n            }, _this1);\n        })\n    }, void 0, false, {\n        fileName: \"F:\\\\Platzi\\\\next-js\\\\components\\\\avocadoItem\\\\avocadoItem.tsx\",\n        lineNumber: 16,\n        columnNumber: 9\n    }, _this));\n};\n_s(AvocadoItem, \"rmQkVW7MmONh4Y2iSjqN1W/pTms=\");\n_c = AvocadoItem;\n/* harmony default export */ __webpack_exports__[\"default\"] = (AvocadoItem);\nvar _c;\n$RefreshReg$(_c, \"AvocadoItem\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2F2b2NhZG9JdGVtL2F2b2NhZG9JdGVtLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUE4QjtBQUNGO0FBQ2E7QUFDSzs7O0FBRTlDLEdBQUssQ0FBQ0ssV0FBVyxHQUFHLFFBQVEsUUFBVyxDQUFDO1FBQWxCQyxXQUFXLFNBQVhBLFdBQVc7OztJQUU3QixHQUFLLENBQXdDSCxHQUFzQixHQUF0QkEsaURBQVUsQ0FBQ0MsMERBQVUsR0FBMURHLFNBQVMsR0FBNEJKLEdBQXNCLENBQTNESSxTQUFTLEVBQUVDLGNBQWMsR0FBWUwsR0FBc0IsQ0FBaERLLGNBQWMsRUFBRUMsS0FBSyxHQUFLTixHQUFzQixDQUFoQ00sS0FBSztJQUV4QyxHQUFLLENBQUNDLGlCQUFpQixHQUFHLFFBQVEsQ0FBUEMsT0FBTztRQUFJLE1BQU0sQ0FBTixRQUMxQyxHQUQrQyxDQUFDO1lBQ3hDSixTQUFTLENBQUNJLE9BQU87UUFDakIsRUFBcUI7UUFDekIsQ0FBQzs7SUFFRCxNQUFNLDZFQUNEQyxDQUFHO1FBQUNDLFNBQVMsRUFBQyxDQUFLO2tCQUVoQlAsV0FBVyxDQUFDUSxHQUFHLENBQUMsUUFBUSxDQUFQSCxPQUFPOzBCQUdoQixNQUFNLCtEQUFMQyxDQUFHO2dCQUFDQyxTQUFTLEVBQUMsQ0FBOEI7c0dBRTVDRCxDQUFHO29CQUFDQyxTQUFTLEVBQUMsQ0FBa0I7O29HQUNoQ1osa0RBQUk7NEJBQWtCYyxJQUFJLEVBQUMsQ0FBZTs0QkFBQ0MsRUFBRSxFQUFHLENBQVMsV0FBYSxPQUFYTCxPQUFPLENBQUNNLEVBQUU7a0hBQ2pFakIsbURBQUs7Z0NBQUNrQixHQUFHLEVBQUVQLE9BQU8sQ0FBQ1EsS0FBSztnQ0FBRUMsR0FBRyxFQUFFVCxPQUFPLENBQUNVLElBQUk7Z0NBQUVDLEtBQUssRUFBRSxHQUFHO2dDQUFFQyxNQUFNLEVBQUUsR0FBRztnQ0FBRUMsT0FBTyxFQUFFLEVBQUU7Ozs7OzsyQkFEM0ViLE9BQU8sQ0FBQ00sRUFBRTs7Ozs7b0dBR2hCTCxDQUFHOzRCQUFDQyxTQUFTLEVBQUMsQ0FBVzs7NEdBQ3pCWSxDQUFFOzhDQUFFZCxPQUFPLENBQUNVLElBQUk7Ozs7Ozs0R0FDaEJLLENBQUM7b0NBQUNiLFNBQVMsRUFBQyxDQUFPOzhDQUFFRixPQUFPLENBQUNnQixLQUFLOzs7Ozs7NEdBQ2xDRCxDQUFDO29DQUFDYixTQUFTLEVBQUMsQ0FBZTs4Q0FBRUYsT0FBTyxDQUFDLENBQVksYUFBRWlCLFdBQVc7Ozs7Ozs7Ozs7OztvR0FFOURoQixDQUFHOzRCQUFDQyxTQUFTLEVBQUMsQ0FBYTtrSEFDdkJnQixDQUFNO2dDQUFDaEIsU0FBUyxFQUFDLENBQUs7Z0NBQUNpQixPQUFPLEVBQUdwQixpQkFBaUIsQ0FBQ0MsT0FBTztzSEFDdERvQixDQUFHO29DQUFDYixHQUFHLEVBQUMsQ0FBOEQ7b0NBQUNFLEdBQUcsRUFBQyxDQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2VBYnZDVCxPQUFPLENBQUNNLEVBQUU7Ozs7Ozs7Ozs7O0FBK0JqRixDQUFDO0dBOUNLWixXQUFXO0tBQVhBLFdBQVc7QUFnRGpCLCtEQUFlQSxXQUFXLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9hdm9jYWRvSXRlbS9hdm9jYWRvSXRlbS50c3g/OWQ1NSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCBSZWFjdCwgeyB1c2VDb250ZXh0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQge0FwcENvbnRleHQgfSBmcm9tICdjb250ZXh0L0FwcENvbnRleHQnO1xyXG5cclxuY29uc3QgQXZvY2Fkb0l0ZW0gPSAoe3Byb2R1Y3RMaXN0fSkgPT4ge1xyXG5cclxuICAgIGNvbnN0IHsgYWRkVG9DYXJ0LCByZW1vdmVGcm9tQ2FydCwgc3RhdGUgfSA9IHVzZUNvbnRleHQoQXBwQ29udGV4dCk7XHJcblxyXG4gICAgY29uc3QgaGFuZGRsZWRBZGRUb0NhcnQgPSAocHJvZHVjdCkgPT4oKT0+IHtcclxuICAgICAgICBhZGRUb0NhcnQocHJvZHVjdCk7XHJcbiAgICAgICAgLy9jb25zb2xlLmxvZyhzdGF0ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgIHByb2R1Y3RMaXN0Lm1hcCgocHJvZHVjdCkgPT4gKFxyXG4gICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC00IGN1cnNvci1wb2ludGVyIG15LTNcIiBrZXk9e3Byb2R1Y3QuaWR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NhcmQgdGV4dC1jZW50ZXInPlxyXG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGtleT17cHJvZHVjdC5pZH0gaHJlZj1cIi9wcm9kdWN0L1tpZF1cIiBhcz17YC9wcm9kdWN0LyR7cHJvZHVjdC5pZH1gfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlIHNyYz17cHJvZHVjdC5pbWFnZX0gYWx0PXtwcm9kdWN0Lm5hbWV9IHdpZHRoPXsyMDB9IGhlaWdodD17MjAwfSBxdWFsaXR5PXs4NX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY2FyZC1ib2R5Jz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGgzPntwcm9kdWN0Lm5hbWV9PC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPSdtdXRlZCc+e3Byb2R1Y3QucHJpY2V9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9J3RleHQtdHJ1bmNhdGUnPntwcm9kdWN0WydhdHRyaWJ1dGVzJ10uZGVzY3JpcHRpb259PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWZvb3RlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9J2J0bicgb25DbGljaz17IGhhbmRkbGVkQWRkVG9DYXJ0KHByb2R1Y3QpIH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCJodHRwczovL2VyaWNrcGVyZXouZGV2L3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDIyLzAzL2Jhc2tldC5wbmdcIiBhbHQ9XCJcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBcclxuXHJcbiAgICAgICAgICAgICkpXHJcbiAgICAgICAgfSBcclxuXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBdm9jYWRvSXRlbTsiXSwibmFtZXMiOlsiSW1hZ2UiLCJMaW5rIiwiUmVhY3QiLCJ1c2VDb250ZXh0IiwiQXBwQ29udGV4dCIsIkF2b2NhZG9JdGVtIiwicHJvZHVjdExpc3QiLCJhZGRUb0NhcnQiLCJyZW1vdmVGcm9tQ2FydCIsInN0YXRlIiwiaGFuZGRsZWRBZGRUb0NhcnQiLCJwcm9kdWN0IiwiZGl2IiwiY2xhc3NOYW1lIiwibWFwIiwiaHJlZiIsImFzIiwiaWQiLCJzcmMiLCJpbWFnZSIsImFsdCIsIm5hbWUiLCJ3aWR0aCIsImhlaWdodCIsInF1YWxpdHkiLCJoMyIsInAiLCJwcmljZSIsImRlc2NyaXB0aW9uIiwiYnV0dG9uIiwib25DbGljayIsImltZyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/avocadoItem/avocadoItem.tsx\n");

/***/ }),

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_avocadoItem_avocadoItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @components/avocadoItem/avocadoItem */ \"./components/avocadoItem/avocadoItem.tsx\");\n\n\n\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar index = function() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), productList = ref[0], setproductList = ref[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        window.fetch('/api/avo').then(function(res) {\n            return res.json();\n        }).then(function(param) {\n            var data = param.data, length = param.length;\n            setproductList(data);\n            console.log(data);\n        });\n    }, []);\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"p-lg-5 p-3\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"text-center\",\n                children: \"Bienvenido(a) a los aguacates\"\n            }, void 0, false, {\n                fileName: \"F:\\\\Platzi\\\\next-js\\\\pages\\\\index.tsx\",\n                lineNumber: 21,\n                columnNumber: 13\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"container\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"row\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"col-12\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_avocadoItem_avocadoItem__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                            productList: productList\n                        }, void 0, false, {\n                            fileName: \"F:\\\\Platzi\\\\next-js\\\\pages\\\\index.tsx\",\n                            lineNumber: 26,\n                            columnNumber: 17\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"F:\\\\Platzi\\\\next-js\\\\pages\\\\index.tsx\",\n                        lineNumber: 24,\n                        columnNumber: 21\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"F:\\\\Platzi\\\\next-js\\\\pages\\\\index.tsx\",\n                    lineNumber: 23,\n                    columnNumber: 17\n                }, _this)\n            }, void 0, false, {\n                fileName: \"F:\\\\Platzi\\\\next-js\\\\pages\\\\index.tsx\",\n                lineNumber: 22,\n                columnNumber: 13\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"F:\\\\Platzi\\\\next-js\\\\pages\\\\index.tsx\",\n        lineNumber: 20,\n        columnNumber: 9\n    }, _this));\n};\n_s(index, \"0R7l53CiwQu7ziyMeHtgYF+Ya+E=\");\n/* harmony default export */ __webpack_exports__[\"default\"] = (index);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFnRDtBQUlhOzs7QUFFN0QsR0FBSyxDQUFDSSxLQUFLLEdBQUcsUUFBUSxHQUFGLENBQUM7O0lBRWpCLEdBQUssQ0FBaUNGLEdBQXdCLEdBQXhCQSwrQ0FBUSxDQUFhLENBQUMsQ0FBQyxHQUF0REcsV0FBVyxHQUFvQkgsR0FBd0IsS0FBMUNJLGNBQWMsR0FBSUosR0FBd0I7SUFFOURELGdEQUFTLENBQUMsUUFBUSxHQUFGLENBQUM7UUFDYk0sTUFBTSxDQUFDQyxLQUFLLENBQUMsQ0FBVSxXQUNsQkMsSUFBSSxDQUFDQyxRQUFRLENBQVJBLEdBQUc7WUFBSUEsTUFBTSxDQUFOQSxHQUFHLENBQUNDLElBQUk7V0FDcEJGLElBQUksQ0FBQyxRQUFRRyxRQUFZLENBQUM7Z0JBQW5CQyxJQUFJLFNBQUpBLElBQUksRUFBRUQsTUFBTSxTQUFOQSxNQUFNO1lBQ2hCTixjQUFjLENBQUNPLElBQUk7WUFDbEJDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDRixJQUFJO1FBQ3JCLENBQUM7SUFDVCxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ0wsTUFBTSw2RUFDREcsQ0FBRztRQUFDQyxTQUFTLEVBQUMsQ0FBWTs7d0ZBQ3RCQyxDQUFFO2dCQUFDRCxTQUFTLEVBQUMsQ0FBYTswQkFBQyxDQUE2Qjs7Ozs7O3dGQUN4REQsQ0FBRztnQkFBQ0MsU0FBUyxFQUFDLENBQVc7c0dBQ3JCRCxDQUFHO29CQUFDQyxTQUFTLEVBQUMsQ0FBSzswR0FDZkQsQ0FBRzt3QkFBQ0MsU0FBUyxFQUFDLENBQVE7OEdBRTFCZCwyRUFBVzs0QkFBQ0UsV0FBVyxFQUFFQSxXQUFXOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFRckQsQ0FBQztHQTNCS0QsS0FBSztBQTZCWCwrREFBZUEsS0FBSyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LnRzeD8wN2ZmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZUVmZmVjdCwgdXNlU3RhdGV9IGZyb20gJ3JlYWN0JztcclxuXHJcblxyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL2luZGV4Lm1vZHVsZS5jc3NcIjtcclxuaW1wb3J0IEF2b2NhZG9JdGVtIGZyb20gJ0Bjb21wb25lbnRzL2F2b2NhZG9JdGVtL2F2b2NhZG9JdGVtJztcclxuXHJcbmNvbnN0IGluZGV4ID0gKCkgPT4ge1xyXG5cclxuICAgIGNvbnN0IFtwcm9kdWN0TGlzdCwgc2V0cHJvZHVjdExpc3RdID0gdXNlU3RhdGU8VFByb2R1Y3RbXT4oW10pO1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgd2luZG93LmZldGNoKCcvYXBpL2F2bycpXHJcbiAgICAgICAgICAgIC50aGVuKHJlcyA9PiByZXMuanNvbigpKVxyXG4gICAgICAgICAgICAudGhlbigoe2RhdGEsIGxlbmd0aH0pID0+IHtcclxuICAgICAgICAgICAgICAgIHNldHByb2R1Y3RMaXN0KGRhdGEpO1xyXG4gICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgfSwgW10pO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncC1sZy01IHAtMyc+XHJcbiAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9J3RleHQtY2VudGVyJz5CaWVudmVuaWRvKGEpIGEgbG9zIGFndWFjYXRlczwvaDE+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyXCI+XHJcblxyXG4gICAgICAgICAgICAgICAgPEF2b2NhZG9JdGVtIHByb2R1Y3RMaXN0PXtwcm9kdWN0TGlzdH0gLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PiAgIFxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgaW5kZXg7Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJBdm9jYWRvSXRlbSIsImluZGV4IiwicHJvZHVjdExpc3QiLCJzZXRwcm9kdWN0TGlzdCIsIndpbmRvdyIsImZldGNoIiwidGhlbiIsInJlcyIsImpzb24iLCJsZW5ndGgiLCJkYXRhIiwiY29uc29sZSIsImxvZyIsImRpdiIsImNsYXNzTmFtZSIsImgxIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["pages/_app","main"], function() { return __webpack_exec__("./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F&absolutePagePath=F%3A%5CPlatzi%5Cnext-js%5Cpages%5Cindex.tsx!"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ _N_E = __webpack_exports__;
/******/ }
]);