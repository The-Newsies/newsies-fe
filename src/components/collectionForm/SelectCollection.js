import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './SelectCollection.css';

export default function SelectCollection({ 
  collections, 
  handleSubmit, 
  article, 
  showAddCollection,
  shown
}) {
  const [isSelected, setSelected] = useState('');

  const collectionItems = collections.map(collection => {
    return (
      <li key={collection._id} className={isSelected ? styles.li : ''}>
        <span onClick={() => setSelected(collection._id)}>{collection.name}</span>
      </li>);
  });

  return (
    <>
    <form onSubmit={(event) => { event.preventDefault(); handleSubmit(article, isSelected);}}>
      <ul>
        {collectionItems}
      </ul>
      <button>Save</button>
    </form>
    { !shown ? <button onClick={showAddCollection}>New Collection</button> : <></> }
    </>
  );
}

SelectCollection.propTypes = {
  collections: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    _id: PropTypes.string.isRequired
  })).isRequired,
  handleSubmit: PropTypes.func.isRequired,
  article: PropTypes.object.isRequired,
  showAddCollection: PropTypes.func.isRequired,
  shown: PropTypes.bool.isRequired
};




