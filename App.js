import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import MainContainer from "./navigation/MainContainer";
import GoogleInput from "./navigation/screens/GoogleInput";

export default function App() {
  return <MainContainer style={styles.container} />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EEEDFE",
    alignItems: "center",
    justifyContent: "center",
  },
});
