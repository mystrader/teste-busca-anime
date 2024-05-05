import { gql } from '@apollo/client';

export const GET_ANIMES_BY_SEARCH = gql`
  query getAnimesBySearch($page: Int, $perPage: Int, $searchTerm: String) {
    Page(page: $page, perPage: $perPage) {
      pageInfo {
        total
        currentPage
        hasNextPage
      }
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
`;
