import React from "react";
import { Pressable, StyleSheet } from "react-native";
import useTheme from "../Themes/useTheme";
import useThemedStyles from "../Themes/useThemedStyles";
import CostumeText from "./CostumeText";

const DayCard = (props) => {
  const theme = useTheme();
  const style = useThemedStyles(styles);
  const selected = props.date === props.value.date;
  return (
    <Pressable
      onPress={() => {
        if (!selected) {
          props.setValue({ ...props.value, date: props.date });
        } else {
          props.setValue({ ...props.value, date: "" });
        }
      }}
      style={[style.container, selected && style.selected]}
    >
      <CostumeText
        style={
          theme.isLightTheme
            ? selected && [style.selected, { color: "white" }]
            : {
                color: theme.colors.TEXT,
              }
        }
      >
        {props.month}
      </CostumeText>
      <CostumeText
        style={
          theme.isLightTheme
            ? selected && [style.selected, { color: "white" }]
            : {
                color: theme.colors.TEXT,
              }
        }
      >
        {props.dayNum}
      </CostumeText>
      <CostumeText
        style={
          theme.isLightTheme
            ? selected && [style.selected, { color: "white" }]
            : {
                color: theme.colors.TEXT,
              }
        }
      >
        {props.day}
      </CostumeText>
    </Pressable>
  );
};

export default DayCard;

const styles = (theme) =>
  StyleSheet.create({
    container: {
      width: 50,
      height: 80,
      margin: 8,
      borderRadius: 6,
      borderColor: "rgb(1 160 139)",
      borderWidth: 1,
      flexDirection: "column",
      textDecorationColor: "red",
      color: "red",
      alignContent: "space-around",
      justifyContent: "space-evenly",
      alignItems: "center",
    },
    selected: {
      backgroundColor: "rgb(1 160 139)",
      color: theme.colors.TEXT,
    },
  });
