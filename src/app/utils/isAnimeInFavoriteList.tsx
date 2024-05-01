interface IAnime {
  id?: number;
  englishTitle?: string;
  nativeTitle: string;
  coverImage: string;
  episodes?: number;
  seasonYear?: number;
  status?: string;
  format?: string;
  genre?: string;
  averageScore?: number;
}

export const isAnimeInFavoriteList = (
  animeNativeTitle: string,
  favoriteAnimeList: IAnime[],
) => {
  return favoriteAnimeList.some(
    (anime: IAnime) => anime.nativeTitle === animeNativeTitle,
  );
};
