import React from 'react';
import SearchBar from '../searchBar/SearchBar';
import { useAuth0 } from '../../Auth0Provider';

export default function LandingWrapper() {
  //this button is a placeholder, I will eventually hook it up through Auth0
  const { auth0Client } = useAuth0();
  const login = () => auth0Client.loginWithRedirect();
  return (
    <div>
      <SearchBar />
      <button onClick={login}>Sign-in | Sign-up</button>
    </div>
  );
}
