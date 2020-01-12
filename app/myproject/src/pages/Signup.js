import React, { Component } from '../../node_modules/react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';

import Form from '../components/FormSignup';

import {Actions} from '../../node_modules/react-native-router-flux';

export default class Signup extends Component {

    goBack() {
        Actions.pop()
    }

    render() {
        return(
            <View style={styles.container}>
                <Text>{'\n'}</Text>
                <Text>{'\n'}</Text>
                <Form type="Signup"/>
                <View style={styles.signinTextCont}> 
                    <Text style={styles.signupText}>Already have an account? </Text>
                    <TouchableOpacity onPress={this.goBack}><Text style={styles.signupButton}>Sign in</Text></TouchableOpacity>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'white'
    },
    signinTextCont: {
      flexGrow: 1,
      justifyContent: 'center',
      alignItems: 'flex-end',
      paddingVertical: 16,
      flexDirection: 'row'
    },
    signupText: {
      color: '#b22222', 
      fontSize:16
    },
    signupButton: {
        color: '#b22222',
        fontSize:16,
        fontWeight: '500'
    }
});