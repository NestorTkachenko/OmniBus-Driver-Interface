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
export const getMain = `query GetMain($id: ID!, $time: String!) {
  getMain(id: $id, time: $time) {
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
export const listMains = `query ListMains(
  $filter: TableMainFilterInput
  $limit: Int
  $nextToken: String
) {
  listMains(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      area
      time
      name
      route
      coords
      speed
    }
    nextToken
  }
}
`;
export const getDriver = `query GetDriver($id: ID!, $area: String!) {
  getDriver(id: $id, area: $area) {
    id
    area
    username
    route
    coords
  }
}
`;
export const listDrivers = `query ListDrivers(
  $filter: TableDriverFilterInput
  $limit: Int
  $nextToken: String
) {
  listDrivers(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      area
      username
      route
      coords
    }
    nextToken
  }
}
`;
export const getRoute = `query GetRoute($id: ID!, $area: String!) {
  getRoute(id: $id, area: $area) {
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
export const listRoutes = `query ListRoutes(
  $filter: TableRouteFilterInput
  $limit: Int
  $nextToken: String
) {
  listRoutes(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      area
      route
      stopnum
      stopname
      coords
      times
    }
    nextToken
  }
}
`;
export const getStop = `query GetStop($id: ID!, $area: String!) {
  getStop(id: $id, area: $area) {
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
export const listStops = `query ListStops(
  $filter: TableStopFilterInput
  $limit: Int
  $nextToken: String
) {
  listStops(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      area
      stopnum
      stopname
      name
      ontime
      passon
      passoff
    }
    nextToken
  }
}
`;
export const getStopData = `query GetStopData($id: ID!, $area: String!) {
  getStopData(id: $id, area: $area) {
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
export const listStopData = `query ListStopData(
  $filter: TableStopDataFilterInput
  $limit: Int
  $nextToken: String
) {
  listStopData(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
  }
}
`;
export const getRouteStop = `query GetRouteStop($area: String!) {
  getRouteStop(area: $area) {
    area
    route
    stopnum
    stopname
    coords
    times
  }
}
`;
export const listRouteStops = `query ListRouteStops(
  $filter: TableRouteStopFilterInput
  $limit: Int
  $nextToken: String
) {
  listRouteStops(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      area
      route
      stopnum
      stopname
      coords
      times
    }
    nextToken
  }
}
`;
export const getRouteData = `query GetRouteData($id: ID!) {
  getRouteData(id: $id) {
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
export const listRouteData = `query ListRouteData(
  $filter: TableRouteDataFilterInput
  $limit: Int
  $nextToken: String
) {
  listRouteData(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      area
      route
      stopnum
      stopname
      coords
      times
    }
    nextToken
  }
}
`;
export const getHistoryData = `query GetHistoryData($id: ID!) {
  getHistoryData(id: $id) {
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
export const listHistoryData = `query ListHistoryData(
  $filter: TableHistoryDataFilterInput
  $limit: Int
  $nextToken: String
) {
  listHistoryData(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      area
      route
      time
      name
      coords
      speed
    }
    nextToken
  }
}
`;
export const getStopDataFeed = `query GetStopDataFeed($id: ID!) {
  getStopDataFeed(id: $id) {
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
export const listStopDataFeeds = `query ListStopDataFeeds(
  $filter: TableStopDataFeedFilterInput
  $limit: Int
  $nextToken: String
) {
  listStopDataFeeds(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
  }
}
`;
export const getStopFeed = `query GetStopFeed($id: ID!) {
  getStopFeed(id: $id) {
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
export const listStopFeeds = `query ListStopFeeds(
  $filter: TableStopFeedFilterInput
  $limit: Int
  $nextToken: String
) {
  listStopFeeds(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
  }
}
`;
export const getDriverList = `query GetDriverList($id: ID!) {
  getDriverList(id: $id) {
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
export const listDriverLists = `query ListDriverLists(
  $filter: TableDriverListFilterInput
  $limit: Int
  $nextToken: String
) {
  listDriverLists(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      area
      route
      username
      name
      coords
      direction
    }
    nextToken
  }
}
`;
