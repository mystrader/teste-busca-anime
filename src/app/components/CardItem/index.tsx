import React from 'react';
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
    </div>
  );
};

export default Card;
