import React from 'react';
import Avatar from '../avatar/Avatar';
import DropDownMenu from '../dropDownMenu/DropDownMenu';
import styles from './MyViewWrapper.css';

export default function MyViewWrapper() {
  return (
    <div className={styles.container}>
      <div className={styles.avatarSignOut}>
        <Avatar />
        <DropDownMenu />
      </div>
    </div>
  );
}
