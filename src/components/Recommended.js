import React from 'react';
import PropTypes from 'prop-types';
import { Button, Card } from 'react-bootstrap';

function Recommended(props) {
  return (
    <React.Fragment>
      <Card id="reco" style={{ width: '18rem' }}>
        <Card.Body>
          <img className="profile2" src={require('./../img/' + props.userPic + '.png')} alt="Profile"/>
          <h4>{props.user}</h4>
          <Button variant="outline-primary" size="sm">Follow</Button>
          <Button variant="outline-danger" size="sm">UnFollow</Button>
        </Card.Body>
      </Card>
    </React.Fragment>
  );

}
Recommended.propTypes = {
  user: PropTypes.string.isRequired,
  userPic: PropTypes.string
};

export default Recommended;