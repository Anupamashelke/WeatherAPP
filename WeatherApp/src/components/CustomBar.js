import React, { Component } from 'react';
import {
   View,
   Text,
   TouchableHighlight,TouchableOpacity,TextInput,
   StyleSheet,Dimensions,Image,AsyncStorage,ActivityIndicator,Platform,ToastAndroid
} from 'react-native' ;

import {
  Footer,
  Title,
  Thumbnail,
  Button,
  Card,
  Header,
  Left,
  Container,
  Spinner,
  Body,
  Right,
  Content,
  InputGroup,
  Input,
  Form,
  Item,
  Label,
  Picker,Radio,ListItem,
  Icon} from 'native-base';
var  windowSize= Dimensions.get('window');

export default  class CustomBar extends Component {
  constructor(props) {
    super(props)
   
  }

  render(){
   return (
 
		<View style={{alignItems: 'center', justifyContent: 'center' ,margin:50}}>
		<Text style={{ alignItems: 'flex-start', justifyContent: 'center' }}>Booked</Text>
		</View>
     
   );
  }
}
