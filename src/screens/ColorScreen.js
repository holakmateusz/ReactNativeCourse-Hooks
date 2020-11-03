import React, { useState } from "react";
import { FlatList } from "react-native";
import { View, StyleSheet, Button } from "react-native";

const ColorScreen = () => {
  const [colors, setColors] = useState([]);
  return (
    <View>
      <Button
        title="Add a Color"
        onPress={() => {
          setColors([...colors, randomRgb()]);
        }}
      />
      <FlatList
        data={colors}
        renderItem={({ item }) => {
          return (
            <View style={{ ...styles.container, backgroundColor: item }} />
          );
        }}
        keyExtractor={(item) => item}
      />
    </View>
  );
};

const randomRgb = () => {
  const red = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  return `rgb(${red},${blue},${green})`;
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    alignSelf: "center",
    height: 100,
    width: 100,
  },
});

export default ColorScreen;
