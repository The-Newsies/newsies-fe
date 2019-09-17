import React from 'react';
import PropTypes from 'prop-types';

export default function ModalContent({ isClosed, userName }) {
  return (
    <div>
      <button onClick={isClosed}>Got it X</button>
      <h2>Hello {userName}</h2>
      <section>
        <p>Will need to write a description here about what the collections
          page is for and how to navigate the trending and search pages to create collections.
        </p>
      </section>
    </div>
  );
}

ModalContent.propTypes = {
  isClosed: PropTypes.func.isRequired,
  userName: PropTypes.string.isRequired
};

