import React from 'react';
import Header from './header/Header';
import TagsContainer from '../containers/TagsContainer';
import NewsContainer from '../containers/NewsContainer';

export default function App() {
  return (
    <>
      <Header />
      <NewsContainer />
      <TagsContainer />
    </>
  );
}
