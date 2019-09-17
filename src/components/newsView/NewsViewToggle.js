import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './NewsViewToggle.css';

export default function NewsViewToggle() {
  return (
    <span className={styles.viewToggle}>
      <NavLink to='/trending' className={styles.link} activeStyle={{ 
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

