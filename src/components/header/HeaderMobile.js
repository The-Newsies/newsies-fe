import React from 'react';
import { useAuth0 } from '../../Auth0Provider';
import LandingWrapper from './LandingWrapper';
import MyViewWrapper from './MyViewWrapper';
import styles from './HeaderMobile.css';
import logoMobile from '../../assets/logoMobile.png';
import menuStack from '../../assets/menuStack.png';
import closeIcon from '../../assets/closeIcon.png';
import searchIcon from '../../assets/searchIcon.png';
import SearchBar from '../searchBar/SearchBar';
import NewsViewToggle from '../newsView/NewsViewToggle';

export default function Header() {

  const { isAuthenticated } = useAuth0();

  return (
    <>
    <header>
      <div className={styles.container}>
        <nav>
          <div className={styles.navLogo}>
            <i><img className={styles.logo} src={logoMobile} /></i>
          </div> 
          <div className={styles.menuIconsOpen}>
            <i><img src={menuStack} /></i>
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

          {/* {!isAuthenticated ? <LandingWrapper /> : <MyViewWrapper />} */}
        </nav>
        <SearchBar />
        <NewsViewToggle />
      </div>
    </header>

  </>
  );
}
  
  
  
