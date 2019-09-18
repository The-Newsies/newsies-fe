import React from 'react';
import PropTypes from 'prop-types';
import Tag from './Tag';
import style from './TagsList.css';

//isSelected = {name === selected}

export default function TagsList({ fetchByCategory, tags, setSelectedTag, selected }) {
  const tagArray = tags.map(({ name, color, _id }) => (
    <li key={_id}>
      <Tag isSelected={name === selected} setSelectedTag={setSelectedTag} name={name} color={color} fetchByCategory={fetchByCategory}/>
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
  })).isRequired,
  setSelectedTag: PropTypes.func.isRequired,
  selected: PropTypes.string
};
