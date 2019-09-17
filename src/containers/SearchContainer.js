import { connect } from 'react-redux';
import NewsList from '../components/news/NewsList';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { getSearchResults, getLoading } from '../selectors/searchSelector';

class SearchContainer extends Component {
  static propTypes = {
    articles: PropTypes.array.isRequired,
    loading: PropTypes.bool.isRequired
  }

  render() {
    const { articles, loading } = this.props;
    if(loading) return <h1>LOADING</h1>;
    return (
      <NewsList news={articles} />
    );
  }
}

const mapStateToProps = state => ({
  articles: getSearchResults(state),
  loading: getLoading(state)
});

export default connect(
  mapStateToProps
)(SearchContainer);
