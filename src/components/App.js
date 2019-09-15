import React from 'react';
import Header from './header/Header';
import SearchBar from './searchBar/SearchBar';
// import NewsList from './news/NewsList';
import Avatar from '../components/avatar/Avatar';
import { useAuth0 } from '../Auth0Provider';
import TagsContainer from '../containers/TagsContainer';
import TrendingContainer from '../containers/TrendingContainer';

export default function App() {
  const { isAuthenticated, auth0Client } = useAuth0();
  const login = () => auth0Client.loginWithRedirect();
  const logout = () => auth0Client.logout();
  return (
    <>
    { !isAuthenticated ? 
      <button onClick={login}>Login</button> 
      : <button onClick={logout}>Logout</button>
    }
      <Header />
      <Avatar />
      <SearchBar />
      <TrendingContainer />
      <TagsContainer />
    </>
  );
}
