import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { StyleSheet } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import HomeStack from "./src/screens/HomeScreens/HomeStack";
import MapStack from "./src/screens/MapScreens/MapStack";
import ProfileStack from "./src/screens/ProfileScreens/ProfileStack";

export default function App() {
  return (
    <NavigationContainer>
      <Main></Main>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

const Tab = createBottomTabNavigator();

const Main = () => {
  return (
    <Tab.Navigator
      initialRouteName="HomeTab"
      screenOptions={{
        tabBarStyle: {
          backgroundColor: "rgb(1, 160, 139)",
        },
        headerShown: false,
        tabBarShowLabel: false,
      }}
    >
      <Tab.Screen
        name="ProfileTab"
        component={ProfileStack}
        options={{
          tabBarIcon: ({ focused, color, size }) => {
            let icon;
            if (focused) {
              icon = "person";
              size = 28;
            } else {
              icon = "person-outline";
              size = 22;
            }
            return <Ionicons name={icon} size={size} color="white" />;
          },
        }}
      />
      <Tab.Screen
        name="HomeTab"
        component={HomeStack}
        options={{
          tabBarIcon: ({ focused, color, size }) => {
            let icon;
            if (focused) {
              icon = "home";
              size = 28;
            } else {
              icon = "home-outline";
              size = 22;
            }
            return <Ionicons name={icon} size={size} color="white" />;
          },
        }}
      />
      <Tab.Screen
        name="MapTab"
        component={MapStack}
        options={{
          tabBarIcon: ({ focused, color, size }) => {
            let icon;
            if (focused) {
              icon = "map";
              size = 28;
            } else {
              icon = "map-outline";
              size = 22;
            }
            return <Ionicons name={icon} size={size} color="white" />;
          },
        }}
      />
    </Tab.Navigator>
  );
};
