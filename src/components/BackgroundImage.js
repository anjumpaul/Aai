import React, { Component } from 'react';
import {
  View,
  Image,
  StyleSheet
} from 'react-native';

export default class BackgroundImage extends Component {
  render() {
    return(
      <Image source = { require('./../images/flower-3163455_1920.jpg') }
      style = { styles.backgroundImage }
      />
  );
}
}

const styles = StyleSheet.create({
  backgroundImage:{
    position:'absolute',
    width:'100%',
    height:'100%',
  },
})
