import Footer from '@/app/components/Footer';
import Header from '@/app/components/Header';
import CatalogAnime from '@/app/components/container/CatalogAnime';
import { mulish } from '@/app/utils/font';
import styles from '@/styles/page.module.css';
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Busca Anime</title>
        <meta name="description" content="Prova FrontEnd 2024 - Winnin" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main} ${mulish.className}`}>
        <Header />
        <CatalogAnime />
        <Footer />
      </main>
    </>
  );
}
