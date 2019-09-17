import React from 'react';
import PropTypes from 'prop-types';
import Tag from './Tag';
import style from './TagsList.css';

export default function TagsList({ fetchByCategory, tags }) {
  const tagArray = tags.map(({ name, color, _id }) => (
    <li key={_id}>
      <Tag name={name} color={color} fetchByCategory={fetchByCategory}/>
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
  fetchByCategory: PropTypes.func.isRequired,
  tags: PropTypes.arrayOf(PropTypes.shape({
    _id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired
  })).isRequired
};
