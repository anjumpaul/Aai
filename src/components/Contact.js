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
export default class Contact extends Component {

  static navigationOptions = (props) =>({
    header:null

  })
  constructor(){
    super()
    this.state={

      contacts:[],
      image:'https:placeimg.com/130/134/people'
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

    //console.log(contact);
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

        <TouchableOpacity style = { styles.contacts }
          onPress={() =>
            {
              this.props.navigation.navigate('ContactMessageScreen',{title:item.givenName,image:'https:placeimg.com/130/134/people'})
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

        )}
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
