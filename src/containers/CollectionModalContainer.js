import { connect } from 'react-redux';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CollectionModal from '../components/collectionForm/CollectionModal';

class CollectionModalContainer extends Component {
  static propTypes = {
    collections: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.string.isRequired,
      _id: PropTypes.string.isRequired
    })).isRequired,
    handleSubmit: PropTypes.func.isRequired,
    article: PropTypes.object.isRequired
  }
  
  render() {
    const { article } = this.props;

    return <CollectionModal article={article} />;
  }
}

export default connect(

)(CollectionModalContainer);
