import { GET_ANIME_BY_ID } from '../graphql/queries/getAnimesById';
import { anilistClient } from '../services/anilistGraphql';

export async function getAnimeById(id: number) {
  try {
    const { data } = await anilistClient.query({
      query: GET_ANIME_BY_ID,
      variables: {
        id,
      },
    });

    if (data && data.Media) {
      return data.Media;
    } else {
      return null;
    }
  } catch (error) {
    console.error('Erro ao buscar anime por ID:', error);
    return null;
  }
}
