import React from 'react';
import PropTypes from 'prop-types';

export default function SelectCollection({ collections }) {
  const collectionItems = collections.map(collection => {
    return (
      <li key={collection._id}>
        <button>{collection.name}</button>
      </li>);
  });

  return (
    <form>
      <ul>
        {collectionItems}
      </ul>
    </form>
  );
}

SelectCollection.propTypes = {
  collections: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    _id: PropTypes.string.isRequired
  })).isRequired
};




