import { connect } from 'react-redux';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CollectionList from '../components/collections/CollectionList';
import { fetchCollections } from '../actions/collectionsActions';
import { getUserCollections } from '../selectors/collectionsSelector';


class MyCollections extends Component {
  static propTypes = {
    collections: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      _id: PropTypes.string.isRequired,
      handleDelete: PropTypes.func.isRequired    
    })).isRequired,
    fetch: PropTypes.func.isRequired
  }

  componentDidMount() {
    this.props.fetch();
  }

  render() {
    const { collections } = this.props;
    return (
      <CollectionList collections={collections} />
    );
  }
}

const mapStateToProps = state => ({
  collections: getUserCollections(state)
});

const mapDispatchToProps = dispatch => ({
  fetch() {
    dispatch(fetchCollections());
  }
});

export default connect(
  mapStateToProps, 
  mapDispatchToProps
)(MyCollections);
