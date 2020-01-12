// import React from 'react';
// import { StyleSheet, Text, View } from 'react-native';

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Open up App.js to start working on your app!</Text>

//       <Text>Here is the ui view!</Text>

//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });


import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Image,
  StatusBar
} from 'react-native';
import mainLogo from './logo.png';

import Routes from './src/Routes';

export default class App extends Component   {
  render() {
    return (
      <View style={styles.container}>
         <Image 
         style= {{justifyContent: 'center', alignItems: 'center'}}  
         source={require('./logo.png')} />
        <StatusBar
          backgroundColor="#002f6c" 
          barStyle="light-content"
        />
        <Routes/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    // alignItems: 'center',
    paddingVertical: 75,
    backgroundColor: 'white',
  }
});