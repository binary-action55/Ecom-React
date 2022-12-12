import React from "react";
import ProductCategoryContainer from "./ProductCategoryContainer";

function Main(props) {
  return (
    <div className="main">
      <ProductCategoryContainer
        productCategories={props.productCategories}
      ></ProductCategoryContainer>
    </div>
  );
}
export default Main;
