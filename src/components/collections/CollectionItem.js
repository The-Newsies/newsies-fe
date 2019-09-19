import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


export default function CollectionItem({ name, description, _id, handleDelete }) {
  return (
    <Link to={`/collection/${_id}`}>
      <h3>{name}</h3>
      <p>{description}</p>
      <button onClick={() => handleDelete(_id)}>✗</button>
    </div>
  );
}

CollectionItem.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  _id: PropTypes.string,
  handleDelete: PropTypes.func.isRequired
};
