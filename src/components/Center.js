import { useNavigation } from "@react-navigation/native";
import React from "react";
import {
  Dimensions,
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
const Center = (props) => {
  const navigation = useNavigation();
  return (
    <Pressable
      style={styles.container}
      onPress={() => {
        navigation.navigate("Center", {
          title: props.title,
          image: props.image,
          logo: props.logo,
          distance: props.distance,
        });
      }}
    >
      <Image
        source={{
          uri: props.image,
        }}
        style={styles.image}
        resizeMode="cover"
      ></Image>
      <View style={styles.data}>
        <Image
          style={styles.logo}
          source={{
            uri: props.logo,
          }}
        ></Image>

        <Text style={styles.title}>{props.title}</Text>
        <Text style={styles.distance}>{props.distance} km</Text>
      </View>
    </Pressable>
  );
};

export default Center;

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get("screen").width * 0.85,
    borderRadius: 14,
    height: 220,

    margin: 10,
    shadowOffset: { height: 5 },
    shadowColor: "#171717",
    shadowOpacity: 0.4,
    shadowRadius: 5,
  },
  image: {
    borderRadius: 14,
    width: "100%",
    height: "100%",
  },
  data: {
    width: "100%",
    height: "30%",
    bottom: 0,
    position: "absolute",
    alignItems: "center",
    padding: 12,
    borderRadius: 14,
    flexDirection: "row",
    backgroundColor: "rgba(0, 0, 0, 0.6)",
  },
  logo: {
    width: 40,
    height: 40,
    borderRadius: 50,
  },
  title: {
    paddingStart: 10,
    fontSize: 22,
    color: "white",
    fontWeight: "bold",
  },
  distance: {
    fontSize: 16,
    color: "white",
    position: "absolute",
    end: 10,
  },
});
