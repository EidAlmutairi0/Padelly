import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { useRef } from "react";
import { StyleSheet } from "react-native";
import SquareTabBar from "square_tabbar";
import HomeStack from "./src/screens/HomeScreens/HomeStack";
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
  const tabs = [
    {
      icon: "user",
      label: "Profile",
      screen: useRef(<ProfileStack></ProfileStack>).current,
    },
    {
      icon: "home",
      label: "Home",
      screen: useRef(<HomeStack></HomeStack>).current,
    },
    {
      icon: "map",
      label: "Map",
    },
  ];
  const theme = useTheme();
  const style = useThemedStyles(styles);
  return (
    <NavigationContainer>
      <SquareTabBar
        tabs={tabs}
        tabBarStyle={{
          backgroundColor: theme.colors.BACKGROUND,
        }}
        iconsStyle={{
          color: theme.colors.TEXT,
        }}
        iconsSize={22}
        selectedIconSize={22}
        labelsStyle={{
          color: theme.colors.TEXT,
        }}
        selectedLabelStyle={{
          color: theme.colors.TEXT,
        }}
        selectedTabStyle={{}}
      ></SquareTabBar>
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
