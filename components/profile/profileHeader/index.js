import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity
} from 'react-native';

export default class ProfileHeader extends Component {
    render() {
        return(
            <View style={styles.container}>
                <View style={styles.profilePic}>
                    <Image />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 2,
      justifyContent: 'center',
      alignSelf: 'stretch',
      backgroundColor: '#000000',
      padding: 20
    },
    profilePic: {
        alignSelf: 'center',
        height: 180,
        width: 180,
        borderRadius: 100,
        borderColor: '#ffffff',
        borderWidth: 16,
    }
});