import React, {Component} from 'react';
import {KeyboardAvoidingView, StyleSheet, Image} from "react-native";
import {View} from "native-base";
import {connect} from "react-redux";


import * as firebase from "firebase";
import { firebaseConfig } from "./../../config";

import LoginForm from "./component/login-form";

let firebaseApp;


class Login extends Component {
    constructor(props) {
        super(props);
        this.ref = firebase.firestore().collection('posts');
    }
    componentDidMount() {
        firebaseApp = firebase.initializeApp(firebaseConfig);
    }
    render() {
        return (
            <KeyboardAvoidingView behavior="button" style={styles.container}>
                <View style={styles.loginContainer}>
                    <Image resizeMode="contain" style={styles.logo}
                           source={ require('./../../assets/RNFirebase.png')}/>
                </View>
                <View>
                    <LoginForm {...this.props} />
                    <Text> {this.props.persona } </Text>
                </View>
            </KeyboardAvoidingView>
        );
    }
}

function mapStateToProps(state) {
    return {
        persona: state.personData
    }
}
function mapDispatchToProps(dispatch) {
    return {};
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#2c3e50',
    },
    loginContainer: {
        alignItems: 'center',
        flexGrow: 1,
        justifyContent: 'center'
    },
    logo: {
        position: 'absolute',
        width: 300,
        height: 100
    }
});


export default connect(mapStateToProps, mapDispatchToProps)(Login);