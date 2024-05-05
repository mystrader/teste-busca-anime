import { GET_ANIMES_BY_MEDIA_FORMAT } from '../graphql/queries/getAnimesByMediaFormat';
import { anilistClient } from '../services/anilistGraphql';

export async function getAnimesByMediaFormat(
  page: number,
  perPage: number,
  format: string,
) {
  try {
    const { data } = await anilistClient.query({
      query: GET_ANIMES_BY_MEDIA_FORMAT,
      variables: {
        page,
        perPage,
        format,
      },
    });

    if (data && data.Page && data.Page.media) {
      return data.Page.media;
    } else {
      return [];
    }
  } catch (error) {
    console.error('Erro ao buscar animes por formato de mídia:', error);

    return null;
  }
}
