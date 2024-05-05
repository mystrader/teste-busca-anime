// Mock que me auxiliou no início para criar a estrutura do projeto, com dados fictícios de animes

export interface AnimeData {
  imageUrl: string;
  title: string;
  genreList?: string[];
  averageScore?: number;
}

const mockCardDataArray: AnimeData[] = [
  {
    imageUrl: 'https://placehold.co/317x250/ccc/bbb/png',
    title: 'Zom 100: Zombie ni Naru Made ni Shitai 100 no Koto',
    genreList: ['Action', 'Adventure', 'Comedy', 'Drama', 'Fantasy'],
    averageScore: 44,
  },
  {
    imageUrl: 'https://placehold.co/317x250/ccc/bbb/png',
    title: 'Mushoku Tensei II: Isekai Ittara Honki Dasu',
    genreList: ['Action', 'Adventure', 'Fantasy'],
    averageScore: 92,
  },
  {
    imageUrl: 'https://placehold.co/317x250/ccc/bbb/png',
    title: 'One Piece',
    genreList: ['Action', 'Adventure', 'Comedy', 'Drama'],
    averageScore: 90,
  },
  {
    imageUrl: 'https://placehold.co/317x250/ccc/bbb/png',
    title: 'Lv1 Maou to One Room Yuusha',
    genreList: ['Action', 'Fantasy'],
    averageScore: 60,
  },
  {
    imageUrl: 'https://placehold.co/317x250/ccc/bbb/png',
    title: 'Horimiya: piece',
    genreList: ['Comedy', 'Romance', 'School'],
    averageScore: 56,
  },
  {
    imageUrl: 'https://placehold.co/317x250/ccc/bbb/png',
    title: 'Watashi no Shiawase na Kekkon',
    genreList: ['Drama', 'Romance'],
    averageScore: 78,
  },
  {
    imageUrl: 'https://placehold.co/317x250/ccc/bbb/png',
    title: 'Tate no Yuusha no Nariagari',
    genreList: ['Action', 'Adventure', 'Drama', 'Fantasy'],
    averageScore: 87,
  },
  {
    imageUrl: 'https://placehold.co/317x250/ccc/bbb/png',
    title: 'Games Mortal: The Reckoning',
    genreList: ['Terror'],
    averageScore: 48,
  },
];

export default mockCardDataArray;
