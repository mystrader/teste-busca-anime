interface IAnime {
  id?: number;
  englishTitle?: string;
  nativeTitle: string;
  coverImage: string;
  episodes?: number;
  seasonYear?: number;
  status?: string;
  format?: string;
}

export const isAnimeInFavoriteList = (
  animeNativeTitle: string,
  favoriteAnimeList: IAnime[],
) => {
  return favoriteAnimeList.some(
    (anime: IAnime) => anime.nativeTitle === animeNativeTitle,
  );
};
