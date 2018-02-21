import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    TouchableHighlight
} from 'react-native';

import FBSDK, { LoginManager, AccessToken, LoginButton, GraphRequest, GraphRequestManager } from 'react-native-fbsdk';
import firebase from 'firebase';
// import * as FacebookLogin from '../../src/actions/fbLogin';

// Initialize Firebase
var config = {
    apiKey: "AIzaSyAHnbeeEq54auSA8tw1PM-etrMnKE0oLo0",
    authDomain: "rounds-34e48.firebaseapp.com",
    databaseURL: "https://rounds-34e48.firebaseio.com",
}
  
const firebaseRef = !firebase.apps.length ? firebase.initializeApp(config) : firebase.app();

export default class Signup extends Component {

    fbAuth() {
        console.log('fb button pressed');
        LoginManager.logInWithReadPermissions(['public_profile', 'email']).then(function (result) {
            if (result.isCancelled) {
                console.log("Login was cancelled.");
            } else {
                console.log('I MADE IT HERE');
                AccessToken.getCurrentAccessToken().then((accessTokenData) => {
                    const credential = firebase.auth.FacebookAuthProvider.credential(accessTokenData.accessToken)
                    firebase.auth().signInWithCredential(credential).then(function(result) {
                        // Promise was successful
                        console.log(result);
                        console.log("THE USER HAS LOGGED IN");
                        const responseDataCallback = result;
                    }, (error) => {
                        // Promise was rejected
                        console.log("Error " + error)
                    })
                }, (error => {
                    console.log("An error has occured " + error)
                }))
            }
        }, function (error) {
            console.log("An error has occurred: " + error);
        })
    };
    
    
    render() {
        console.log();
        return (
            <View style={styles.container}>
                <View style={styles.signUp}>
                    <TouchableOpacity style={styles.fbLogin} onPress={this.fbAuth}>
                        <Text style={styles.fbLoginText}>
                            Continue with Facebook
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.emailSignUp}>
                        <Text style={styles.signUpText}>
                            Sign up with Email
                        </Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.signIn}>
                    <Text style={styles.signInText}>
                        If you already have an account, sign in.
                    </Text>
                </View>
            </View>
        );
    } 
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    fbLogin: {
        margin: 10,
        height: 50,
        width: 250,
        borderRadius: 5,
        backgroundColor: '#3B5998',
    },
    fbLoginText: { 
        textAlign: 'center',
        color: '#FFFFFF',
        marginVertical: 15,
    },
    emailSignUp: {
        margin: 10,
        backgroundColor: '#FFFFFF',
        height: 50,
        width: 250,
        borderRadius: 5,
        borderColor: '#000000',
        borderWidth: 1.5,
    },
    signUpText: {
        fontSize: 12,
        textAlign: 'center',
        color: '#000000',
        marginVertical: 15,
    },
    signUp: {
        flex: 2,
        justifyContent: 'center',
    },
    signIn: {
        flex: 1,
        justifyContent: 'center',
    },
    signInText: {
        color: '#000000',
    }
});