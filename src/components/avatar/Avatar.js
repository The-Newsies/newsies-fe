import React from 'react';
import { useAuth0 } from '../../Auth0Provider';
import avatar from '../../assets/earth.png';
import styles from './Avatar.css';

export default function Avatar() {
  const { user } = useAuth0();
  return (
    <div>
      {user ? <img className={styles.avatarImg} src={user.picture} /> 
        : <img className={styles.avatarImg} src={avatar} />}
    </div>
  );
}
