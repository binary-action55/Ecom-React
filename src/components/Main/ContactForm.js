import { type } from "@testing-library/user-event/dist/type";
import React, { useRef } from "react";
import { Button, Container, Form, Row, Col } from "react-bootstrap";

function ContactForm() {
  const nameInput = useRef();
  const emailInput = useRef();
  const phoneInput = useRef();

  const submitContactDetails = async (e) => {
    e.preventDefault();
    const contactDetails = {
      name: nameInput.current.value,
      email: emailInput.current.value,
      phone: phoneInput.current.value,
    };

    try {
      const response = await fetch(
        "https://react-dem-ecom-default-rtdb.asia-southeast1.firebasedatabase.app/contacts.json",
        {
          method: "POST",
          body: JSON.stringify(contactDetails),
          headers: {
            "Content-type": "application/json",
          },
        }
      );
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Container className="d-flex justify-content-center align-items-center m-5 gx-0">
      <Row>
        <Col className="mh-100">
          <Form onSubmit={submitContactDetails}>
            <Row className="h-50">
              <Col className="text-center fs-4 fw-bold m-3">
                <Form.Group controlId="nameInput">
                  <Form.Label>Name:</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter Name"
                    ref={nameInput}
                    required
                  ></Form.Control>
                  <Form.Control.Feedback type="invalid">
                    Please enter valid username
                  </Form.Control.Feedback>
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col className="text-center fs-4 fw-bold m-3">
                <Form.Group controlId="emailInput">
                  <Form.Label>Email:</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter Email"
                    ref={emailInput}
                    required
                  ></Form.Control>
                  <Form.Control.Feedback type="invalid">
                    Please enter valid email
                  </Form.Control.Feedback>
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col className="text-center fs-4 fw-bold m-3">
                <Form.Group controlId="phoneInput">
                  <Form.Label>Phone Number:</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter Phone Number"
                    ref={phoneInput}
                    required
                  ></Form.Control>
                  <Form.Control.Feedback type="invalid">
                    Please enter valid phone number
                  </Form.Control.Feedback>
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col className="text-center m-3">
                <Button variant="primary" type="submit">
                  Submit
                </Button>
              </Col>
            </Row>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default ContactForm;
