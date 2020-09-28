import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { WebView } from 'react-native-webview';

const WebViewExample = () => {
   return (
      <View style = {styles.container}>
         <WebView
        // originWhitelist={['*']}
        source={{ html: `<!DOCTYPE HTML>
<html>
  <head>
    <script src="http://www.webglearth.com/v2/api.js"></script>
    <script>
      function initialize() {
        var earth = new WE.map('earth_div');
        WE.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{
          attribution: '© OpenStreetMap contributors'
        }).addTo(earth);
      }
    </script>
    <style>
      html, body{padding: 0; margin: 0;}
      #earth_div{top: 0; right: 0; bottom: 0; left: 0; position: absolute !important;}
    </style>
    <title>WebGL Earth API: Hello World</title>
  </head>
  <body onload="initialize()">
    <div id="earth_div"></div>
  </body>
</html>` }}
      />
      </View>
   )
}
export default WebViewExample;

const styles = StyleSheet.create({
   container: {
      height: 350,
   }
})