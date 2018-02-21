import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    ImageBackground,
    View,
    TouchableOpacity
} from 'react-native';

import Signup from '../signin/index';

export default class BackgroundImage extends Component {
    render() {
        return (
                <ImageBackground 
                    source={require('../../images/crowdedbar.jpg')} 
                    style={styles.backgroundImage}>
                    <View style={styles.overlayContainer}>
                        <Signup />
                    </View>
                </ImageBackground>
        )
    }
}

const styles = StyleSheet.create({
    backgroundImage: {
        flex: 1,
        width: '100%',
        height: '100%',
    },
    overlayContainer: {
        flex: 1,
        backgroundColor: 'rgba(47, 163, 218, .4)'
    }
});