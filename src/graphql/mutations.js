// eslint-disable
// this is an auto generated file. This will be overwritten

export const createPassenger = `mutation CreatePassenger($input: CreatePassengerInput!) {
  createPassenger(input: $input) {
    id
    name
    description
    location
  }
}
`;
export const updatePassenger = `mutation UpdatePassenger($input: UpdatePassengerInput!) {
  updatePassenger(input: $input) {
    id
    name
    description
    location
  }
}
`;
export const deletePassenger = `mutation DeletePassenger($input: DeletePassengerInput!) {
  deletePassenger(input: $input) {
    id
    name
    description
    location
  }
}
`;
export const createUser = `mutation CreateUser($input: CreateUserInput!) {
  createUser(input: $input) {
    id
    name
    location
  }
}
`;
export const updateUser = `mutation UpdateUser($input: UpdateUserInput!) {
  updateUser(input: $input) {
    id
    name
    location
  }
}
`;
export const deleteUser = `mutation DeleteUser($input: DeleteUserInput!) {
  deleteUser(input: $input) {
    id
    name
    location
  }
}
`;
export const createMain = `mutation CreateMain($input: CreateMainInput!) {
  createMain(input: $input) {
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
export const updateMain = `mutation UpdateMain($input: UpdateMainInput!) {
  updateMain(input: $input) {
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
export const deleteMain = `mutation DeleteMain($input: DeleteMainInput!) {
  deleteMain(input: $input) {
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
export const createDriver = `mutation CreateDriver($input: CreateDriverInput!) {
  createDriver(input: $input) {
    id
    area
    username
    route
    coords
  }
}
`;
export const updateDriver = `mutation UpdateDriver($input: UpdateDriverInput!) {
  updateDriver(input: $input) {
    id
    area
    username
    route
    coords
  }
}
`;
export const deleteDriver = `mutation DeleteDriver($input: DeleteDriverInput!) {
  deleteDriver(input: $input) {
    id
    area
    username
    route
    coords
  }
}
`;
export const createRoute = `mutation CreateRoute($input: CreateRouteInput!) {
  createRoute(input: $input) {
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
export const updateRoute = `mutation UpdateRoute($input: UpdateRouteInput!) {
  updateRoute(input: $input) {
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
export const deleteRoute = `mutation DeleteRoute($input: DeleteRouteInput!) {
  deleteRoute(input: $input) {
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
export const createStop = `mutation CreateStop($input: CreateStopInput!) {
  createStop(input: $input) {
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
export const updateStop = `mutation UpdateStop($input: UpdateStopInput!) {
  updateStop(input: $input) {
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
export const deleteStop = `mutation DeleteStop($input: DeleteStopInput!) {
  deleteStop(input: $input) {
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
export const createStopData = `mutation CreateStopData($input: CreateStopDataInput!) {
  createStopData(input: $input) {
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
export const updateStopData = `mutation UpdateStopData($input: UpdateStopDataInput!) {
  updateStopData(input: $input) {
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
export const deleteStopData = `mutation DeleteStopData($input: DeleteStopDataInput!) {
  deleteStopData(input: $input) {
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
export const createRouteStop = `mutation CreateRouteStop($input: CreateRouteStopInput!) {
  createRouteStop(input: $input) {
    area
    route
    stopnum
    stopname
    coords
    times
  }
}
`;
export const updateRouteStop = `mutation UpdateRouteStop($input: UpdateRouteStopInput!) {
  updateRouteStop(input: $input) {
    area
    route
    stopnum
    stopname
    coords
    times
  }
}
`;
export const deleteRouteStop = `mutation DeleteRouteStop($input: DeleteRouteStopInput!) {
  deleteRouteStop(input: $input) {
    area
    route
    stopnum
    stopname
    coords
    times
  }
}
`;
export const createRouteData = `mutation CreateRouteData($input: CreateRouteDataInput!) {
  createRouteData(input: $input) {
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
export const updateRouteData = `mutation UpdateRouteData($input: UpdateRouteDataInput!) {
  updateRouteData(input: $input) {
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
export const deleteRouteData = `mutation DeleteRouteData($input: DeleteRouteDataInput!) {
  deleteRouteData(input: $input) {
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
export const createHistoryData = `mutation CreateHistoryData($input: CreateHistoryDataInput!) {
  createHistoryData(input: $input) {
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
export const updateHistoryData = `mutation UpdateHistoryData($input: UpdateHistoryDataInput!) {
  updateHistoryData(input: $input) {
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
export const deleteHistoryData = `mutation DeleteHistoryData($input: DeleteHistoryDataInput!) {
  deleteHistoryData(input: $input) {
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
export const createStopDataFeed = `mutation CreateStopDataFeed($input: CreateStopDataFeedInput!) {
  createStopDataFeed(input: $input) {
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
export const updateStopDataFeed = `mutation UpdateStopDataFeed($input: UpdateStopDataFeedInput!) {
  updateStopDataFeed(input: $input) {
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
export const deleteStopDataFeed = `mutation DeleteStopDataFeed($input: DeleteStopDataFeedInput!) {
  deleteStopDataFeed(input: $input) {
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
export const createStopFeed = `mutation CreateStopFeed($input: CreateStopFeedInput!) {
  createStopFeed(input: $input) {
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
export const updateStopFeed = `mutation UpdateStopFeed($input: UpdateStopFeedInput!) {
  updateStopFeed(input: $input) {
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
export const deleteStopFeed = `mutation DeleteStopFeed($input: DeleteStopFeedInput!) {
  deleteStopFeed(input: $input) {
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
export const createDriverList = `mutation CreateDriverList($input: CreateDriverListInput!) {
  createDriverList(input: $input) {
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
export const updateDriverList = `mutation UpdateDriverList($input: UpdateDriverListInput!) {
  updateDriverList(input: $input) {
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
export const deleteDriverList = `mutation DeleteDriverList($input: DeleteDriverListInput!) {
  deleteDriverList(input: $input) {
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
