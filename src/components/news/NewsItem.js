import React from 'react';
import PropTypes from 'prop-types';
import styles from './NewsItem.css';
import { useAuth0 } from '../../Auth0Provider';
import Sentiment from 'sentiment';
import CollectionModalContainer from '../../containers/CollectionModalContainer';

export default function NewsItem({ article }) {
  const { isAuthenticated } = useAuth0();

  // sentiment analysis
  const sentiment = new Sentiment();
  const result = sentiment.analyze(article.description || article.title || '');
  const score = result.score;
  const { 
    title, 
    description, 
    publishedAt, 
    // author, 
    url, 
    source, 
    urlToImage } = article;

  return (
    <div className={styles.container}>
      <div className={styles.linkContainer}>
        <a href={url} rel='noopener noreferrer' target='_blank'>View at {source.name}</a>
        {isAuthenticated ?  <CollectionModalContainer article={article} /> : <></>}
      </div>
      <div className={styles.imageContainer}>
        <img src={urlToImage} />
      </div>
      <div className={styles.titleContainer}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
        <footer className={styles.source}>
          <p>Published: {publishedAt}</p>
          {/* <p>Author: {author}</p> */}
          <p>Sentiment: {score}</p>
        </footer>
      </div>
    </div>
  );
}

NewsItem.propTypes = {
  article: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    urlToImage: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    publishedAt: PropTypes.string.isRequired,
    source: PropTypes.shape({ 
      name: PropTypes.string,
      id: PropTypes.string
    }),
    url: PropTypes.string.isRequired,
  })
};
