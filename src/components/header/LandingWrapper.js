import React from 'react';
import SearchBarContainer from '../../containers/SearchBarContainer';
import { useAuth0 } from '../../Auth0Provider';
import styles from './LandingWrapper.css';

export default function LandingWrapper() {
  const { auth0Client } = useAuth0();
  const login = () => auth0Client.loginWithRedirect();
  
  return (
    <div className={styles.container}>
      <SearchBarContainer />
      <p className={styles.signIn} onClick={login}>SIGN-IN</p>
    </div>
  );
}
