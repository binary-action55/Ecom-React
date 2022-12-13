import React, { useContext } from "react";
import styles from "./HeaderNav.module.css";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import cartContext from "../../store/CartContext";
import { Link } from "react-router-dom";
function HeaderNav(props) {
  const CartCntxt = useContext(cartContext);

  const displayCart = () => {
    CartCntxt.displayCart(true);
  };

  return (
    <Navbar bg="dark" variant="dark" className="gx-0 mx-0 px-0 mw-100">
      <Container className={`${styles.Container} gx-0`}>
        <Nav className={`${styles.headerLinks} me-auto`}>
          <Link className="mx-5" to="/home">
            Home
          </Link>
          <Link className="mx-5" to="/product">
            Products
          </Link>
          <Link className="mx-5" to="/about">
            About
          </Link>
        </Nav>
        {props.path === "/product" && (
          <Nav>
            <Button className="primary" onClick={displayCart}>
              Cart
            </Button>
          </Nav>
        )}
      </Container>
    </Navbar>
  );
}

export default HeaderNav;
