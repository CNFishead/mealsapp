import { StatusBar } from "expo-status-bar";
import { Dimensions, StyleSheet, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import Categories from "./screens/Categories.screen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MealsOverview from "./screens/MealsOverview.screen";

// creates a stack navigator
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator initialRouteName={Categories}>
          <Stack.Screen name="MealsCategories" component={Categories} />
          <Stack.Screen name="MealsOverview" component={MealsOverview} />
        </Stack.Navigator>
      </NavigationContainer>
      <StatusBar style="dark" />
    </>
  );
}

const styles = StyleSheet.create({
  container: {},
});
