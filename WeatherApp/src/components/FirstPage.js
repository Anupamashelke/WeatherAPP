import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableHighlight, TouchableOpacity, TextInput,
  StyleSheet, Dimensions, Image, AsyncStorage, ActivityIndicator, Platform, ToastAndroid
} from 'react-native';

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
  Picker, Radio, ListItem,
  Icon
} from 'native-base';
var windowSize = Dimensions.get('window');

export default class FirstPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      country: '',
      state: '',
      city: ''
    }
  }

  async componentWillMount() {

  }

  countryTextChanged = (name) => {
    if (name) {
      if (!this.validateName(name)) {
        this.setState({
          country: name
        })
        return;
      } else {
        this.setState({
          country: name
        })
      }

    } else {
      this.setState({
        country: null
      })
    }
  }
  stateTextChanged = (name) => {
    if (name) {
      if (!this.validateName(name)) {
        this.setState({
          state: name
        })
        return;
      } else {
        this.setState({
          state: name
        })
      }

    } else {
      this.setState({
        state: null
      })
    }
  }
  cityTextChanged = (name) => {
    if (name) {
      if (!this.validateName(name)) {
        this.setState({
          city: name
        })
        return;
      } else {
        this.setState({
          city: name
        })
      }

    } else {
      this.setState({
        city: null
      })
    }
  }
  validateName = (name) => {
    if (!name || name.length <= 0) return false;

    return true;
  };


  async onSave() {
    if (!this.state.country) {
      alert("Please enter country")
      return;
    }
    if (!this.state.state) {
      alert("Please enter state")
      return;
    }
    if (!this.state.city) {
      alert("Please enter city")
      return;
    }
    alert("call weather")
    var data = {
      country: this.state.country,
      state: this.state.state, city: this.state.city
    };
    this.props.navigation.navigate("WeatherDtls"
      , { "info": data });

  }


  render() {
    return (
      <Container style={{ backgroundColor: '#fff' }}>
        {/* <Header style={{backgroundColor:'#42a5f5'}} >
        <Left>
        
      </Left>
      <Body style={{flex:3}}>
        <Text style={{color:'#fff',fontSize:15,fontWeight:'normal',alignItems:'flex-start'}}>First Screen</Text>
      </Body>
      <Right></Right>
      </Header> */}
        <Content>
          <View style={{ padding: 5 }}>


            <Item floatingLabel style={{ marginTop: 10 }}>
              <Label style={{ fontSize: 14 }}>Country<Label style={{ color: 'red', fontSize: 14 }}>*</Label></Label>
              <Input
                style={{ fontSize: 16 }}
                maxLength={50}
                value={this.state.name}
                onChangeText={(name) => this.countryTextChanged(name)}
              />

            </Item>

            <Item floatingLabel style={{ marginTop: 10 }}>
              <Label style={{ fontSize: 14 }}>State<Label style={{ color: 'red' }}>*</Label></Label>
              <Input
                style={{ fontSize: 16 }}
                maxLength={50}
                value={this.state.state}
                onChangeText={(name) => this.stateTextChanged(name)}
              />
            </Item>

            <Item floatingLabel style={{ marginTop: 10 }}>
              <Label style={{ fontSize: 14 }}>City<Label style={{ color: 'red' }}>*</Label></Label>
              <Input
                style={{ fontSize: 16 }}
                maxLength={50}
                value={this.state.city}
                onChangeText={(name) => this.cityTextChanged(name)}
              />
            </Item>

            <Button block style={{ height: 40, backgroundColor: '#42a5f5', marginTop: 30 }} onPress={() => this.onSave()}>
              <Text uppercase={false} style={{ color: '#ffffff' }}>Submit</Text>
            </Button>
            <Spinner color='#FF3366' style={{ opacity: this.state.isLoading ? 0.6 : 0 }} />
          </View>
        </Content>
      </Container>
    );
  }
}
