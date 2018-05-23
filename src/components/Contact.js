import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList
} from 'react-native';
import { Thumbnail } from 'native-base';

import Contacts from 'react-native-contacts';

export default class Contact extends Component {

  constructor(){
    super()
    this.state={

      contacts:[]
    }
  }
  displayContacts = () => {

    let contact;
    Contacts.getAll( (err, contacts) => {
      if (err) {
        throw err;
      }
      //  givenName=contacts[0].givenName;
      //  number=contacts[0].phoneNumbers[0].number;
      // this.setState({
      //   givenName:givenName,
      //   number:number
      // console.log(contacts)
      contact = contacts;
      this.setState({
        contacts:contact
      })
    })
    // contacts returned

    //console.log(contacts[0].givenName,contacts[0].phoneNumbers[0].number);
    // this.state.contacts.map((data)=> {
    //   return (
    //     <View><Text>{data}</Text></View>
    //   )
    // })
    //})
    // console.log(givenName);
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
    const listContactsName = <FlatList
      data =  {this.state.contacts}
      renderItem = { ( { item } ) => (

        <View style = { styles.contacts } >
          <Thumbnail
            source = { { uri: 'https:placeimg.com/130/134/people' } }
          />
          <Text style = { styles.contactName } >
            { item.givenName }
          </Text>
        </View>

      )}
    />

    return(
      listContactsName
    )

  }
  render() {
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
  contactName:{
    fontSize:20,
    margin:20,
    marginTop:15
  },
})
