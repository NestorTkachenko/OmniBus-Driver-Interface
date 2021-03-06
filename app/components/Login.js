import React from 'react';
import { StyleSheet, Text, View, TextInput, KeyboardAvoidingView, TouchableOpacity, AsyncStorage, ScrollView, Picker} from 'react-native';
import { StackNavigator, NavigationActions } from 'react-navigation';
import { Auth } from 'aws-amplify';
import {API, graphqlOperation} from 'aws-amplify';

import * as queries from '../../src/graphql/queries';

var stops = [];
var areas = [];

export default class Login extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      name: '',
      email: '',
      phone_number: '',
      confirmation_code: '',
      user: {},
      area: '',
      arealist: [],

    }
  }

  async componentDidMount() {
    stopdata = await API.graphql(graphqlOperation(queries.listRouteData));
    stops = stopdata.data.listRouteData.items;
    stops.filter(function(item){
      var i = areas.findIndex(x => x == item.area);
      if(i <= -1){
            areas.push(item.area);
      }
      return null;
    });
    this.setState({arealist: areas});
    this._loadInitialState().done();
    
  }

  _loadInitialState = async () => {

    var value = await AsyncStorage.getItem('user');
    if(value !== null) {
      this.props.navigation.navigate('Profile');
    }

  }

  

  render() {
    const { navigate } = this.props.navigation;

    return (
      <KeyboardAvoidingView behavior = 'padding' style = {styles.wrapper}>
        <View style = {styles.container}>
          <ScrollView style = {{width: "100%" }} showsVerticalScrollIndicator={false}>
          <Text style = {styles.header}>- LOGIN -</Text>

          <TextInput 
            style = {styles.textInput} 
            placeholder = 'username' 
            onChangeText = { (username) => this.setState({username})}
            underlineColorAndroid = 'transparent'  
          />

          <TextInput 
            style = {styles.textInput} 
            placeholder = 'name' 
            onChangeText = { (name) => this.setState({name})}
            underlineColorAndroid = 'transparent'  
          />

          <TextInput 
            style = {styles.textInput} 
            placeholder = 'password' 
            onChangeText = { (password) => this.setState({password}) }
            underlineColorAndroid = 'transparent'  
          />

          <TextInput 
            style = {styles.textInput} 
            placeholder = 'email' 
            onChangeText = { (email) => this.setState({email})}
            underlineColorAndroid = 'transparent'  
          />

          <TextInput 
            style = {styles.textInput} 
            placeholder = 'phone number' 
            onChangeText = { (phone_number) => this.setState({phone_number})}
            underlineColorAndroid = 'transparent'  
          />

          <TextInput 
            style = {styles.textInput} 
            placeholder = 'confirmation code' 
            onChangeText = { (confirmation_code) => this.setState({confirmation_code})}
            underlineColorAndroid = 'transparent'  
          />

          <Picker
                selectedValue={this.state.area}
                style={styles.picker}
                onValueChange={(itemValue, itemIndex) => {
                  this.setState({area: itemValue})
                  }
                }
                >
                <Picker.Item label="Choose Area" value= {null} />
                {this.state.arealist ?
                this.state.arealist.map((area, index) => (
                  <Picker.Item label= {area} value= {area} key = {index}/>
                  )) : null
                }
          </Picker>

          <TouchableOpacity
            style = {styles.button}
            onPress = {this.signup.bind(this)}>
            <Text>Sign Up</Text>
          </TouchableOpacity>

           <TouchableOpacity
            style = {styles.button}
            onPress = {this.confirmsignup.bind(this)}>
            <Text>Confirm Sign Up</Text>
          </TouchableOpacity>

           <TouchableOpacity
            style = {styles.button}
            onPress = {this.login.bind(this)}>
            <Text>Log In</Text>
          </TouchableOpacity>
          </ScrollView>
        </View>
      </KeyboardAvoidingView>
    );
  }

  signup() {
    
      Auth.signUp({
        username: this.state.username,
        password: this.state.password,
        attributes: {
          email: this.state.email,
          name: this.state.name,
          zoneinfo: this.state.area,
          //phone_number: this.state.phone_number
        }
        //validationData: []  //optional
        })
        .then(data => console.log('successful sign up!'))
        .catch(err => console.log('error signing up!: ', err));

      }

  confirmsignup() {
    
      Auth.confirmSignUp(this.state.username, this.state.confirmation_code)
        .then(data =>  this.props.navigation.navigate('Profile'))
        .catch(err => console.log('error confirming signing up!: ', err));

    }

  login() {
    Auth.signIn(this.state.username, this.state.password)
    .then(user => {
      console.log(user.signInUserSession.idToken.payload);
      this.props.navigation.navigate('Profile', {name: user.signInUserSession.idToken.payload.name});
      this.props.navigation.navigate('Profile', {username: this.state.username});
      this.props.navigation.navigate('Profile', {area: user.signInUserSession.idToken.payload.zoneinfo});
    })
    .catch(err => console.log('error signing in!: ', err))
  }

  }

const styles = StyleSheet.create({

  wrapper: {
    flex: 1,
  },
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
  textInput: {
    alignSelf: 'stretch',
    padding: 16,
    marginBottom: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
  },
  button: {
    alignSelf: 'stretch',
    backgroundColor: '#01c853',
    padding: 20,
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 20,
    borderRadius: 10
  },
});
