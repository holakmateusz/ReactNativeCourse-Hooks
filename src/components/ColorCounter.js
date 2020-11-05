import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const ColorCounter = ({ colorName, onIncrease, onDecrease }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.textContainer}>{colorName}</Text>
      <Button onPress={() => onIncrease()} title={`Increase ${colorName}`} />
      <Button onPress={() => onDecrease()} title={`Decrease ${colorName}`} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignContent: "center",
    marginVertical: 10,
  },
  textContainer: {
    alignItems: "center",
    marginVertical: 5,
  },
});

export default ColorCounter;
