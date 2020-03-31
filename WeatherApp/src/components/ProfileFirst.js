import React, { Component } from 'react';
//import react in our code.
import { ScrollView, Image, StyleSheet, View, Animated, Text, Platform, TouchableOpacity, Dimensions, Modal, TouchableWithoutFeedback } from 'react-native';
//import all the components we are going to use. 
import { Container, Header, Content, Tab, Tabs, Icon } from 'native-base';
import Tab1 from './Tab1';
import Tab2 from './CustomBar';
import Tab3 from './CustomBar';
import ImagePicker from 'react-native-image-crop-picker';
const Header_Maximum_Height = 250;
//Max Height of the Header
const Header_Minimum_Height = 50;
//Min Height of the Header
import RNFS from "react-native-fs";
const window = Dimensions.get('window');
export default class ProfileFirst extends Component {
    constructor(props) {
        super(props);
        this.state = {
            attachmentModalVisible: false,
            filepath: 'https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50'
        }
        this.AnimatedHeaderValue = new Animated.Value(0);
    }

    selectFile = () => {
        this.setState({
            attachmentModalVisible: true
        });
        // ImagePicker.openCamera({
        //     width: window.width,
        //     height: parseInt(window.width*(1.36), 10),
        //     cropping: false
        //   }).then(image => {
        //     //copy image to ASAP folder of local storage
        //    // this.copyFileToLocalStorage(image.path);
        //    this.setState({filepath:image.path});
        //   }).catch(
        //     //e => alert(e)
        //   );


    }
    //capture image from camera
    pickWithCamera(cropping) {
        ImagePicker.openCamera({
            width: window.width,
            height: parseInt(window.width * (1.36), 10),
            cropping: true
        }).then(image => {
            //copy image to ASAP folder of local storage
            // this.copyFileToLocalStorage(image.path);
            this.setState({
                attachmentModalVisible: false, filepath: image.path
            });
        }).catch(
            //e => alert(e)
        );
    }

    //select from gallery
    pickFromGallery() {
        var width;
        var height;
        if (Platform.OS == "ios") {
            width = window.width;
            height = parseInt(window.width * (1.36), 10);
        }
        else {
            width = window.width;
            height = window.height;
        }
        ImagePicker.openPicker({
            width: width,
            height: height,
            cropping: true,
        }).then(image => {
            this.setState({
                attachmentModalVisible: false, filepath: image.path
            });
            //copy image to ASAP folder of local storage
            //  this.copyFileToLocalStorage(image.path);
            this.forceUpdate();
        }).catch(
            //e => alert(e)
        );
    }
    dismissAttachmentModal = () => {

        this.setState({

            attachmentModalVisible: false
        })

    }


    render() {
        const AnimateHeaderBackgroundColor = this.AnimatedHeaderValue.interpolate({
            inputRange: [0, Header_Maximum_Height - Header_Minimum_Height],
            outputRange: ['#4286F4', '#00BCD4'],
            extrapolate: 'clamp',
        });
        const AnimateHeaderHeight = this.AnimatedHeaderValue.interpolate({
            inputRange: [0, Header_Maximum_Height - Header_Minimum_Height],
            outputRange: [Header_Maximum_Height, Header_Minimum_Height],
            extrapolate: 'clamp',
        });

        return (
            <View style={styles.MainContainer}>
                <ScrollView
                    scrollEventThrottle={16}
                    contentContainerStyle={{ paddingTop: Header_Maximum_Height }}
                    onScroll={Animated.event([
                        { nativeEvent: { contentOffset: { y: this.AnimatedHeaderValue } } },
                    ])}>
                    {/* Put all your Component here inside the ScrollView */}
                    <Tabs>
                        <Tab heading="Booking Model">
                            <Tab1 />
                        </Tab>
                        <Tab heading="Model Details">
                            <Tab2 />
                        </Tab>
                        <Tab heading="Connections">
                            <Tab3 />
                        </Tab>
                    </Tabs>
                </ScrollView>
                <Animated.View
                    style={[
                        styles.Header,
                        {
                            height: AnimateHeaderHeight,
                            backgroundColor: AnimateHeaderBackgroundColor,
                        },
                    ]}>
                    <View style={{
                        flex: 1,

                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>

                        <Text >
                            click image to open camera
             </Text>
                        <TouchableOpacity style={{ margin: 10 }} onPress={() => this.selectFile()}>

                            <Image
                                style={{
                                    width: 50,
                                    height: 50,
                                    alignItems: 'center',
                                    borderRadius: 25
                                }}
                                source={{ uri: this.state.filepath }}>
                            </Image>
                        </TouchableOpacity>
                        <Text style={styles.HeaderInsideText}>
                            David Gandy
             </Text>
                        <Text style={styles.HeaderInsideText}>
                            MODEL..ACTER
             </Text>
                    </View>


                </Animated.View>
                <Modal
                    animationType={"slide"}
                    transparent={true}
                    visible={this.state.attachmentModalVisible}
                    onRequestClose={() => this.dismissAttachmentModal()}>
                    <TouchableWithoutFeedback onPress={() => this.dismissAttachmentModal()}>
                        <View style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)', flex: 1, padding: 10, alignItems: 'center', justifyContent: 'center' }}>
                            <View style={{ backgroundColor: '#e6e6e6', borderRadius: 5, paddingTop: 20, paddingLeft: 30, paddingRight: 30, paddingBottom: 15 }}>
                                {/* Photos : camera/ gallery, attachment*/}
                                {
                                    !this.state.isDocSelected &&
                                    <View style={{ flexDirection: 'row' }}>
                                        <View style={{ backgroundColor: '#00b8d4', padding: 10 }}>
                                            <TouchableOpacity onPress={() => this.pickWithCamera(true)} style={{ alignItems: 'center', justifyContent: 'center' }}>
                                                <Text style={{ color: '#fff' }}>Take a Photo</Text>
                                            </TouchableOpacity>
                                        </View>
                                        <View style={{ backgroundColor: '#00b8d4', padding: 10, marginLeft: 10 }}>
                                            <TouchableOpacity onPress={() => this.pickFromGallery(true)} style={{ alignItems: 'center', justifyContent: 'center' }}>
                                                <Text style={{ color: '#fff' }}>Select File</Text>
                                            </TouchableOpacity>
                                        </View>
                                    </View>
                                }
                            </View>
                        </View>
                    </TouchableWithoutFeedback>
                </Modal>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    MainContainer: {
        flex: 1,
        paddingTop: Platform.OS == 'ios' ? 20 : 0,
    },
    Header: {
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        left: 0,
        right: 0,
        top: Platform.OS == 'ios' ? 20 : 0,
    },
    HeaderInsideText: {
        color: '#fff',
        fontSize: 18,
        alignItems: 'center',
        justifyContent: 'center'
    },
    TextViewStyle: {
        textAlign: 'center',
        color: '#000',
        fontSize: 18,
        margin: 5,
        padding: 7,
    },
});