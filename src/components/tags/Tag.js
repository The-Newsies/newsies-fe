import React from 'react';
import PropTypes from 'prop-types';
import './Tag.css';

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
    padding: '0 5px',
    lineHeigth: '18px'
  };

  const menuItem = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    width: '140px',
    background: 'white',
    border: 'none',
    textTransform: 'uppercase',
    padding: '0 5px',
    lineHeigth: '18px'
  };

  function wrapper() {
    fetchByCategory(name);
    setSelectedTag(name);
  }

  return (
    <div>
      <button style={isSelected ? tagColorStyles : menuItem} onClick={wrapper}>
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

