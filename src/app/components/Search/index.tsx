import React from 'react';
import styles from './Search.module.css';

const Search: React.FC = () => {
  return (
    <div className={styles.inputSearchBox}>
      <input
        type="text"
        placeholder="Digite algo aqui..."
        className={styles.inputSearch}
      />
      <button className={styles.buttonSearch}>Buscar</button>
    </div>
  );
};

export default Search;
