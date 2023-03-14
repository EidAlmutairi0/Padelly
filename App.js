import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { StyleSheet, Text, View } from "react-native";
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
          backgroundColor: "white",
          height: 80,
        },
        headerShown: false,
      }}
    >
      <Tab.Screen
        name="ProfileTab"
        component={ProfileStack}
        options={{
          tabBarLabel: ({ focused, color, size }) => {
            let icon;
            if (focused) {
              icon = "person-outline";
              size = 22;
              return (
                <Text
                  style={{
                    fontSize: 12,
                    fontWeight: "bold",
                    marginTop: 6,
                  }}
                >
                  Profile
                </Text>
              );
            } else {
              return (
                <Text
                  style={{
                    fontSize: 12,
                    marginTop: 6,

                    color: "rgb(141 152 170)",
                  }}
                >
                  Profile
                </Text>
              );
            }
          },

          tabBarIcon: ({ focused, color, size }) => {
            let icon;
            if (focused) {
              isFocused = "Profile";
              icon = "person-outline";
              size = 22;
              return (
                <View
                  style={{
                    width: 48,
                    height: 48,
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: "rgb(1 160 138)",
                    borderRadius: 12,
                    marginBottom: 15,
                  }}
                >
                  <Ionicons name={icon} size={size} color="white" />
                </View>
              );
            } else {
              icon = "person-outline";
              size = 22;
              return (
                <Ionicons name={icon} size={size} color="rgb(141 152 170)" />
              );
            }
          },
        }}
      />
      <Tab.Screen
        name="HomeTab"
        component={HomeStack}
        options={{
          tabBarLabel: ({ focused, color, size }) => {
            let icon;
            if (focused) {
              icon = "person-outline";
              size = 22;
              return (
                <Text
                  style={{
                    fontSize: 12,
                    fontWeight: "bold",
                    marginTop: 6,
                  }}
                >
                  Profile
                </Text>
              );
            } else {
              return (
                <Text
                  style={{
                    fontSize: 12,
                    marginTop: 6,

                    color: "rgb(141 152 170)",
                  }}
                >
                  Profile
                </Text>
              );
            }
          },

          tabBarIcon: ({ focused, color, size }) => {
            let icon;
            if (focused) {
              icon = "home-outline";
              size = 22;
              return (
                <View
                  style={{
                    width: 48,
                    height: 48,
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: "rgb(1 160 138)",
                    borderRadius: 12,
                    marginBottom: 15,
                  }}
                >
                  <Ionicons name={icon} size={size} color="white" />
                </View>
              );
            } else {
              icon = "home-outline";
              size = 22;
              return (
                <Ionicons name={icon} size={size} color="rgb(141 152 170)" />
              );
            }
          },
        }}
      />
      <Tab.Screen
        name="MapTab"
        component={MapStack}
        options={{
          tabBarLabel: ({ focused, color, size }) => {
            let icon;
            if (focused) {
              icon = "person-outline";
              size = 22;
              return (
                <Text
                  style={{
                    fontSize: 12,
                    fontWeight: "bold",
                    marginTop: 6,
                  }}
                >
                  Profile
                </Text>
              );
            } else {
              return (
                <Text
                  style={{
                    fontSize: 12,
                    marginTop: 6,

                    color: "rgb(141 152 170)",
                  }}
                >
                  Profile
                </Text>
              );
            }
          },

          tabBarIcon: ({ focused, color, size }) => {
            let icon;
            if (focused) {
              icon = "map-outline";
              size = 22;
              return (
                <View
                  style={{
                    width: 48,
                    height: 48,
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: "rgb(1 160 138)",
                    borderRadius: 12,
                    marginBottom: 15,
                  }}
                >
                  <Ionicons name={icon} size={size} color="white" />
                </View>
              );
            } else {
              icon = "map-outline";
              size = 22;
              return (
                <Ionicons name={icon} size={size} color="rgb(141 152 170)" />
              );
            }
          },
        }}
      />
    </Tab.Navigator>
  );
};
