import React from 'react';
import PropTypes from 'prop-types';
import Sentiment from 'sentiment';

export default function SentimentMenu({ 
  sortBy,
  articles,
  updateSortBy, 
  updateArticles,
}) {
  const scored = articles.map(article => {
    const sentiment = new Sentiment();
    const result = sentiment.analyze(article.description || article.title || '');
    const score = result.score;
    return { ...article, sentiment: score };
  });

  const scoredAbsolute = articles.map(article => {
    const sentiment = new Sentiment();
    const result = sentiment.analyze(article.description || article.title || '');
    const score = result.positive.length + result.negative.length;
    return { ...article, sentiment: score };
  });

  const handleChange = ({ target }) => {
    let updatedArticles;
    switch(target.value) {
      case 'date':
        updatedArticles = scored.sort((first, second) => {
          return new Date(first.publishedAt).getTime() - new Date(second.publishedAt).getTime();
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
        updatedArticles = scoredAbsolute.sort(function(a, b) {
          return a.sentiment - b.sentiment;
        });
        break;
      case 'emotional':
        updatedArticles = scoredAbsolute.sort(function(a, b) {
          return b.sentiment - a.sentiment;
        });
        break;
      default:
        updatedArticles = scored;
        break;
    }
    console.log(updateArticles);

    updateArticles(updatedArticles);
    updateSortBy(target.value);
  };

  return (
    <section>
      <p>Sort By:</p>
      <select onChange={handleChange} selected={sortBy}>
        <option value="date">Date</option>
        <option value="positive">Positive</option>
        <option value="negative">Negative</option>
        <option value="neutral">Neutral</option>
        <option value="emotional">Emotional</option>
      </select>
    </section>
  );
}

SentimentMenu.propTypes = {
  sortBy: PropTypes.string.isRequired,
  articles: PropTypes.array.isRequired,
  updateSortBy: PropTypes.func.isRequired,
  updateArticles: PropTypes.func.isRequired
};
