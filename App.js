import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import { StyleSheet } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import SquareTabBar from "rn-square-tabbar";
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
  const [fontsLoaded] = useFonts({
    IBMPlexSansBold: require("../Padelly/assets/fonts/IBMPlexSans-Bold.ttf"),
    IBMPlexSansThin: require("../Padelly/assets/fonts/IBMPlexSans-Thin.ttf"),
    IBMPlexSans: require("../Padelly/assets/fonts/IBMPlexSans-Medium.ttf"),

    IBMPlexSansLight: require("../Padelly/assets/fonts/IBMPlexSans-Light.ttf"),
  });
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="HomeTab"
        screenOptions={{
          headerShown: false,
        }}
        tabBar={(props) => {
          return (
            <SquareTabBar
              tabBarStyle={{
                backgroundColor: theme.colors.BACKGROUND,
              }}
              iconsStyle={{
                color: theme.colors.TEXT,
              }}
              iconsSize={22}
              selectedIconStyle={{
                color: "white",
              }}
              labelsStyle={{
                color: theme.colors.TEXT,
              }}
              selectedLabelStyle={{
                color: theme.colors.TEXT,
              }}
              selectedTabStyle={{}}
              {...props}
            ></SquareTabBar>
          );
        }}
      >
        <Tab.Screen
          name="ProfileTab"
          component={ProfileStack}
          options={{
            tabBarLabel: "Profile",
            tabBarIcon: <Ionicons name="person-outline" size={22} />,
          }}
        />
        <Tab.Screen
          name="HomeTab"
          component={HomeStack}
          options={{
            tabBarLabel: "Home",
            tabBarIcon: <Ionicons name="home-outline" size={22} />,
          }}
        />
        <Tab.Screen
          name="MapTab"
          component={MapStack}
          options={{
            tabBarLabel: "Map",
            tabBarIcon: <Ionicons name="map-outline" size={22} />,
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
