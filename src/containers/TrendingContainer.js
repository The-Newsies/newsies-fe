import { connect } from 'react-redux';
import NewsList from '../components/news/NewsList';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { getTrending, getLoading } from '../selectors/trendingSelector';
import { fetchTrending } from '../actions/trendingActions';
import { fetchSearchByCategory } from '../actions/trendingActions';
import TagsContainer from './TagsContainer';

class TrendingContainer extends Component {
  static propTypes = {
    articles: PropTypes.array.isRequired,
    loading: PropTypes.bool.isRequired,
    fetch: PropTypes.func.isRequired,
    fetchByCategory: PropTypes.func.isRequired
  }

  componentDidMount() {
    this.props.fetch();
  }

  render() {
    const { articles, loading, fetchByCategory } = this.props;
    if(loading) return <h1>LOADING</h1>;
    return (
      <>
      <TagsContainer fetchByCategory={fetchByCategory}/>
      <NewsList news={articles} />
      </>
    );
  }
}

const mapStateToProps = state => ({
  articles: getTrending(state),
  loading: getLoading(state)
});

const mapDispatchToProps = dispatch => ({
  fetch() {
    dispatch(fetchTrending());
  },
  fetchByCategory(category) {
    dispatch(fetchSearchByCategory('', category));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TrendingContainer);
