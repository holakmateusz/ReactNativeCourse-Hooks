import React from "react";
import { StyleSheet, Text, FlatList, View } from "react-native";

const ListScreen = () => {
  const friends = [
    { name: "Friend #1", age: 20 },
    { name: "Friend #2", age: 45 },
    { name: "Friend #3", age: 32 },
    { name: "Friend #4", age: 27 },
    { name: "Friend #5", age: 53 },
    { name: "Friend #6", age: 30 },
  ];
  return (
    <View style={styles.container}>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={friends}
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => {
          return (
            <Text style={styles.textStyle}>
              Name: {item.name} Age: {item.age}
            </Text>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
  textStyle: {
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 2,
    marginHorizontal: 10,
    paddingHorizontal: 40,
    paddingVertical: 20,
    alignSelf: "center",
  },
});

export default ListScreen;
