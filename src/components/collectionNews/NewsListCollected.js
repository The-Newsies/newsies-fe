import React from 'react';
import PropTypes from 'prop-types';
import styles from '../news/NewsList.css';
import NewsItemCollected from './NewsItemCollected';

export default function NewsListCollected({ news, deleteArticle }) {
  const newsList = news.map(article => (
    <li key={article._id}>
      <NewsItemCollected deleteArticle={deleteArticle} article={article}/>
    </li>
  ));

  return (
    <ul className={styles.container}>
      {newsList}
    </ul>
  );
}

NewsListCollected.propTypes = {
  news: PropTypes.array.isRequired,
  deleteArticle: PropTypes.func.isRequired
};
