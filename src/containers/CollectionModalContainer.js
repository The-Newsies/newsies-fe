import { connect } from 'react-redux';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CollectionModal from '../components/collectionForm/CollectionModal';
import { fetchCollections } from '../actions/collectionsActions';
import { getUserCollections } from '../selectors/collectionsSelector';
import { postCollection, patchArticleToCollection } from '../services/collectionsApi';
import { postArticle } from '../services/articlesApi';

class CollectionModalContainer extends Component {
  static propTypes = {
    collections: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.string.isRequired,
      _id: PropTypes.string.isRequired
    })).isRequired,
    handleSubmit: PropTypes.func.isRequired,
    article: PropTypes.object.isRequired,
    fetchUserCollections: PropTypes.func.isRequired,
    createCollection: PropTypes.func.isRequired,
  }

  render() {
    const { 
      article, 
      collections, 
      fetchUserCollections, 
      createCollection, 
      handleSubmit 
    } = this.props;

    return <CollectionModal 
      fetchUserCollections={fetchUserCollections} 
      article={article} 
      collections={collections} 
      createCollection={createCollection} 
      handleSubmit={handleSubmit}
    />;
  }
}

const mapStateToProps = state => ({
  collections: getUserCollections(state)
});

const mapDispatchToProps = dispatch => ({
  fetchUserCollections() {
    dispatch(fetchCollections());
  },
  createCollection(name, description) {
    postCollection(name, description)
      .then(() => dispatch(fetchCollections()));
  },
  handleSubmit(article, isSelected) {
    postArticle(article)
      .then(newArticle => {
        patchArticleToCollection(newArticle._id, isSelected);
      });
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CollectionModalContainer);
