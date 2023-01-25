import React from "react";
import { Row, Col, Container, Button } from "react-bootstrap";
import "./McOrder.css";

export default function McOrder() {
  return (
    <div>
      <div>
        <Container>
          <Row>
            <Col sm={8}>
              <img src="./Burger3.jpeg" alt="" className="Order_Bur" />
            </Col>
            <Col sm={4}>
              <h2 className="Order_print">
                Order McDelivery®
                <br />
                Now*
              </h2>
              <p>
                Get all your McDonald’s favorites delivered right to
                <br />
                your doorstep with McDelivery® on Uber Eats,
                <br />
                DoorDash or Grubhub.
              </p>
              <p className="Order_sml">
                At participating McDonald’s. Prices may be higher than at
                restaurants. Delivery/service
                <br />
                fees apply
              </p>
              <Button variant="warning" className="butom">
                Order McDelivery Now
              </Button>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}
