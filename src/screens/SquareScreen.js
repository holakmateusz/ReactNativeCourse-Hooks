import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import ColorCounter from "../components/ColorCounter";

const DIFFERENCE_NUMBER = 20;

const SquareScreen = () => {
  const [red, setRed] = useState(0);
  const [blue, setBlue] = useState(0);
  const [green, setGreen] = useState(0);

  const setColor = (color, change) => {
    switch (color) {
      case "red":
        red + change > 255 || change + red < 0 ? null : setRed(red + change);
        return;
      case "blue":
        blue + change > 255 || change + blue < 0
          ? null
          : setBlue(blue + change);
        return;
      case "green":
        green + change > 255 || change + green < 0
          ? null
          : setGreen(green + change);
        return;
    }
  };
  return (
    <View>
      <ColorCounter
        onDecrease={() => setColor("red", -DIFFERENCE_NUMBER)}
        onIncrease={() => setColor("red", DIFFERENCE_NUMBER)}
        colorName="Red"
      />
      <ColorCounter
        onDecrease={() => setColor("blue", -DIFFERENCE_NUMBER)}
        onIncrease={() => setColor("blue", DIFFERENCE_NUMBER)}
        colorName="Blue"
      />
      <ColorCounter
        onDecrease={() => setColor("green", -DIFFERENCE_NUMBER)}
        onIncrease={() => setColor("green", DIFFERENCE_NUMBER)}
        colorName="Green"
      />
      <View
        style={{
          ...styles.squareContainer,
          backgroundColor: `rgb(${red},${green},${blue})`,
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  squareContainer: {
    alignSelf: "center",
    marginTop: 20,
    height: 150,
    width: 150,
  },
});

export default SquareScreen;
