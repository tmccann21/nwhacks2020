import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, AsyncStorage, Keyboard } from 'react-native';
import {Actions} from 'react-native-router-flux';

import account from '../pages/Account';

export default class FormLogin extends Component {
    constructor(props){        
        super(props);        
        this.state={       
            name:'',
            phonenum:'',     
            email:'',
            password: '',        
        }   
    }

    getName() {
        return name;
    }

    
    account() {
        Actions.account()
    }

    saveData =async()=>{
        const {name, phonenum, email,password} = this.state;

        //save data with asyncstorage
        let loginDetails={
            name: name,
            phonenum: phonenum,
            email: email,
            password: password
        }

        if(this.props.type !== 'Login')
        {
            AsyncStorage.setItem('loginDetails', JSON.stringify(loginDetails));

            Keyboard.dismiss();
            alert("You successfully registered. Email: " + email + ' password: ' + password);
            this.login();
            // this.account()
            
        }
        else if(this.props.type == 'Login')
        {
            try{
                let loginDetails = await AsyncStorage.getItem('loginDetails');
                let ld = JSON.parse(loginDetails);

                // this.account();

                // if (ld.email != null && ld.password != null)
                // {
                //     if (ld.email == email && ld.password == password)
                //     {
                //         alert('Go in!');
                //         this.account();
                //     }
                //     else
                //     {
                //         alert('Email and Password does not exist!');
                //     }
                // }
                if (email != null && password != null)
                {
                    // alert('Go in!');
                    this.account();
                    
                }
                else {
                    alert('Email and Password does not exist!');
                }

            }catch(error)
            {
                alert(error);
            }
        }
    }


    showData = async()=>{
        let loginDetails = await AsyncStorage.getItem('loginDetails');
        let ld = JSON.parse(loginDetails);
        alert('email: '+ ld.email + ' ' + 'password: ' + ld.password);
    }

    render() {
            return(
                <View style={styles.container}>

                    <TextInput style={styles.inputBox}
                    onChangeText={(email) => this.setState({email})}
                    underlineColorAndroid='rgba(0,0,0,0)' 
                    placeholder="Email"
                    placeholderTextColor = "#002f6c"
                    selectionColor="#fff"
                    keyboardType="email-address"
                    onSubmitEditing={()=> this.password.focus()}/>
                    
                    <TextInput style={styles.inputBox}
                    onChangeText={(password) => this.setState({password})} 
                    underlineColorAndroid='rgba(0,0,0,0)' 
                    placeholder="Password"
                    secureTextEntry={true}
                    placeholderTextColor = "#002f6c"
                    ref={(input) => this.password = input}
                    />
    
                    <TouchableOpacity style={styles.button}> 
                        <Text style={styles.buttonText} onPress={this.saveData}>{this.props.type}</Text>
                    </TouchableOpacity>
                </View>
                
            )
    }
}

const styles = StyleSheet.create({
container: {
    justifyContent: 'center',
    alignItems: 'center',
},
inputBox: {
    width: 300,
    backgroundColor: '#eeeeee', 
    borderRadius: 25,
    paddingHorizontal: 16,
    fontSize: 20,
    color: '#002f6c',
    marginVertical: 10
},
button: {
    width: 300,
    backgroundColor: '#b22222',
    borderRadius: 25,
    marginVertical: 10,
    paddingVertical: 12
},
buttonText: {
    fontSize: 20,
    fontWeight: '500',
    color: '#ffffff',
    textAlign: 'center'
}
});