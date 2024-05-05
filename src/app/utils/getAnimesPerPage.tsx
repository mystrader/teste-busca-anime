import { GET_ANIMES_PAGE } from '../graphql/queries/getAnimesPerPage';
import { anilistClient } from '../services/anilistGraphql';

export async function getAnimesPerPage(page: number, perPage: number) {
  try {
    const { data } = await anilistClient.query({
      query: GET_ANIMES_PAGE,
      variables: {
        page,
        perPage,
      },
    });

    return data.Page.media;
  } catch (error) {
    console.error('Erro ao buscar animes por página:', error);
    throw new Error('Erro ao buscar animes por página');
  }
}
