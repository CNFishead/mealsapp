import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { MEALS } from "../data/dummy-data";

const MealsOverview = () => {
  return (
    <View style={styles.container}>
      <Text>Hello world!</Text>
    </View>
  );
};

export default MealsOverview;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
