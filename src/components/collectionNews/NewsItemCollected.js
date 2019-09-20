import React from 'react';
import PropTypes from 'prop-types';
import styles from '../news/NewsItemB.css';

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
      <div className={styles.card}>
        <div className={styles.image}>
          <img src={urlToImage} />
        </div>
        <div className={styles.deleteButton}>
          <button onClick={() => deleteArticle(articleId)}>
          ✗
          </button>
        </div>
        <div className={styles.source}>
          <i><a href={url} rel='noopener noreferrer' target='_blank'>View at {source.name}</a></i>
        </div>
        <div className={styles.content}>
          <h3 className={styles.title}>{title}</h3>
          <p className={styles.description}>{description}</p>
          <footer>
            <p>Published: {publishedAt.split('T')[0]}</p>
            
          </footer>
        </div>
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
