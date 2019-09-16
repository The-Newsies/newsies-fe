import { connect } from 'react-redux';
import SearchBar from '../components/searchBar/SearchBar';
import NewsViewToggle from '../components/newsView/NewsViewToggle';
import { fetchSearchAll } from '../actions/searchActions';
import { updateDisplay } from '../actions/displayActions';
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SearchBarContainer extends Component {
  static propTypes = {
    handleClick: PropTypes.func.isRequired,
    handleTrending: PropTypes.func.isRequired
  }

  render() {
    const { handleClick, handleTrending } = this.props;

    return (
      <>
      <SearchBar handleClick={handleClick} />
      <NewsViewToggle handleTrending={handleTrending} />
      </>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  handleClick(searchTerm) {
    dispatch(fetchSearchAll(searchTerm));
    dispatch(updateDisplay('search'));
  },
  handleTrending() {
    dispatch(updateDisplay('trending'));
  }
});

export default connect(
  null,
  mapDispatchToProps
)(SearchBarContainer);

