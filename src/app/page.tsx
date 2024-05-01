import Image from 'next/image';
import styles from '../styles/page.module.css';
import Card from './components/CardItem';
import Filtro from './components/Filtro';
import Footer from './components/Footer';
import Header from './components/Header';
import Search from './components/Search';
import { IAnime } from './interfaces/anime';
import { getAnimesPerPage } from './utils/getAnimesPerPage';

export default async function Home() {
  const data: IAnime[] = await getAnimesPerPage(1, 10);

  return (
    <main className={styles.main}>
      <Header />
      <div className={styles.container}>
        <Filtro />
        <Search />
      </div>
      <div className={styles.cardContainer}>
        {data.map((anime, index) => (
          <Card
            key={index}
            imageUrl={anime?.coverImage.large}
            title={anime?.title.english}
            genres={anime?.genres}
            averageScore={anime?.averageScore}
          />
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
