import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Image
} from 'react-native';
import Contacts from 'react-native-contacts';

import AppToolbar from './AppToolbar.js';
import MessageCard from './MessageCard.js';

export default class ContactList extends Component {

  static navigationOptions = (props) =>({
    header:null

  })
  constructor(){
    super()
    this.state={

      contacts:[],

      messages:{
        1472369851:{
          incoming:true,
          outgoing:false
        },
        1234567890:{
          incoming:false,
          outgoing:true
        },
        1235896473:{
          incoming:true,
          outgoing:true
        },
        1233214560:{
          incoming:false,
          outgoing:false
        },
        1528079638:{
          incoming:true,
          outgoing:false
        }
      }

        // phoneNumbers:[
        //   {
        //   number:'',
        //   //key:this.state.number,
        //   incomingMessage:null,
        //   outgoingMessage:null,
        // }
        // ]

    }
  }


 // incomingMessage=()=>{
 //   <MessageCard receiver={ this.props.navigation.state.params.title } sender = 'Anne'/>
 // }

  displayContacts = () => {
    let contact,phoneNumber;
    Contacts.getAll( (err, contacts) => {
      if (err) {
        throw err;
      }
      //  givenName=contacts[0].givenName;
      //  number=contacts[0].phoneNumbers[0].number;
      // this.setState({
      //   givenName:givenName,
      //   number:number
       //console.log(contacts)

       // phoneNumber = this.state.contacts.map( ( item ) => {
       //
       // { item.phoneNumbers.map( ( item ) => {
       //   return(
       //     <Text> { item.number } </Text>
       //   )
       // })}
       // })

      contact = contacts;
      this.setState({
        contacts:contact,
        //number:phoneNumber
      })
      console.log(contacts[0]);
    })


    //console.log(phoneNumber);
    // return(
    //   <Text>{this.state.givenName} {this.state.number}</Text>
    // )
    // const listContactsName = this.state.contacts.map( ( item ) => {
    //   return (
    //     <View>
    //       <View style = { styles.contacts } >
    //       <Thumbnail
    //         rounded
    //             large
    //             source = { { uri:'https:placeimg.com/130/134/people' } }
    //             size = { 80 }/>
    //       <Text style = { styles.contactName } >
    //         { item.givenName }
    //       </Text>
    //     </View>
    // { item.phoneNumbers.map( ( item ) => {
    //   return(
    //     <Text> { item.number } </Text>
    //   )
    // })}
    //     </View>
    //   )
    // })

    // const messages = getMessage = () =>{
    //   incomingMessage?
    //   this.setState({messages:incomingMessage()})
    //   :
    //   null
    // }
  //  console.log(messages);
    const listContactsName = <FlatList
      data =  {this.state.contacts}
      renderItem = { ( { item } ) => {
         return(
        <TouchableOpacity style = { styles.contacts }
          onPress={() =>
            {
              this.props.navigation.navigate('ContactMessageScreen',
              {
                title:item.givenName,
                image:'https:placeimg.com/130/134/people',
              })
            }
          }
          >
            <Image
              style = { styles.contactImage }
              source = { { uri: 'https:placeimg.com/130/134/people' } }
            />
            <Text style = { styles.contactName } >
              { item.givenName }
            </Text>
          </TouchableOpacity>

        )}}
      />

      return(
        listContactsName
      )
    }
    render() {
      //const { navigate } = this.props.navigation;
      return(
        <View>
          { this.displayContacts() }
        </View>
      );
    }
  }

  const styles = StyleSheet.create({
    contacts:{
      flexDirection:'row',
      padding:20,
      marginTop:15
    },
    contactImage:{
      height:60,
      width:60,
      borderRadius:25
    },
    contactName:{
      fontSize:20,
      margin:20,
      marginTop:15
    },
  })
