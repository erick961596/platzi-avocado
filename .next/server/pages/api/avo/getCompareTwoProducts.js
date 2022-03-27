"use strict";
(() => {
var exports = {};
exports.id = 53;
exports.ids = [53];
exports.modules = {

/***/ 6513:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _database__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9081);

const getCompareTwoProducts = async (request, response)=>{
    // const queryParams = queryString.parse(window.location.search)
    const quantity = request.query.quantity;
    const db = new _database__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z();
    const AllEntries = await db.getCompareProducts(quantity ? quantity : 2);
    const cantidad = AllEntries.length;
    response.statusCode = 200;
    response.setHeader('Content-Type', 'application/json');
    response.end(JSON.stringify({
        length: cantidad,
        data: AllEntries
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getCompareTwoProducts);


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [81], () => (__webpack_exec__(6513)));
module.exports = __webpack_exports__;

})();