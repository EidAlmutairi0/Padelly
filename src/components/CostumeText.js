import { useFonts } from "expo-font";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

const CostumeText = (props) => {
  const [fontsLoaded] = useFonts({
    IBMPlexSansBold: require("../../assets/fonts/IBMPlexSans-Bold.ttf"),
    IBMPlexSansThin: require("../../assets/fonts/IBMPlexSans-Thin.ttf"),
    IBMPlexSans: require("../../assets/fonts/IBMPlexSans-Medium.ttf"),

    IBMPlexSansLight: require("../../assets/fonts/IBMPlexSans-Light.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View>
      <Text
        style={[
          props.style,
          {
            fontFamily: `IBMPlexSans${
              props.fontWeight ? props.fontWeight : ""
            }`,
            fontWeight: "bold",
          },
        ]}
      >
        {props.children}
      </Text>
    </View>
  );
};

export default CostumeText;

const styles = StyleSheet.create({});
