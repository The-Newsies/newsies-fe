import React, { useState } from 'react';
import PropTypes from 'prop-types';

export default function AddCollection({ createCollection }) {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  const submitWrapper = (event) => {
    event.preventDefault();
    createCollection(name, description);
    setDescription('');
    setName('');
  };

  return (
    <form onSubmit={submitWrapper}>
      <input type="text" name="name" value={name} onChange={({ target }) => setName(target.value)} placeholder="Collection Name"></input>
      <input type="text" name="description" value={description} onChange={({ target }) => setDescription(target.value)} placeholder="Description"></input>
      <button>Add Collection</button>
    </form>
  );
}

AddCollection.propTypes = {
  createCollection: PropTypes.func.isRequired
};
