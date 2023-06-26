import React from 'react';
import Profile from "./Profile";
import Tweets from "./TweetList";
import Recommended from "./RecommendedList";
import { Container, Row, Col, } from 'react-bootstrap';

function Layout() {
  return (
    <Container className='main background'>
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