import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import styles from './NewsViewToggle.css';

export default function NewsViewToggle({ handleTrending }) {
  return (
    <span>
      <NavLink to='/trending' onClick={handleTrending} className={styles.link} activeStyle={{ 
        fontWeight: 'bold', 
        color: 'white', 
        background: 'red', 
      }}>Trending</NavLink>
      <NavLink to='/myNews' className={styles.link} activeStyle={{ 
        fontWeight: 'bold', 
        color: 'white', 
        background: 'red', 
      }}>My News</NavLink>
    </span>
  );
}

NewsViewToggle.propTypes = {
  handleTrending: PropTypes.func.isRequired
};
