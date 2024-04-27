import React from 'react';
import styles from './Header.module.css';

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <span className={styles.textWhite}>BUSC</span>
      <span className={styles.textAnime}>ANIME</span>
    </header>
  );
};

export default Header;