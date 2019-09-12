import React from 'react';
import PropTypes from 'prop-types';

export default function Tag({ name, color }) {
  return (
    <div>
      <button>
        <div style={{ background: color }}></div>
        <p>{name}</p>
      </button>
    </div>
  );
}

Tag.propTypes = {
  name: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired
};

