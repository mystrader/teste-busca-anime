'use client';
import Footer from '@/app/components/Footer';
import Header from '@/app/components/Header';
import styles from '@/styles/page.module.css';

import { AverageScore, Tag } from '@/app/components/shared';
import { IAnime } from '@/app/interfaces/anime';
import { mulish } from '@/app/utils/font';
import { getAnimeById } from '@/app/utils/getAnimesById';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

interface PageProps {
  id: string;
}

export default function Page({ id }: PageProps) {
  const [animeItemInfo, setAnimeItemInfo] = useState<IAnime | null>(null);
  const [placeholderImage] = useState<string>('https://placehold.co/600x400');

  const router = useRouter();

  useEffect(() => {
    if (router.query.id) {
      loadAnimeInfo(router.query.id as string);
    }
  }, [router.query.id]);

  const loadAnimeInfo = async (animeId: string) => {
    try {
      const animeInfo = await getAnimeById(animeId as any);
      setAnimeItemInfo(animeInfo);
    } catch (error) {
      console.error('Error loading anime info:', error);
    }
  };

  return (
    <main className={`${styles.main} ${mulish.className}`}>
      <Header />
      <div className={styles.navigation}>
        <Link href="/" className={styles.goBackLink}>
          Voltar
        </Link>
      </div>
      <section className={styles.wrapper}>
        {!animeItemInfo && (
          <div className={styles.loadingContainer}>
            <h3 className={styles.loading}>carregando ....</h3>
          </div>
        )}
        <div className={styles.imageColumn}>
          {animeItemInfo && (
            <img
              src={
                animeItemInfo?.coverImage.large || placeholderImage.toString()
              }
              alt={animeItemInfo?.title.english}
              className={styles?.image}
              title="Imagem do anime"
            />
          )}
        </div>

        <div className={styles.infoColumn}>
          {animeItemInfo && (
            <>
              <h3 className={`${styles.title} ${styles.largeTitle}`}>
                {animeItemInfo.title.english}
              </h3>
              <div>
                <strong>Formato:</strong> {animeItemInfo?.format}
              </div>
              <div>
                <strong>Ano:</strong> {animeItemInfo?.seasonYear}
              </div>
              <div>
                <strong>Episódios:</strong> {animeItemInfo?.episodes}
              </div>
              <ul className={styles.genreList}>
                {animeItemInfo?.genres.map((genre, index) => (
                  <li key={index}>
                    <Tag name={genre} />
                  </li>
                ))}
              </ul>
              {animeItemInfo?.averageScore && (
                <div className={styles.averageScore}>
                  <AverageScore
                    numberScore={animeItemInfo.averageScore.toString()}
                  />
                </div>
              )}
            </>
          )}
        </div>
      </section>
      <Footer />
    </main>
  );
}
