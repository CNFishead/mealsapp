import React from "react";
import { CATEGORIES } from "../data/dummy-data";
import { FlatList, Text, View } from "react-native";
import Tile from "../components/tile/Tile.component";

const Categories = ({ navigation }) => {
  return (
    <View>
      <FlatList
        data={CATEGORIES}
        renderItem={({ item }) => (
          <Tile
            title={item.title}
            color={item.color}
            onPress={() => {
              navigation.navigate("MealsOverview", {
                categoryId: item.id,
              });
            }}
          />
        )}
        keyExtractor={(item) => item.id}
        numColumns={2}
      />
    </View>
  );
};

export default Categories;
