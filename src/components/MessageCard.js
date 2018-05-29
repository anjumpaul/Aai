import React, { Component } from 'react';
import {
  Card,
  CardCover,
  Title,
  CardContent
} from 'react-native-paper';
import { StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import BackgroundImage from './BackgroundImage.js';

export default class MessageCard extends Component {
  render() {
    return(
      <Card style={{width:'80%',height:'80%'}}>
        <BackgroundImage/>
        <CardContent>
          <Title style = { styles.title }>
            {this.props.receiver} ,
          </Title>
          <Title
            style = { styles.title }>
            {this.props.sender} is thinking of you

          </Title>
          <Icon
            name = "favorite"
            style = { styles.icon }
          />
        </CardContent>
      </Card>

    );
  }
}

const styles = StyleSheet.create({
  title:{
    textAlign:'center',
    color:'#bc12a6',
    fontSize:30,
    //width:'80%',
    padding:10,
    marginTop:30,
  //  marginLeft:40
  },
  icon:{
    color:'#bc12a6',
    textAlign:'center',
    fontSize:30
  },
})
