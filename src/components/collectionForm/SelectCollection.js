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
      <li
        key={collection._id}
        className={isSelected === collection._id ? styles.li : styles.liNotSelected}
      >
        <span onClick={() => setSelected(collection._id)}>
          {collection.name}
        </span>
      </li>
    );
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
        <div className={styles.myCollections}>
          <h3 className={styles.title}>My Collections</h3>
          <div>
            <hr className={styles.hr} />
            <ul className={styles.ul}>{collectionItems}</ul>
            {collections.length === 0 ? (
              <p>No collections, add one below!</p>
            ) : (
              <button className={styles.saveButton}>Save</button>
            )}
            {showSuccess ? <p className={styles.modalText}>Successfully saved!</p> : <></>}
          </div>
        </div>
      </form>
      <div className={styles.buttonContainer}>
        {!shown ? (
          <button className={styles.newCollectionButton} onClick={showAddCollection}>New Collection</button>
        ) : (
        <></>
        )}
      </div>
    </>
  );
}

SelectCollection.propTypes = {
  collections: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      _id: PropTypes.string.isRequired
    })
  ).isRequired,
  handleSubmit: PropTypes.func.isRequired,
  article: PropTypes.object.isRequired,
  showAddCollection: PropTypes.func.isRequired,
  shown: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired
};
