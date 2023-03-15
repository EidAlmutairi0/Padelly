import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";

const SocialMediaIcon = (props) => {
  const handlePress = () => {};

  return (
    <TouchableOpacity onPress={handlePress} style={styles.container}>
      {props.children}
    </TouchableOpacity>
  );
};

export default SocialMediaIcon;

const styles = StyleSheet.create({
  container: {
    width: 35,
    height: 35,
    borderRadius: 8,
    borderColor: "rgb(10 114 100)",
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
  },
});
