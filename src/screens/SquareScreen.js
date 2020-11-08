import React, { useReducer } from "react";
import { View, StyleSheet } from "react-native";
import ColorCounter from "../components/ColorCounter";

const DIFFERENCE_NUMBER = 20;

const reducer = (state, action) => {
  switch (action.type) {
    case "change_red":
      return state.red + action.payload > 255 || state.red + action.payload < 0
        ? state
        : { ...state, red: state.red + action.payload };
    case "change_green":
      return state.green + action.payload > 255 ||
        state.green + action.payload < 0
        ? state
        : { ...state, green: state.green + action.payload };
    case "change_blue":
      return state.blue + action.payload > 255 ||
        state.blue + action.payload < 0
        ? state
        : { ...state, blue: state.blue + action.payload };
    default:
      return state;
  }
};

const SquareScreen = () => {
  const [state, dispatch] = useReducer(reducer, { red: 0, blue: 0, green: 0 });
  const { red, blue, green } = state;
  return (
    <View>
      <ColorCounter
        onDecrease={() =>
          dispatch({ type: "change_red", payload: -1 * DIFFERENCE_NUMBER })
        }
        onIncrease={() =>
          dispatch({ type: "change_red", payload: DIFFERENCE_NUMBER })
        }
        colorName="Red"
      />
      <ColorCounter
        onDecrease={() =>
          dispatch({ type: "change_blue", payload: -1 * DIFFERENCE_NUMBER })
        }
        onIncrease={() =>
          dispatch({ type: "change_blue", payload: DIFFERENCE_NUMBER })
        }
        colorName="Blue"
      />
      <ColorCounter
        onDecrease={() =>
          dispatch({ type: "change_green", payload: -1 * DIFFERENCE_NUMBER })
        }
        onIncrease={() =>
          dispatch({ type: "change_green", payload: DIFFERENCE_NUMBER })
        }
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
