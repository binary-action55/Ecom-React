import React from "react";
import { Col, Container, Row } from "react-bootstrap";

function Footer(){
    return(
        <Container className="gx-0 mw-100 overflow-hidden">
            <Row >
                <Col className="fs-1 fw-bold bg-info bg-gradient px-5 py-2">
                    The Generics
                </Col>
            </Row>
        </Container>
    );
}

export default Footer;