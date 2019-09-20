import React from 'react';
import Header from '../components/header/Header';
import SearchBarContainer from '../containers/SearchBarContainer';
import SearchContainer from '../containers/SearchContainer';
import PropTypes from 'prop-types';
import PageTitle from '../components/pageTitle/PageTitle';
import Footer from '../components/footer/Footer';

export default function Search({ location }) {
  return (
    <>
    <Header location={location}/>
    <PageTitle title='Search All News' />
    <SearchBarContainer />
    <SearchContainer />
    <Footer />
    </>
  );
}

Search.propTypes = {
  location: PropTypes.object.isRequired
};
