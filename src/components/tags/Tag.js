import React from 'react';
import PropTypes from 'prop-types';
import styles from './Tag.css';

export default function Tag({ name, color, fetchByCategory, setSelectedTag, isSelected }) {
  const tagColorStyles = {
    background: color,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    color: 'white',
    fontWeight: 'bold',
    width: '140px',
    border: 'none',
    textTransform: 'uppercase',
    transition: 'color .25s, background .25s, border .25s',
    padding: '8px 8px',
    lineHeigth: '18px',
    fontSize: '.8rem'
  };

  const menuItem = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    width: '140px',
    background: 'white',
    border: 'none',
    textTransform: 'uppercase',
    padding: '8px 8px',
    lineHeigth: '18px',
    fontSize: '.8rem'
  };

  function wrapper() {
    fetchByCategory(name);
    setSelectedTag(name);
  }

  return (
    <div>
      <button className={styles.button} style={isSelected ? tagColorStyles : menuItem} onClick={wrapper}>
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

