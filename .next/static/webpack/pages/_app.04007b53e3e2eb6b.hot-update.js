"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./hooks/useInitialState.tsx":
/*!***********************************!*\
  !*** ./hooks/useInitialState.tsx ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _initialState__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../initialState */ \"./initialState.js\");\n\n\nfunction _arrayLikeToArray(arr, len) {\n    if (len == null || len > arr.length) len = arr.length;\n    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];\n    return arr2;\n}\nfunction _arrayWithoutHoles(arr) {\n    if (Array.isArray(arr)) return _arrayLikeToArray(arr);\n}\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _iterableToArray(iter) {\n    if (typeof Symbol !== \"undefined\" && iter[Symbol.iterator] != null || iter[\"@@iterator\"] != null) return Array.from(iter);\n}\nfunction _nonIterableSpread() {\n    throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {};\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\nfunction _toConsumableArray(arr) {\n    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();\n}\nfunction _unsupportedIterableToArray(o, minLen) {\n    if (!o) return;\n    if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);\n    var n = Object.prototype.toString.call(o).slice(8, -1);\n    if (n === \"Object\" && o.constructor) n = o.constructor.name;\n    if (n === \"Map\" || n === \"Set\") return Array.from(n);\n    if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);\n}\nvar _s = $RefreshSig$();\nvar useInitialState = function() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(_initialState__WEBPACK_IMPORTED_MODULE_1__[\"default\"]), state = ref[0], setState = ref[1];\n    var addToCart = function(product, quantity) {\n        quantity = quantity ? quantity : 1;\n        if (state.cart.find(function(prod) {\n            return prod.id === product.id;\n        })) {\n            setState(_objectSpread({}, state, {\n                cart: state.cart.map(function(prod) {\n                    return prod.id === product.id ? _objectSpread({}, prod, {\n                        quantity: prod.quantity + quantity\n                    }) : prod;\n                })\n            }));\n        } else {\n            setState(_objectSpread({}, state, {\n                cart: _toConsumableArray(state.cart).concat([\n                    _objectSpread({}, product, {\n                        quantity: quantity\n                    })\n                ])\n            }));\n        }\n    // setState({\n    //     ...state,\n    //     cart: [...state.cart, product],\n    //     quantity:[...state.quantity, {\n    //         [product.id]: state.quantity[product.id] ? + 1 : 1\n    //     } ]\n    // })\n    // setState({\n    //     ...state,\n    //     cart: [...state.cart, product]\n    // })\n    };\n    var removeFromCart = function(product) {\n        setState(_objectSpread({}, state, {\n            cart: state.cart.filter(function(p) {\n                return p.id !== product.id;\n            })\n        }));\n    };\n    return {\n        state: state,\n        addToCart: addToCart,\n        removeFromCart: removeFromCart\n    };\n};\n_s(useInitialState, \"ivzlgorP4GeLgLCP2g2oo8lrHBQ=\");\n/* harmony default export */ __webpack_exports__[\"default\"] = (useInitialState);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ob29rcy91c2VJbml0aWFsU3RhdGUudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFDdUM7QUFDRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUMxQyxHQUFLLENBQUNHLGVBQWUsR0FBRyxRQUFRLEdBQUYsQ0FBQzs7SUFFL0IsR0FBSyxDQUFxQkYsR0FBc0IsR0FBdEJBLCtDQUFRLENBQUNDLHFEQUFZLEdBQXhDRSxLQUFLLEdBQWNILEdBQXNCLEtBQWxDSSxRQUFRLEdBQUlKLEdBQXNCO0lBS2hELEdBQUssQ0FBQ0ssU0FBUyxHQUFHLFFBQVEsQ0FBUEMsT0FBWSxFQUFFQyxRQUFRLEVBQU0sQ0FBQztRQUU1Q0EsUUFBUSxHQUFHQSxRQUFRLEdBQUdBLFFBQVEsR0FBRyxDQUFDO1FBQ2xDLEVBQUUsRUFBRUosS0FBSyxDQUFDSyxJQUFJLENBQUNDLElBQUksQ0FBQ0MsUUFBUUEsQ0FBUkEsSUFBSTtZQUFJQSxNQUFNLENBQU5BLElBQUksQ0FBQ0MsRUFBRSxLQUFLTCxPQUFPLENBQUNLLEVBQUU7WUFBRyxDQUFDO1lBQ2xEUCxRQUFRLG1CQUNERCxLQUFLO2dCQUNSSyxJQUFJLEVBQUVMLEtBQUssQ0FBQ0ssSUFBSSxDQUFDSSxHQUFHLENBQUNGLFFBQVFBLENBQVJBLElBQUk7b0JBQUlBLE1BQU0sQ0FBTkEsSUFBSSxDQUFDQyxFQUFFLEtBQUtMLE9BQU8sQ0FBQ0ssRUFBRSxxQkFBUUQsSUFBSTt3QkFBRUgsUUFBUSxFQUFFRyxJQUFJLENBQUNILFFBQVEsR0FBR0EsUUFBUTt5QkFBS0csSUFBSTs7O1FBRXBILENBQUMsTUFBSSxDQUFDO1lBQ0ZOLFFBQVEsbUJBQ0RELEtBQUs7Z0JBQ1JLLElBQUkscUJBQU1MLEtBQUssQ0FBQ0ssSUFBSSxTQUFkLENBQUM7c0NBQW9CRixPQUFPO3dCQUFFQyxRQUFRLEVBQUVBLFFBQVE7O2dCQUFFLENBQUM7O1FBRWpFLENBQUM7SUFDRyxFQUFhO0lBQ2IsRUFBZ0I7SUFDaEIsRUFBc0M7SUFDdEMsRUFBcUM7SUFFckMsRUFBNkQ7SUFDN0QsRUFBVTtJQUVWLEVBQUs7SUFHVCxFQUFhO0lBQ2IsRUFBZ0I7SUFDaEIsRUFBcUM7SUFDckMsRUFBSztJQUNULENBQUM7SUFFRCxHQUFLLENBQUNNLGNBQWMsR0FBRyxRQUFRLENBQVBQLE9BQVksRUFBSyxDQUFDO1FBQ3RDRixRQUFRLG1CQUNERCxLQUFLO1lBQ1JLLElBQUksRUFBRUwsS0FBSyxDQUFDSyxJQUFJLENBQUNNLE1BQU0sQ0FBQ0MsUUFBUSxDQUFSQSxDQUFDO2dCQUFJQSxNQUFNLENBQU5BLENBQUMsQ0FBQ0osRUFBRSxLQUFLTCxPQUFPLENBQUNLLEVBQUU7OztJQUV4RCxDQUFDO0lBR0QsTUFBTSxDQUFDLENBQUM7UUFDSlIsS0FBSyxFQUFMQSxLQUFLO1FBQ0xFLFNBQVMsRUFBVEEsU0FBUztRQUNUUSxjQUFjLEVBQWRBLGNBQWM7SUFFbEIsQ0FBQztBQUNELENBQUM7R0FwREtYLGVBQWU7QUFxRHJCLCtEQUFlQSxlQUFlLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vaG9va3MvdXNlSW5pdGlhbFN0YXRlLnRzeD81MDcxIl0sInNvdXJjZXNDb250ZW50IjpbIlxyXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBpbml0aWFsU3RhdGUgZnJvbSAnLi4vaW5pdGlhbFN0YXRlJztcclxuY29uc3QgdXNlSW5pdGlhbFN0YXRlID0gKCkgPT4geyBcclxuXHJcbmNvbnN0IFtzdGF0ZSwgc2V0U3RhdGVdID0gdXNlU3RhdGUoaW5pdGlhbFN0YXRlKTtcclxuXHJcblxyXG5cclxuXHJcbmNvbnN0IGFkZFRvQ2FydCA9IChwcm9kdWN0OiBhbnksIHF1YW50aXR5PykgPT4ge1xyXG5cclxuICAgIHF1YW50aXR5ID0gcXVhbnRpdHkgPyBxdWFudGl0eSA6IDE7XHJcbiAgICBpZiAoc3RhdGUuY2FydC5maW5kKHByb2QgPT4gcHJvZC5pZCA9PT0gcHJvZHVjdC5pZCkpIHtcclxuICAgICAgICBzZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICBjYXJ0OiBzdGF0ZS5jYXJ0Lm1hcChwcm9kID0+IHByb2QuaWQgPT09IHByb2R1Y3QuaWQgPyB7IC4uLnByb2QsIHF1YW50aXR5OiBwcm9kLnF1YW50aXR5ICsgcXVhbnRpdHkgfSA6IHByb2QpXHJcbiAgICAgICAgfSk7XHJcbiAgICB9ZWxzZXtcclxuICAgICAgICBzZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICBjYXJ0OiBbLi4uc3RhdGUuY2FydCwgeyAuLi5wcm9kdWN0LCBxdWFudGl0eTogcXVhbnRpdHkgfV1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgICAgICAvLyBzZXRTdGF0ZSh7XHJcbiAgICAgICAgLy8gICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIC8vICAgICBjYXJ0OiBbLi4uc3RhdGUuY2FydCwgcHJvZHVjdF0sXHJcbiAgICAgICAgLy8gICAgIHF1YW50aXR5OlsuLi5zdGF0ZS5xdWFudGl0eSwge1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgLy8gICAgICAgICBbcHJvZHVjdC5pZF06IHN0YXRlLnF1YW50aXR5W3Byb2R1Y3QuaWRdID8gKyAxIDogMVxyXG4gICAgICAgIC8vICAgICB9IF1cclxuXHJcbiAgICAgICAgLy8gfSlcclxuICAgIFxyXG5cclxuICAgIC8vIHNldFN0YXRlKHtcclxuICAgIC8vICAgICAuLi5zdGF0ZSxcclxuICAgIC8vICAgICBjYXJ0OiBbLi4uc3RhdGUuY2FydCwgcHJvZHVjdF1cclxuICAgIC8vIH0pXHJcbn1cclxuXHJcbmNvbnN0IHJlbW92ZUZyb21DYXJ0ID0gKHByb2R1Y3Q6IGFueSkgPT4ge1xyXG4gICAgc2V0U3RhdGUoe1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIGNhcnQ6IHN0YXRlLmNhcnQuZmlsdGVyKHAgPT4gcC5pZCAhPT0gcHJvZHVjdC5pZClcclxuICAgIH0pXHJcbn1cclxuXHJcblxyXG5yZXR1cm4ge1xyXG4gICAgc3RhdGUsXHJcbiAgICBhZGRUb0NhcnQsXHJcbiAgICByZW1vdmVGcm9tQ2FydFxyXG5cclxufVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IHVzZUluaXRpYWxTdGF0ZTsiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsImluaXRpYWxTdGF0ZSIsInVzZUluaXRpYWxTdGF0ZSIsInN0YXRlIiwic2V0U3RhdGUiLCJhZGRUb0NhcnQiLCJwcm9kdWN0IiwicXVhbnRpdHkiLCJjYXJ0IiwiZmluZCIsInByb2QiLCJpZCIsIm1hcCIsInJlbW92ZUZyb21DYXJ0IiwiZmlsdGVyIiwicCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./hooks/useInitialState.tsx\n");

/***/ })

});