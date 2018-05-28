import React, { Component } from 'react';
import {
  View,
  Text
} from 'react-native';
import AppToolbar from './AppToolbar';
export default class ContactMessageScreen extends Component {

  static navigationOptions = (props) => ({
    header:
    <AppToolbar
      navigation = { props.navigation.navigate }
      title = { props.navigation.state.params.title }
      image = { props.navigation.state.params.image }
   />
  })
  render() {

    return(
      <View>
        <Text>
          hello
        </Text>
      </View>
    );
  }
}
