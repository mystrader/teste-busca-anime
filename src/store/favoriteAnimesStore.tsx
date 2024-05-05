import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface IAnime {
  id?: number;
  englishTitle?: string;
  nativeTitle: string;
  coverImage: string;
  episodes?: number;
  seasonYear?: number;
  status?: string;
  format?: string;
  genres?: string;
}

type AnimeListType = {
  favoriteAnimes: IAnime[];
  setFavoriteAnimes: (animes: IAnime[]) => void;
  favoritesCounter: number;
  addAnime: (anime: IAnime) => void;
  removeAnime: (anime: IAnime) => void;
};

export const useFavoriteAnimesStore = create(
  persist<AnimeListType>(
    (set) => ({
      favoriteAnimes: [],
      favoritesCounter: 0,
      setFavoriteAnimes: (animes: IAnime[]) => {
        set({ favoriteAnimes: animes });
      },
      addAnime: (anime: IAnime) => {
        set((state: AnimeListType) => ({
          favoriteAnimes: [
            ...state.favoriteAnimes,
            {
              coverImage: anime.coverImage,
              englishTitle: anime.englishTitle,
              episodes: anime.episodes,
              format: anime.format,
              id: anime.id,
              nativeTitle: anime.nativeTitle,
              genres: anime.genres,
            },
          ],
          favoritesCounter: state.favoritesCounter + 1,
        }));
      },
      removeAnime: (anime: IAnime) => {
        set((state: AnimeListType) => ({
          favoriteAnimes: state.favoriteAnimes.filter(
            (item: IAnime) => item.nativeTitle !== anime.nativeTitle,
          ),
          favoritesCounter: state.favoritesCounter - 1,
        }));
      },
    }),
    {
      name: 'favorite-animes',
    },
  ),
);
