import React from 'react';
import { useAuth0 } from '../../Auth0Provider';
import LandingWrapper from './LandingWrapper';
import MyViewWrapper from './MyViewWrapper';
import styles from './HeaderMobile.css';
import logoMobile from '../../assets/logoMobile.png';
import menuStack from '../../assets/menuStack.png';
import closeIcon from '../../assets/closeIcon.png';
import searchIcon from '../../assets/searchIcon.png';

export default function Header() {

  const { isAuthenticated } = useAuth0();

  // const selectElement = (s) => document.querySelector(s);
  // selectElement(s: '.menuIconsOpen').addEventListener('click', () => {
  //   selectElement(s: '.nav-list').classList.add('active');
  // });

  return (
    <>
    <header>
      <div className={styles.container}>
        <nav>
          <div className={styles.menuIconsOpen}>
            <img src={menuStack} />
          </div>
          <ul className={styles.navList}>
            <div className={styles.menuIconsClose}>
              <img src={closeIcon} />
            </div>
            <li className={styles.navItem}>
              <a>Trending</a>
            </li>
            <li className={styles.navItem}>
              <a>My News</a>
            </li>
            <li className={styles.navItem}>
              <a>Sign Out</a>
            </li>
          </ul>  

          <div className={styles.navLogo}>
            <img className={styles.logo} src={logoMobile} />
          </div> 

          <div className={styles.menuIconsOpen}>
            <img src={searchIcon} />
          </div>
          <ul className={styles.searchList}>
            <div className={styles.searchIconsClose}>
              <img src={closeIcon} />
            </div>
            <li className={styles.navItem}>
              <a>Trending</a>
            </li>
            <li className={styles.navItem}>
              <a>My News</a>
            </li>
            <li className={styles.navItem}>
              <a>Sign Out</a>
            </li>
          </ul>  
          {/* {!isAuthenticated ? <LandingWrapper /> : <MyViewWrapper />} */}
        </nav>
      </div>
    </header>
  </>
  );
}
  
  
  
