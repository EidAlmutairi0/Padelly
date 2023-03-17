import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";
import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import Svg from "react-native-svg";

const MyTabBar = () => {
  const tabBarHeight = useBottomTabBarHeight();
  return (
    <SafeAreaView>
      <Svg width={200}></Svg>
    </SafeAreaView>
  );
};

export default MyTabBar;

const styles = StyleSheet.create({
  tabBar: {
    flex: 1,
    backgroundColor: "red",
    justifyContent: "flex-end",
  },
});
