import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CollectionDetailTitle from '../components/collectionDetailTitle/CollectionDetailTitle';
import { getCollectionById } from '../services/collectionsApi';
// import { getArticleById } from '../services/articlesApi';

export default class CollectionDetailView extends Component {
  static propTypes = {
    match: PropTypes.object
  }

  state = {
    name: '',
    description: '',
    articleIds: []
  }

  fetchCollection = () => {
    getCollectionById(this.props.match.params._id)
      .then(res => {
        this.setState({
          name: res.name,
          description: res.description,
          articleIds: res.articleIds
        });
      });
  }

  // fetchArticles = () => {
  //   this.state.articleIds.forEach((_, i) => {
  //     return getArticleById(i);
  //   });
  // }

  componentDidMount() {
    this.fetchCollection();
    // this.fetchArticles();
  }

  render() {
    const { name, description } = this.state;
    return (
      <CollectionDetailTitle name={name} description={description} />
    );
  }
}




