import { connect } from 'react-redux';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { setSearchArticles } from '../actions/searchActions';
import { setTrendingArticles } from '../actions/trendingActions';
import SentimentMenu from '../components/sentiment/SentimentMenu';
import { getTrending } from '../selectors/trendingSelector';
import { getSearchResults } from '../selectors/searchSelector';

class SentimentMenuContainer extends Component {
  static propTypes = {
    view: PropTypes.string.isRequired,
    updateSearchArticles: PropTypes.func.isRequired,
    updateTrendingArticles: PropTypes.func.isRequired,
    trendingArticles: PropTypes.array.isRequired,
    searchArticles: PropTypes.array.isRequired
  }

  render() {
    let articles;
    let updateArticles;

    if(this.props.view === 'search') {
      articles = this.props.searchArticles;
      updateArticles = this.props.updateSearchArticles;
    } else {
      articles = this.props.trendingArticles;
      updateArticles = this.props.updateTrendingArticles;
    }
    return (
      <SentimentMenu 
        articles={articles}
        updateArticles={updateArticles} 
      />
    );
  }
}

const mapStateToProps = state => ({
  searchArticles: getSearchResults(state),
  trendingArticles: getTrending(state)
});

const mapDispatchToProps = dispatch => ({
  updateSearchArticles(articles) {
    dispatch(setSearchArticles(articles));
  },
  updateTrendingArticles(articles) {
    dispatch(setTrendingArticles(articles));
  },
});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SentimentMenuContainer);
