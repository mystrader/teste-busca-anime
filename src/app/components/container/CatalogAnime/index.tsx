import Card from '@/app/components/CardItem';
import Filtro from '@/app/components/Filtro';
import Search from '@/app/components/Search';
import { IAnime } from '@/app/interfaces/anime';
import { getAnimesPerPage } from '@/app/utils/getAnimesPerPage';

import { getAnimesByMediaFormat } from '@/app/utils/getAnimeByMediaFormat';
import { getRepeatedFormat } from '@/app/utils/getRepeatedAnimeFormat';
import { useFavoriteAnimesStore } from '@/store/favoriteAnimesStore';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import styles from './CatalogAnime.module.css';

export default function CatalogAnime() {
  const [data, setData] = useState<IAnime[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const { favoriteAnimes, setFavoriteAnimes } = useFavoriteAnimesStore() as any;

  useEffect(() => {
    loadInitialAnimes();
  }, []);

  useEffect(() => {
    setData(favoriteAnimes);
  }, [favoriteAnimes]);

  const loadInitialAnimes = async () => {
    let newData = [];
    if (favoriteAnimes.length === 0) {
      newData = await getAnimesPerPage(1, 12);
      setFavoriteAnimes(newData);
    } else {
      newData = favoriteAnimes;
    }

    setData(newData);
  };

  const loadMoreAnimes = async () => {
    let currentFormat = getRepeatedFormat(favoriteAnimes);

    if (currentFormat === 'ALL_FORMATS') {
      const newData = await getAnimesPerPage(currentPage + 1, 12);
      setData((prevData) => [...prevData, ...newData]);
      setCurrentPage((prevPage) => prevPage + 1);
    } else {
      const newData = await getAnimesByMediaFormat(
        currentPage + 1,
        10,
        currentFormat as string,
      );
      setData((prevData) => [...prevData, ...newData]);
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  return (
    <>
      <div className={styles.container}>
        <Filtro />
        <Search />
      </div>
      <div className={styles.cardContainer}>
        {!data && <h3>carregando ....</h3>}
        {data?.map((anime, index) => (
          <Link
            href={`/details/${anime.id}`}
            key={index}
            className={styles.linkAnimeItem}
            title={`Detalhes do anime ${anime.title.english}`}
          >
            <Card
              imageUrl={anime?.coverImage.large}
              title={anime?.title.english}
              genres={anime?.genres}
              averageScore={anime?.averageScore}
            />
          </Link>
        ))}
        <div className={styles.buttonSearchMore}>
          <button onClick={loadMoreAnimes}>
            <Image
              src="/plus.svg"
              alt="Ver mais"
              width={30}
              height={24}
              title="Ver Mais"
            />
            <span>Ver mais</span>
          </button>
        </div>
      </div>
    </>
  );
}
