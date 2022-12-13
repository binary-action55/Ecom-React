import React from "react";

const cartContext = React.createContext({
    showCart: false,
    cartProductList: [],
    displayCart: (value) =>{},
    setShowCart: (value)=>{},
    addProductCart : (item) =>{},
    removeCartProduct : (id) =>{},
    updateCartProductQuantity:(id,quantity) =>{},  
})

export default cartContext;