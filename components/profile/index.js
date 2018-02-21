import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity
} from 'react-native';
import FBSDK, { LoginManager, AccessToken } from 'react-native-fbsdk';
import firebase from 'firebase';
import SearchScreen from '../search/index';
import ProfileHeader from './profileHeader/index';
import PaymentInfoBar from './paymentInfoBar/index';
import FavoriteOrders from './favoriteOrders/index';

export default class ProfileScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <ProfileHeader />
                <PaymentInfoBar />
                <Text>
                This is the profile screen.
                </Text>
                <FavoriteOrders />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#FF0000',
    },
});