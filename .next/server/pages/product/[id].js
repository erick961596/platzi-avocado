"use strict";
(() => {
var exports = {};
exports.id = 360;
exports.ids = [360];
exports.modules = {

/***/ 6850:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _id_),
  "getStaticPaths": () => (/* binding */ getStaticPaths),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
// EXTERNAL MODULE: ./context/AppContext.tsx + 2 modules
var AppContext = __webpack_require__(3215);
;// CONCATENATED MODULE: ./components/ProductSummary/ProductSummary.tsx




const ProductSummary = ({ product: product1  })=>{
    const { name , price , image , attributes  } = product1;
    const { addToCart , removeFromCart , state  } = (0,external_react_.useContext)(AppContext/* AppContext */.I);
    const { 0: quantity1 , 1: setQuantity  } = (0,external_react_.useState)(1);
    const handdledAddToCart = (product, quantity)=>()=>{
            const parseQuantity = parseInt(quantity);
            addToCart(product, parseQuantity);
        }
    ;
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "container py-5 w-lg-75 mx-auto",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "row",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                        className: "text-center",
                        children: "Product Summary"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "col-lg-6 col-12",
                        children: /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                            src: image,
                            alt: name,
                            width: 300,
                            height: 300,
                            quality: 85
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "col-lg-6 col-12 d-flex align-items-center",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "card text-center p-3 my-3 w-100",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                    children: name
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    className: "badge bg-secondary",
                                    children: price
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                    type: "number",
                                    name: "quantity",
                                    id: "quantity",
                                    value: quantity1,
                                    onChange: (event)=>setQuantity(event.target.value)
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                    className: "btn btn-primary",
                                    onClick: handdledAddToCart(product1, quantity1),
                                    children: "Add to Cart"
                                })
                            ]
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "row",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "col-12",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                children: "About this avocado"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                children: attributes.description
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("hr", {})
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "row",
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "col-12",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("table", {
                        className: "table table-striped",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("thead", {
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("tr", {
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("th", {
                                            children: "Attribute"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("th", {
                                            children: "Value"
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("tbody", {
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("tr", {
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("td", {
                                                children: "Shape"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("td", {
                                                children: attributes.shape
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("tr", {
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("td", {
                                                children: "Date"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("td", {
                                                children: attributes.hardiness
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("tr", {
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("td", {
                                                children: "Taste"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("td", {
                                                children: attributes.taste
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    })
                })
            })
        ]
    }));
};
/* harmony default export */ const ProductSummary_ProductSummary = (ProductSummary);

;// CONCATENATED MODULE: ./pages/product/[id].tsx



const getStaticPaths = async ()=>{
    const response = await fetch(`https://platzi-avo.vercel.app/api/avo/`);
    const { data  } = await response.json();
    const paths = data.map(({ id  })=>({
            params: {
                id
            }
        })
    );
    return {
        // Statically generate all paths
        paths,
        // Display 404 for everything else
        fallback: false
    };
};
// This also gets called at build time
const getStaticProps = async ({ params  })=>{
    console.log(params.id);
    const res = await fetch(`https://platzi-avo.vercel.app/api/avo/${params === null || params === void 0 ? void 0 : params.id}`);
    const product = await res.json();
    // Pass post data to the page via props
    return {
        props: {
            product
        }
    };
};
const ProductItem = ({ product  })=>{
    return(/*#__PURE__*/ jsx_runtime_.jsx("div", {
        children: product == null ? null : /*#__PURE__*/ jsx_runtime_.jsx(ProductSummary_ProductSummary, {
            product: product
        })
    }));
};
/* harmony default export */ const _id_ = (ProductItem);


/***/ }),

/***/ 8028:
/***/ ((module) => {

module.exports = require("next/dist/server/image-config.js");

/***/ }),

/***/ 4957:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [675,215], () => (__webpack_exec__(6850)));
module.exports = __webpack_exports__;

})();