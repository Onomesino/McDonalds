import React from 'react';
import {Row, Col, Container, Button} from "react-bootstrap";
import  "./McFreeFries.css";

const McFreeFries = () => {
    return (
        <>
          <div>
        <Container>
          <Row>
            <Col sm={8}>
              <img src="./Burger2.jpeg" alt="" className="Fries_Bur" />
            </Col>
            <Col sm={4}>
              <h2 className="Fries_print">Free Fries Now. Free McDonald’s Later.*</h2>
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
        </>
    );
}

export default McFreeFries;
