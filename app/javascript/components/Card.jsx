import React from 'react';
import PropTypes from 'prop-types';

import './card';

const Card = props => {
  return (
    <div className="card" onClick={props.handleClick}>
      <ul>
        <li>{props.color}</li>
        <li>{props.shape}</li>
        <li>{props.pattern}</li>
      </ul>
    </div>
  );
};

Card.propTypes = {
  color: PropTypes.string.isRequired,
  shape: PropTypes.string.isRequired,
  pattern: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired
};

export default Card;
