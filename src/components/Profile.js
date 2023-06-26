import React from 'react';
import './../App.css';
import { Container, Col, Card, ListGroup } from 'react-bootstrap';
import profileImage from "./../img/profile.png";



function Profile() {
  return (
    <React.Fragment>
      <Container>
        <Card style={{ width: '20rem' }}>
          <Card.Body>
            <Col xs={6} md={4}>
              <img className="profile" src={profileImage} alt="Profile"/>
            </Col>
            <Card.Title>About Me:</Card.Title>
            <Card.Text >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Diam donec adipiscing tristique risus nec feugiat in. Turpis in eu mi bibendum neque egestas congue quisque. Consequat mauris nunc congue nisi vitae suscipit tellus mauris.</Card.Text>
          </Card.Body>
          <ListGroup className="flex-row list-group-flush align-items-center">
            <ListGroup.Item className="my-link">Tweets</ListGroup.Item>
            <ListGroup.Item className="my-link">Following</ListGroup.Item>
            <ListGroup.Item className="my-link">Followers</ListGroup.Item>
          </ListGroup>
        </Card>
      </Container>
    </React.Fragment>
  )
}

export default Profile