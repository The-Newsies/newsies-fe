import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import styles from './NewsViewToggle.css';
import { useAuth0 } from '../../Auth0Provider';

export default function NewsViewToggle({ handleTrending }) {
  const { isAuthenticated } = useAuth0();

  if(isAuthenticated) {
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
  return (
    <>
    <button onClick={handleTrending}>Trending News</button>
    </>
  );
}

NewsViewToggle.propTypes = {
  handleTrending: PropTypes.func.isRequired
};
