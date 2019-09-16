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
  urlToImage,
  tagColor }) {

  const tagColorStyles = {
    background: tagColor,
    width: '30px',
    height: '170px',
  };

  return (
    <div className={styles.container}>
      <div style={tagColorStyles}></div>
      <div className={styles.imageContainer}>
        <img src={urlToImage} />
      </div>
      <div className={styles.titleContainer}>
        <h3>{title}</h3>
        <p>{description}</p>
        <div className={styles.links}>
          <p>Published: {publishedAt}</p>
          <p>Author: {author}</p>
          <a href={url}>Full Article at {source.name}</a>
        </div>
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
