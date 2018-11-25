import React from 'react';
import { StyleSheet, Text, View, TextInput, KeyboardAvoidingView, TouchableOpacity, AsyncStorage, ScrollView} from 'react-native';
import { StackNavigator } from 'react-navigation';
import {API, graphqlOperation} from 'aws-amplify';
import * as mutations from '../../src/graphql/mutations';
import { Constants, MapView, Location, Permissions } from 'expo';


const query = `
  query {
    listUsers{
      items{
        id name location
      }
    }
}
`


export default class Profile extends React.Component {
  

  constructor(props) {
    super(props);
    this.state = {
      users: [],
      newUser: '',
      location: { coords: {latitude: 0, longitude: 0}},
      }
    }

  async componentDidMount() {
    Location.watchPositionAsync({distanceInterval: 0, enableHighAccuracy: true}, this.locationChanged);
    const data = await API.graphql(graphqlOperation(query))
    this.setState({
      users: data.data.listUsers.items,
    });
    this.interval = setInterval(this.editUser, 1000);
  }

  locationChanged = (location) => {
    region = {
      latitude: location.coords.latitude,
      longitude: location.coords.longitude,
      latitudeDelta: 0.1,
      longitudeDelta: 0.05,
    },
    this.setState({location, region});
  }

  componentWillUnmount() {
            clearInterval(this.interval);
          }


  render() {
    const { navigation } = this.props;
    const name = navigation.getParam('name', '');

    // Need to fix this
    if (name != this.state.newUser) {
      this.setState({newUser: name})
    }

    return (

        <View style = {styles.container}>
        <ScrollView style = {{width: "100%" }} showsVerticalScrollIndicator={false}>

          <Text style = {styles.header}>Member Page</Text>

          <Text style = {styles.header}> Location: {JSON.stringify(this.state.location.coords.longitude)}, {JSON.stringify(this.state.location.coords.latitude  )}</Text>
          <Text style = {styles.header}> Name: {JSON.stringify(name)}</Text>

          <TouchableOpacity
            style = {styles.button}
            onPress = {this.deleteUser}>
            <Text>Remove User</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style = {styles.button}
            onPress = {this.editUser}>
            <Text>Edit User</Text>
          </TouchableOpacity>

          {
            this.state.users.map((user, index) => (
              <Text style = {styles.header} key = {index}>{user.name} {user.location}</Text>
              ))
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


  addUser = async () => {
      const newTodo = await API.graphql(graphqlOperation(mutations.createUser, {input: {name: this.state.newUser, location: this.state.location.coords}}));
      const data = await API.graphql(graphqlOperation(query))
      this.setState({
        users: data.data.listUsers.items
      })
  };

  deleteUser = async () => {
      for(var i = 0; i < this.state.users.length; i++) {
        if(this.state.users[i].name == this.state.newUser) {
          await API.graphql(graphqlOperation(mutations.deleteUser, {input: {id: this.state.users[i].id}}));
        }
      }

      const data = await API.graphql(graphqlOperation(query))
      this.setState({
        users: data.data.listUsers.items
      })
  };

  editUser = async () => {
      for(var i = 0; i < this.state.users.length; i++) {
        if(this.state.users[i].name == this.state.newUser) {
          await API.graphql(graphqlOperation(mutations.updateUser, {input: {id: this.state.users[i].id, location: this.state.location.coords}}));
        }
      }

      const data = await API.graphql(graphqlOperation(query))
      this.setState({
        users: data.data.listUsers.items
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

});
