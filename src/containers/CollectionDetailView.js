import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CollectionDetailTitle from '../components/collectionDetailTitle/CollectionDetailTitle';
import { getCollectionById } from '../services/collectionsApi';
import { getArticlesByCollectionId } from '../services/articlesApi';
import NewsListCollected from '../components/collectionNews/NewsListCollected';

export default class CollectionDetailView extends Component {
  static propTypes = {
    match: PropTypes.object
  }

  state = {
    name: '',
    description: '',
    news: []
  }

  fetchCollection = () => {
    getCollectionById(this.props.match.params._id)
      .then(res => {
        this.setState({
          name: res.name,
          description: res.description,
        });
      });
  }

  fetchArticlesInCollection = () => {
    getArticlesByCollectionId(this.props.match.params._id)
      .then(res => {
        this.setState({
          news: res
        });
      });
  }

  componentDidMount() {
    this.fetchCollection();
    this.fetchArticlesInCollection();
  }

  render() {
    const { name, description, news } = this.state;
    return (
      <>
        <CollectionDetailTitle name={name} description={description} />
        <NewsListCollected news={news} />
      </>
    );
  }
}




