import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './SelectCollection.css';

export default function SelectCollection({ 
  collections, 
  handleSubmit, 
  article, 
  showAddCollection,
  shown,
  handleClose
}) {
  const [isSelected, setSelected] = useState('');
  const [showSuccess, setShowSuccess] = useState(false);

  const collectionItems = collections.map(collection => {
    return (
      <li key={collection._id} className={isSelected ? styles.li : ''}>
        <span onClick={() => setSelected(collection._id)}>{collection.name}</span>
      </li>);
  });

  const saveSubmitWrapper = event => {
    event.preventDefault(); 
    if(isSelected !== '') {
      handleSubmit(article, isSelected);
      setShowSuccess(true);
      setTimeout(function() { 
        handleClose();
      }, 2000);
    } else {
      alert('Please select a collection');
    }
  };

  return (
    <>
    <form onSubmit={saveSubmitWrapper}>
      <ul>
        {collectionItems}
      </ul>
      <button>Save</button>
      {showSuccess ? <p>Successfully saved!</p> : <></>}
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
  shown: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired
};




