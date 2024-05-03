'use client';
import Image from 'next/image';
import { useState } from 'react';
import styles from '../styles/page.module.css';
import Card from './components/CardItem';
import Filtro from './components/Filtro';
import Footer from './components/Footer';
import Header from './components/Header';
import Search from './components/Search';
import { IAnime } from './interfaces/anime';
import { getAnimesPerPage } from './utils/getAnimesPerPage';

export default function Home() {
  const [data, setData] = useState<IAnime[]>([]);
  const [currentPage, setCurrentPage] = useState(1);

  // Função para carregar mais animes
  const loadMoreAnimes = async () => {
    const newData = await getAnimesPerPage(currentPage + 1, 10);
    setData((prevData) => [...prevData, ...newData]);
    setCurrentPage((prevPage) => prevPage + 1);
  };

  // Função para carregar os primeiros animes
  const loadInitialAnimes = async () => {
    const newData = await getAnimesPerPage(1, 10);
    setData(newData);
  };

  // Carrega os primeiros animes quando o componente é montado
  useEffect(() => {
    loadInitialAnimes();
  }, []);

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
          <button onClick={loadMoreAnimes}>
            <Image src="/plus.svg" alt="Ver mais" width={30} height={24} />
            <span>Ver mais</span>
          </button>
        </div>
      </div>
      <Footer />
    </main>
  );
}
