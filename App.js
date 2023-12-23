import { StatusBar } from "expo-status-bar";
import { Dimensions,  StyleSheet,  View } from "react-native";
import Categories from "./screens/Categories.screen";

export default function App() {
  return (
    <View style={styles.container}>
      <Categories />
      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // set margin top to whatever the status bar height is, plus 10 to add a little space
    marginTop: Dimensions.get("screen").height * 0.02,
  },
});
