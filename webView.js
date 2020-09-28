import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { WebView } from 'react-native-webview';

const WebViewExample = () => {
   return (
      <View style = {styles.container}>
         <WebView
        // originWhitelist={['*']}
        source={{ uri:'https://worldwind.earth/explorer/' }}
      />
      </View>
   )
}
export default WebViewExample;

const styles = StyleSheet.create({
   container: {
      height: '100%',
      width: '100%'
   }
})