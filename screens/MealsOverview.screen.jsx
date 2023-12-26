import React, { useLayoutEffect } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { MEALS } from "../data/dummy-data";
import MealItem from "../components/mealItem/MealItem.component";

const MealsOverview = ({ route, navigation }) => {
  const { categoryId } = route.params;

  // we want to find all meals that have the categoryId in their categoryIds array
  const mealsToDisplay = MEALS.filter((meal) => meal.categoryIds.indexOf(categoryId) >= 0);

  useLayoutEffect(() => {
    // set the title of the screen to the categoryTitle
    navigation.setOptions({
      title: route.params.categoryTitle,
      headerStyle: {
        backgroundColor: route.params.categoryColor,
      },
    });
  }, [navigation]);

  return (
    <View style={styles.container}>
      <FlatList
        data={mealsToDisplay}
        renderItem={({ item }) => (
          <MealItem
            item={item}
            onPress={() =>
              navigation.navigate("MealDetails", {
                mealId: item.id,
                mealTitle: item.title,
                mealsColor: route.params.categoryColor,
              })
            }
          />
        )}
        keyExtractor={(item) => item.id}
      />
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
