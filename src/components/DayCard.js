import React from "react";
import { StyleSheet, View } from "react-native";
import CostumeText from "./CostumeText";

const DayCard = (props) => {
  return (
    <View style={styles.container}>
      <CostumeText>{props.month}</CostumeText>
      <CostumeText>{props.dayNum}</CostumeText>
      <CostumeText>{props.day}</CostumeText>
    </View>
  );
};

export default DayCard;

const styles = StyleSheet.create({
  container: {
    width: 50,
    height: 80,
    margin: 8,
    borderRadius: 6,
    borderColor: "rgb(1 160 139)",
    borderWidth: 1,
    flexDirection: "column",

    alignContent: "space-around",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  selected: {
    backgroundColor: "rgb(1 160 139)",
    color: "white",
  },
});
