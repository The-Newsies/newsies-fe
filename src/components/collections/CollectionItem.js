import React from 'react';
import PropTypes from 'prop-types';


export default function CollectionItem({ title, description }) {
  return (
    <div>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

CollectionItem.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  _id: PropTypes.string
};
