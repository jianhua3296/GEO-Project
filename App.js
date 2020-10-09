//----- example for showing current location on google map-----
// import React from "react";
import MapView from "react-native-maps";
import { StyleSheet, Text, View, Dimensions, TextInput } from "react-native";
import Mapview, { Marker } from "react-native-maps";

import * as React from "react";
import Constants from "expo-constants";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import Geocoder from "react-native-geocoding";
const GOOGLE_PLACES_API_KEY = "AIzaSyB_fuGPEjP2hp9-GNXOt-ElFWceKQFFgz4";


// Initialize the module (needs to be done only once)
Geocoder.init("AIzaSyB_fuGPEjP2hp9-GNXOt-ElFWceKQFFgz4", { language: "en" }); // use a valid API key
// With more options
// Geocoder.init("xxxxxxxxxxxxxxxxxxxxxxxxx", {language : "en"}); // set the language

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
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 2000 }
    );
  }

  render() {
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

              // this.map.animateCamera({
              //   center: {
              //     latitude: 0,
              //     longitude: 0,
              //   },
              //   heading: 180,
              // });
            }}
            onFail={(error) => console.error(error)}
            requestUrl={{
              url:
                "https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api",
              useOnPlatform: "web",
            }} // this in only required for use on the web. See https://git.io/JflFv more for details.
            styles={searchInputStyle}
          />
 
          <MapView
            showsUserLocation
            style={styles.mapStyle}
            region={{
              latitude: this.state.latitude,
              longitude: this.state.longitude,
              latitudeDelta: 0.1,
              longitudeDelta: 0.035,
            }}
          >
            <Marker
              coordinate={this.state}
              title={"somewhere on earth"}
            ></Marker>
          </MapView>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent:"center"

    flex: 1,
    justifyContent: "center",
    paddingTop: Constants.statusBarHeight,
    backgroundColor: "#ecf0f1",
    padding: 8,
  },

  mapStyle: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
    zIndex: 1,
  },
});

//style for search bar on Map
const searchInputStyle = {
  textInputContainer: {
    backgroundColor: "rgba(0,0,0,0)",
    borderTopWidth: 0,
    borderBottomWidth: 0,
    zIndex: 5,
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
  listView: {
    color: "black", //To see where exactly the list is
    zIndex: 5, //To popover the component outwards
    position: "absolute",
  },
};
