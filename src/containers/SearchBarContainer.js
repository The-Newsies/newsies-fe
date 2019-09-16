import { connect } from 'react-redux';
import SearchBar from '../components/searchBar/SearchBar';
import { fetchSearchAll } from '../actions/searchActions';
import { updateDisplay } from '../actions/displayActions';

const mapDispatchToProps = dispatch => ({
  handleClick(searchTerm) {
    dispatch(fetchSearchAll(searchTerm));
    dispatch(updateDisplay('search'));
  }
});

export default connect(
  null,
  mapDispatchToProps
)(SearchBar);

