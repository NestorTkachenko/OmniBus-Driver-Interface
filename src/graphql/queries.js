// eslint-disable
// this is an auto generated file. This will be overwritten

export const getPassenger = `query GetPassenger($id: ID!) {
  getPassenger(id: $id) {
    id
    name
    description
    location
  }
}
`;
export const listPassengers = `query ListPassengers(
  $filter: ModelPassengerFilterInput
  $limit: Int
  $nextToken: String
) {
  listPassengers(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      description
      location
    }
    nextToken
  }
}
`;
export const getUser = `query GetUser($id: ID!) {
  getUser(id: $id) {
    id
    name
    location
  }
}
`;
export const listUsers = `query ListUsers(
  $filter: TableUserFilterInput
  $limit: Int
  $nextToken: String
) {
  listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      location
    }
    nextToken
  }
}
`;
