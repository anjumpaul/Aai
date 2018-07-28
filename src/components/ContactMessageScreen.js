import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';
import { Button } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialIcons';

import AppToolbar from './AppToolbar';
import MessageCard from './MessageCard.js';

export default class ContactMessageScreen extends Component {

  static navigationOptions = (props) => ({
    header:
    <AppToolbar
      navigation = { props.navigation.navigate }
      title = { props.navigation.state.params.title }
      image = { props.navigation.state.params.image }
    />
  })
  constructor(){
    super()
    this.state={
      incoming:true,
      outgoing:true
    }
  }
  // sendMessage = () => {
  //
  //   const messages=<MessageCard receiver={ this.props.navigation.state.params.title } sender = 'Anne'/>
  //  return messages;
  // }
  render() {
    alert(   this.props.navigation.state.params.messages  )
    return(
      <View style = { styles.container } >
        {/* {
        this.state.incoming?
            <MessageCard receiver={ this.props.navigation.state.params.title } sender = 'Anne'/>
          :null
        } */}
        <Text style = { styles.text } >
          { this.props.navigation.state.params.title }  might be needing some care
        </Text>
        <Button
          style = { styles.button }
          color='white'
          >
            Send some  <Icon name = "favorite"/>  to  { this.props.navigation.state.params.title }
          </Button>

        </View>
      );
    }
  }

  const styles = StyleSheet.create({
    container:{
      flex:1,
      marginTop:70,
      //justifyContent:'center',
      alignItems:'center'
    },
    text:{
      textAlign:'center',
      fontSize:25,
      //width:"40%",
      color:'#0c769d'
    },
    button:{
      backgroundColor:'#bc12a6',
      borderRadius:20,
      marginTop:40,
      //width:"70%",
      alignItems:'center'
    },
  })
