import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import arrow from '../../assets/arrow.png';
import { useAuth0 } from '../../Auth0Provider';
import { NavLink } from 'react-router-dom';
import styles from './DropDownMenu.css';

export default function DropDownMenu() {
  const [anchorEl, setAnchorEl] = useState(null);
  const { auth0Client } = useAuth0();
  const logout = () => auth0Client.logout();

  function handleClick(event) {
    setAnchorEl(event.currentTarget);
  }

  function handleClose() {
    setAnchorEl(null);
  }

  return (
    <div>
      <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
        <img style={{ width: '1rem' }} src={arrow} />
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}><NavLink to='/trending' className={styles.link} activeStyle={{ 
          fontWeight: 'bold',
          color: 'red' }}>Trending</NavLink></MenuItem>
        <MenuItem onClick={handleClose}><NavLink to='/myNews' className={styles.link} activeStyle={{ 
          fontWeight: 'bold', 
          color: 'red' }}>My News</NavLink></MenuItem>
        <MenuItem onClick={handleClose}><NavLink to='/search' className={styles.link} activeStyle={{ 
          fontWeight: 'bold', 
          color: 'red' }}>Search</NavLink></MenuItem>
       
        <MenuItem onClick={handleClose}><span onClick={logout}>Sign-out</span></MenuItem>
      </Menu>
    </div>
  );
}
