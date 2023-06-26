import React from 'react'
import PropTypes from 'prop-types';
import { Card, Form } from 'react-bootstrap';

function Tweets(props) {
  return (
    <React.Fragment>
      <Card className="mb-3">
        <Card.Body>
          <Card.Title>{props.user}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">{props.date}</Card.Subtitle>
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
  date: PropTypes.string.isRequired,
  message: PropTypes.string
};

export default Tweets