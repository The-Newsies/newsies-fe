import React from 'react';
import PropTypes from 'prop-types';
import NewsItem from './NewsItem';
import styles from './NewsList.css';
import Sentiment from 'sentiment';

export default function NewsItemsList({ news }) {
  const newsWithSentiment = news.map(article => {
    // sentiment analysis
    const sentiment = new Sentiment();
    const result = sentiment.analyze(article.description || article.title || '');
    const score = result.score;
    return { ...article, sentiment: score };
  });

  const newsList = newsWithSentiment.map(article => (
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
  news: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string,
    urlToImage: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    publishedAt: PropTypes.string.isRequired,
    source: PropTypes.shape({ 
      name: PropTypes.string.isRequired,
      id: PropTypes.string
    }).isRequired,
    url: PropTypes.string.isRequired,
  })).isRequired
};
