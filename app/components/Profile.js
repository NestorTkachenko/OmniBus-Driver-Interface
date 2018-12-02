import React from 'react';
import { Picker, StyleSheet, Text, View, TextInput, KeyboardAvoidingView, TouchableOpacity, AsyncStorage, ScrollView} from 'react-native';
import { StackNavigator } from 'react-navigation';
import {API, graphqlOperation} from 'aws-amplify';
import * as mutations from '../../src/graphql/mutations';
import * as queries from '../../src/graphql/queries';
import { Constants, MapView, Location, Permissions } from 'expo';
import moment from 'moment';



var stops = [];
var routes = [];
var routestops = [];


export default class Profile extends React.Component {
  

  constructor(props) {
    super(props);
    this.state = {
      users: [],
      username: '',
      name: '',
      location: {latitude: 0, longitude: 0},
      direction: 0,
      speed: '',
      route: '',
      area: 'Test1',
      active: false,
      currentstop: 0,
      laststop: 0,
      stoptime: '',
      stopname: '',
      passon: '',
      passoff: '',
      ontime: '',
      }
    }

    distance(lat1, lon1, lat2, lon2) {
      if ((lat1 == lat2) && (lon1 == lon2)) {
        return 0;
      }
      else {
        var radlat1 = Math.PI * lat1/180;
        var radlat2 = Math.PI * lat2/180;
        var theta = lon1-lon2;
        var radtheta = Math.PI * theta/180;
        var dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
        if (dist > 1) {
          dist = 1;
        }
        dist = Math.acos(dist);
        dist = dist * 180/Math.PI;
        dist = dist * 60 * 1.1515;
        dist = dist * 1609.344;
        return dist;
      }
  }

  async componentDidMount() {
    Location.watchPositionAsync({distanceInterval: 0, enableHighAccuracy: true}, this.locationChanged);
    const data = await API.graphql(graphqlOperation(queries.listDriverLists))

    stopdata = await API.graphql(graphqlOperation(queries.listRouteData))
    stops = stopdata.data.listRouteData.items;
    stops.filter(function(item){
      var i = routes.findIndex(x => x == item.route);
      if(i <= -1){
            routes.push(item.route);
      }
      return null;
    });

    this.setState({
      users: data.data.listDriverLists.items,
    });
    this.interval = setInterval(this.editUser, 1000);
    let { status } = await Permissions.askAsync(Permissions.LOCATION);
    if (status !== 'granted') {
      this.setState({
        errorMessage: 'Permission to access location was denied',
      });
    }
  }

  locationChanged = (location) => {
    region = {
      latitude: location.coords.latitude,
      longitude: location.coords.longitude
    };
    
    this.setState({location: region, region, speed: location.coords.speed, direction: location.coords.heading});
  }

  componentWillUnmount() {
    clearInterval(this.interval);
    }


  render() {
    const { navigation } = this.props;
    const name = navigation.getParam('name', '');
    const username = navigation.getParam('username', '');
    const area = navigation.getParam('area', '');;

    // Need to fix this
    if (username != this.state.username) {
      this.setState({username: username, name: name})
      if (area) {
        this.setState({area: area});
      } 
    }

    return (

        <View style = {styles.container}>
        <ScrollView style = {{width: "100%" }} showsVerticalScrollIndicator={false}>

          <Text style = {styles.header}>Member Page</Text>

          <Text style = {styles.header}> Location: {JSON.stringify(this.state.location.longitude)}, {JSON.stringify(this.state.location.latitude)}</Text>
          
          <Text style = {styles.header}> Name: {JSON.stringify(name)} {this.state.ontime}</Text>

          <TouchableOpacity
            style = {styles.button}
            onPress = {this.deleteUser}>
            <Text>Remove User</Text>
          </TouchableOpacity>

          {
            this.state.users.map((user, index) => (
              <Text style = {styles.header} key = {index}>{user.username} {user.coords} {user.direction}</Text>
              ))
          }
          { this.state.active ?  
              
                routestops.map((stop, index) => (
                  <Text style = {styles.header} key = {index}>{stop.stopname} {this.distance(JSON.parse(stop.coords).latitude, JSON.parse(stop.coords).longitude, this.state.location.latitude, this.state.location.longitude)}</Text>
                  ))
               : null
          }
            { this.state.active ? null :  
              <Picker
                selectedValue={this.state.route}
                style={styles.picker}
                onValueChange={(itemValue, itemIndex) => {
                  this.setState({route: itemValue})
                  routestops = stops.filter(x => x.route === itemValue);
                  }
                }
                >
                <Picker.Item label="Choose Route" value= {null} />
                {
                routes.map((route, index) => (
                  <Picker.Item label= {route} value= {route} key = {index}/>
                  ))
                }
              </Picker>
            }
          <TouchableOpacity
            style = {styles.button}
            onPress = { this.addUser }>
            <Text>Start Route</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style = {styles.button}
            onPress = {this.logout.bind(this)}>
            <Text>Log Out</Text>
          </TouchableOpacity>

        </ScrollView>
        </View>

    );
  }

  logout() {
      this.props.navigation.navigate('Home');
  };

  // addStop = async () => {
  //   const newTodo = await API.graphql(graphqlOperation(mutations.createRouteData, 
  //     {input: {
  //       area: "Test1", 
  //       route: "Route2",
  //       stopnum: 1, 
  //       stopname: "Hillel",
  //       coords: JSON.stringify({ latitude: 42.3727842, longitude: -71.1170782}),
  //       times: JSON.stringify(['10:11:00','12:11:00','14:11:00','16:11:00','18:11:00'])
  //     }
  //   }));
  // }
  

  addUser = async () => {
      await API.graphql(graphqlOperation(mutations.createDriverList, 
        {input: 
          { 
            area: this.state.area,
            route: this.state.route,
            username: this.state.username,
            name: this.state.name, 
            coords: JSON.stringify(this.state.location),
            direction: this.state.direction,
          }}));
      const data = await API.graphql(graphqlOperation(queries.listDriverLists))
      this.setState({
        users: data.data.listDriverLists.items,
        active: true
      })
  };


  deleteUser = async () => {
      for(var i = 0; i < this.state.users.length; i++) {
        if(this.state.users[i].username == this.state.username) {
          await API.graphql(graphqlOperation(mutations.deleteDriverList, {input: {id: this.state.users[i].id}}));
        }
      }

      const data = await API.graphql(graphqlOperation(queries.listDriverLists))
      this.setState({
        users: data.data.listDriverLists.items,
        active: false,
      })
  };

  editUser = async () => {
      for(var i = 0; i < this.state.users.length; i++) {
        if(this.state.users[i].username == this.state.username) {
          await API.graphql(graphqlOperation(mutations.updateDriverList, {input: 
            {
              id: this.state.users[i].id, 
              coords: JSON.stringify(this.state.location),
              direction: this.state.direction,
            }}));
          await API.graphql(graphqlOperation(mutations.createHistoryData, 
            {input: {
              area: this.state.area, 
              route: this.state.route,
              time: JSON.stringify(Date()),
              name: this.state.username,
              coords: JSON.stringify(this.state.location),
              speed: this.state.speed, // in m/s
            }
          }));
      var currentstop = this.state.currentstop;
          if (routestops) {
              for (var i = 0; i < routestops.length; i++) {

                // If goes more than 20 meters of current stop, send stop data
                if (this.state.laststop != this.state.currentstop && this.state.currentstop == routestops[i].stopnum) {
                  if (this.distance(JSON.parse(routestops[i].coords).latitude, JSON.parse(routestops[i].coords).longitude,this.state.location.latitude, this.state.location.longitude) > 20) {
                    this.setState({laststop : this.state.currentstop});
                    await API.graphql(graphqlOperation(mutations.createStopFeed, 
                    {input: 
                      {
                        area: this.state.area, 
                        route: this.state.route,
                        stopnum: this.state.currentstop,
                        stopname: this.state.stopname,
                        name: this.state.username, //make this actual name 
                        ontime: this.state.ontime,
                        stoptime: this.state.stoptime,
                        passon: 0,
                        passoff: 0,
                      }
                    }));
                  }
                }
                // If goes within 15 meters of stop set stop data
                if (this.distance(JSON.parse(routestops[i].coords).latitude, JSON.parse(routestops[i].coords).longitude, this.state.location.latitude, this.state.location.longitude) < 15) {
                  if (currentstop != routestops[i].stopnum) {
                    var timediff = 720000;
                    var times = JSON.parse(routestops[i].times);
                    for (c = 0; c < times.length; c++) {
                      var diff = moment().diff(moment(times[c], 'HH:mm:ss'), 'seconds');
                      if (Math.abs(diff) < Math.abs(timediff)) {
                        timediff = diff;
                      }
                    }

                    this.setState({
                      stoptime: JSON.stringify(Date()),
                      stopname: routestops[i].stopname,
                      ontime: timediff,
                      currentstop: routestops[i].stopnum,
                    })
                  }
                }
              }
            }
        }
      }

      const data = await API.graphql(graphqlOperation(queries.listDriverLists))
      this.setState({
        users: data.data.listDriverLists.items
      })
  };

}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#2896d3',
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: 40,
    paddingRight: 40,
  },
  header: {
    fontSize: 24,
    marginBottom: 60,
    color: '#fff',
    fontWeight: 'bold', 
  },
  button: {
    alignSelf: 'stretch',
    backgroundColor: '#01c853',
    padding: 20,
    alignItems: 'center',
  },
  textInput: {
    alignSelf: 'stretch',
    padding: 16,
    marginBottom: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
  },
  picker: {
    alignSelf: 'stretch',
    padding: 16,
    marginBottom: 20,
    backgroundColor: '#fff',
  },

});
