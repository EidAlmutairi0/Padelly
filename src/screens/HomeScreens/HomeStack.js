import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { StyleSheet } from "react-native";
import CenterScreen from "./CenterScreen";
import HomeScreen from "./HomeScreen";

const Stack = createStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerBackTitleStyle: {
          color: "white",
        },
        headerTintColor: "white",
        headerStyle: {
          backgroundColor: "rgb(1, 160, 139)",
        },
        headerTitleStyle: {
          color: "white",
        },
      }}
    >
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen
        name="Center"
        component={CenterScreen}
        options={{
          headerShown: false,
        }}
      ></Stack.Screen>
    </Stack.Navigator>
  );
};

export default HomeStack;

const styles = StyleSheet.create({});
