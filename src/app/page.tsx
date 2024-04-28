import styles from '../styles/page.module.css';
import Filtro from './components/Filtro';
import Footer from './components/Footer';
import Header from './components/Header';
import Search from './components/Search';
import { AverageScore, Tag } from './components/shared';

export default function Home() {
  return (
    <main className={styles.main}>
      <Header />
      <div className={styles.container}>
        <Filtro />
        <Search />
        <AverageScore numberScore="81" />
        <Tag name="Drama" />
      </div>
      <Footer />
    </main>
  );
}
