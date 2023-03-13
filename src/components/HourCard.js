import React, { useState } from "react";
import { Pressable, StyleSheet } from "react-native";
import CostumeText from "./CostumeText";

const HourCard = (props) => {
  const [isSelected, setIsSelected] = useState(false);
  return (
    <Pressable
      onPress={() => {
        setIsSelected(!isSelected);
      }}
      style={[
        styles.container,
        isSelected && styles.selected,
        props.disabled && styles.disabled,
      ]}
      disabled={props.disabled}
    >
      <CostumeText
        style={[
          isSelected && styles.selected,
          props.disabled && styles.disabled,
        ]}
      >
        {props.hour}
      </CostumeText>
      <CostumeText
        style={[
          isSelected && styles.selected,
          props.disabled && styles.disabled,
        ]}
      >
        {props.noon}
      </CostumeText>
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
  disabled: {
    borderColor: "rgb(175 175 175)",
    backgroundColor: "white",
    color: "rgb(175 175 175)",
  },
});
