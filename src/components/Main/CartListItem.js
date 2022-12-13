import React, { useContext, useState } from "react";
import { Button, Col, Container, InputGroup, Row } from "react-bootstrap";
import cartContext from "../../store/CartContext";
import styles from "./CartListItem.module.css";

function CartListItem(props) {
  const crtCntxt = useContext(cartContext);
  const product = props.product;
  const [quantity,setQuantity] = useState(product.quantity);

  const removeItem = () => {
    crtCntxt.removeCartProduct(product.key);
  };

  const updateCartQuantity = (e) => {
    const value = +e.target.value;
    console.log("event",value);
    setQuantity(value);
    crtCntxt.updateCartProductQuantity(product.key, value);
  };

  return (
    <Container>
      <Row>
        <Col className="col-4">
          <Row>
            <Col className="col-8">
              <img
                src={product.img}
                className="img-fluid"
                alt="product image"
              ></img>
            </Col>
            <Col className="col-4">{product.title}</Col>
          </Row>
        </Col>
        <Col className="col-2 text-center ps-5">${product.price}</Col>
        <Col className="col-6">
          <Row className="gx-0 p-0 m-0 d-flex justify-content-center align-items-center">
            <Col className="col-6 px-5 my-2 ">
              <input
                type="number"
                min="0"
                step="1"
                className="border border-dark border-round w-100 form-control text-end"
                onChange={updateCartQuantity}
                value={quantity}
              />
            </Col>
            <Col className="col-4 p-0 text-center">
              <Button className="btn btn-danger btn-fluid" onClick={removeItem}>
                Remove
              </Button>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default CartListItem;
