import React from 'react';
import Header from '../components/header/Header';
import SearchBarContainer from '../containers/SearchBarContainer';
import SearchContainer from '../containers/SearchContainer';

export default function Search() {
  return (
    <>
    <Header />
    <SearchBarContainer />
    <SearchContainer />
    </>
  );
}
