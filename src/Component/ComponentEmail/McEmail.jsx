import React from "react";
import { Row, Col, Container, Button, Form } from "react-bootstrap";

import "./McEmail.css";

function McEmail() {
  return (
    <>
      <div>
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
              <Form.Control
                type="email"
                placeholder="*Email"
                className="input"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Control
                type="numbers"
                placeholder="* Zip Code"
                className="input"
              />
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
                Unsubscribe from
                <br />
                emails
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

      <div>
        <Container>
          <Row>
            <Col sm={8}>
              <img src="./Burger2.jpeg" alt="" className="Fries_Bur" />
            </Col>
            <Col sm={4}>
              <h2 className="Fries_print">
                Free Fries Now. Free McDonald’s Later.*
              </h2>
              <p>
                Get Free Large Fries with a $1 minimum purchase
                <br />
                when you download the McDonald’s app & join
                <br />
                MyMcDonald’s Rewards. Then, unlock free McDonald’s
                <br />
                faves only in the app with 1500 points after your first
                <br />
                purchase as a MyMcDonald’s Rewards member.
              </p>
              <p className="Fries_sml">
                *Offer valid 1x thru the last day of the month for first time
                app users at participating
                <br />
                McDonald's. May take up to 48 hours to appear in your deals.
                Excludes delivery. Excludes
                <br />
                tax. Free MyMcDonald’s Rewards points valid 1x thru 12/31/23 for
                first time MyMcDonald’s
                <br />
                Rewards users. Program available only at participating
                McDonald’s. McD app download
                <br />
                and registration required.
              </p>
              <Button variant="warning" className="Fries_buton">
                Get Yours
              </Button>
            </Col>
          </Row>
        </Container>
      </div>
      <h3>What You Get When You Sign Up For Email</h3>

      <div id="emailcol">
        <Container>
          <Row>
            <Col sm={4}>
              <img src="./email1.jpeg" alt="" />
              <h4>App Deal Alerts</h4>
              <p className="parghf">
                Get notified of exclusive in-app deals and offers. Your
                <br />
                next deal is waiting in your inbox.
              </p>
            </Col>
            <Col sm={4}>
              <img src="./email2.jpeg" alt="" />
              <h4>
                MyMcDonald's
                <br />
                Rewards Updates
              </h4>
              <p className="parghf2">
                Get the latest exclusive bonus offers and
                <br />
                personalized notifications on free McDonald’s
                <br />
                rewards ready for you to redeem.*
              </p>
              <p className="paraghdlink">
                *Program available only at participating McDonald's. Refer to{" "}
                <a href="https://www.mcdonalds.com/us/en-us/terms-and-conditions.html#rewards-terms">
                  MyMcDonald’s Program
                  <br />
                  Terms
                </a>
                for details. McD app download and registration required.
              </p>
              <Button variant="warning" type="sign up" className="emailbutton">
              Start in the App
            </Button>
            </Col>
            <Col sm={4}>
              <img src="./email3.jpeg" alt="" />
              <h4>Product Announcements</h4>
              <p className="parghf">
              Get the latest updates on new products, special promotions and more.
              </p>
            </Col>
          </Row>
        </Container>
      </div>

      <div className="footer">
        <div className="container-fluid">
          <div className="row">
            <div className="col" sm="3">
              <h6>About Us</h6>
              <br />
              <p>
                About Us Overview
                <br />
                Our History
                <br />
                Leadership Team
                <br />
                Values In Action
                <br />
                Franchise Info
                <br />
                Recalls & Alerts
                <br />
                Real Estate
                <br />
                Accessibility
                <br />
                Investor Relations
                <br />
                News & Notifications
              </p>
            </div>
            <div className="col" sm="3">
              <h6>Services</h6>
              <br />
              <p>
                Services Overview
                <br />
                Wi-Fi
                <br />
                PlayPlaces & Parties
                <br />
                McDelivery®
                <br />
                Mobile Order & Pay
                <br />
                Trending Now
                <br />
                McDonald’s Merchandise
                <br />
                Family Fun Hub
                <br />
                MyMcDonald's Rewards
                <br />
                McCafé®
              </p>
            </div>
            <div className="col" sm="3">
              <h6>Community</h6>
              <br />
              <p>
                Community
                <br />
                HACER® Scholarships for
                <br />
                Hispanic Students
                <br />
                Ronald McDonald House
                <br />
                Charities
                <br />
                McDonald’s Asian Pacific
                <br />
                American
                <br />
                McDonald’s International
                <br />
                Black and Positively
                <br />
                Golden
                <br />
                McDonald’s LGBTQ+
              </p>
            </div>
            <div className="col" sm="3">
              <h6>Contact Us</h6>
              <br />
              <p>
                Contact Us
                <br />
                Gift Card FAQs
                <br />
                Donations
                <br />
                Employment
                <br />
                Customer Feedback
                <br />
                Frequently Asked
                <br />
                Questions
              </p>
            </div>
          </div>
        </div>

        <div>
          <section className="all">
            <a href="https://www.facebook.com/McDonalds/">
              <img src="./facebook.png" alt="" className="fe" />
            </a>

            <a href="https://twitter.com/mcdonalds">
              <img src="./twitter.png" alt="" className="twi" />
            </a>

            <a href="https://www.youtube.com/channel/UCRI5ZedBs0_BYY4PlxD6m7w">
              <img src="./youtube.png" alt="" className="twi" />
            </a>

            <a href="https://www.instagram.com/mcdonalds/">
              <img src="./instagram.png" alt="" className="twi" />
            </a>

            <a href="https://mcdonalds.tumblr.com/">
              <img src="./tumblr.png" alt="" className="twi" />
            </a>

            <a href="https://open.spotify.com/user/mcdonalds">
              <img src="./spotify.png" alt="" className="twi" />
            </a>
          </section>
          <section>
            <a href="https://open.spotify.com/user/mcdonalds">
              <img src="./app_store.png" alt="" className="store" />
            </a>
          </section>
          <section>
            <a href="https://open.spotify.com/user/mcdonalds">
              <img src="./google_play.png" alt="" className="spot" />
            </a>
          </section>
        </div>
        <hr />

        <div>
          <section className="all">
            <p id="private">Privacy (Updated)</p>

            <p id="note">California Privacy Notice</p>

            <p id="term">Terms & Conditions</p>

            <p id="access">Accessibility</p>

            <img src="./MMM.jpeg" alt="" className="mmmm" />

            <p id="reserve">
              © 2017 - 2022 McDonald's. All Rights
              <br />
              <span>Reserved</span>
            </p>
          </section>
        </div>

        <section className="all">
          <p id="info">Do Not Sell or Share My Personal Information</p>

          <p id="cooky">Cookies Settings</p>
        </section>
      </div>
    </>
  );
}

export default McEmail;
