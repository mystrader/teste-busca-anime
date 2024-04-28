import styles from '../styles/page.module.css';
import Filtro from './components/Filtro';
import Header from './components/Header';

export default function Home() {
  return (
    <main className={styles.main}>
      <Header />
      <div className={styles.container}>
        <Filtro />
      </div>
    </main>
  );
}
