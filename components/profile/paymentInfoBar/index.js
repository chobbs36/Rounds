import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity
} from 'react-native';

export default class PaymentInfoBar extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>This is where the users card info will display.</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignSelf: 'stretch',
      backgroundColor: '#ffffff',
    },
});