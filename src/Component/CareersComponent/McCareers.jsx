import React from "react";
import "./McCareers.css";
import { Button, Col, Row, Container } from "react-bootstrap";

function McCareers() {
  return (
    <div>
      <h1>McDonald's Careers</h1>
      <div className="career">
        <Container>
          <Row>
            <Col sm={8}>
              <img src="./Careers.jpeg" alt="" className="straight_pic" />
            </Col>
            <Col sm={4}>
              <p id="career">
                Looking for general information about McDonald’s
                <br />
                employment? Head to our Careers page to learn more
                <br />
                about McDonald's corporate careers and
                <br />
                opportunities at McDonald's-brand restaurants.
              </p>
              <Button variant="warning" className="Career_button">
                Learn More
              </Button>
            </Col>
          </Row>
        </Container>
      </div>
      <h3>Come Work with Us</h3>

      <div className="career">
        <Container>
          <Row>
            <Col sm={6}>
              <h4 className="carcum">Restaurant Jobs</h4>
              <p>
                If it’s important to you, it’s important to McDonald’s and its
                independent franchises.
                <br />
                From flexible scheduling to comprehensive benefits and anything
                in between, you
                <br />
                can find it all here. Check to see what openings are available
                at your local
                <br />
                McDonald’s-brand restaurant.
              </p>
              <Button variant="warning" className="Career_button">
                Apply Today
              </Button>
            </Col>
            <Col sm={6}>
              <h4 className="carcum">Corporate Careers</h4>
              <p>
                Give your talent and skillset a home at our corporate
                headquarters and regional
                <br />
                field offices.
                <br />
                Explore our corporate career options and apply today.
              </p>
              <Button variant="warning" className="Career_button">
                Learn More
              </Button>
            </Col>
          </Row>
        </Container>
      </div>

      <div className="caree">
        <Container>
          <Row>
            <Col sm={6}>
              <h4 className="carcum">Archways to Opportunity®</h4>
              <p>
                Get the skills to take you to the next level with the Archways
                to Opportunity
                <br />
                program. Whether you’re looking to improve your English skills,
                complete your high
                <br />
                school diploma, or get tuition assistance for college,
                McDonald’s and its
                <br />
                participating franchises are dedicated to helping you reach your
                educational goals.
              </p>
              <Button variant="warning" className="Career_button">
                Learn More
              </Button>
            </Col>
            <Col sm={6}>
              <h4 className="carcum">University Programs</h4>
              <p>
                Fresh out of college? Let’s get you on your way to a fulfilling
                career.
                <br />
                Explore corporate early career programs and internships that are
                specifically
                <br />
                crafted to provide hands-on development, both professionally and
                technically.
              </p>
              <Button variant="warning" className="Career_button">
                Learn More
              </Button>
            </Col>
          </Row>
        </Container>
      </div>

      <div className="caree">
        <Container>
          <Row>
            <Col sm={6}>
              <h4 className="carcum">Global Opportunities</h4>
              <p>
                Take your next move even further and broaden your horizons with
                positions with
                <br />
                McDonald’s or one of its independent franchisees outside of the
                United States.
                <br />
                Visit the global landing page to find out more.
              </p>
              <Button variant="warning" className="Career_button">
                Visit Page
              </Button>
            </Col>
          </Row>
        </Container>
      </div>
      <p className="carsmall">
        McDonald's Corporation and McDonald’s USA, LLC (“McDonald’s”) are
        committed to a policy of Equal Employment Opportunity and will not
        discriminate against an applicant or employee on the basis of race,
        color, sex, religion, national origin, citizenship status, age,
        disability,
        <br />
        veteran or military status, sexual orientation, gender
        identity/expression, genetic information, or any other
        legally-recognized protected basis under federal, state or local laws,
        regulations or ordinances. Applicants with disabilities may be entitled
        to reasonable
        <br />
        accommodation under the terms of the Americans with Disabilities Act and
        certain state or local laws. A reasonable accommodation is a change or
        adjustment to a job or work environment that will ensure an equal
        employment opportunity without imposing an undue
        <br />
        hardship on the operation of the business. For corporately owned
        restaurant locations, please contact restaurantjobs.support@us.mcd.com
        if you need assistance completing any forms or to otherwise participate
        in the application process.
      </p>
      <p className="casmall">
        Independent franchisees are Equal Opportunity employers committed to
        diverse and inclusive workforces. Franchisees are independent business
        people and not employed by McDonald’s. Thus, each franchisee and each
        franchisee restaurant is unique and the franchisee is
        <br />
        alone responsible for all employment matters in their restaurant,
        including the terms and conditions of employment for their employees,
        such as hiring, firing, discipline, supervision, staffing and
        scheduling. The benefits described or referenced here are available at
        <br />
        McDonald’s-owned restaurants and the restaurants of participating
        franchisees. Depending on the restaurant location you select, the job
        for which you apply may be in a restaurant owned and operated by an
        independent franchisee, and not with McDonald’s. This means the
        <br />
        franchisee, not McDonald’s, is responsible for all employment matters at
        the restaurant. If you are hired for the job, the franchisee will be
        your employer, not McDonald’s. For franchisee restaurant locations,
        please contact the franchisee organization directly to the extent you
        <br />
        need assistance in completing forms or otherwise participating in that
        franchisee’s application process.
      </p>

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
}

export default McCareers;
