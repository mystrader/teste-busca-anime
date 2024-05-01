import React from 'react';
import { AverageScore, Tag } from '../shared';
import styles from './Card.module.css';

interface CardProps {
  imageUrl: string;
  title: string;
  genres?: string[];
  averageScore?: string; // Adicione averageScore aqui
}

const Card: React.FC<CardProps> = ({
  imageUrl,
  title,
  genres,
  averageScore, // Adicione averageScore aqui
}) => {
  return (
    <div className={styles.card}>
      <div className={styles.overlay}></div>
      <img src={imageUrl} alt={title} className={styles.image} />
      <h3 className={styles.title}>{title}</h3>

      <ul className={styles.genreList}>
        {genres &&
          genres.map((genre, index) => (
            <li key={index}>
              <Tag name={genre} />
            </li>
          ))}
      </ul>

      {averageScore && ( // Verifique se averageScore existe antes de renderizar o componente AverageScore
        <div className={styles.averageScore}>
          <AverageScore numberScore={averageScore.toString()} />
        </div>
      )}
    </div>
  );
};

export default Card;
