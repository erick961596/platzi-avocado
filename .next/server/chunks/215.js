"use strict";
exports.id = 215;
exports.ids = [215];
exports.modules = {

/***/ 3215:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "I": () => (/* binding */ AppContext),
  "Z": () => (/* binding */ context_AppContext)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./initialState.js
/* harmony default export */ const initialState = ({
    cart: [],
    state: [],
    quantity: []
});

;// CONCATENATED MODULE: ./hooks/useInitialState.tsx


const useInitialState = ()=>{
    const { 0: state , 1: setState  } = (0,external_react_.useState)(initialState);
    const addToCart = (product, quantity)=>{
        quantity = quantity ? quantity : 1;
        if (state.cart.find((prod)=>prod.id === product.id
        )) {
            setState({
                ...state,
                cart: state.cart.map((prod)=>prod.id === product.id ? {
                        ...prod,
                        quantity: prod.quantity + quantity
                    } : prod
                )
            });
        } else {
            setState({
                ...state,
                cart: [
                    ...state.cart,
                    {
                        ...product,
                        quantity: quantity
                    }
                ]
            });
        }
    // setState({
    //     ...state,
    //     cart: [...state.cart, product],
    //     quantity:[...state.quantity, {
    //         [product.id]: state.quantity[product.id] ? + 1 : 1
    //     } ]
    // })
    // setState({
    //     ...state,
    //     cart: [...state.cart, product]
    // })
    };
    const removeFromCart = (product)=>{
        setState({
            ...state,
            cart: state.cart.filter((p)=>p.id !== product.id
            )
        });
    };
    return {
        state,
        addToCart,
        removeFromCart
    };
};
/* harmony default export */ const hooks_useInitialState = (useInitialState);

;// CONCATENATED MODULE: ./context/AppContext.tsx

// src/context/state.js


const AppContext = /*#__PURE__*/ (0,external_react_.createContext)({
    state: {}
});
const AppProvider = ({ children  })=>{
    const initialState = hooks_useInitialState();
    return(/*#__PURE__*/ jsx_runtime_.jsx(AppContext.Provider, {
        value: initialState,
        children: children
    }));
};
/* harmony default export */ const context_AppContext = (AppProvider);


/***/ })

};
;