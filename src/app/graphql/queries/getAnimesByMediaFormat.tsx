import { gql } from '@apollo/client';

export const GET_ANIMES_BY_MEDIA_FORMAT = gql`
  query getAnimesByMediaFormat(
    $page: Int
    $perPage: Int
    $format: MediaFormat
  ) {
    Page(page: $page, perPage: $perPage) {
      pageInfo {
        total
        currentPage
        hasNextPage
      }
      media(format: $format) {
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
