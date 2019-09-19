import React from 'react';
import PropTypes from 'prop-types';
import Header from '../components/header/Header';
import CollectionDetailView from '../containers/CollectionDetailView';

export default function CollectionDetail({ match }) {
  return (
    <>
      <Header />
      <CollectionDetailView match={match} />
    </>
  );
}

CollectionDetail.propTypes = {
  match: PropTypes.object
};
