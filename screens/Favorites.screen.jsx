import React, { useContext, useState } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { FavoritesContext } from "../store/context/favorites-context";
import { MEALS } from "../data/dummy-data";
import MealItem from "../components/mealItem/MealItem.component";
import MealsList from "../components/mealsList/MealsList.component";

const FavoritesScreen = ({ navigation, route }) => {
  const [meals, setMeals] = useState([]);

  // get the context from the FavoritesContext
  const { favorites } = useContext(FavoritesContext);

  // get the meals from the MEALS array that match the favorites
  const mealsToDisplay = MEALS.filter((meal) => favorites.some((item) => item === meal.id));

  return (
    <View style={styles.container}>
      <MealsList meals={mealsToDisplay} navigation={navigation} route={route} />
    </View>
  );
};

export default FavoritesScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
