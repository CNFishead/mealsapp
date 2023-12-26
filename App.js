import { StatusBar } from "expo-status-bar";
import { Button, Dimensions, StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import Categories from "./screens/Categories.screen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MealsOverview from "./screens/MealsOverview.screen";
import colors from "./constants/colors";
import MealDetails from "./screens/MealDetails.screen";
import { createDrawerNavigator } from "@react-navigation/drawer";
import FavoritesScreen from "./screens/Favorites.screen";
import { Ionicons } from "@expo/vector-icons";

// creates a stack navigator
const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: colors.primary,
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontWeight: "bold",
        },
        sceneContainerStyle: {
          backgroundColor: colors.primary_lighter,
        },
        drawerContentStyle: {
          backgroundColor: colors.primary_lighter,
        },
        drawerInactiveTintColor: colors.tertiary,
        drawerActiveBackgroundColor: colors.primary_darker,
        drawerActiveTintColor: colors.secondary,
      }}
    >
      <Drawer.Screen
        name="Categories"
        component={Categories}
        options={{
          title: "All Categories",
          drawerIcon: ({ color, size }) => <Ionicons color={color} size={size} name="list" />,
        }}
      />
      <Drawer.Screen
        name="Favorites"
        component={FavoritesScreen}
        options={{
          title: "Favorites",
          drawerIcon: ({ color, size }) => <Ionicons color={`${color}`} size={size} name="heart" />,
        }}
      />
    </Drawer.Navigator>
  );
}
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
            name="DrawerNavigator"
            component={DrawerNavigator}
            options={{
              headerShown: false,
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
