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
  StatusBar,
  Modal,
  TouchableWithoutFeedback, BackHandler
} from 'react-native';
import { Drawer, Icon, Button, Fab, Container, Header, Left, Body, Right, Title, Label, Item, Input } from 'native-base';
import SideBar from './SideBar';
import FirstPage from './FirstPage';
class HomePage extends Component {
  constructor(props) {
    super(props);
    that = this;
    this.state = {
      disabled: false,
      drawerOpen: false,
    }
  }

  static navigationOptions = {
    header: null
  };

  async componentWillMount() {

  }

  closeDrawer() {
    this.drawer._root.close()
    this.setState({
      drawerOpen: false
    });
  }

  openDrawer() {
    this.drawer._root.open()
    this.setState({
      drawerOpen: true
    });
  }



  render() {

    return (
      <Drawer
        type="overlay"
        ref={(ref) => { this.drawer = ref; }}
        content={<SideBar navigate={this.props.navigation.navigate} closeDrawer={() => this.closeDrawer()} />}
        onClose={() => this.closeDrawer()}
        tapToClose={true}
        openDrawerOffset={0.2} // 20% gap on the right side of drawer
        panCloseMask={0}
        closedDrawerOffset={-3}
        styles={drawerStyles}
        tweenHandler={(ratio) => ({
          main: { opacity: (2 - ratio) / 1.5 }
        })}
      >

        <Container>
          <Header style={{ backgroundColor: "#42a5f5" }}>
            <Left>
              <View style={{ width: 200, flexDirection: 'row' }}>
                <Button
                  transparent
                  onPress={() => this.openDrawer()}>
                  <Icon name="menu" style={{ color: '#ffffff' }} />
                </Button>
                <Text style={{ color: '#ffffff', fontSize: 13, fontWeight: 'bold', flex: 1, marginTop: 14 }}>Weather casting</Text>
              </View>
            </Left>
            <Body style={{ flex: 3, marginTop: 30, marginLeft: 60 }}>
            </Body>
            <Right>

            </Right>
          </Header>
          <View style={{ flex: 1 }}>
            <FirstPage navigation={this.props.navigation} />
          </View>


        </Container>
      </Drawer>
    );
  }
}

const drawerStyles = {
  drawer: { shadowColor: '#000000', shadowOpacity: 0.8, shadowRadius: 3 },
  main: { paddingLeft: 3 },
}



export default HomePage;
