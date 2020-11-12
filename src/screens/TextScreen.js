import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";

const TextScreen = () => {
  const [password, setPassword] = useState("");
  return (
    <View style={styles.container}>
      <TextInput
        secureTextEntry={true}
        password={true}
        style={styles.textInputStyle}
        autoCapitalize="none"
        autoCorrect={false}
        value={password}
        onChangeText={(value) => {
          setPassword(value);
        }}
      />
      {password.length < 4 ? (
        <Text>Password must be at least 4 characters</Text>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  textInputStyle: {
    marginVertical: 20,
    fontSize: 20,
    height: 34,
    width: "80%",
    borderWidth: 1,
    borderColor: "black",
  },
});

export default TextScreen;
