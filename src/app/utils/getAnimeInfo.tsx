import { GET_ANIME_INFO } from '../graphql/queries/getAnimeInfo';
import { anilistClient } from '../services/anilistGraphql';

export async function getAnimeInfo(id: number) {
  try {
    const { data } = await anilistClient.query({
      query: GET_ANIME_INFO,
      variables: {
        id,
      },
    });

    return data.Media;
  } catch (error) {
    console.error('Erro ao buscar informações do anime:', error);
    throw new Error('Erro ao buscar informações do anime');
  }
}
