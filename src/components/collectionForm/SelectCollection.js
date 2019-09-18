import React, { useState } from 'react';
import PropTypes from 'prop-types';

export default function SelectCollection({ collections, handleSubmit, article }) {
  const [isSelected, setSelected] = useState('');

  const collectionItems = collections.map(collection => {
    return (
      <li key={collection._id}>
        <div onClick={setSelected(collection._id)}>{collection.name}</div>
      </li>);
  });

  return (
    <form onSubmit={() => handleSubmit(article, isSelected)}>
      <ul>
        {collectionItems}
      </ul>
      <button>Save</button>
    </form>
  );
}

SelectCollection.propTypes = {
  collections: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    _id: PropTypes.string.isRequired
  })).isRequired,
  handleSubmit: PropTypes.func.isRequired,
  article: PropTypes.object.isRequired
};




