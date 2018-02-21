import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TouchableOpacity
} from 'react-native';
import { TabNavigator } from 'react-navigation';
import FBSDK, { LoginManager, AccessToken, LoginButton } from 'react-native-fbsdk';
import firebase from 'firebase';
import Signup from './components/signin/index';
import ProfileScreen   from './components/profile/index';
import SearchScreen from './components/search/index';
import BackgroundImage from './components/backgroundImage/index';
import * as FacebookLogin from './src/actions/fbLogin';

import { createStore } from 'redux';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
        userLoggedIn: 'false',
        userEmail: '',
    };
  }

  // <Signup userLoggedIn={this.state.userLoggedIn} style={styles.container} />


  render() {
    return (
      <Signup />
    );
  }
}

const AppNavigator = TabNavigator({
  SearchScreen: {
    screen: SearchScreen,
  },
  ProfileScreen: {
    screen: ProfileScreen,
  },
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
