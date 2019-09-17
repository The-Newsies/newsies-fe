import React from 'react';
import PropTypes from 'prop-types';
import styles from './NewsItem.css';

export default function NewsItem({ 
  title, 
  description, 
  publishedAt, 
  author, 
  url, 
  source, 
  urlToImage }) {


  return (
    <div className={styles.container}>
      <div className={styles.linkContainer}>
        <a href={url} rel='noopener noreferrer' target='_blank'>View at {source.name}</a>
      </div>
      <div className={styles.imageContainer}>
        <img src={urlToImage} />
      </div>
      <div className={styles.titleContainer}>
        <h3>{title}</h3>
        <p className={styles.title}>{description}</p>
        <footer className={styles.source}>
          <p>Published: {publishedAt}</p>
          <p>Author: {author}</p>
        </footer>
      </div>
    </div>
  );
}

NewsItem.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  urlToImage: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  publishedAt: PropTypes.string.isRequired,
  source: PropTypes.shape({ 
    name: PropTypes.string,
    id: PropTypes.string
  }).isRequired,
  url: PropTypes.string.isRequired,
  tagColor: PropTypes.string.isRequired
};
