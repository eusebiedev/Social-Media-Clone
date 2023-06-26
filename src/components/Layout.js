import React from 'react';
import Profile from "./Profile";
import Tweets from "./TweetList";
import Recommended from "./RecommendedList";
import App from './../App.css';
import { Container, Row, Col, } from 'react-bootstrap';




function Layout() {
  return (
    <Container>
      <Row>
        <Col>
          <Profile />
        </Col>
        <Col>
          <Tweets />
        </Col>
        <Col>
          <Recommended />
        </Col>
      </Row>
    </Container>
  )
}

export default Layout