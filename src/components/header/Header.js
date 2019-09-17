import React from 'react';
import { useAuth0 } from '../../Auth0Provider';
import LandingWrapper from './LandingWrapper';
import MyViewWrapper from './MyViewWrapper';
import styles from './Header.css';
import logo from '../../assets/logo.png';

export default function Header() {
  const { isAuthenticated } = useAuth0();
  
  return (
    <>
    <div className={styles.header}>
      <img className={styles.logo} src={logo} />
      {!isAuthenticated ? <LandingWrapper /> : <MyViewWrapper />}
    </div>
    <hr className={styles.line} />
    </>
  );
}
