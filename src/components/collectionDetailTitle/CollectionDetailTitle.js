import React from 'react';
import PropTypes from 'prop-types';
import styles from '../pageTitle/PageTitle.css';

export default function CollectionDetailTitle({ name, description }) {
  return (
    <div className={styles.title}>
      <h1>{name}</h1>
      <p>{description}</p>
    </div>
  );
}

CollectionDetailTitle.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string
};
