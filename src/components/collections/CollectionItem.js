import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


export default function CollectionItem({ name, description, _id }) {
  return (
    <Link to={`/collection/${_id}`}>
      <h3>{name}</h3>
      <p>{description}</p>
    </Link>
  );
}

CollectionItem.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  _id: PropTypes.string.isRequired
};
