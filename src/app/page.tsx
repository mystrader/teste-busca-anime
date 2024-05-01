import Image from 'next/image';
import styles from '../styles/page.module.css';
import Card from './components/CardItem';
import Filtro from './components/Filtro';
import Footer from './components/Footer';
import Header from './components/Header';
import Search from './components/Search';
import { getAnimesPerPage } from './utils/getAnimesPerPage';

interface IAnime {
  id: number;
  title: {
    english: string;
    native: string;
  };
  coverImage: {
    large: string;
  };
  episodes: number;
  seasonYear: number;
  status: string;
  format: string;
  genres: string[];
  averageScore: string;
}

export default async function Home() {
  const data: IAnime[] = await getAnimesPerPage(1, 10);

  console.log('DATA ANIME >>>>>>>>>', data);

  const animeData = data.map((anime: IAnime) => {
    return {
      id: anime.id,
      title: anime.title.english,
      coverImage: anime.coverImage.large,
      episodes: anime.episodes,
      seasonYear: anime.seasonYear,
      status: anime.status,
      format: anime.format,
      genres: anime.genres,
      averageScore: anime.averageScore,
    };
  });

  console.log('DATA ANIME >>>>>>>>>', animeData);

  return (
    <main className={styles.main}>
      <Header />
      <div className={styles.container}>
        <Filtro />
        <Search />
      </div>
      <div className={styles.cardContainer}>
        {animeData.map((anime, index) => (
          <Card
            key={index}
            imageUrl={anime.coverImage}
            title={anime.title}
            genres={anime.genres}
            averageScore={anime.averageScore} // Passe averageScore como prop aqui
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
