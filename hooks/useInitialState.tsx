
import React, { useState } from 'react';
import initialState from '../initialState';
const useInitialState = () => { 

const [state, setState] = useState(initialState);




const addToCart = (product: any, quantity?) => {

    quantity = quantity ? quantity : 1;
    if (state.cart.find(prod => prod.id === product.id)) {
        setState({
            ...state,
            cart: state.cart.map(prod => prod.id === product.id ? { ...prod, quantity: prod.quantity + quantity } : prod)
        });
    }else{
        setState({
            ...state,
            cart: [...state.cart, { ...product, quantity: quantity }]
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
}

const removeFromCart = (product: any) => {
    setState({
        ...state,
        cart: state.cart.filter(p => p.id !== product.id)
    })
}


return {
    state,
    addToCart,
    removeFromCart

}
}
export default useInitialState;