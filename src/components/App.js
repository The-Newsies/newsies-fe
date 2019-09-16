import React from 'react';
import Header from './header/Header';
import TagsContainer from '../containers/TagsContainer';
import TrendingContainer from '../containers/TrendingContainer';

export default function App() {
  return (
    <>
      <Header />
      <TrendingContainer />
      <TagsContainer />
    </>
  );
}
