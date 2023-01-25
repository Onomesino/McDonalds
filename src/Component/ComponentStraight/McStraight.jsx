import React, { Component } from "react";
import { Row, Col, Container, Button } from "react-bootstrap";
import "./McStraight.css";

export default class McStraight extends Component {
  render() {
    return (
      <>
        <div>
          <Container>
            <Row>
              <Col sm={8}>
                <img src="./Burger1.jpeg" alt="" className="straight_pic" />
              </Col>
              <Col sm={4}>
                <h2 className="straightprint">
                  Straight to the Points:
                  <br />
                  McDelivery® in the
                  <br />
                  App
                </h2>
                <p>
                  The McDonald’s app is now the only place you’ll earn
                  <br />
                  MyMcDonald’s Rewards points on every McDelivery
                  <br />
                  order. Plus, you can get those free McDonald’s rewards
                  <br />
                  you earn delivered, too. Just order, relax and enjoy—
                  <br />
                  we’ll bring your faves to you.*
                </p>
                <p className="straight_sml">
                  *At participating McDonald's. Only in the app. App
                  registration required. Must be opted
                  <br className="straight_sml" />
                  into MyMcDonald's Rewards.
                </p>
                <Button variant="warning" className="Straight_button">
                  Earn Points on McDelivery
                </Button>
              </Col>
            </Row>
          </Container>
        </div>
      </>
    );
  }
}
