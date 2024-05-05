'use client';
import Card from '@/app/components/CardItem';
import Filtro from '@/app/components/Filtro';
import Search from '@/app/components/Search';
import { IAnime } from '@/app/interfaces/anime';
import { getAnimesPerPage } from '@/app/utils/getAnimesPerPage';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import styles from './CatalogAnime.module.css';

export default function CatalogAnime() {
  const [data, setData] = useState<IAnime[]>([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    loadInitialAnimes();
  }, []);

  const loadInitialAnimes = async () => {
    const newData = await getAnimesPerPage(1, 10);
    setData(newData);
  };

  const loadMoreAnimes = async () => {
    const newData = await getAnimesPerPage(currentPage + 1, 10);
    setData((prevData) => [...prevData, ...newData]);
    setCurrentPage((prevPage) => prevPage + 1);
  };

  return (
    <>
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
    </>
  );
}
