// //---example for assigning a function to button ----

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
// //-------------------------------------------------------

// //----example for showing a webview ------------------------

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
// //---------------------------------------------------------------

// //----- example for showing current location on google map-----
// import React from "react";
// import MapView from "react-native-maps";
// import { StyleSheet, Text, View, Dimensions } from "react-native";
// import Mapview, { Marker } from "react-native-maps";

// export default class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       latitude: 0,
//       longitude: 0,
//     };
//   }

//   componentDidMount() {
//     navigator.geolocation.getCurrentPosition(
//       (position) => {
//         this.setState({
//           latitude: position.coords.latitude,
//           longitude: position.coords.longitude,
//           error: null,
//         });
//       },
//       (error) => this.setState({ error: error.message }),
//       {enableHighAccuracy:true,timeout:20000, maximumAge:2000}
//     );

//   }

//   render() {
//     return (
//       <View style={styles.container}>
//         <MapView
//             showsUserLocation
//           style={styles.mapStyle}
//           region={{
//             latitude: this.state.latitude,
//             longitude: this.state.longitude,
//             latitudeDelta: 0.1,
//             longitudeDelta: 0.035,
//           }}
//         >
//         <Marker coordinate={this.state}
//         title={'somewhere on earth'}>

//         </Marker>
//          </MapView>

//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   mapStyle: {
//     width: Dimensions.get("window").width,
//     height: Dimensions.get("window").height,
//   },
// });

// //----------example for using react-native-google-autocomplete-----
import * as React from "react";
import { View, StyleSheet, TextInput } from "react-native";
import Constants from "expo-constants";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import Geocoder from "react-native-geocoding";
const GOOGLE_PLACES_API_KEY = "AIzaSyB_fuGPEjP2hp9-GNXOt-ElFWceKQFFgz4"; // never save your real api key in a snack!

// Initialize the module (needs to be done only once)
Geocoder.init("AIzaSyB_fuGPEjP2hp9-GNXOt-ElFWceKQFFgz4", { language: "en" }); // use a valid API key
// With more options
// Geocoder.init("xxxxxxxxxxxxxxxxxxxxxxxxx", {language : "en"}); // set the language

const App = () => {
  return (
    <View style={styles.container}>
      <GooglePlacesAutocomplete
        query={{
          key: GOOGLE_PLACES_API_KEY,
          language: "en", // language of the results
        }}
        onPress={(data, details = null) => {
          console.log(data);
          console.log("test");
          Geocoder.from(data.description)
            .then((json) => {
              var location = json.results[0].geometry.location;
              console.log(location);
            })
            .catch((error) => console.warn(error));
        }}
        onFail={(error) => console.error(error)}
        requestUrl={{
          url:
            "https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api",
          useOnPlatform: "web",
        }} // this in only required for use on the web. See https://git.io/JflFv more for details.
        styles={{
          textInputContainer: {
            backgroundColor: "rgba(0,0,0,0)",
            borderTopWidth: 0,
            borderBottomWidth: 0,
          },
          textInput: {
            marginLeft: 0,
            marginRight: 0,
            height: 38,
            color: "#5d5d5d",
            fontSize: 16,
          },
          predefinedPlacesDescription: {
            color: "#1faadb",
          },
        }}
      />

      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingTop: Constants.statusBarHeight,
    backgroundColor: "#ecf0f1",
    padding: 8,
  },

});

export default App;
