import React from "react";
import { Pressable, StyleSheet, Text, View, Platform } from "react-native";

const Tile = ({ title, color }) => {
  return (
    <View style={styles.rootContainer}>
      <Pressable
        style={({ pressed }) => [
          styles.button,
          {
            opacity: pressed ? styles.buttonPressed : null,
          },
          { backgroundColor: color },
        ]}
        android_ripple={{
          // make the ripple effect color darker than the background color
          color: "rgba(0,0,0,0.2)",
          foreground: true,
        }}
      >
        <View style={[styles.innerContainer]}>
          <Text style={styles.text}>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
};

export default Tile;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    margin: 16,
    height: 150,
    elevation: 5,
    borderRadius: 10,
    backgroundColor: "white",
    // IOS shadow
    shadowColor: "black",
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    overflow: Platform.OS === "android" ? "hidden" : "visible",
  },
  button: {
    flex: 1,
  },
  buttonPressed: {
    opacity: 0.5,
  },
  innerContainer: {
    flex: 1,
    alignContent: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 20,
    textAlign: "center",
  },
});
