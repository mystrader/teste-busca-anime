import { gql } from '@apollo/client';

export const GET_ANIME_BY_ID = gql`
  query getAnimeById($id: Int!) {
    Media(id: $id) {
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
`;
