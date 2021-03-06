import { connect } from 'react-redux';
import TagsList from '../components/tags/TagsList';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { getTags } from '../selectors/tagsSelector';
import { fetchTags } from '../actions/tagsActions';

class TagsContainer extends Component {
  static propTypes = {
    tags: PropTypes.array.isRequired,
    fetch: PropTypes.func.isRequired,
    fetchByCategory: PropTypes.func.isRequired,
    setSelectedTag: PropTypes.func.isRequired,
    selected: PropTypes.string
  }

  componentDidMount() {
    this.props.fetch();
  }

  render() {
    const { 
      tags, 
      fetchByCategory, 
      setSelectedTag, 
      selected } = this.props;

    return (
      <TagsList 
        tags={tags} 
        fetchByCategory={fetchByCategory} 
        setSelectedTag={setSelectedTag} 
        selected={selected} />
    );
  }
}

const mapStateToProps = state => ({
  tags: getTags(state)
});

const mapDispatchToProps = dispatch => ({
  fetch() {
    dispatch(fetchTags());
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TagsContainer);
