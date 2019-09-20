import React from 'react';
import styles from './Footer.css';

export default function Footer() {
  return (
    <div className={styles.body}>
      <span className={styles.container}>Newzie created by <a href="https://github.com/aramirezdecruz3148">A. Ramirez de Cruz</a> <a href="https://github.com/carlosus">C. Santiago</a> <a href="https://github.com/lacrivella">LA. Crivella</a> <a href="https://github.com/sepuckett86">S. Puckett</a></span>
      <p className={styles.container}>Powered by the<a href="https://newsapi.org/">News API</a></p>
    </div>
  );
}
