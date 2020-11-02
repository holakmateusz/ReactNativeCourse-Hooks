import React from "react";
import { Text, StyleSheet, View, Image } from "react-native";

const ImageDetail = ({ imageSource, title, imageScore }) => {
  return (
    <View style={styles.container}>
      <Image source={imageSource} />
      <Text style={styles.textStyle}>{title}</Text>
      <Text style={styles.textStyle}>Image score - {imageScore}/10</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    alignItems: "center",
  },
  textStyle: {
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default ImageDetail;
