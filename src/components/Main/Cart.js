import React, { useContext } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import cartContext from "../../store/CartContext";
import styles from "./Cart.module.css";
import CartListItem from "./CartListItem";

function Cart() {
  const crtCtxt = useContext(cartContext);

  const hideCart = () =>{
    crtCtxt.displayCart(false);
  }

  return (
    <div className={styles.Cart}>
    <Container className="p-0 gx-0">
      <Row>
        <Col className="text-end">
          <Button className="btn-light my-1 mx-3" onClick={hideCart}>x</Button>
        </Col>
      </Row>
      <Row>
        <Col className="text-center">
          <span className="fs-2 fw-bold">CART</span>
        </Col>
      </Row>
      <Row className="mt-5 mb-5 fs-4 fw-bold text-center m-0 p-0 gx-0">
        <Col className="border-bottom border-dark ms-3 col-4">Item</Col>
        <Col className="border-bottom border-dark ms-2 me-2 col-2">Price</Col>
        <Col className="border-bottom border-dark me-3 col-5">Quantity</Col>
      </Row>
      {crtCtxt.cartProductList.map((product) => (
        <CartListItem key={product.key} product={product}></CartListItem>
      ))}
      <Row className="mt-5 mb-5 fs-4 fw-bold text-center">
        <Col className="text-end">Total: 123</Col>
      </Row>
      <Row className="mt-5 mb-5">
        <Col className="text-center">
          <Button type="info">PURCHASE</Button>
        </Col>
      </Row>
    </Container>
    </div>
  );
}

export default Cart;
