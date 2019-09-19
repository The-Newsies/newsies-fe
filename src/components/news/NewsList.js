import React from 'react';
import PropTypes from 'prop-types';
import NewsItem from './NewsItem';
import styles from './NewsList.css';

export default function NewsItemsList({ news }) {
  const newsList = news.map(article => (
    <li key={article.url}>
      <NewsItem article={article}/>
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
