import React from "react";
import { Row, Col, Container, Button } from "react-bootstrap";
import "./McYourStory.css";

function McYourStory() {
  return (
    <div>
      <div>
        <Container>
          <Row>
            <Col sm={8}>
              <img src="./Girl.jpeg" alt="" className="Story_Bur" />
            </Col>
            <Col sm={4}>
              <h2 className="Story_print">Your Story Deserves a Hollywood Ending</h2>
              <p>
                Latinos have stories to tell, yet they make up less than
                <br />
                1% of the ones told in Hollywood. As a champion of the
                <br />
                Hispanic community McDonald’s wants to help
                <br />
                change that. With <span className="span">Spotlight Dorado</span>,McDonald’s is
                <br />
                giving aspiring Latino filmmakers a chance to
                <br />
                participate in a short film competition. Aspiring
                <br />
                filmmakers will bring their vision to life having their
                <br />
                story produced into a short film with invaluable
                <br />
                mentorship from renowned industry leaders and a<br />
                chance to showcase their film in film festivals around
                <br />
                the country.
              </p>
              <Button variant="warning" className="Story_bton">
                Learn More About Spotlight Dorado
              </Button>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default McYourStory;
