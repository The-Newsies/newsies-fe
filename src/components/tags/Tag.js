import React from 'react';
import PropTypes from 'prop-types';
import styles from './Tag.css';

export default function Tag({ name, color, _id, handleClick }) {
  const tagColorStyles = {
    background: color,
    width: '35px',
    height: '13px',
    marginRight: '20px'
  };

  return (
    <div>
      <button className={styles.button} onClick={() => handleClick(_id)}>
        <div style={tagColorStyles}></div>
        <p>{name}</p>
      </button>
    </div>
  );
}

Tag.propTypes = {
  _id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired
};

