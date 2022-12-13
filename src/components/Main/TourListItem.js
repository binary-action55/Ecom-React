import React from "react";
import { Button } from "react-bootstrap";

function TourListItem(props) {
  return (
    <>
      <span>{props.tour.date}</span>
      <span>{props.tour.location}</span>
      <span>{props.tour.venue}</span>
      <Button className="btn btn-info bg-gradient">Buy Tickets</Button>
    </>
  );
}

export default TourListItem;
