import React from 'react';
import PropTypes from 'prop-types';
import styles from '../news/NewsItem.css';

export default function NewsItemCollected({ article, deleteArticle }) {
  const {
    title,
    description,
    publishedAt,
    url,
    source,
    urlToImage,
    _id
  } = article;

  const articleId = _id;

  return (
    <div className={styles.container}>
      <div className={styles.linkContainer}>
        <a href={url} rel="noopener noreferrer" target="_blank">
          View at {source.name}
        </a>
        <button onClick={() => deleteArticle(articleId)}>
          Delete from Collection
        </button>
      </div>
      <div className={styles.imageContainer}>
        <img src={urlToImage} />
      </div>
      <div className={styles.titleContainer}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
        <footer className={styles.source}>
          <p>Published: {publishedAt}</p>
        </footer>
      </div>
    </div>
  );
}

NewsItemCollected.propTypes = {
  article: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    urlToImage: PropTypes.string.isRequired,
    publishedAt: PropTypes.string.isRequired,
    source: PropTypes.shape({
      name: PropTypes.string,
      id: PropTypes.string
    }),
    _id: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
  }),
  deleteArticle: PropTypes.func.isRequired
};
