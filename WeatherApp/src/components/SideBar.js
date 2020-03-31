import React, { Component } from 'react';
import ReactNative, {
  AsyncStorage,
  StyleSheet,
  Dimensions,
  Platform,
  ToastAndroid,
  Image,
  TouchableOpacity,
  View,
  Text,
  PermissionsAndroid,
  TouchableWithoutFeedback,
  Modal,
  NetInfo
} from 'react-native';
//redux

import { Container, Content, List, ListItem, Left, Right, Body, Icon } from 'native-base';

import { StackActions, NavigationActions } from '@react-navigation/native';

import FisrtPage from './FirstPage';
import HomePage from './HomePage';
class SideBar extends Component {
  constructor() {
    super();
    this.state = {
      projectName: null,
      isImageEnlarged: false,
      connection_Status: null
    }
  }
  async componentWillMount() {

  }

  componentDidMount() {
  }

  componentWillUnmount() {
  }






  addInfo() {

    this.props.closeDrawer();


  }
  getProfile1() {

    this.props.closeDrawer();
    this.props.navigate('ProfileFirst');

  }
  getProfile2() {

    this.props.closeDrawer();
    // this.props.navigate('FirstPage');

  }


  render() {
    return (
      <View style={{ flex: 1, backgroundColor: '#f2f2f2', borderRightColor: '#cccccc', borderRightWidth: 0.2 }}>
        <View style={{ flex: 2, backgroundColor: "#42a5f5", padding: 10 }}>
          <View style={{ flexDirection: 'row' }}>
            <View style={{ flex: 8, flexDirection: 'column' }}>
              <Text style={{ color: '#ffffff', fontWeight: 'bold', fontSize: 16, marginTop: 5 }}>{"Weather App"}</Text>
              <Text style={{ fontWeight: 'bold', color: '#ffffff', fontSize: 16, marginTop: 10 }}>{"Anupama Mote"}</Text>
            </View>
            {
              <View style={{ flex: 2 }}>

              </View>
            }
          </View>



        </View>
        <View style={{ flex: 8 }}>
          <Content>
            <List >
              {

                <ListItem onPress={() => this.addInfo()}>
                  <Left style={{ flex: 2 }}>
                    <Icon name="md-cloudy" style={{ fontSize: 20, color: '#808080' }} />
                  </Left>
                  <Body style={{ flex: 8 }}>
                    <Text style={{ fontSize: 14, color: '#808080' }}>Weather info</Text>
                  </Body>
                </ListItem>
              }
              {
                <ListItem onPress={() => this.getProfile1()} >
                  <Left style={{ flex: 2 }}>
                    <Icon name="person" style={{ fontSize: 20, color: '#808080' }} />
                  </Left>
                  <Body style={{ flex: 8 }}>
                    <Text style={{ fontSize: 14, color: '#808080' }}>Profile page1</Text>
                  </Body>
                </ListItem>
              }
              {
                <ListItem onPress={() => this.getProfile2()}>
                  <Left style={{ flex: 2 }}>
                    <Icon name="md-person" style={{ fontSize: 20, color: '#808080' }} />
                  </Left>
                  <Body style={{ flex: 8 }}>
                    <Text style={{ fontSize: 14, color: '#808080' }}>Profile page2</Text>
                  </Body>
                </ListItem>
              }
            </List>
          </Content>
        </View>

      </View>
    )
  }
}


export default SideBar;
