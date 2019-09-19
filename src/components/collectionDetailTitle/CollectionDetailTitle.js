import React from 'react';
import PropTypes from 'prop-types';

export default function CollectionDetailTitle({ name, description }) {
  return (
    <div>
      <h3>{name}</h3>
      <p>{description}</p>
    </div>
  );
}

CollectionDetailTitle.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string
};
