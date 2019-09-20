import React from 'react';
import Header from '../components/header/Header';
import NewsContainer from '../containers/NewsContainer';
import PropTypes from 'prop-types';
import PageTitle from '../components/pageTitle/PageTitle';
import Footer from '../components/footer/Footer';

export default function Landing({ location }) {
  return (
    <>
      <Header location={location}/>
      <PageTitle title='Headlines' />
      <NewsContainer />
      <Footer />
    </>
  );
}

Landing.propTypes = {
  location: PropTypes.object.isRequired
};
