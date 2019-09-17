import React from 'react';
import PropTypes from 'prop-types';
import Tag from './Tag';
import style from './TagsList.css';

export default function TagsList({ tags }) {
  const tagArray = tags.map(({ name, color, _id }) => (
    <li key={_id}>
      <Tag name={name} color={color} />
    </li>
  ));

  return (
    <section className={style.TagsList}>
      <ul>
        {tagArray}
      </ul>
    </section>
  );
}

TagsList.propTypes = {
  tags: PropTypes.arrayOf(PropTypes.shape({
    _id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired
  })).isRequired
};
