import * as React from "react";
import { StyleSheet, SafeAreaView, Text, View } from "react-native";

export default function AddScreen({ route }) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topNav}>
        <Text style={styles.textScreen}>Add</Text>
      </View>
      <View>
        <Text style={styles.title}>Add Screen</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  text: {
    fontSize: 20,
    margin: 10,
  },
  textScreen: {
    fontSize: 26,
    fontWeight: "bold",
    color: "white",
  },
  topNav: {
    backgroundColor: "#554AF0",
    paddingLeft: 25,
    paddingBottom: 18,
    paddingTop: 70,
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
  },
});
