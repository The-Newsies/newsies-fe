import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './CollectionItem.css';


export default function CollectionItem({ name, description, _id, handleDelete }) {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.text}>
          <Link to={`/collection/${_id}`}>
            <h3>{name}</h3>
            <p>{description}</p>
          </Link>
        </div>
        <div className={styles.deleteButton}>
          <button onClick={() => handleDelete(_id)}>✗</button>
        </div>
      </div>
    </div>
  );
}

CollectionItem.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  _id: PropTypes.string,
  handleDelete: PropTypes.func.isRequired
};
