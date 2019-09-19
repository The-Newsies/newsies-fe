import { connect } from 'react-redux';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { setSearchArticles, setSearchSortBy } from '../actions/searchActions';
import { setTrendingArticles, setTrendingSortBy } from '../actions/trendingActions';
import SentimentMenu from '../components/sentiment/sentimentMenu';
import { getTrendingSortBy, getTrending } from '../selectors/trendingSelector';
import { getSearchSortBy, getSearchResults } from '../selectors/searchSelector';

class SentimentMenuContainer extends Component {
  static propTypes = {
    view: PropTypes.string.isRequired,
    searchSortBy: PropTypes.string.isRequired,
    trendingSortBy: PropTypes.string.isRequired,
    updateSearchSortBy: PropTypes.func.isRequired,
    updateSearchArticles: PropTypes.func.isRequired,
    updateTrendingSortBy: PropTypes.func.isRequired,
    updateTrendingArticles: PropTypes.func.isRequired,
    trendingArticles: PropTypes.array.isRequired,
    searchArticles: PropTypes.array.isRequired
  }

  render() {
    let sortBy;
    let articles;
    let updateSortBy; 
    let updateArticles;

    if(this.props.view === 'search') {
      sortBy = this.props.searchSortBy;
      articles = this.props.searchArticles;
      updateSortBy = this.props.updateSearchSortBy;
      updateArticles = this.props.updateSearchArticles;
    } else {
      sortBy = this.props.trendingSortBy;
      articles = this.props.trendingArticles;
      updateSortBy = this.props.updateTrendingSortBy;
      updateArticles = this.props.updateTrendingArticles;
    }
    return (
      <SentimentMenu 
        sortBy={sortBy} 
        articles={articles}
        updateSortBy={updateSortBy}
        updateArticles={updateArticles} 
      />
    );
  }
}

const mapStateToProps = state => ({
  searchSortBy: getSearchSortBy(state),
  trendingSortBy: getTrendingSortBy(state),
  searchArticles: getSearchResults(state),
  trendingArticles: getTrending(state)
});

const mapDispatchToProps = dispatch => ({
  updateSearchSortBy(sortBy) {
    dispatch(setSearchSortBy(sortBy));
  },
  updateTrendingSortBy(sortBy) {
    dispatch(setTrendingSortBy(sortBy));
  },
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
