import { gql } from '@apollo/client';
import { anilistClient } from '../services/anilistGraphql';

export async function getAnimesBySearchTerm(
  page: number,
  perPage: number,
  searchTerm: string,
) {
  try {
    const { data } = await anilistClient.query({
      query: gql`
        query getAnimesBySearchTerm(
          $page: Int
          $perPage: Int
          $searchTerm: String
        ) {
          Page(page: $page, perPage: $perPage) {
            media(search: $searchTerm) {
              id
              coverImage {
                large
              }
              title {
                english
                native
              }
              format
              seasonYear
              status
              episodes
              genres
              averageScore
            }
          }
        }
      `,
      variables: {
        page,
        perPage,
        searchTerm,
      },
    });

    if (data && data.Page && data.Page.media) {
      return data.Page.media;
    } else {
      return [];
    }
  } catch (error) {
    console.error('Erro ao buscar animes por termo de busca:', error);
    return null;
  }
}
