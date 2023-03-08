import React, { useState } from "react";
import { Dimensions, Image, Pressable, StyleSheet, View } from "react-native";
import Swiper from "react-native-swiper";
import Feather from "react-native-vector-icons/Feather";
import Ionicons from "react-native-vector-icons/Ionicons";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const CenterScreen = ({ route, navigation }) => {
  const [images, setImages] = useState([]);
  const iconsColor = "rgb(11 78 69)";
  const iconsSize = 20;
  const { title, image } = route.params;
  return (
    <View style={styles.container}>
      <View style={styles.imagesWrapper}>
        <Swiper>
          <Image
            source={{
              uri: image,
            }}
            style={styles.image}
            resizeMode="cover"
          ></Image>
          <Image
            source={{
              uri: image,
            }}
            style={styles.image}
            resizeMode="cover"
          ></Image>
        </Swiper>
        <View style={styles.titleWrapper}></View>
      </View>
      <View style={styles.dataWrapper}>
        <View style={styles.iconsWrapper}>
          <Pressable style={styles.icon}>
            <Ionicons
              color={iconsColor}
              size={iconsSize}
              name="logo-instagram"
            ></Ionicons>
          </Pressable>
          <Pressable style={styles.icon}>
            <Icon color={iconsColor} size={iconsSize} name="snapchat"></Icon>
          </Pressable>
          <Pressable style={styles.icon}>
            <Ionicons
              color={iconsColor}
              size={iconsSize}
              name="logo-whatsapp"
            ></Ionicons>
          </Pressable>
          <Pressable style={styles.icon}>
            <Feather color={iconsColor} size={iconsSize} name="phone"></Feather>
          </Pressable>
          <Pressable style={styles.icon}>
            <Feather
              color={iconsColor}
              size={iconsSize}
              name="map-pin"
            ></Feather>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default CenterScreen;

const styles = StyleSheet.create({
  container: {
    alignContent: "center",
    alignItems: "center",
    flex: 1,
  },
  imagesWrapper: {
    position: "relative",
    width: "100%",
    height: Dimensions.get("screen").height * 0.3,
  },
  dataWrapper: {
    position: "relative",
    bottom: 0,
    backgroundColor: "white",
    width: "100%",
    alignItems: "center",
    height: Dimensions.get("screen").height * 0.6,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  iconsWrapper: {
    width: Dimensions.get("screen").width * 0.8,
    padding: 10,
    height: 100,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  titleWrapper: {
    height: 20,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    position: "absolute",
    backgroundColor: "white",
    width: "100%",
    bottom: 0,
  },
  icon: {
    width: 35,
    height: 35,
    borderRadius: 8,
    borderColor: "logosColor",
    borderWidth: 1,
    alignItems: "center",
    color: "rgb(11 78 69)",
    justifyContent: "center",
    alignSelf: "center",
  },
});
