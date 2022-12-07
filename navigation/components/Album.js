import React from "react";
import { TouchableOpacity, Text, Hoverable, StyleSheet } from "react-native";

function Album({ data, onPress }) {
  return (
    <TouchableOpacity style={styles.container}>
      <Text style={styles.text} onPress={onPress}>
        {data.title}
      </Text>
    </TouchableOpacity>
  );
}

export default Album;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#554AF0",
    padding: 20,
    margin: 10,
    borderRadius: 10,
  },
  text: {
    color: "white",
    fontSize: 26,
    fontWeight: "bold",
  },
});
