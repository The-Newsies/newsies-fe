import React from 'react';
import PropTypes from 'prop-types';
import styles from './PageTitle.css';

export default function PageTitle({ title }) {
  
  return (
    <>
    <div className={styles.title}>
      <h1>{title}</h1>
    </div>
    </>
  );
}

PageTitle.propTypes = {
  title: PropTypes.string.isRequired,
};
