import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

const MealDetails = ({ item, style, textStyle }) => {
  return (
    <View style={[styles.informationContainer, style]}>
      <Text style={[styles.informationContainerText, textStyle]}>Time: {item.duration}m</Text>
      <Text style={[styles.informationContainerText, textStyle]}>Complexity: {item.complexity.toUpperCase()}</Text>
      <Text style={[styles.informationContainerText, textStyle]}>Cost: {item.affordability.toUpperCase()}</Text>
    </View>
  );
};

export default MealDetails;

const styles = StyleSheet.create({
  informationContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: 8,
  },
  informationContainerText: {
    fontSize: 12,
    marginHorizontal: 4,
  },
});
