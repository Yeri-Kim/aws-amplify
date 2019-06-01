// eslint-disable
// this is an auto generated file. This will be overwritten

export const createPicture = `mutation CreatePicture($input: CreatePictureInput!) {
  createPicture(input: $input) {
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
export const updatePicture = `mutation UpdatePicture($input: UpdatePictureInput!) {
  updatePicture(input: $input) {
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
export const deletePicture = `mutation DeletePicture($input: DeletePictureInput!) {
  deletePicture(input: $input) {
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
