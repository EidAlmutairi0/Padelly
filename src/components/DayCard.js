import React, { useState } from "react";
import { Pressable, StyleSheet } from "react-native";
import CostumeText from "./CostumeText";

const DayCard = (props) => {
  const [selected, setSelected] = useState(false);
  return (
    <Pressable
      onPress={() => {
        setSelected(!selected);
      }}
      style={[styles.container, selected && styles.selected]}
    >
      <CostumeText style={selected && styles.selected}>
        {props.month}
      </CostumeText>
      <CostumeText style={selected && styles.selected}>
        {props.dayNum}
      </CostumeText>
      <CostumeText style={selected && styles.selected}>{props.day}</CostumeText>
    </Pressable>
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
