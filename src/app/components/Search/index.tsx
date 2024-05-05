import { getAnimesBySearchTerm } from '@/app/utils/getAnimesBySearchTerm';
import { useFavoriteAnimesStore } from '@/store/favoriteAnimesStore';
import { useState } from 'react';
import styles from './Search.module.css';

export default function Search() {
  const [searchTerm, setSearchTerm] = useState('');
  const { setFavoriteAnimes } = useFavoriteAnimesStore();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const newData = await getAnimesBySearchTerm(1, 12, searchTerm);
      setFavoriteAnimes(newData);
      setSearchTerm('');
    } catch (error) {
      alert('Nenhum anime encontrado!');
      console.error('Erro ao buscar animes:', error);
    }
  };
  return (
    <div className={styles.inputSearchBox}>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Digite algo aqui..."
          className={styles.inputSearch}
          required
          name="searchAnimeWord"
          value={searchTerm}
          onChange={handleChange}
        />
        <button type="submit" className={styles.buttonSearch}>
          Buscar
        </button>
      </form>
    </div>
  );
}
