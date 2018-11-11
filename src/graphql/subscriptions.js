// eslint-disable
// this is an auto generated file. This will be overwritten

export const onCreatePassenger = `subscription OnCreatePassenger {
  onCreatePassenger {
    id
    name
    description
    location
  }
}
`;
export const onUpdatePassenger = `subscription OnUpdatePassenger {
  onUpdatePassenger {
    id
    name
    description
    location
  }
}
`;
export const onDeletePassenger = `subscription OnDeletePassenger {
  onDeletePassenger {
    id
    name
    description
    location
  }
}
`;
export const onCreateUser = `subscription OnCreateUser($id: ID, $name: String, $location: String) {
  onCreateUser(id: $id, name: $name, location: $location) {
    id
    name
    location
  }
}
`;
export const onUpdateUser = `subscription OnUpdateUser($id: ID, $name: String, $location: String) {
  onUpdateUser(id: $id, name: $name, location: $location) {
    id
    name
    location
  }
}
`;
export const onDeleteUser = `subscription OnDeleteUser($id: ID, $name: String, $location: String) {
  onDeleteUser(id: $id, name: $name, location: $location) {
    id
    name
    location
  }
}
`;
