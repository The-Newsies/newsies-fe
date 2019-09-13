import React from 'react';
import Header from './header/Header';
import SearchBar from './searchBar/SearchBar';
import NewsList from './news/NewsList';
import Avatar from '../components/avatar/Avatar';
import placeholder from '../assets/placeholder.png';
import { useAuth0 } from '../Auth0Provider';
import TagsContainer from '../containers/TagsContainer';

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
      <Avatar image={placeholder} />
      <SearchBar />
      <NewsList
        news={[
          {
            title: 'Title',
            description: 'description',
            image: 'image url',
            author: 'author',
            date: 'date',
            sourceName: 'sourceName',
            sourceLink: 'sourceLink',
            tagColor: 'tagColor'
          }
        ]}
      />
      <TagsContainer tags={[{ name: 'sports', color: 'sdfsdfs' }]} />
    </>
  );
}
