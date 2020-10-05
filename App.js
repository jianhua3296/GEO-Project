import React, { useState } from "react";
import { StyleSheet, Text, View, Button, TextInput } from "react-native";

export default function App() {
  const [funciton1, function2] = useState("Welcome to the league of Draven");

  return (
    <View style={{ padding: 50 }}>
      <TextInput
        placeholder="enter here"
        style={{ borderColor: "black", borderWidth: 1, padding: 10 }}
      />
      <Button title="ChangeText" onPress={() => function2("CHANGE!")} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
