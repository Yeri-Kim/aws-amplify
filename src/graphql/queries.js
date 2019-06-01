// eslint-disable
// this is an auto generated file. This will be overwritten

export const getPicture = `query GetPicture($id: ID!) {
  getPicture(id: $id) {
    id
    userId
    username
    file {
      bucket
      region
      key {
        bucket
        region
      }
      uri {
        bucket
        region
      }
    }
  }
}
`;
export const listPictures = `query ListPictures(
  $filter: ModelPictureFilterInput
  $limit: Int
  $nextToken: String
) {
  listPictures(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      userId
      username
      file {
        bucket
        region
      }
    }
    nextToken
  }
}
`;
