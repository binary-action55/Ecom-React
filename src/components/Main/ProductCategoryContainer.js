import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProductCard from "./ProductCard";

function ProductCategoryContainer(props) {
  return (
    <React.Fragment>
      {props.productCategories.map((category) => (
        <Container className="mt-4">
          <Row className="text-align-center">
            <Col className="text-center fw-bold fs-2">{category.title}</Col>
          </Row>
          <Row xs={1} lg={2}>
            {category.productList.map((product) => (
              <Col className='d-flex justify-content-center align-items-center'>
                <ProductCard product={product}></ProductCard>
              </Col>
            ))}
          </Row>
        </Container>
      ))}
    </React.Fragment>
  );
}

export default ProductCategoryContainer;
