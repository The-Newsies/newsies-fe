import React from 'react';
import PropTypes from 'prop-types';
import styles from './NewsItem.css';

export default function NewsItem({ 
  title, 
  description, 
  date, 
  author, 
  sourceLink, 
  sourceName, 
  image,
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
        <img src={image} />
      </div>
      <div className={styles.titleContainer}>
        <h3>{title}</h3>
        <p>{description}</p>
        <div className={styles.links}>
          <p>Published: {date}</p>
          <p>Author: {author}</p>
          <a href={sourceLink}>Full Article at {sourceName}</a>
        </div>
      </div>
    </div>
  );
}

NewsItem.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  sourceName: PropTypes.string.isRequired,
  sourceLink: PropTypes.string.isRequired,
  tagColor: PropTypes.string.isRequired
};
