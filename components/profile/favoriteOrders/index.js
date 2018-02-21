import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity
} from 'react-native';

export default class FavoriteOrders extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>This is where your favorite orders will show up.</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 2,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#FFFFFF',
      alignSelf: 'stretch',
    },
});