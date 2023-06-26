import React from 'react'
import PropTypes from 'prop-types';
import { Button, Card } from 'react-bootstrap';


function Tweets(props) {
  return (
    <React.Fragment>
      <Card id="tweet-card">
        <Card.Body>
          <div className='userline'>
          <img className="profile3" src={require('./../img/' + props.userPic + '.png')} alt="Profile" />
          <Card.Title>{props.user}</Card.Title>
          </div>
          <Card.Subtitle className="mb-2 text-muted" id='date'>{props.date}</Card.Subtitle>
          <Card.Text>
            {props.message}
            <Button variant="outline-primary" size="btn btn-sm">Like</Button>
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