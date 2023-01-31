import React from "react";
import {
  Nav,
  NavDropdown,
  Navbar,
  Container,
  Button,
  Form,
} from "react-bootstrap";
import "./McEmail.css"

function McEmail() {
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#Home">
            <img src="./Logo.jpeg" alt="Logo" />
          </Navbar.Brand>

          <Navbar.Collapse id="basic-navbar-nav" className="Navv">
            <Nav className="me-auto">
              <NavDropdown title="language" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">English</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Español</NavDropdown.Item>
              </NavDropdown>

              <Nav.Link href="/McEmail" className="menn">
                Sign Up for Email
              </Nav.Link>

              <Nav.Link href="/McCareers" className="menn">
                Careers
              </Nav.Link>

              <Navbar.Brand href="/McSearch">
                <img src="./Search.png" alt="" className="SSS" />
              </Navbar.Brand>
              <Nav.Link href="/McSearch" className="me">
                Search
              </Nav.Link>
              <Navbar.Brand href="#location">
                <img src="./Location.jpeg" alt="" className="LLL" />
              </Navbar.Brand>

              <a
                href="https://www.google.com/maps/place/Codetrain/@5.6439971,
                -0.1565604,17z/data=!3m1!4b1!4m5!3m4!1s0xfdf9b269a8fbdd1:0x1b
                b79c84b5c0e1f2!8m2!3d5.6439971!4d-0.1543717"
                className="ink"
              >
                Change Your Location
              </a>
              <Button href="/Order" variant="warning" className="Butt">
                Order Now
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Collapse id="basic-navbar-nav" className="Navv">
            <Nav className="me-auto">
              <NavDropdown
                className="menu"
                title="Our Menu"
                id="basic-nav-dropdown"
              >
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#home" className="men">
                Download App
              </Nav.Link>
              <Nav.Link href="#link" className="men">
                MyMcDonald's Rewards
              </Nav.Link>
              <Nav.Link href="#link" className="men">
                Exclusive Deals
              </Nav.Link>
              <Nav.Link href="#link" className="men">
                About Our Food
              </Nav.Link>
              <Nav.Link href="#link" className="men">
                Locate
              </Nav.Link>
              <Nav.Link href="#link" className="men">
                Gift Cards
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <div>
        <h1>McDonald’s Email Signup</h1>
        <h2>Sign Up</h2>
        <p id="para">
          Be in the know about deals, MyMcDonald's Rewards, news and more by
          signing up for emails.
        </p>
        
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>*Indicates a required field</Form.Label>
            <Form.Control type="email" placeholder="*Email" className="input"/>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control type="numbers" placeholder="* Zip Code"   className="input"/>
          </Form.Group>

          <p className="para-o-para">
            *By selecting "Sign Up," you agree to the McDonald's{" "}
            <a href="https://www.mcdonalds.com/us/en-us/privacy.html">
              {" "}
              Privacy Policy
            </a>
            and{" "}
            <a href="https://www.mcdonalds.com/us/en-us/terms-and-conditions.html">
              Terms & Conditions.
            </a>{" "}
            <a href="https://www.mcdonalds.com/us/en-us/subscription.html">
              Unsubscribe from<br/>emails
            </a>{" "}
            any time. Please note when unsubscribing: it may take up to 10
            business days for your request to take effect.
          </p>

          <Button variant="warning" type="sign up" className="Button">
            Sign Up
          </Button>
        </Form>
        
      </div>
    </div>
  );
}

export default McEmail;
