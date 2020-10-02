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




//----example for showing a webview ------------------------

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

// import React, { Component } from 'react'
// import WebViewExample from './webView'

// const App = () => {
//    return (
//       <WebViewExample/>
//    )
// }
// export default App;






//
import React from "react";
import MapView from "react-native-maps";
import { StyleSheet, Text, View, Dimensions } from "react-native";
import Mapview, { Marker } from "react-native-maps";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      latitude: 0,
      longitude: 0,
    };
  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          error: null,
        });
      },
      (error) => this.setState({ error: error.message }),
      {enableHighAccuracy:true,timeout:20000, maximumAge:2000}
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <MapView
          style={styles.mapStyle}
          region={{
            latitude: this.state.latitude,
            longitude: this.state.longitude,
            latitudeDelta: 0.1,
            longitudeDelta: 0.035,
          }}
        >
        <Marker coordinate={this.state}
        title={'somewhere on earth'}>

        </Marker>
         </MapView>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  mapStyle: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
});
