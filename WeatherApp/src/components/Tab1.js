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

export default class Tab1 extends Component {
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
            <Container style={{}}>

                <Content>


                    <Card style={{ backgroundColor: 'fff', marginHorizontal: 10 }}>

                        <View style={{ flex: 1, flexDirection: 'row', borderRadius: 5 }}>
                            <View style={{ flex: 2, padding: 10, backgroundColor: 'green', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                                <Text style={{ color: '#fff', alignItems: 'center', justifyContent: 'center', fontSize: 14 }}>
                                    20
          </Text>
                                <Text style={{ color: '#fff', alignItems: 'center', justifyContent: 'center', fontSize: 10 }}>
                                    SEPTEMBER
          </Text>
                            </View>
                            <View style={{ flex: 8, alignItems: 'center', padding: 10, justifyContent: 'center' }}>

                                <Text style={{ alignItems: 'center', justifyContent: 'center' }}>
                                    Available for paid photo shoot
          </Text>
                                <Text style={{ alignItems: 'center', justifyContent: 'center', color: 'gray' }}>
                                    Miami Beach, FL
          </Text>

                            </View>
                            <View style={{ flex: .7, alignItems: 'center', justifyContent: 'center' }}>


                                <Text style={{ color: 'green', alignItems: 'center', justifyContent: 'center', fontSize: 20 }}>
                                    +
      </Text>
                            </View>
                            <View style={{ flex: .2, backgroundColor: 'red', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>


                            </View>
                        </View>

                    </Card>
                    <Card style={{ backgroundColor: 'fff', marginHorizontal: 10 }}>

                        <View style={{ flex: 1, flexDirection: 'row', borderRadius: 5 }}>
                            <View style={{ flex: .2, backgroundColor: 'red', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                            </View>
                            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

                                <Icon size={30}
                                    name={'ios-checkmark'}
                                    color={'yellow'} />

                            </View>
                            <View style={{ flex: 8, alignItems: 'center', padding: 10, justifyContent: 'center' }}>

                                <Text style={{ alignItems: 'center', justifyContent: 'center' }}>
                                    Booked
                                </Text>
                                <Text style={{ alignItems: 'center', justifyContent: 'center', color: 'gray' }}>
                                    Municipio,Rome
                                </Text>

                            </View>

                            <View style={{ flex: 2, padding: 10, backgroundColor: 'green', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                                <View style={{ flex: .2, backgroundColor: 'pink', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                                </View>
                                <Text style={{ color: '#fff', alignItems: 'center', justifyContent: 'center', fontSize: 14 }}>
                                    21
</Text>
                                <Text style={{ color: '#fff', alignItems: 'center', justifyContent: 'center', fontSize: 10 }}>
                                    OCTOBER
</Text>
                            </View>
                        </View>
                        <View style={{ flex: 1, flexDirection: 'row', borderRadius: 5, padding: 20 }}>
                            <View style={{ flex: 5, flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                                <Icon size={30}
                                    name={'ios-checkmark'}
                                    color={'yellow'} />
                            </View>
                            <View style={{ flex: .1, backgroundColor: 'gray', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>

                            </View>
                            <View style={{ flex: 5 }}>
                                <View style={{ flex: 3, alignItems: 'center', justifyContent: 'center' }}>
                                    <Text style={{ alignItems: 'center', justifyContent: 'center' }}>
                                        Distance
                                </Text>
                                    <Text style={{ alignItems: 'center', justifyContent: 'center', color: 'gray' }}>
                                        23.6 mi
                                </Text>
                                    <Text style={{ alignItems: 'center', justifyContent: 'center' }}>
                                        12.00-18.00
                                </Text>
                                </View>
                                <View style={{
                                    flex: 2,

                                    flexDirection: 'column',
                                    justifyContent: 'flex-end',
                                    alignItems: 'flex-end'
                                }}>

                                    <Text style={{ color: 'gray' }}>
                                        +
                                </Text>
                                    <Text style={{ color: 'gray' }}>
                                        Book Ticket
                                </Text>
                                </View>
                            </View>
                        </View>
                    </Card>

                </Content>
            </Container>
        );
    }
}
