import React from "react";
import { Text, StyleSheet, View, Button } from "react-native";

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>Home Screen</Text>
      <View style={styles.buttonsContainer}>
        <Button
          title="Go to List Screen"
          onPress={() => navigation.navigate("ListScreen")}
        />
        <Button
          title="Go to Component Screen"
          onPress={() => navigation.navigate("Component")}
        />
        <Button
          title="Go to Image Screen"
          onPress={() => navigation.navigate("ImageScreen")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  textStyle: {
    fontSize: 30,
    marginBottom: 4,
  },
  buttonsContainer: {
    marginVertical: 4,
    paddingVertical: 4,
  },
});

export default HomeScreen;
