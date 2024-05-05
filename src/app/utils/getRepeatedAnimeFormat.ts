import { IAnime } from '../interfaces/anime';

export function getRepeatedFormat(favoriteAnimes: IAnime[]) {
  if (!favoriteAnimes || favoriteAnimes.length === 0) {
    return null;
  }

  const firstFormat = favoriteAnimes[0].format;
  const allFormatsMatch = favoriteAnimes.every(
    (anime) => anime.format === firstFormat,
  );

  return allFormatsMatch ? firstFormat : 'ALL_FORMATS';
}
