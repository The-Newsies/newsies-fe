import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './SearchBar.css';

function SearchBar({ handleClick }) {
  const [search, setSearch] = useState('');

  return (
    <div className={styles.white}>
      <label>
        <input type="text" placeholder="search all news" value={search} onChange={({ target }) => setSearch(target.value)}></input>
        <button className={styles.searchButton} onClick={() => handleClick(search)}>Go!</button>
      </label>
    </div>
  );
}

SearchBar.propTypes = {
  handleClick: PropTypes.func.isRequired
};

export default SearchBar;
