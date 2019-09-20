import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import SelectCollection from './SelectCollection';
import PropTypes from 'prop-types';
import AddCollection from './AddCollection';
import styles from './CollectionModal.css';

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`
  };
}

const useStyles = makeStyles(theme => ({
  paper: {
    position: 'absolute',
    width: '50vw',
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: '.5rem'
  }
}));

export default function CollectionModal({
  article,
  collections,
  fetchUserCollections,
  createCollection,
  handleSubmit
}) {
  const classes = useStyles();
  const [modalStyle] = useState(getModalStyle);
  const [open, setOpen] = useState(false);
  const [shown, setShown] = useState(false);

  const handleOpen = () => {
    setOpen(true);
    fetchUserCollections();
  };

  const handleClose = () => {
    setOpen(false);
  };

  const showAddCollection = () => {
    !shown ? setShown(true) : setShown(false);
  };

  return (
    <div>
      <button type="button" onClick={handleOpen}>+</button>
      <Modal
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        open={open}
        onClose={handleClose}
      >
        <div style={modalStyle} className={classes.paper}>
          <div className={styles.buttonDisplay}>
            <button className={styles.button} onClick={handleClose}>
            ✗
            </button>
          </div>
          <SelectCollection
            article={article}
            collections={collections}
            handleSubmit={handleSubmit}
            showAddCollection={showAddCollection}
            shown={shown}
            handleClose={handleClose}
          />
          <div className={styles.container}>
            {shown ? (
              <AddCollection createCollection={createCollection} />
            ) : (
              <></>
            )}
          </div>
        </div>
      </Modal>
    </div>
  );
}

CollectionModal.propTypes = {
  article: PropTypes.object.isRequired,
  collections: PropTypes.array.isRequired,
  fetchUserCollections: PropTypes.func.isRequired,
  createCollection: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired
};
