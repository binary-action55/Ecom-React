import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import TourListItem from "./TourListItem";
function HomeMain() {
  const tours = [
    {
      date: "Aug 15",
      location: "Atlanta",
      venue: "Amba",
      key: "11",
    },
    {
      date: "Aug 15",
      location: "Atlanta",
      venue: "Amba",
      key: "12",
    },
    {
      date: "Aug 15",
      location: "Atlanta",
      venue: "Amba",
      key: "13",
    },
    {
      date: "Aug 15",
      location: "Atlanta",
      venue: "Amba",
      key: "14",
    },
  ];

  return (
    <Container className="m-5">
      <Row className="m-5">
        <Col className="text-center fs-2 fw-bold">Tours</Col>
      </Row>
      {tours.map((event) => {
        return (
          <Row key={event.key}>
            <Col className="d-flex justify-content-evenly align-items-center m-3 p-3 border-bottom border-dark">
              <TourListItem tour={event}></TourListItem>
            </Col>
          </Row>
        );
      })}
    </Container>
  );
}

export default HomeMain;
