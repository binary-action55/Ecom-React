import React, { useContext } from "react";
import styles from "./HeaderNav.module.css";
import { Button, Container, Nav, Navbar} from "react-bootstrap";
import cartContext from "../../store/CartContext";

function HeaderNav() {
  const CartCntxt = useContext(cartContext);

  const displayCart = () =>{
    CartCntxt.displayCart(true);
  }

  return (
    <Navbar bg="dark" variant="dark" className="gx-0 mx-0 px-0 mw-100">
      <Container className={`${styles.Container} gx-0`}>
        <Nav className={`${styles.headerLinks} me-auto`}>
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#features">Store</Nav.Link>
          <Nav.Link href="#pricing">About</Nav.Link>
        </Nav>
        <Nav>
          <Button className="primary" onClick={displayCart}>Cart</Button>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default HeaderNav;
