import { GET_ANIME_INFO } from '../graphql/queries/getAnimeInfo';
import { anilistClient } from '../services/anilistGraphql';

export async function getAnimeInfo(id: number) {
  const { data } = await anilistClient.query({
    query: GET_ANIME_INFO,
    variables: {
      id,
    },
  });

  return data.Media;
}
