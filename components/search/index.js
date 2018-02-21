import React, { Component } from 'react';
import {
    AppRegistry,
    Platform,
    StyleSheet,
    Text,
    View,
    TouchableOpacity
} from 'react-native';
import FBSDK, { LoginManager, AccessToken } from 'react-native-fbsdk';
import firebase from 'firebase';
import ProfileScreen from '../profile/index';


export default class SearchScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>
                This is the search screen.
                </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#FFFFFF',
    },
});