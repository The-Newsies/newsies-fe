import React from 'react';
import PropTypes from 'prop-types';

export default function Tag({ name, color, _id, handleClick }) {
  return (
    <div>
      <button onClick={() => handleClick(_id)}>
        <div style={{ background: color }}></div>
        <p>{name}</p>
      </button>
    </div>
  );
}

Tag.propTypes = {
  _id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired
};

