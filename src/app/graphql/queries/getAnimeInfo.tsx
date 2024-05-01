import { gql } from "@apollo/client";

export const GET_ANIME_INFO = gql`
  query media($id: Int) {
    Media(id: $id) {
      title {
        english
        native
      }
      description
      type
      format
      coverImage {
        large
      }
    }
  }
`;
