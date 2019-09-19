import { connect } from 'react-redux';
import SearchBar from '../components/searchBar/SearchBar';
import { fetchSearchAll } from '../actions/searchActions';
import { updateDisplay } from '../actions/displayActions';
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SearchBarContainer extends Component {
  static propTypes = {
    handleClick: PropTypes.func.isRequired,
  }

  render() {
    const { handleClick } = this.props;

    return (
      <>
      <SearchBar handleClick={handleClick} />
      </>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  handleClick(searchTerm) {
    dispatch(fetchSearchAll(searchTerm));
    dispatch(updateDisplay('search'));
  }
});

export default connect(
  null,
  mapDispatchToProps
)(SearchBarContainer);

