import { StatusBar } from "expo-status-bar";
import { Button, Dimensions, StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import Categories from "./screens/Categories.screen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MealsOverview from "./screens/MealsOverview.screen";
import colors from "./constants/colors";
import MealDetails from "./screens/MealDetails.screen";

// creates a stack navigator
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName={Categories}
          screenOptions={{
            headerStyle: {
              backgroundColor: colors.primary,
              width: "100%",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
            },
            contentStyle: {
              backgroundColor: colors.primary_lighter,
            },
          }}
        >
          <Stack.Screen
            name="MealsCategories"
            component={Categories}
            options={{
              title: "Meal Categories",
            }}
          />
          <Stack.Screen name="MealsOverview" component={MealsOverview} />
          <Stack.Screen name="MealDetails" component={MealDetails} options={{}} />
        </Stack.Navigator>
      </NavigationContainer>
      <StatusBar style="light" />
    </>
  );
}

const styles = StyleSheet.create({
  container: {},
});
