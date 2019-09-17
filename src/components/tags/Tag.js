import React from 'react';
import PropTypes from 'prop-types';
import styles from './Tag.css';

export default function Tag({ name, color, fetchByCategory }) {
  const tagColorStyles = {
    background: color,
    width: '35px',
    height: '13px',
    marginRight: '20px'
  };

  return (
    <div>
      <button className={styles.button} onClick={() => fetchByCategory(name)}>
        <div style={tagColorStyles}></div>
        <p>{name}</p>
      </button>
    </div>
  );
}

Tag.propTypes = {
  name: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  fetchByCategory: PropTypes.func.isRequired
};

