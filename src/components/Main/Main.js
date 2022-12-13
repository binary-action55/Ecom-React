import React, { useContext} from "react";
import cartContext from "../../store/CartContext";
import Cart from "./Cart";
import ProductCategoryContainer from "./ProductCategoryContainer";

function Main(props) {
  const CartCntxt = useContext(cartContext);
  return (
    <div className="main">
      {CartCntxt.showCart && <Cart></Cart>}
      <ProductCategoryContainer
        productCategories={props.productCategories}
      ></ProductCategoryContainer>
    </div>
  );
}
export default Main;
