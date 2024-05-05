'use client';

import { useFavoriteAnimesStore } from '@/store/favoriteAnimesStore';
import React, { useState } from 'react';
import styles from './Filtro.module.css';

const filtros = [
  { id: 1, nome: 'All Formats' },
  { id: 2, nome: 'Tv Show' },
  { id: 3, nome: 'Movie' },
  { id: 4, nome: 'TV Short' },
  { id: 5, nome: 'Special' },
  { id: 6, nome: 'OVA' },
  { id: 7, nome: 'ONA' },
  { id: 8, nome: 'Teste' },
];

const Filtro: React.FC = () => {
  const [filtroSelecionado, setFiltroSelecionado] = useState<number | null>(1);

  const { favoriteAnimes, setFavoriteAnimes } = useFavoriteAnimesStore();

  const handleSelecionarFiltro = (id: number) => {
    console.log(favoriteAnimes);
    setFavoriteAnimes([]);
    if (filtroSelecionado === id) {
      setFiltroSelecionado(1);
    } else {
      setFiltroSelecionado(id);
    }
  };

  return (
    <div className={styles.filtroBox}>
      {filtros.map((filtro) => (
        <button
          key={filtro.id}
          className={`${styles.buttonFiltro} ${
            filtroSelecionado === filtro.id ? styles.selecionado : ''
          }`}
          onClick={() => handleSelecionarFiltro(filtro.id)}
        >
          {filtro.nome}
        </button>
      ))}
    </div>
  );
};

export default Filtro;
