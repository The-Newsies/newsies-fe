import React from 'react';
import PropTypes from 'prop-types';
import NewsItem from './NewsItem';

export default function NewsItemsList({ news }) {
  const newsList = news.map(({
    title,
    description,
    image,
    author,
    date,
    sourceName,
    sourceLink,
    tagColor
  }) => (
    <li key={sourceLink}>
      <NewsItem 
        title={title}
        description={description}
        image={image}
        author={author}
        date={date}
        sourceName={sourceName}
        sourceLink={sourceLink}
        tagColor={tagColor}
      />
    </li>
  ));

  return (
    <ul>
      {newsList}
    </ul>
  );
}

NewsItemsList.propTypes = {
  news: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    sourceName: PropTypes.string.isRequired,
    sourceLink: PropTypes.string.isRequired,
    tagColor: PropTypes.string.isRequired
  })).isRequired
};
