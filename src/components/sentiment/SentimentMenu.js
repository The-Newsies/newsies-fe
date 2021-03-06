import React from 'react';
import PropTypes from 'prop-types';
import Sentiment from 'sentiment';
import styles from './SentimentMenu.css';

export default function SentimentMenu({ 
  articles,
  updateArticles,
}) {
  const scored = articles.map(article => {
    const sentiment = new Sentiment();
    const result = sentiment.analyze(article.description || article.title || '');
    const score = result.score;
    const sentimentAbsolute = result.calculation.reduce((acc, curr) => {
      acc = acc + Math.abs(Object.values(curr)[0]);
      return acc;
    }, 0);
    return { ...article, sentiment: score, sentimentAbsolute };
  });

  const sortFunctionMap = {
    date: (a, b) => (b.publishedAt < a.publishedAt) ? -1 : ((b.publishedAt > a.publishedAt) ? 1 : 0),
    positive: (a, b) => b.sentiment - a.sentiment,
    negative: (a, b) => a.sentiment - b.sentiment,
    neutral: (a, b) => a.sentimentAbsolute - b.sentimentAbsolute,
    emotional: (a, b) => b.sentimentAbsolute - a.sentimentAbsolute
  };

  const handleChange = ({ target }) => {
    const sortFunction = sortFunctionMap[target.value];
    const updatedArticles = sortFunction ? scored.sort(sortFunction) : scored;
    
    updateArticles(updatedArticles);
  };

  return (
    <div className={styles.menu}>
      <select onChange={handleChange} className={styles.selectCss}>
        <option>SORT BY:</option>
        <option value="date">Date</option>
        <option value="positive">Positive</option>
        <option value="negative">Negative</option>
        <option value="neutral">Neutral</option>
        <option value="emotional">Emotional</option>
      </select>
    </div>
  );
}

SentimentMenu.propTypes = {
  articles: PropTypes.array.isRequired,
  updateArticles: PropTypes.func.isRequired
};
