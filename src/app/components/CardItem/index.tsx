import React from 'react';
import { AverageScore, Tag } from '../shared';
import styles from './Card.module.css';

interface CardProps {
  imageUrl: string;
  title: string;
  genreList?: string[];
  averageScore?: number;
}

const Card: React.FC<CardProps> = ({
  imageUrl,
  title,
  genreList,
  averageScore,
}) => {
  return (
    <div className={styles.card}>
      <div className={styles.overlay}></div>
      <img
        src="https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx1-CXtrrkMpJ8Zq.png"
        alt={title}
        className={styles.image}
      />
      <h3 className={styles.title}>{title}</h3>

      <ul className={styles.genreList}>
        {genreList &&
          genreList.map((genre, index) => (
            <li key={index}>
              <Tag name={genre} />
            </li>
          ))}
      </ul>

      {averageScore && (
        <div className={styles.averageScore}>
          <AverageScore numberScore={averageScore.toString()} />
        </div>
      )}
    </div>
  );
};

export default Card;
