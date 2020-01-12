import React, { Component } from '../../node_modules/react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';


import {Actions} from '../../node_modules/react-native-router-flux';

export default class Account extends Component {

    goBack() {
        Actions.pop()
    }

    render() {
        return(
            <View style={styles.container}>
                <Text>{'\n'}</Text>
                <Text style={styles.welcomeText}>Welcome Trevor!</Text>
                <Text style={styles.blurb}>Your personal scam slam phone number is:
                +1 (778) 711-4278 </Text>
                <Text style={styles.info}>You can use this number for filling out 
                forms as thsi will redirect to your current number. It will be used to detect scam calls.</Text>
                {/* <Form type="Account"/> */}
                {/* <View style={styles.signinTextCont}> 
                    <Text style={styles.signupText}>Already have an account? </Text>
                    <TouchableOpacity onPress={this.goBack}><Text style={styles.signupButton}>Sign in</Text></TouchableOpacity>
                </View> */}
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
    welcomeText: {
      flexGrow: 1,
      justifyContent: 'center',
      alignItems: 'flex-end',
      paddingVertical: 1,
      flexDirection: 'row',
      fontSize:25
    },
    blurb: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'flex-end',
        paddingVertical: 1,
        flexDirection: 'row',
        fontSize:25
    },
    info: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'flex-end',
        paddingVertical: 1,
        flexDirection: 'row',
        fontSize:20
    }
});