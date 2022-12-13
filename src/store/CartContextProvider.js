import React, { useState } from "react";
import CartContext from "./CartContext";

function CartContextProvider(props) {
  const [cartProductList, setCartProductList] = useState([]);
  const [showCart, setShowCart] = useState(false);

  const addProductCart = (product) => {
    const index = cartProductList.findIndex((item) => item.key === product.key);
    if (index === -1) {
      setCartProductList((cartProductList) => {
        const item = { ...product, quantity: 1 };
        return [...cartProductList, item];
      });
    } else {
        const updatedList = [...cartProductList];
        updatedList[index].quantity++;
      setCartProductList(updatedList);
    }
  };

  const removeCartProduct = (id) => {
    setCartProductList((cartProductList) =>
      cartProductList.filter((product) => product.key !== id)
    );
  };

  const updateCartProductQuantity = (id, quantity) => {
    if (quantity === 0) {
      removeCartProduct(id);
      return;
    }
    setCartProductList((cartProductList) => {
      const index = cartProductList.findIndex((product) => product.key === id);
      cartProductList[index].quantity = quantity;
      return cartProductList;
    });
  };

  const displayCart = (value) => {
    setShowCart(value);
  };

  const context = {
    showCart,
    cartProductList,
    displayCart,
    addProductCart,
    removeCartProduct,
    updateCartProductQuantity,
  };
  return (
    <CartContext.Provider value={context}>
      {props.children}
    </CartContext.Provider>
  );
}

export default CartContextProvider;
