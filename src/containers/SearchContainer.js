import { connect } from 'react-redux';
import SearchBar from '../components/searchBar/SearchBar';
import { fetchSearchAll } from '../actions/searchActions';

const mapDispatchToProps = dispatch => ({
  handleClick(searchTerm) {
    dispatch(fetchSearchAll(searchTerm));
  }
});

export default connect(
  null,
  mapDispatchToProps
)(SearchBar);

