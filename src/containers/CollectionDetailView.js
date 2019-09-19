import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CollectionDetailTitle from '../components/collectionDetailTitle/CollectionDetailTitle';
import { getCollectionById } from '../services/collectionsApi';

export default class CollectionDetailView extends Component {
  static propTypes = {
    match: PropTypes.object
  }

  state = {
    name: '',
    description: ''
  }

  fetch = () => {
    getCollectionById(this.props.match.params._id)
      .then(res => {
        this.setState({
          name: res.name,
          description: res.description
        });
      });
  }

  componentDidMount() {
    this.fetch();
  }

  render() {
    const { name, description } = this.state;
    return (
      <CollectionDetailTitle name={name} description={description} />
    );
  }
}




