import React from 'react';
import PropTypes from 'prop-types';
import Tag from './Tag';

export default function TagsList({ tags }) {
  const tagArray = tags.map(({ name, color }) => (
    <li key={name}>
      <Tag name={name} color={color} />
    </li>
  ));

  return (
    <ul>
      {tagArray}
    </ul>
  );
}

TagsList.propTypes = {
  tags: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired
  })).isRequired
};
