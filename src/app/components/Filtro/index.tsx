'use client';

import { getAnimesByMediaFormat } from '@/app/utils/getAnimeByMediaFormat';
import { getAnimesPerPage } from '@/app/utils/getAnimesPerPage';
import { useFavoriteAnimesStore } from '@/store/favoriteAnimesStore';
import React, { useState } from 'react';
import styles from './Filtro.module.css';

const filtros = [
  { id: 1, nome: 'All Formats', format: 'ALL_FORMATS' },
  { id: 2, nome: 'Tv Show', format: 'TV' },
  { id: 3, nome: 'Movie', format: 'MOVIE' },
  { id: 4, nome: 'TV Short', format: 'TV_SHORT' },
  { id: 5, nome: 'Special', format: 'SPECIAL' },
  { id: 6, nome: 'OVA', format: 'OVA' },
  { id: 7, nome: 'ONA', format: 'ONA' },
];

const Filtro: React.FC = () => {
  const [filtroSelecionado, setFiltroSelecionado] = useState<number | null>(1);

  const { favoriteAnimes, setFavoriteAnimes } = useFavoriteAnimesStore();

  const handleSelecionarFiltro = (id: number) => {
    setFavoriteAnimes([]);
    if (filtroSelecionado === id) {
      setFiltroSelecionado(1);
    } else {
      setFiltroSelecionado(id);
    }
  };

  const updateListByMediaType = async (animeType: string) => {
    if (!animeType) return;

    const ANIME_TYPE = animeType.toUpperCase().toString();

    try {
      if (ANIME_TYPE === 'ALL_FORMATS') {
        const newData = await getAnimesPerPage(1, 10);
        setFavoriteAnimes(newData);
        return;
      } else {
        const newData = await getAnimesByMediaFormat(1, 10, ANIME_TYPE);
        setFavoriteAnimes(newData);
      }
    } catch (error) {
      console.error('Erro ao carregar animes:', error);
    }
  };

  return (
    <div className={styles.filtroBox}>
      {filtros?.map((filtro) => (
        <button
          key={filtro.id}
          className={`${styles.buttonFiltro} ${
            filtroSelecionado === filtro.id ? styles.selecionado : ''
          }`}
          onClick={() => (
            handleSelecionarFiltro(filtro?.id),
            updateListByMediaType(filtro?.format)
          )}
        >
          {filtro.nome}
        </button>
      ))}
    </div>
  );
};

export default Filtro;
