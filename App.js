import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { StyleSheet, Text, View } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import HomeStack from "./src/screens/HomeScreens/HomeStack";
import MapStack from "./src/screens/MapScreens/MapStack";
import ProfileStack from "./src/screens/ProfileScreens/ProfileStack";
import ThemeProvider from "./src/Themes/ThemeProvider";
import useTheme from "./src/Themes/useTheme";
import useThemedStyles from "./src/Themes/useThemedStyles";

export default function App() {
  return (
    <ThemeProvider>
      <Main></Main>
    </ThemeProvider>
  );
}

const Tab = createBottomTabNavigator();

const Main = () => {
  const theme = useTheme();
  const style = useThemedStyles(styles);
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="HomeTab"
        screenOptions={{
          tabBarStyle: style.tabBar,
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
                      color: theme.colors.TEXT,
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
                      color: theme.colors.TEXT,
                    }}
                  >
                    Home
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
                    Home
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
                      color: theme.colors.TEXT,
                    }}
                  >
                    Map
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
                    Map
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
    </NavigationContainer>
  );
};

const styles = (theme) =>
  StyleSheet.create({
    tabBar: {
      backgroundColor: theme.colors.BACKGROUND,
      height: 80,
    },
  });
