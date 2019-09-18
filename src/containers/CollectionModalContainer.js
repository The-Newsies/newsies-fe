import { connect } from 'react-redux';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CollectionModal from '../components/collectionForm/CollectionModal';
import { fetchCollections } from '../actions/collectionsActions';
import { getUserCollections } from '../selectors/collectionsSelector';

class CollectionModalContainer extends Component {
  static propTypes = {
    collections: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.string.isRequired,
      _id: PropTypes.string.isRequired
    })).isRequired,
    handleSubmit: PropTypes.func.isRequired,
    article: PropTypes.object.isRequired,
    fetchUserCollections: PropTypes.func.isRequired
  }

  render() {
    const { article, collections, fetchUserCollections } = this.props;

    return <CollectionModal fetchUserCollections={fetchUserCollections} article={article} collections={collections} />;
  }
}

const mapStateToProps = state => ({
  collections: getUserCollections(state)
});

const mapDispatchToProps = dispatch => ({
  fetchUserCollections() {
    dispatch(fetchCollections());
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CollectionModalContainer);
