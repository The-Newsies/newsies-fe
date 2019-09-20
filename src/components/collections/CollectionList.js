import React from 'react';
import PropTypes from 'prop-types';
import CollectionItem from './CollectionItem';
import styles from '../news/NewsList.css';

export default function CollectionList({ collections, handleDelete }) {
  const collectionList = collections.map(({
    name,
    description,
    _id
  }) => (
    <li key={_id}>
      <CollectionItem 
        name={name}
        description={description}
        _id={_id}
        handleDelete={handleDelete}
      />
    </li>
  ));

  return (
    <ul className={styles.container}>
      {collectionList}
    </ul>
  );
}

CollectionList.propTypes = {
  collections: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    _id: PropTypes.string.isRequired,
  })).isRequired,
  handleDelete: PropTypes.func.isRequired,
};
