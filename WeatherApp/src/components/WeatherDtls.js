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
    Picker, Radio
} from 'native-base';
var windowSize = Dimensions.get('window');
import Utils from './utils';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { weatherConditions } from './weatherConditions';
export default class WeatherDtls extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isLoading: true,
            temperature: 0,
            weatherCondition: null,
            error: null,
            location: null,
            humidity: null,
            date: '',
            description: '',
            dataAvailble: false
        };

    }
    componentDidMount() {


        var query = this.props.route.params.info.country + "," + this.props.route.params.info.state + "," + this.props.route.params.info.city
        this.fetchWeather(query);
    }

    fetchWeather(query) {
        console.log("date====>" + `http://api.openweathermap.org/data/2.5/weather?q=` + query + `&APPID=e8c70ab31bf625eef7bf01577d13afb4`);
        fetch(
            `http://api.openweathermap.org/data/2.5/weather?q=` + query + `&APPID=e8c70ab31bf625eef7bf01577d13afb4`
        )
            .then(res => res.json()).catch((error) => console.warn("fetch error:", error))
            .then(data => {
                console.log(data)
                if (data.cod == 200) {
                    this.setState({
                        temperature: data.main.temp,
                        weatherCondition: data.weather[0].main,
                        isLoading: false,
                        dataAvailble: false,
                        location: data.name,
                        humidity: data.main.humidity,
                        date: data.dt,
                        description: data.weather[0].description
                    });
                } else {
                    this.setState({
                        isLoading: false,
                        dataAvailble: true,
                        location: data.message
                    })
                }
            });
    }

    formatDateTime = (unixTimeStamp) => {
        var jsTimeStamp = unixTimeStamp * 1000,
            date = new Date(jsTimeStamp);
        return Utils.days[date.getDay()].toUpperCase() + ", " + Utils.months[date.getMonth()] + " " + date.getDate();
    }

    render() {
        const { isLoading, weatherCondition, temperature, location, humidity, date, description, dataAvailble } = this.state

        return (
            <View style={styles.weatherContainer}>
                {isLoading ? (
                    <View style={styles.loadingContainer}>
                        <Text stlye={styles.loadingText}>Fetching Your Weather</Text>
                        <Spinner />
                    </View>
                ) : dataAvailble ? (<View style={styles.loadingContainer}>
                    <Text stlye={{
                        marginTop: 0,
                        fontSize: 50,
                        color: 'red'
                    }}>{location}</Text>
                </View>) : (
                            <View
                                style={[
                                    styles.weatherContainer,
                                    { backgroundColor: '#fff' }
                                ]}
                            >
                                <Card style={{ marginHorizontal: 10 }}>
                                    <View style={styles.headerContainer}>
                                        <Text style={styles.title}>{location}</Text>
                                        <Text style={styles.subtitle}>{this.formatDateTime(date)}</Text>
                                    </View>

                                    <View style={{ alignItems: 'center', }}>
                                        {<Icon
                                            size={100}
                                            name={weatherConditions[this.state.weatherCondition].icon}
                                            color={'gray'}
                                        />}
                                        <Text style={styles.tempText}>{Utils.convertToCelcius(temperature) + "˚C"}</Text>
                                        <Text style={styles.subtitle}>
                                            {description}
                                        </Text>
                                    </View>


                                    <View style={styles.bodyContainer}>

                                        <Text style={styles.subtitle}>
                                            Humidity: {humidity}%
        </Text>
                                    </View>
                                </Card>
                            </View>
                        )}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    loadingContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FFFDE4'
    },
    loadingText: {
        fontSize: 30
    },
    weatherContainer: {
        flex: 1,
    },
    headerContainer: {

        flexDirection: 'column',
        alignItems: 'flex-start',

    },
    tempText: {
        marginTop: 0,
        fontSize: 30,
        color: '#000'
    },
    bodyContainer: {

        alignItems: 'center',
        justifyContent: 'center',
        paddingLeft: 30,
        marginBottom: 15
    },
    title: {
        padding: 10,
        fontSize: 20,
        color: '#000'
    },
    subtitle: {
        paddingLeft: 12,
        fontSize: 12,
        color: 'gray'
    },
});
