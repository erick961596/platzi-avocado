"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/random",{

/***/ "./pages/random.tsx":
/*!**************************!*\
  !*** ./pages/random.tsx ***!
  \**************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_avocadoItem_avocadoItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @components/avocadoItem/avocadoItem */ \"./components/avocadoItem/avocadoItem.tsx\");\n\n\n\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar random = function() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), productList = ref[0], setproductList = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(2), inputRandomQuantity = ref1[0], setInputRandomQuantity = ref1[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        fetch('/api/avo/getCompareTwoProducts?quantity=' + inputRandomQuantity).then(function(res) {\n            return res.json();\n        }).then(function(param) {\n            var data = param.data, length = param.length;\n            setproductList(data);\n            console.log(data);\n        });\n    }, [\n        inputRandomQuantity\n    ]);\n    var handdledRandom = function() {\n        fetch('/api/avo/getCompareTwoProducts?quantity=' + inputRandomQuantity).then(function(res) {\n            return res.json();\n        }).then(function(param) {\n            var data = param.data, length = param.length;\n            setproductList(data);\n            console.log(data);\n        });\n    };\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"p-lg-5 p-3\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"text-center\",\n                children: \"Compara los aguacates\"\n            }, void 0, false, {\n                fileName: \"F:\\\\Platzi\\\\next-js\\\\pages\\\\random.tsx\",\n                lineNumber: 29,\n                columnNumber: 13\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"small\", {\n                className: \"text-center\",\n                children: \"\\xbfCu\\xe1ntos aguacates quieres comparar?\"\n            }, void 0, false, {\n                fileName: \"F:\\\\Platzi\\\\next-js\\\\pages\\\\random.tsx\",\n                lineNumber: 30,\n                columnNumber: 13\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"number\",\n                className: \"form-control\",\n                value: inputRandomQuantity,\n                min: \"1\",\n                max: \"3\",\n                onChange: function(event) {\n                    return setInputRandomQuantity(event.target.value);\n                }\n            }, void 0, false, {\n                fileName: \"F:\\\\Platzi\\\\next-js\\\\pages\\\\random.tsx\",\n                lineNumber: 31,\n                columnNumber: 13\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: \"btn btn-success\",\n                onClick: handdledRandom,\n                children: \"Rand\"\n            }, void 0, false, {\n                fileName: \"F:\\\\Platzi\\\\next-js\\\\pages\\\\random.tsx\",\n                lineNumber: 32,\n                columnNumber: 13\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"container\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"row\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"col-12\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_avocadoItem_avocadoItem__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                            productList: productList\n                        }, void 0, false, {\n                            fileName: \"F:\\\\Platzi\\\\next-js\\\\pages\\\\random.tsx\",\n                            lineNumber: 37,\n                            columnNumber: 17\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"F:\\\\Platzi\\\\next-js\\\\pages\\\\random.tsx\",\n                        lineNumber: 35,\n                        columnNumber: 21\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"F:\\\\Platzi\\\\next-js\\\\pages\\\\random.tsx\",\n                    lineNumber: 34,\n                    columnNumber: 17\n                }, _this)\n            }, void 0, false, {\n                fileName: \"F:\\\\Platzi\\\\next-js\\\\pages\\\\random.tsx\",\n                lineNumber: 33,\n                columnNumber: 13\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"F:\\\\Platzi\\\\next-js\\\\pages\\\\random.tsx\",\n        lineNumber: 28,\n        columnNumber: 9\n    }, _this));\n};\n_s(random, \"+IJjhbrfQDBFr3redUnP1WdgFBE=\");\n/* harmony default export */ __webpack_exports__[\"default\"] = (random);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9yYW5kb20udHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBa0Q7QUFDVzs7O0FBQzdELEdBQUssQ0FBQ0ksTUFBTSxHQUFHLFFBQVEsR0FBRixDQUFDOztJQUVsQixHQUFLLENBQWlDRixHQUF3QixHQUF4QkEsK0NBQVEsQ0FBYSxDQUFDLENBQUMsR0FBdERHLFdBQVcsR0FBb0JILEdBQXdCLEtBQTFDSSxjQUFjLEdBQUlKLEdBQXdCO0lBQzlELEdBQUssQ0FBa0RBLElBQW1CLEdBQW5CQSwrQ0FBUSxDQUFTLENBQUMsR0FBbEVLLG1CQUFtQixHQUE2QkwsSUFBbUIsS0FBN0NNLHNCQUFzQixHQUFJTixJQUFtQjtJQUUxRUQsZ0RBQVMsQ0FBQyxRQUFRLEdBQUYsQ0FBQztRQUNiUSxLQUFLLENBQUMsQ0FBMEMsNENBQUNGLG1CQUFtQixFQUMvREcsSUFBSSxDQUFDQyxRQUFRLENBQVJBLEdBQUc7WUFBSUEsTUFBTSxDQUFOQSxHQUFHLENBQUNDLElBQUk7V0FDcEJGLElBQUksQ0FBQyxRQUFRRyxRQUFZLENBQUM7Z0JBQW5CQyxJQUFJLFNBQUpBLElBQUksRUFBRUQsTUFBTSxTQUFOQSxNQUFNO1lBQ2hCUCxjQUFjLENBQUNRLElBQUk7WUFDbEJDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDRixJQUFJO1FBQ3JCLENBQUM7SUFDVCxDQUFDLEVBQUUsQ0FBQ1A7UUFBQUEsbUJBQW1CO0lBQUEsQ0FBQztJQUV4QixHQUFLLENBQUNVLGNBQWMsR0FBRSxRQUMxQixHQUQrQixDQUFDO1FBQ3hCUixLQUFLLENBQUMsQ0FBMEMsNENBQUNGLG1CQUFtQixFQUMvREcsSUFBSSxDQUFDQyxRQUFRLENBQVJBLEdBQUc7WUFBSUEsTUFBTSxDQUFOQSxHQUFHLENBQUNDLElBQUk7V0FDcEJGLElBQUksQ0FBQyxRQUFRRyxRQUFZLENBQUM7Z0JBQW5CQyxJQUFJLFNBQUpBLElBQUksRUFBRUQsTUFBTSxTQUFOQSxNQUFNO1lBQ2hCUCxjQUFjLENBQUNRLElBQUk7WUFDbEJDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDRixJQUFJO1FBQ3JCLENBQUM7SUFDVCxDQUFDO0lBR0QsTUFBTSw2RUFDREksQ0FBRztRQUFDQyxTQUFTLEVBQUMsQ0FBWTs7d0ZBQ3RCQyxDQUFFO2dCQUFDRCxTQUFTLEVBQUMsQ0FBYTswQkFBQyxDQUFxQjs7Ozs7O3dGQUNoREUsQ0FBSztnQkFBQ0YsU0FBUyxFQUFDLENBQWE7MEJBQUMsQ0FBb0M7Ozs7Ozt3RkFDbEVHLENBQUs7Z0JBQUNDLElBQUksRUFBQyxDQUFRO2dCQUFDSixTQUFTLEVBQUMsQ0FBYztnQkFBQ0ssS0FBSyxFQUFFakIsbUJBQW1CO2dCQUFFa0IsR0FBRyxFQUFDLENBQUc7Z0JBQUNDLEdBQUcsRUFBQyxDQUFHO2dCQUFDQyxRQUFRLEVBQUdDLFFBQVEsQ0FBUkEsS0FBSztvQkFBSXBCLE1BQU0sQ0FBTkEsc0JBQXNCLENBQUNvQixLQUFLLENBQUNDLE1BQU0sQ0FBQ0wsS0FBSzs7Ozs7Ozt3RkFDdEpNLENBQU07Z0JBQUNYLFNBQVMsRUFBQyxDQUFpQjtnQkFBQ1ksT0FBTyxFQUFFZCxjQUFjOzBCQUFHLENBQUk7Ozs7Ozt3RkFDakVDLENBQUc7Z0JBQUNDLFNBQVMsRUFBQyxDQUFXO3NHQUNyQkQsQ0FBRztvQkFBQ0MsU0FBUyxFQUFDLENBQUs7MEdBQ2ZELENBQUc7d0JBQUNDLFNBQVMsRUFBQyxDQUFROzhHQUUxQmhCLDJFQUFXOzRCQUFDRSxXQUFXLEVBQUVBLFdBQVc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVFyRCxDQUFDO0dBMUNLRCxNQUFNO0FBNENaLCtEQUFlQSxNQUFNLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcmFuZG9tLnRzeD80ZjhlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgQXZvY2Fkb0l0ZW0gZnJvbSAnQGNvbXBvbmVudHMvYXZvY2Fkb0l0ZW0vYXZvY2Fkb0l0ZW0nO1xyXG5jb25zdCByYW5kb20gPSAoKSA9PiB7XHJcblxyXG4gICAgY29uc3QgW3Byb2R1Y3RMaXN0LCBzZXRwcm9kdWN0TGlzdF0gPSB1c2VTdGF0ZTxUUHJvZHVjdFtdPihbXSk7XHJcbiAgICBjb25zdCBbaW5wdXRSYW5kb21RdWFudGl0eSAsIHNldElucHV0UmFuZG9tUXVhbnRpdHldID0gdXNlU3RhdGU8bnVtYmVyPigyKTtcclxuICAgIFxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBmZXRjaCgnL2FwaS9hdm8vZ2V0Q29tcGFyZVR3b1Byb2R1Y3RzP3F1YW50aXR5PScraW5wdXRSYW5kb21RdWFudGl0eSlcclxuICAgICAgICAgICAgLnRoZW4ocmVzID0+IHJlcy5qc29uKCkpXHJcbiAgICAgICAgICAgIC50aGVuKCh7ZGF0YSwgbGVuZ3RofSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgc2V0cHJvZHVjdExpc3QoZGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICB9LCBbaW5wdXRSYW5kb21RdWFudGl0eV0pO1xyXG5cclxuICAgIGNvbnN0IGhhbmRkbGVkUmFuZG9tID0oKSA9PntcclxuICAgICAgICBmZXRjaCgnL2FwaS9hdm8vZ2V0Q29tcGFyZVR3b1Byb2R1Y3RzP3F1YW50aXR5PScraW5wdXRSYW5kb21RdWFudGl0eSlcclxuICAgICAgICAgICAgLnRoZW4ocmVzID0+IHJlcy5qc29uKCkpXHJcbiAgICAgICAgICAgIC50aGVuKCh7ZGF0YSwgbGVuZ3RofSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgc2V0cHJvZHVjdExpc3QoZGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J3AtbGctNSBwLTMnPlxyXG4gICAgICAgICAgICA8aDEgY2xhc3NOYW1lPSd0ZXh0LWNlbnRlcic+Q29tcGFyYSBsb3MgYWd1YWNhdGVzPC9oMT5cclxuICAgICAgICAgICAgPHNtYWxsIGNsYXNzTmFtZT0ndGV4dC1jZW50ZXInPsK/Q3XDoW50b3MgYWd1YWNhdGVzIHF1aWVyZXMgY29tcGFyYXI/PC9zbWFsbD5cclxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJudW1iZXJcIiBjbGFzc05hbWU9J2Zvcm0tY29udHJvbCcgdmFsdWU9e2lucHV0UmFuZG9tUXVhbnRpdHl9IG1pbj1cIjFcIiBtYXg9XCIzXCIgb25DaGFuZ2U9eyBldmVudCA9PiBzZXRJbnB1dFJhbmRvbVF1YW50aXR5KGV2ZW50LnRhcmdldC52YWx1ZSApfSAvPiBcclxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9J2J0biBidG4tc3VjY2Vzcycgb25DbGljaz17aGFuZGRsZWRSYW5kb219ID5SYW5kPC9idXR0b24+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyXCI+XHJcblxyXG4gICAgICAgICAgICAgICAgPEF2b2NhZG9JdGVtIHByb2R1Y3RMaXN0PXtwcm9kdWN0TGlzdH0gLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PiAgIFxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgcmFuZG9tOyJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiQXZvY2Fkb0l0ZW0iLCJyYW5kb20iLCJwcm9kdWN0TGlzdCIsInNldHByb2R1Y3RMaXN0IiwiaW5wdXRSYW5kb21RdWFudGl0eSIsInNldElucHV0UmFuZG9tUXVhbnRpdHkiLCJmZXRjaCIsInRoZW4iLCJyZXMiLCJqc29uIiwibGVuZ3RoIiwiZGF0YSIsImNvbnNvbGUiLCJsb2ciLCJoYW5kZGxlZFJhbmRvbSIsImRpdiIsImNsYXNzTmFtZSIsImgxIiwic21hbGwiLCJpbnB1dCIsInR5cGUiLCJ2YWx1ZSIsIm1pbiIsIm1heCIsIm9uQ2hhbmdlIiwiZXZlbnQiLCJ0YXJnZXQiLCJidXR0b24iLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/random.tsx\n");

/***/ })

});