import React from 'react';
import PropTypes from 'prop-types';

export default function ModalContent({ isClosed, userName }) {
  return (
    <div>
      <button onClick={isClosed}>Got it X</button>
      <h2>Welcome {userName}</h2>
      <section>
        <p>This is your personalized news page.
          To filter your news feed based on your interests
          you can select tags from the right. You can also search
          by keyword for newstories in the searchbar in the header.
          Interested seeing top trending stories, switch to 
          your trending news view by clicking the link under the 
          searchbar.
        </p>
      </section>
    </div>
  );
}

ModalContent.propTypes = {
  isClosed: PropTypes.func.isRequired,
  userName: PropTypes.string.isRequired
};

