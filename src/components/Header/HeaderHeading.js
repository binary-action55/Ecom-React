import React from "react";
import { Container, Row, Col} from "react-bootstrap";
import styles from './HeaderHeading.module.css';

function HeaderHeading(){
return(
    <Container className={` gx-0 mw-100 ${styles.HeaderHeading}`}>
        <Row className="fluid px-0">
            <Col className="fs-1 fw-bold text-white bg-secondary fluid text-center px-5 py-5">
                The Generics
            </Col>
        </Row>
    </Container>
);

}
export default HeaderHeading;