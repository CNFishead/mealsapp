import React from "react";
import { FlatList, StyleSheet, View } from "react-native";
import MealItem from "../mealItem/MealItem.component";
import colors from "../../constants/colors";

const MealsList = ({ meals, navigation, route }) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={meals}
        renderItem={({ item }) => (
          <MealItem
            item={item}
            onPress={() =>
              navigation.navigate("MealDetails", {
                mealId: item.id,
                mealTitle: item.title,
                mealsColor: route.params?.categoryColor ?? colors.primary,
              })
            }
          />
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default MealsList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
