export function fbAuth() {
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

