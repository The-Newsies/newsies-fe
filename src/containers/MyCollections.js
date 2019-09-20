import { connect } from 'react-redux';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CollectionList from '../components/collections/CollectionList';
import { fetchCollections, deleteCollection } from '../actions/collectionsActions';
import { getUserCollections } from '../selectors/collectionsSelector';
import Alert from '../components/alert/Alert';

class MyCollections extends Component {
  static propTypes = {
    collections: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      _id: PropTypes.string.isRequired
    })).isRequired,
    handleDelete: PropTypes.func.isRequired,    
    fetch: PropTypes.func.isRequired
  }

  componentDidMount() {
    this.props.fetch();
  }

  render() {
    const { collections, handleDelete, fetch } = this.props;
    return (
      <>
      { collections.length === 0 ? <Alert message='You have no collections. Go to Trending or Search to create and curate collections!'/> : <></>}
      <CollectionList collections={collections} handleDelete={handleDelete} fetch={fetch}/>
      </>
    );
  }
}

const mapStateToProps = state => ({
  collections: getUserCollections(state)
});

const mapDispatchToProps = dispatch => ({
  fetch() {
    dispatch(fetchCollections());
  },
  handleDelete(collection_id) {
    dispatch(deleteCollection(collection_id));
  }
});

export default connect(
  mapStateToProps, 
  mapDispatchToProps
)(MyCollections);
