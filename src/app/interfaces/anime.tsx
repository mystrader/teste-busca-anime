export interface IAnime {
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
