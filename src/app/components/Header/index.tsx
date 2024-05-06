import Link from 'next/link';
import React from 'react';
import styles from './Header.module.css';

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <Link href="/">
        <span className={styles.textWhite}>BUSC</span>
        <span className={styles.textOrange}>ANIME</span>
      </Link>
    </header>
  );
};

export default Header;
