import React from "react";
import { Text, View } from "react-native";

const MealItem = ({ item }) => {
  return (
    <View>
      <Text>{item.title}</Text>
    </View>
  );
};

export default MealItem;
