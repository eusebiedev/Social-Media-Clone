import React from 'react'
import PropTypes from 'prop-types';
import { Card, Form } from 'react-bootstrap';
import App from './../App.css';


function Tweets(props) {
  return (
    <React.Fragment>
      <Card className="mb-3">
        <Card.Body>
          <div className='userline'>
          <img class="profile3" src={require('./../img/' + props.userPic + '.png')}/>
          <Card.Title>{props.user}</Card.Title>
          </div>
          <Card.Subtitle className="mb-2 text-muted" id='date'>{props.date}</Card.Subtitle>
          <Card.Text>
            {props.message}
          </Card.Text>
        </Card.Body>
      </Card>
    </React.Fragment>
  );
}

Tweets.propTypes = {
  user: PropTypes.string.isRequired,
  userPic: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  message: PropTypes.string
};

export default Tweets