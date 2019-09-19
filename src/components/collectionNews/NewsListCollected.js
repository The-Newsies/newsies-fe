import React from 'react';
import PropTypes from 'prop-types';
import styles from '../news/NewsList.css';
import NewsItemCollected from './NewsItemCollected';

export default function NewsListCollected({ news }) {
  const newsList = news.map(article => (
    <li key={article.source.id}>
      <NewsItemCollected article={article}/>
    </li>
  ));

  return (
    <ul className={styles.container}>
      {newsList}
    </ul>
  );
}

NewsListCollected.propTypes = {
  news: PropTypes.array.isRequired
};
