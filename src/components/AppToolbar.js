import React, { Component } from 'react';
import {
  Toolbar,
  ToolbarContent,
  ToolbarAction,
  ToolbarBackAction
} from 'react-native-paper';
import { Image } from 'react-native';


export default class AppToolbar extends Component {
  render() {
    const {
      title,
      image } = this.props

      return(
        <Toolbar style = { { backgroundColor:'#bc12a6' } } >
          <ToolbarBackAction
            //icon = "arrow-back"
            onPress = { () => { this.props.navigation('Home') } }
          />
          <Image
            source = { { uri: image } }
            style = { { width:50,height:50,borderRadius:25 } }
          />
          <ToolbarContent
            title = { title }
          />


        </Toolbar>
      );
    }
  }
