import React from "react";
 import { Form, Button } from "react-bootstrap";
import "./Orders.css";

const Orders = () => {
  return (
    <div>
      <h1>McDonalds Delicasy</h1>
      <p className="pa">Order whatever you wish for. We are here for you.</p>
      <Form className="fom">
        {" "}
        {/* onSubmit={this.handleSubmit}  */}
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Name"
            name="name"
            // value={this.state.name}
            // onChange={this.handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Phone Number</Form.Label>
          <Form.Control
            type="number"
            placeholder="phone number"
            name="phone number"
            // value={this.state.email}
            // onChange={this.handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Location</Form.Label>
          <Form.Control
            type="string"
            placeholder="Location"
            name="location"
            // value={this.state.gen}
            // onChange={this.handleChange}
          />
        </Form.Group>
        <Button variant="warning" type="submit">
          Order
        </Button>
      </Form> 

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
            © 2017 - 2022 McDonald's. All Rights<br/><span>Reserved</span>
          </p>
        </section>
      </div>

        <section className="all">
          <p id="info">Do Not Sell or Share My Personal Information</p>

          <p id="cooky">Cookies Settings</p>
        </section>
    </div>
    </div>
  );
};

export default Orders;
