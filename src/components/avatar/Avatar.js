import React from 'react';
import PropTypes from 'prop-types';

export default function Avatar({ image }) {
  return (
    <div>
      <img src={image} />
    </div>
  );
}

Avatar.propTypes = {
  image: PropTypes.string.isRequired
};
