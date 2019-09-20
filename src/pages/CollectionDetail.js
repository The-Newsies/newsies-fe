import React from 'react';
import PropTypes from 'prop-types';
import Header from '../components/header/Header';
import CollectionDetailView from '../containers/CollectionDetailView';
import Footer from '../components/footer/Footer';

export default function CollectionDetail({ match }) {
  return (
    <>
      <Header />
      <CollectionDetailView match={match} />
      <Footer />
    </>
  );
}

CollectionDetail.propTypes = {
  match: PropTypes.object
};
