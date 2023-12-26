import React, { useLayoutEffect } from "react";
import { Button, Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { MEALS } from "../data/dummy-data";
import { default as MD } from "../components/mealDetails/MealDetails.component";
import colors from "../constants/colors";
import IconButton from "../components/iconButton/IconButton.component";

const MealDetails = ({ route, navigation }) => {
  const meal = MEALS.find((meal) => meal.id === route.params.mealId);

  const headerButtonHandler = () => {
    console.log("header button pressed");
  };

  useLayoutEffect(() => {
    // set the title of the screen to the categoryTitle
    navigation.setOptions({
      title: route.params.mealTitle,
      headerStyle: {
        backgroundColor: route.params.mealsColor,
      },
      headerRight: () => <IconButton onPress={headerButtonHandler} icon={"star"} color={"white"} />,
    });
  }, [navigation, headerButtonHandler]);
  return (
    <View style={styles.rootContainer}>
      <View>
        {/* <View style={styles.imageContainer}> */}
        <Image source={{ uri: meal.imageUrl }} style={styles.image} />
        {/* </View> */}
        <Text style={styles.title}>{meal.title}</Text>
      </View>
      <MD item={meal} textStyle={{ color: "white" }} />
      <ScrollView>
        <View>
          <Text style={styles.subTitle}>Ingredients</Text>
          {meal.ingredients.map((ingredient) => (
            <View style={styles.informationContainer} key={ingredient}>
              <Text style={styles.informationalText}>{ingredient}</Text>
            </View>
          ))}
        </View>
        <View>
          <Text style={styles.subTitle}>Steps</Text>
          {meal.steps.map((step, index) => (
            <View style={styles.informationContainer} key={step}>
              <Text style={styles.informationalText}>
                {index + 1}: {step}
              </Text>
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default MealDetails;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    padding: 16,
    justifyContent: "space-between",
    alignContent: "center",
  },
  imageContainer: { flex: 1 },
  image: {
    width: "100%",
    height: 300,
  },
  title: {
    fontSize: 24,
    textAlign: "center",
    marginVertical: 8,
    color: "white",
  },
  subTitle: {
    fontSize: 18,
    textAlign: "center",
    marginVertical: 8,
    marginHorizontal: 16,
    borderBottomColor: "white",
    borderBottomWidth: 2,
    padding: 4,
    color: colors.secondary,
  },
  informationContainer: {
    borderRadius: 6,
    paddingHorizontal: 8,
    paddingVertical: 4,
    marginVertical: 4,
    marginHorizontal: 12,
    backgroundColor: colors.tertiary,
  },
  // text for ingredients and steps
  informationalText: {
    fontSize: 16,
    marginVertical: 8,
    color: colors.primary,
  },
});
