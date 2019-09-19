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
    const sentimentAbsolute = result.calculation.reduce((acc, i) => {
      acc = acc + Math.abs(Object.values(i)[0]);
      return acc;
    }, 0);
    return { ...article, sentiment: score, sentimentAbsolute };
  });

  const handleChange = ({ target }) => {
    let updatedArticles;
    switch(target.value) {
      case 'date':
        updatedArticles = scored.sort(function(a, b) {
          return (b.publishedAt < a.publishedAt) ? -1 : ((b.publishedAt > a.publishedAt) ? 1 : 0);
        });
        break;
      case 'positive':
        updatedArticles = scored.sort(function(a, b) {
          return b.sentiment - a.sentiment;
        });
        break;
      case 'negative':
        updatedArticles = scored.sort(function(a, b) {
          return a.sentiment - b.sentiment;
        });
        break;
      case 'neutral':
        updatedArticles = scored.sort(function(a, b) {
          return a.sentimentAbsolute - b.sentimentAbsolute;
        });
        break;
      case 'emotional':
        updatedArticles = scored.sort(function(a, b) {
          return b.sentimentAbsolute - a.sentimentAbsolute;
        });
        break;
      default:
        updatedArticles = scored;
        break;
    }

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
