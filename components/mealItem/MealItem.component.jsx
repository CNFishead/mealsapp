import React from "react";
import { Image, Platform, Pressable, StyleSheet, Text, View } from "react-native";
import MealDetails from "../mealDetails/MealDetails.component";

const MealItem = ({ item, onPress }) => {
  return (
    <View style={styles.rootContainer}>
      <Pressable
        android_ripple={{ color: "#cccccc", foreground: true }}
        style={({ pressed }) => [
          styles.button,
          {
            opacity: pressed ? styles.buttonPressed : null,
          },
        ]}
        onPress={onPress}
      >
        <View style={styles.innerContainer}>
          <View>
            <View style={styles.imageContainer}>
              <Image source={{ uri: item.imageUrl }} style={styles.image} />
            </View>
            <Text style={styles.title}>{item.title}</Text>
          </View>
          <MealDetails item={item} />
        </View>
      </Pressable>
    </View>
  );
};

export default MealItem;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    margin: 16,
    borderRadius: 10,
    overflow: "hidden",
    elevation: 5,
    backgroundColor: "white",
    // IOS shadow
    shadowColor: "black",
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    overflow: Platform.OS === "android" ? "hidden" : "visible",
  },
  innerContainer: {
    borderRadius: 10,
    overflow: "hidden",
  },
  imageContainer: { flex: 1 },
  image: {
    width: "100%",
    height: 200,
  },
  buttonPressed: {
    opacity: 0.5,
  },
  title: {
    fontSize: 18,
    textAlign: "center",
    fontWeight: "bold",
    margin: 8,
  },
});
