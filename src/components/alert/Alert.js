import React from 'react';
import PropTypes from 'prop-types';
import styles from './Alert.css';

export default function Alert({ message }) {
  return (
    <div className={styles.Alert}>
      <h3>{message}</h3>
    </div>
  );
}

Alert.propTypes = {
  message: PropTypes.string.isRequired
};
