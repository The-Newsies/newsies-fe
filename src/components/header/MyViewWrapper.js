import React from 'react';
import SearchBarContainer from '../../containers/SearchBarContainer';
import NewsViewToggle from '../newsView/NewsViewToggle';
import Avatar from '../avatar/Avatar';
import DropDownMenu from '../dropDownMenu/DropDownMenu';
import styles from './MyViewWrapper.css';

export default function MyViewWrapper() {
  return (
    <div className={styles.container}>
      <div>
        <SearchBarContainer />
        <NewsViewToggle />
      </div>
      <div className={styles.avatarSignOut}>
        <Avatar />
        <DropDownMenu />
      </div>
    </div>
  );
}
