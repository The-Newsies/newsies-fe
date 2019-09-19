import { connect } from 'react-redux';
import NewsList from '../components/news/NewsList';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { getTrending, getLoading } from '../selectors/trendingSelector';
import { fetchTrending } from '../actions/trendingActions';
import { fetchSearchByCategory } from '../actions/trendingActions';
import { setTag } from '../actions/tagsActions';
import TagsContainer from './TagsContainer';
import { currentTag } from '../selectors/tagsSelector';
import Loading from '../components/loading/Loading';
import SentimentMenuContainer from '../containers/SentimentMenuContainer';


class TrendingContainer extends Component {
  static propTypes = {
    articles: PropTypes.array.isRequired,
    loading: PropTypes.bool.isRequired,
    fetch: PropTypes.func.isRequired,
    fetchByCategory: PropTypes.func.isRequired,
    setSelectedTag: PropTypes.func.isRequired,
    selected: PropTypes.string
  }

  componentDidMount() {
    this.props.fetch();
  }

  render() {
    const { articles, loading, fetchByCategory, setSelectedTag, selected } = this.props;
    if(loading) return <Loading />;
    return (
      <>
      <SentimentMenuContainer view="trending" />
      <TagsContainer fetchByCategory={fetchByCategory} setSelectedTag={setSelectedTag} selected={selected} />
      <NewsList news={articles} />
      </>
    );
  }
}

const mapStateToProps = state => ({
  articles: getTrending(state),
  loading: getLoading(state),
  selected: currentTag(state)
});

const mapDispatchToProps = dispatch => ({
  fetch() {
    dispatch(fetchTrending());
  },
  fetchByCategory(category) {
    dispatch(fetchSearchByCategory('', category));
  },
  setSelectedTag(category) {
    dispatch(setTag(category));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TrendingContainer);
