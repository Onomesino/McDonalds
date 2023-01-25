import React, { Component } from "react";
import { Row, Col,Container, Button } from "react-bootstrap";
import "./McDonalds.css";

export default class McDonald extends Component {
  render() {
    return (
      <div>
        <div>
          <Container>
            <Row>
              <Col sm={8}>
                <img src="./Animate.jpeg" alt="" className="Donalds_Bur" />
              </Col>
              <Col sm={4}>
                <h2 className="Donalds_prin">
                  McDonald’s Black and
                  <br />
                  Positively Golden
                  <br />
                  Scholarship Program
                  <br />
                  Awards $1,000,000 in
                  <br />
                  Scholarships
                </h2>
                <p>
                  McDonald’s Black and Positively Golden Scholarship
                  <br />
                  Program awards $1,000,000 in scholarships to
                  <br />
                  students attending Historically Black Colleges and
                  <br />
                  Universities (HBCUs) in partnership with the Thurgood
                  <br />
                  Marshall College Fund (TMCF). Apply now through
                  <br />
                  March 27th at TMCF.org.
                </p>
                <Button variant="warning" className="Donalds_buton">
                  Apply Now
                </Button>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    );
  }
}
