import React from 'react';
import SearchBar from '../searchBar/SearchBar';

export default function LandingWrapper() {
  //this button is a placeholder, I will eventually hook it up through Auth0
  return (
    <div>
      <SearchBar />
      <button>Sign-in | Sign-up</button>
    </div>
  );
}
