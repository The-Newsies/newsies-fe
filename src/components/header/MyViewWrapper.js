import React from 'react';
import SearchBarContainer from '../../containers/SearchBarContainer';
import Avatar from '../avatar/Avatar';
import DropDownMenu from '../dropDownMenu/DropDownMenu';
import styles from './MyViewWrapper.css';
import PropTypes from 'prop-types';

export default function MyViewWrapper({ location }) {
  if(location.pathname === '/myNews') {
    return (
      <div className={styles.container}>
        <div className={styles.avatarSignOut}>
          <Avatar />
          <DropDownMenu />
        </div>
      </div>
    );
  }
  return (
    <div className={styles.container}>
      <div>
        <SearchBarContainer />
      </div>
      <div className={styles.avatarSignOut}>
        <Avatar />
        <DropDownMenu />
      </div>
    </div>
  );
}

MyViewWrapper.propTypes = {
  location: PropTypes.object.isRequired
};
