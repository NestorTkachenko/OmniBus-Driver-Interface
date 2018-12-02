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
export const onCreateMain = `subscription OnCreateMain(
  $id: ID
  $area: String
  $time: String
  $name: String
  $route: String
) {
  onCreateMain(id: $id, area: $area, time: $time, name: $name, route: $route) {
    id
    area
    time
    name
    route
    coords
    speed
  }
}
`;
export const onUpdateMain = `subscription OnUpdateMain(
  $id: ID
  $area: String
  $time: String
  $name: String
  $route: String
) {
  onUpdateMain(id: $id, area: $area, time: $time, name: $name, route: $route) {
    id
    area
    time
    name
    route
    coords
    speed
  }
}
`;
export const onDeleteMain = `subscription OnDeleteMain(
  $id: ID
  $area: String
  $time: String
  $name: String
  $route: String
) {
  onDeleteMain(id: $id, area: $area, time: $time, name: $name, route: $route) {
    id
    area
    time
    name
    route
    coords
    speed
  }
}
`;
export const onCreateDriver = `subscription OnCreateDriver(
  $id: ID
  $area: String
  $username: String
  $route: String
  $coords: String
) {
  onCreateDriver(
    id: $id
    area: $area
    username: $username
    route: $route
    coords: $coords
  ) {
    id
    area
    username
    route
    coords
  }
}
`;
export const onUpdateDriver = `subscription OnUpdateDriver(
  $id: ID
  $area: String
  $username: String
  $route: String
  $coords: String
) {
  onUpdateDriver(
    id: $id
    area: $area
    username: $username
    route: $route
    coords: $coords
  ) {
    id
    area
    username
    route
    coords
  }
}
`;
export const onDeleteDriver = `subscription OnDeleteDriver(
  $id: ID
  $area: String
  $username: String
  $route: String
  $coords: String
) {
  onDeleteDriver(
    id: $id
    area: $area
    username: $username
    route: $route
    coords: $coords
  ) {
    id
    area
    username
    route
    coords
  }
}
`;
export const onCreateRoute = `subscription OnCreateRoute(
  $id: ID
  $area: String
  $route: String
  $stopnum: Int
  $stopname: String
) {
  onCreateRoute(
    id: $id
    area: $area
    route: $route
    stopnum: $stopnum
    stopname: $stopname
  ) {
    id
    area
    route
    stopnum
    stopname
    coords
    times
  }
}
`;
export const onUpdateRoute = `subscription OnUpdateRoute(
  $id: ID
  $area: String
  $route: String
  $stopnum: Int
  $stopname: String
) {
  onUpdateRoute(
    id: $id
    area: $area
    route: $route
    stopnum: $stopnum
    stopname: $stopname
  ) {
    id
    area
    route
    stopnum
    stopname
    coords
    times
  }
}
`;
export const onDeleteRoute = `subscription OnDeleteRoute(
  $id: ID
  $area: String
  $route: String
  $stopnum: Int
  $stopname: String
) {
  onDeleteRoute(
    id: $id
    area: $area
    route: $route
    stopnum: $stopnum
    stopname: $stopname
  ) {
    id
    area
    route
    stopnum
    stopname
    coords
    times
  }
}
`;
export const onCreateStop = `subscription OnCreateStop(
  $id: ID
  $area: String
  $stopnum: String
  $stopname: String
  $name: String
) {
  onCreateStop(
    id: $id
    area: $area
    stopnum: $stopnum
    stopname: $stopname
    name: $name
  ) {
    id
    area
    stopnum
    stopname
    name
    ontime
    passon
    passoff
  }
}
`;
export const onUpdateStop = `subscription OnUpdateStop(
  $id: ID
  $area: String
  $stopnum: String
  $stopname: String
  $name: String
) {
  onUpdateStop(
    id: $id
    area: $area
    stopnum: $stopnum
    stopname: $stopname
    name: $name
  ) {
    id
    area
    stopnum
    stopname
    name
    ontime
    passon
    passoff
  }
}
`;
export const onDeleteStop = `subscription OnDeleteStop(
  $id: ID
  $area: String
  $stopnum: String
  $stopname: String
  $name: String
) {
  onDeleteStop(
    id: $id
    area: $area
    stopnum: $stopnum
    stopname: $stopname
    name: $name
  ) {
    id
    area
    stopnum
    stopname
    name
    ontime
    passon
    passoff
  }
}
`;
export const onCreateStopData = `subscription OnCreateStopData(
  $id: ID
  $area: String
  $stopnum: String
  $stopname: String
  $name: String
) {
  onCreateStopData(
    id: $id
    area: $area
    stopnum: $stopnum
    stopname: $stopname
    name: $name
  ) {
    id
    area
    stopnum
    stopname
    name
    ontime
    stoptime
    passon
    passoff
  }
}
`;
export const onUpdateStopData = `subscription OnUpdateStopData(
  $id: ID
  $area: String
  $stopnum: String
  $stopname: String
  $name: String
) {
  onUpdateStopData(
    id: $id
    area: $area
    stopnum: $stopnum
    stopname: $stopname
    name: $name
  ) {
    id
    area
    stopnum
    stopname
    name
    ontime
    stoptime
    passon
    passoff
  }
}
`;
export const onDeleteStopData = `subscription OnDeleteStopData(
  $id: ID
  $area: String
  $stopnum: String
  $stopname: String
  $name: String
) {
  onDeleteStopData(
    id: $id
    area: $area
    stopnum: $stopnum
    stopname: $stopname
    name: $name
  ) {
    id
    area
    stopnum
    stopname
    name
    ontime
    stoptime
    passon
    passoff
  }
}
`;
export const onCreateRouteStop = `subscription OnCreateRouteStop(
  $area: String
  $route: String
  $stopnum: Int
  $stopname: String
  $coords: String
) {
  onCreateRouteStop(
    area: $area
    route: $route
    stopnum: $stopnum
    stopname: $stopname
    coords: $coords
  ) {
    area
    route
    stopnum
    stopname
    coords
    times
  }
}
`;
export const onUpdateRouteStop = `subscription OnUpdateRouteStop(
  $area: String
  $route: String
  $stopnum: Int
  $stopname: String
  $coords: String
) {
  onUpdateRouteStop(
    area: $area
    route: $route
    stopnum: $stopnum
    stopname: $stopname
    coords: $coords
  ) {
    area
    route
    stopnum
    stopname
    coords
    times
  }
}
`;
export const onDeleteRouteStop = `subscription OnDeleteRouteStop(
  $area: String
  $route: String
  $stopnum: Int
  $stopname: String
  $coords: String
) {
  onDeleteRouteStop(
    area: $area
    route: $route
    stopnum: $stopnum
    stopname: $stopname
    coords: $coords
  ) {
    area
    route
    stopnum
    stopname
    coords
    times
  }
}
`;
export const onCreateRouteData = `subscription OnCreateRouteData(
  $id: ID
  $area: String
  $route: String
  $stopnum: Int
  $stopname: String
) {
  onCreateRouteData(
    id: $id
    area: $area
    route: $route
    stopnum: $stopnum
    stopname: $stopname
  ) {
    id
    area
    route
    stopnum
    stopname
    coords
    times
  }
}
`;
export const onUpdateRouteData = `subscription OnUpdateRouteData(
  $id: ID
  $area: String
  $route: String
  $stopnum: Int
  $stopname: String
) {
  onUpdateRouteData(
    id: $id
    area: $area
    route: $route
    stopnum: $stopnum
    stopname: $stopname
  ) {
    id
    area
    route
    stopnum
    stopname
    coords
    times
  }
}
`;
export const onDeleteRouteData = `subscription OnDeleteRouteData(
  $id: ID
  $area: String
  $route: String
  $stopnum: Int
  $stopname: String
) {
  onDeleteRouteData(
    id: $id
    area: $area
    route: $route
    stopnum: $stopnum
    stopname: $stopname
  ) {
    id
    area
    route
    stopnum
    stopname
    coords
    times
  }
}
`;
export const onCreateHistoryData = `subscription OnCreateHistoryData(
  $id: ID
  $area: String
  $route: String
  $time: String
  $name: String
) {
  onCreateHistoryData(
    id: $id
    area: $area
    route: $route
    time: $time
    name: $name
  ) {
    id
    area
    route
    time
    name
    coords
    speed
  }
}
`;
export const onUpdateHistoryData = `subscription OnUpdateHistoryData(
  $id: ID
  $area: String
  $route: String
  $time: String
  $name: String
) {
  onUpdateHistoryData(
    id: $id
    area: $area
    route: $route
    time: $time
    name: $name
  ) {
    id
    area
    route
    time
    name
    coords
    speed
  }
}
`;
export const onDeleteHistoryData = `subscription OnDeleteHistoryData(
  $id: ID
  $area: String
  $route: String
  $time: String
  $name: String
) {
  onDeleteHistoryData(
    id: $id
    area: $area
    route: $route
    time: $time
    name: $name
  ) {
    id
    area
    route
    time
    name
    coords
    speed
  }
}
`;
export const onCreateStopDataFeed = `subscription OnCreateStopDataFeed(
  $id: ID
  $area: String
  $stopnum: String
  $stopname: String
  $name: String
) {
  onCreateStopDataFeed(
    id: $id
    area: $area
    stopnum: $stopnum
    stopname: $stopname
    name: $name
  ) {
    id
    area
    stopnum
    stopname
    name
    ontime
    stoptime
    passon
    passoff
  }
}
`;
export const onUpdateStopDataFeed = `subscription OnUpdateStopDataFeed(
  $id: ID
  $area: String
  $stopnum: String
  $stopname: String
  $name: String
) {
  onUpdateStopDataFeed(
    id: $id
    area: $area
    stopnum: $stopnum
    stopname: $stopname
    name: $name
  ) {
    id
    area
    stopnum
    stopname
    name
    ontime
    stoptime
    passon
    passoff
  }
}
`;
export const onDeleteStopDataFeed = `subscription OnDeleteStopDataFeed(
  $id: ID
  $area: String
  $stopnum: String
  $stopname: String
  $name: String
) {
  onDeleteStopDataFeed(
    id: $id
    area: $area
    stopnum: $stopnum
    stopname: $stopname
    name: $name
  ) {
    id
    area
    stopnum
    stopname
    name
    ontime
    stoptime
    passon
    passoff
  }
}
`;
export const onCreateStopFeed = `subscription OnCreateStopFeed(
  $id: ID
  $area: String
  $route: String
  $stopnum: String
  $stopname: String
) {
  onCreateStopFeed(
    id: $id
    area: $area
    route: $route
    stopnum: $stopnum
    stopname: $stopname
  ) {
    id
    area
    route
    stopnum
    stopname
    name
    ontime
    stoptime
    passon
    passoff
  }
}
`;
export const onUpdateStopFeed = `subscription OnUpdateStopFeed(
  $id: ID
  $area: String
  $route: String
  $stopnum: String
  $stopname: String
) {
  onUpdateStopFeed(
    id: $id
    area: $area
    route: $route
    stopnum: $stopnum
    stopname: $stopname
  ) {
    id
    area
    route
    stopnum
    stopname
    name
    ontime
    stoptime
    passon
    passoff
  }
}
`;
export const onDeleteStopFeed = `subscription OnDeleteStopFeed(
  $id: ID
  $area: String
  $route: String
  $stopnum: String
  $stopname: String
) {
  onDeleteStopFeed(
    id: $id
    area: $area
    route: $route
    stopnum: $stopnum
    stopname: $stopname
  ) {
    id
    area
    route
    stopnum
    stopname
    name
    ontime
    stoptime
    passon
    passoff
  }
}
`;
export const onCreateDriverList = `subscription OnCreateDriverList(
  $id: ID
  $area: String
  $route: String
  $username: String
  $name: String
) {
  onCreateDriverList(
    id: $id
    area: $area
    route: $route
    username: $username
    name: $name
  ) {
    id
    area
    route
    username
    name
    coords
    direction
  }
}
`;
export const onUpdateDriverList = `subscription OnUpdateDriverList(
  $id: ID
  $area: String
  $route: String
  $username: String
  $name: String
) {
  onUpdateDriverList(
    id: $id
    area: $area
    route: $route
    username: $username
    name: $name
  ) {
    id
    area
    route
    username
    name
    coords
    direction
  }
}
`;
export const onDeleteDriverList = `subscription OnDeleteDriverList(
  $id: ID
  $area: String
  $route: String
  $username: String
  $name: String
) {
  onDeleteDriverList(
    id: $id
    area: $area
    route: $route
    username: $username
    name: $name
  ) {
    id
    area
    route
    username
    name
    coords
    direction
  }
}
`;
