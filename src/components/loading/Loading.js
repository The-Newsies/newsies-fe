import React from 'react';
import styles from './Loading.css';
import logo from '../../assets/logo.png';

export default function Loading() {
  return (
    <>
    <div className={styles.container}>
      <div className={styles.loading}>
        <img src={logo} />

        <section>
          <span className={styles.loadingAnim}></span>
        </section>
      </div>
    </div>
    </>
  );
}



