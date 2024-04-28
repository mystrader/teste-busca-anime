import styles from '../styles/page.module.css';
import Card from './components/CardItem';
import Filtro from './components/Filtro';
import Footer from './components/Footer';
import Header from './components/Header';
import Search from './components/Search';

export default function Home() {
  return (
    <main className={styles.main}>
      <Header />
      <div className={styles.container}>
        <Filtro />
        <Search />
      </div>
      <div className={styles.cardContainer}>
        <Card
          imageUrl="https://placehold.co/317x250/ccc/bbb/png"
          title={'Zom 100: Zombie ni Naru Made ni Shitai 100 no Koto'}
        />
        <Card
          imageUrl="https://placehold.co/317x250/ccc/bbb/png"
          title={'Mushoku Tensei II: Isekai Ittara Honki Dasu'}
        />
        <Card
          imageUrl="https://placehold.co/317x250/ccc/bbb/png"
          title={'One Piece'}
        />

        <Card
          imageUrl="https://placehold.co/317x250/ccc/bbb/png"
          title={'Lv1 Maou to One Room Yuusha'}
        />
        <Card
          imageUrl="https://placehold.co/317x250/ccc/bbb/png"
          title={'Horimiya: piece'}
        />
        <Card
          imageUrl="https://placehold.co/317x250/ccc/bbb/png"
          title={'Watashi no Shiawase na Kekkon'}
        />
        <Card
          imageUrl="https://placehold.co/317x250/ccc/bbb/png"
          title={'Tate no Yuusha no Nariagari'}
        />
        <Card
          imageUrl="https://placehold.co/317x250/ccc/bbb/png"
          title={'Goblin Slayer II'}
        />
      </div>
      {/* <AverageScore numberScore="81" />
        <Tag name="Drama" /> */}

      <Footer />
    </main>
  );
}
