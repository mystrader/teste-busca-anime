import React from 'react';
import styles from './Footer.module.css';

const Footer: React.FC = () => {
  return (
    <footer
      className={styles.footerAnime}
      title="Todos os direitos reservados a Winnin - prova Frontend"
    >
      <div>
        <span className={styles.textWhite}>BUSC</span>
        <span className={styles.textOrange}>ANIME</span>
      </div>
      <div className={styles.rightsReserved}>Todos os Direitos Reservados</div>
    </footer>
  );
};

export default Footer;
