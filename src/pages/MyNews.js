import React from 'react';
import Header from '../components/header/Header';
import PropTypes from 'prop-types';
import PageTitle from '../components/pageTitle/PageTitle';
import MyCollections from '../containers/MyCollections';

export default function MyNews({ location }) {
  return (
    <>
      <Header location={location}/>
      <PageTitle title='My News' />
      <MyCollections />
    </>
  );
}

MyNews.propTypes = {
  location: PropTypes.object.isRequired
};
