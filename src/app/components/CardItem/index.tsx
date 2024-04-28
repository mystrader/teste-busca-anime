import React from 'react';
import { AverageScore, Tag } from '../shared';
import styles from './Card.module.css';

interface CardProps {
  imageUrl: string;
  title: string;
}

const Card: React.FC<CardProps> = ({ imageUrl, title }) => {
  return (
    <div className={styles.card}>
      <div className={styles.overlay}></div>
      <img src={imageUrl} alt={title} className={styles.image} />
      <h3 className={styles.title}>{title}</h3>

      <ul className={styles.genreList}>
        <li>
          <Tag name="Action" />
        </li>
        <li>
          <Tag name="Adventury" />
        </li>
        <li>
          <Tag name="Commedy" />
        </li>
        <li>
          <Tag name="Drama" />
        </li>
        <li>
          <Tag name="Fantasy" />
        </li>
      </ul>
      <div className={styles.averageScore}>
        <AverageScore numberScore="81" />
      </div>
    </div>
  );
};

export default Card;
