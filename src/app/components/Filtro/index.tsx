'use client';

import { FILTROS } from '@/app/constants/filter.constant';
import { getAnimesByMediaFormat } from '@/app/utils/getAnimeByMediaFormat';
import { getAnimesPerPage } from '@/app/utils/getAnimesPerPage';
import { useFavoriteAnimesStore } from '@/store/favoriteAnimesStore';
import React, { useState } from 'react';
import styles from './Filtro.module.css';

const Filtro: React.FC = () => {
  const [filtroSelecionado, setFiltroSelecionado] = useState<number | null>(1);

  const { setFavoriteAnimes } = useFavoriteAnimesStore();

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
        const newData = await getAnimesByMediaFormat(1, 12, ANIME_TYPE);
        setFavoriteAnimes(newData);
      }
    } catch (error) {
      console.error('Erro ao carregar animes:', error);
    }
  };

  return (
    <div className={styles.filtroBox}>
      {FILTROS?.map((filtro) => (
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
