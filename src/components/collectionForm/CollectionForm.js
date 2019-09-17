import React from 'react';
import PropTypes from 'prop-types';

export default function CollectionForm({ createCollection }) {
  return (
    <form onSubmit={createCollection}>
      <input></input>
    </form>
  );
}

CollectionForm.propTypes = {
};
