// import { StatusBar } from 'expo-status-bar';
// import React, { useState } from 'react';
// import { StyleSheet, Text, View, Button } from 'react-native';

// export default function App() {
// const [outText, setOuttext]=useState("press button");

//   return (
//     <View style={styles.container}>

//       <Text>{outText}</Text>
//       <Button title="change text" onPress={ () => setOuttext("now changed!!!!")}/>
//     <StatusBar style="auto" />
    
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



import React, { Component } from 'react'
import WebViewExample from './webView'

const App = () => {
   return (
      <WebViewExample/>
   )
}
export default App;