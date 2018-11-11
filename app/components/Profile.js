import React from 'react';
import { StyleSheet, Text, View, TextInput, KeyboardAvoidingView, TouchableOpacity, AsyncStorage, } from 'react-native';
import { StackNavigator } from 'react-navigation';
import {API, graphqlOperation} from 'aws-amplify';
import * as mutations from '../../src/graphql/mutations';


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
      }
    }

  async componentDidMount() {
    const data = await API.graphql(graphqlOperation(query))
    this.setState({
      users: data.data.listUsers.items
    })
  }

  render() {
    return (

        <View style = {styles.container}>

          <Text style = {styles.header}>Member Page {"\n"}</Text>

          <TextInput 
            style = {styles.textInput} 
            placeholder = 'User Name' 
            onChangeText = { (newUser) => this.setState({newUser})}
            underlineColorAndroid = 'transparent'  
          />

          <TouchableOpacity
            style = {styles.button}
            onPress = {this.deleteUser}>
            <Text>Remove User</Text>
          </TouchableOpacity>

          <Text style = {styles.header}>Member Page {"\n"}</Text>

          <TouchableOpacity
            style = {styles.button}
            onPress = {this.addUser}>
            <Text>New User</Text>
          </TouchableOpacity>

          {
            this.state.users.map((user, index) => (
              <Text style = {styles.header} key = {index}>{user.name}</Text>
              ))
          }

           <TouchableOpacity
            style = {styles.button}
            onPress = {this.logout.bind(this)}>
            <Text>Log Out</Text>
          </TouchableOpacity>

        </View>

    );
  }

  logout() {
      this.props.navigation.navigate('Home');
  };


  addUser = async () => {
      const newTodo = await API.graphql(graphqlOperation(mutations.createUser, {input: {name: this.state.newUser, location: 'coords here'}}));
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
