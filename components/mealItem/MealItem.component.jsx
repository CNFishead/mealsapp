import React from "react";
import { Image, Platform, Pressable, StyleSheet, Text, View } from "react-native";

const MealItem = ({ item }) => {
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
      >
        <View style={styles.innerContainer}>
          <View>
            <View style={styles.imageContainer}>
              <Image source={{ uri: item.imageUrl }} style={styles.image} />
            </View>
            <Text style={styles.title}>{item.title}</Text>
          </View>
          <View style={styles.informationContainer}>
            <Text style={styles.informationContainerText}>Time: {item.duration}m</Text>
            <Text style={styles.informationContainerText}>Complexity: {item.complexity.toUpperCase()}</Text>
            <Text style={styles.informationContainerText}>Cost: {item.affordability.toUpperCase()}</Text>
          </View>
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
