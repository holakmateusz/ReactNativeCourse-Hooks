import React, { useState } from "react";
import { Text, StyleSheet, View } from "react-native";

const ComponentsScreen = () => {
  const [name, setName] = useState("Mateusz");
  return (
    <View style={styles.containerStyle}>
      <Text style={styles.headerStyle}>Getting started with React Native</Text>
      <Text style={styles.headerStyle}>My Name is {name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    marginHorizontal: 4,
    marginVertical: 4,
    alignItems: "center",
  },
  headerStyle: {
    fontSize: 24,
  },
  subHeaderStyle: {
    fontSize: 16,
  },
});

export default ComponentsScreen;
