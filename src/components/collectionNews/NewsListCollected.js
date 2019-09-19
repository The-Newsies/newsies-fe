import React from 'react';
import PropTypes from 'prop-types';
import styles from '../news/NewsList.css';
import NewsItemCollected from './NewsItemCollected';

export default function NewsItemsList({ news }) {
  const newsList = news.map(article => (
    <li key={article.url}>
      <NewsItemCollected article={article}/>
    </li>
  ));

  return (
    <ul className={styles.container}>
      {newsList}
    </ul>
  );
}

NewsItemsList.propTypes = {
  news: PropTypes.array.isRequired
};
