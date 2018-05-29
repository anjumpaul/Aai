/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { StackNavigator } from 'react-navigation';

import ContactMessageScreen from './src/components/ContactMessageScreen.js';
import ContactList from './src/components/ContactList.js';
import AppToolbar from './src/components/AppToolbar.js';

const RootStack = StackNavigator(
  {
    Home: {
      screen: ContactList,
    },
    ContactMessageScreen: {
      screen: ContactMessageScreen,
    },

  },
  {
    initialRouteName: 'Home',
  }
);
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        {/* <Contact /> */}
        <RootStack/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  // welcome: {
  //   fontSize: 20,
  //   textAlign: 'center',
  //   margin: 10,
  // },
  // instructions: {
  //   textAlign: 'center',
  //   color: '#333333',
  //   marginBottom: 5,
  // },
});
