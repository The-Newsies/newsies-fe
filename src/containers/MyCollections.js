import { connect } from 'react-redux';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CollectionList from '../components/collections/CollectionList';
import { fetchCollections, deleteCollection } from '../actions/collectionsActions';
import { getUserCollections } from '../selectors/collectionsSelector';

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
      <CollectionList collections={collections} handleDelete={handleDelete} fetch={fetch}/>
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
    console.log('handle delete');
    dispatch(deleteCollection(collection_id));
  }
});

export default connect(
  mapStateToProps, 
  mapDispatchToProps
)(MyCollections);
