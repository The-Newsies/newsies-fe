import React from 'react';
import PropTypes from 'prop-types';


export default function CollectionItem({ name, description, _id, handleDelete }) {
  return (
    <div>
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
