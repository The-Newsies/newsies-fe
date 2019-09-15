import React from 'react';
import PropTypes from 'prop-types';

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
    width: '100x',
    height: '100px',
  };

  return (
    <div>
      <div><h3>{title}</h3></div>
      <div><p>{description}</p></div>
      <div><p>Author: {author}</p></div>
      <div><p>Published: {date}</p></div>
      <div><img src={image} /></div>
      <div><a href={sourceLink}>Full Article at {sourceName}</a></div>
      <div><div style={tagColorStyles}></div></div>
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
