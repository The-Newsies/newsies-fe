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
  return (
    <div>
      <div><h3>{title}</h3></div>
      <div><p>{description}</p></div>
      <div><p>{author}</p></div>
      <div><p>{date}</p></div>
      <div><img src={image} /></div>
      <div><a href={sourceLink}>{sourceName}</a></div>
      <div><div>{tagColor}</div></div>
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
