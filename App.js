import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from 'react-navigation';

import Amplify, { Auth } from 'aws-amplify';
import aws_exports from './aws-exports';
import {API, graphqlOperation} from 'aws-amplify';

import Login from './app/components/Login';
import Profile from './app/components/Profile';


const myAppConfig =  {
    "aws_project_region": "us-east-1",
    "aws_cognito_identity_pool_id": "us-east-1:dc7e15d1-c5d8-40f0-b1f8-9152b953899a",
    "aws_cognito_region": "us-east-1",
    "aws_user_pools_id": "us-east-1_9tsa2Oyjj",
    "aws_user_pools_web_client_id": "3ldfbpq03grng4j1v0rlna6sea",
    "aws_appsync_graphqlEndpoint": "https://wg23kdqp4nhurdv4fwz5eetgri.appsync-api.us-east-1.amazonaws.com/graphql",
    "aws_appsync_region": "us-east-1",
    "aws_appsync_authenticationType": "API_KEY",
    "aws_appsync_apiKey": "da2-un637qswybgp5ajwbttxgskstm"
};
Amplify.configure(myAppConfig);

const Application = createStackNavigator(
  {
    Home: {screen: Login},
    Profile: {screen: Profile},
  },

  {
    navigationOptions: {
      header: null,
    },
  },);

export default class App extends React.Component {
  render() {
    return (
      <Application />
    );
  }
}