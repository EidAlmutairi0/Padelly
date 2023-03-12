import React, { useState } from "react";
import { Pressable, StyleSheet } from "react-native";
import CostumeText from "./CostumeText";

const HourCard = () => {
  const [isSelected, setIsSelected] = useState(false);
  return (
    <Pressable
      onPress={() => {
        setIsSelected(true);
      }}
      style={[styles.container, isSelected && styles.selected]}
    >
      <CostumeText style={isSelected && styles.selected}>5:30</CostumeText>
      <CostumeText style={isSelected && styles.selected}>PM</CostumeText>
    </Pressable>
  );
};

export default HourCard;

const styles = StyleSheet.create({
  container: {
    width: 50,
    height: 50,
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
