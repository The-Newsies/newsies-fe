import React from 'react';
import PropTypes from 'prop-types';
import styles from './Tag.css';

export default function Tag({ name, color, fetchByCategory, setSelectedTag, isSelected }) {
  const tagColorStyles = {
    background: color,
    width: '35px',
    height: '13px'
  };

  function wrapper() {
    fetchByCategory(name);
    setSelectedTag(name);
  }

  return (
    <div>
      <button className={isSelected ? styles.buttonSelected : styles.button} onClick={wrapper}>
        <div style={tagColorStyles}></div>
        <p>{name}</p>
      </button>
    </div>
  );
}

Tag.propTypes = {
  name: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  fetchByCategory: PropTypes.func.isRequired,
  setSelectedTag: PropTypes.func.isRequired,
  isSelected: PropTypes.bool.isRequired
};

