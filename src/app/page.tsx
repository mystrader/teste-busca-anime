import Image from 'next/image';
import styles from '../styles/page.module.css';
import Card from './components/CardItem';
import Filtro from './components/Filtro';
import Footer from './components/Footer';
import Header from './components/Header';
import Search from './components/Search';
import mockCardDataArray from './utils/mock/mockDataAnime';

export default function Home() {
  return (
    <main className={styles.main}>
      <Header />
      <div className={styles.container}>
        <Filtro />
        <Search />
      </div>
      <div className={styles.cardContainer}>
        {mockCardDataArray.map((cardData, index) => (
          <Card key={index} {...cardData} />
        ))}
        <div className={styles.buttonSearchMore}>
          <button>
            <Image src="/plus.svg" alt="Ver mais" width={30} height={24} />
            <span>Ver mais</span>
          </button>
        </div>
      </div>
      <Footer />
    </main>
  );
}
