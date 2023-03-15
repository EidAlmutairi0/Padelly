import React, { useState } from "react";
import { Pressable, StyleSheet } from "react-native";
import useTheme from "../Themes/useTheme";
import useThemedStyles from "../Themes/useThemedStyles";
import CostumeText from "./CostumeText";

const HourCard = (props) => {
  const [isSelected, setIsSelected] = useState(false);
  const theme = useTheme();
  const style = useThemedStyles(styles);
  return (
    <Pressable
      onPress={() => {
        setIsSelected(!isSelected);
      }}
      style={[
        style.container,
        isSelected && style.selected,
        props.disabled && style.disabled,
      ]}
      disabled={props.disabled}
    >
      <CostumeText
        style={[
          theme.isLightTheme
            ? isSelected && style.selected
            : {
                color: "white",
              },
          props.disabled && style.disabled,
        ]}
      >
        {props.hour}
      </CostumeText>
      <CostumeText
        style={[
          theme.isLightTheme
            ? isSelected && style.selected
            : {
                color: "white",
              },
          props.disabled && style.disabled,
        ]}
      >
        {props.noon}
      </CostumeText>
    </Pressable>
  );
};

export default HourCard;

const styles = (theme) =>
  StyleSheet.create({
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
