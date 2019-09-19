import React from 'react';
import PropTypes from 'prop-types';
import styles from './NewsItemB.css';
import { useAuth0 } from '../../Auth0Provider';
import CollectionModalContainer from '../../containers/CollectionModalContainer';

export default function NewsItem({ article }) {
  const { isAuthenticated } = useAuth0();

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
      <div className={styles.card}>
        <div className={styles.image}>
          <img src={urlToImage} />
        </div>
        <div className={styles.modalButton}>
          {isAuthenticated ?  <CollectionModalContainer article={article} /> : <></>}
        </div>
        <div className={styles.source}>
          <i><a href={url} rel='noopener noreferrer' target='_blank'>View at {source.name}</a></i>
        </div>
        <div className={styles.content}>
          <h3 className={styles.title}>{title}</h3>
          <p className={styles.description}>{description}</p>
          <footer>Published: {publishedAt}</footer>
        </div>
       

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

