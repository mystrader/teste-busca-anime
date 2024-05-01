import { gql } from '@apollo/client';

export const GET_ANIMES_PAGE = gql`
  query getAnimesPerPage($page: Int, $perPage: Int) {
    Page(page: $page, perPage: $perPage) {
      pageInfo {
        total
        currentPage
        hasNextPage
      }
      media {
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
      }
    }
  }
`;
