import React from 'react';
import PropTypes from 'prop-types';

export default function Tag({ name, color }) {
  return (
    <div>
      <span>
        <div style={{ background: color }}></div>
        <p>{name}</p>
      </span>
    </div>
  );
}

Tag.propTypes = {
  name: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired
};

