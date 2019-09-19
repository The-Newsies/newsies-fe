import React from 'react';
import PropTypes from 'prop-types';
import CollectionItem from './CollectionItem';

export default function CollectionList({ collections }) {
  const collectionList = collections.map(({
    name,
    description,
    _id
  }) => (
    <li key={_id}>
      <CollectionItem 
        name={name}
        description={description}
      />
    </li>
  ));

  return (
    <ul>
      {collectionList}
    </ul>
  );
}

CollectionList.propTypes = {
  collections: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    _id: PropTypes.string.isRequired    
  })).isRequired
};
