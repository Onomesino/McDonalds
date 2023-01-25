import React from "react";
import { Row, Col, Container, Button } from "react-bootstrap";
import "./McDeals.css";

function McDeals() {
  return (
    <div>
      <div>
        <Container>
          <Row>
            <Col sm={8}>
              <img src="./Burger4.jpeg" alt="" className="Deals_Bur" />
            </Col>
            <Col sm={4}>
              <h2 className="Deals_print">Deals for Days</h2>
              <p>
                Get{" "}
                <a href="https://www.mcdonalds.com/us/en-us/deals.html">
                  exclusive deals
                </a>{" "}
                on your McDonald’s favorites in <br />
                the app with contactless Mobile Order & Pay* and
                <br />
                convenient Drive Thru or Curbside pickup.
              </p>
              <p className="Deals_sml">
                *Mobile Order & Pay at participating McDonald’s.
              </p>
              <Button variant="warning" className="Deals_butom">
                Get App Deals
              </Button>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default McDeals;
