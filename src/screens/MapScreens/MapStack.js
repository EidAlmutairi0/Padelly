import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { StyleSheet } from "react-native";
import MapScreen from "./MapScreen";

const Stack = createStackNavigator();

const MapStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "rgb(1, 160, 139)",
        },
        headerTitleStyle: {
          color: "white",
        },
      }}
    >
      <Stack.Screen name="Map" component={MapScreen} />
    </Stack.Navigator>
  );
};

export default MapStack;

const styles = StyleSheet.create({});
