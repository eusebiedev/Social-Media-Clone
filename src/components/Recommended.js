import React from 'react';
import PropTypes from 'prop-types';
import { Container, Row, Col, Button, Image, Card } from 'react-bootstrap';
import profileImage from "./../img/profile.png";



function Recommended(props) {
  return (
    <React.Fragment>
      <Card><img
          // src={require(`./img/${props.userPic}.png`)}

          alt="profile image"
        />        <Card.Body>
        <img className="profile2" src={profileImage} alt="Profile Picture"/>
        <h4>{props.user}</h4>
        <Button variant="primary">Follow</Button>
        </Card.Body>
      </Card>
    </React.Fragment>
  )
}

Recommended.propTypes = {
  user: PropTypes.string.isRequired,
  userPic: PropTypes.string
};

export default Recommended