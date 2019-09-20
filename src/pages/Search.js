import React from 'react';
import Header from '../components/header/Header';
import SearchBarContainer from '../containers/SearchBarContainer';
import SearchContainer from '../containers/SearchContainer';
import PropTypes from 'prop-types';
import PageTitle from '../components/pageTitle/PageTitle';
import Footer from '../components/footer/Footer';

export default function Search({ location }) {
  const style = {
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF'
  };

  return (
    <>
    <Header location={location}/>
    <PageTitle title='Search All News' />
    <div style={style}>
      <SearchBarContainer  />
    </div>
    <SearchContainer />
    <Footer />
    </>
  );
}

Search.propTypes = {
  location: PropTypes.object.isRequired
};
