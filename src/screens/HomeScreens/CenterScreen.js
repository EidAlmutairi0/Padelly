import React, { useState } from "react";
import {
  Animated,
  Dimensions,
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";

import Swiper from "react-native-swiper";
import Feather from "react-native-vector-icons/Feather";
import Ionicons from "react-native-vector-icons/Ionicons";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
const CenterScreen = ({ route, navigation }) => {
  const iconsColor = "rgb(10 114 100)";
  const iconsSize = 20;
  const { title, image, logo, distance } = route.params;

  const [screenSize, setScreenSize] = useState(
    new Animated.Value(Dimensions.get("screen").height * 0.53)
  );

  const MIN_CONTENT_HEIGHT = Dimensions.get("screen").height * 0.53;
  const MAX_CONTENT_HEIGHT = Dimensions.get("screen").height * 0.8;

  const handleSwipeDown = () => {
    Animated.spring(screenSize, {
      toValue: MIN_CONTENT_HEIGHT,
      useNativeDriver: false,
    }).start();
  };

  const handleSwipeUp = () => {
    Animated.spring(screenSize, {
      toValue: MAX_CONTENT_HEIGHT,
      useNativeDriver: false,
    }).start();
  };

  return (
    <View style={styles.container}>
      <View
        style={{
          height: Dimensions.get("screen").height * 0.4,
          width: Dimensions.get("screen").width,
          position: "absolute",
        }}
      >
        <Swiper>
          <Image style={styles.image} source={{ uri: image }}></Image>
          <Image style={styles.image} source={{ uri: image }}></Image>
        </Swiper>
      </View>
      <Animated.View
        onTouchStart={(e) => (this.touchY = e.nativeEvent.pageY)}
        onTouchEnd={(e) => {
          if (this.touchY - e.nativeEvent.pageY > 100) {
            handleSwipeUp();
          } else if (e.nativeEvent.pageY - this.touchY > 100) {
            handleSwipeDown();
          }
        }}
        style={[
          {
            flex: 1,
            position: "absolute",
            bottom: 0,
            height: screenSize,
            backgroundColor: "white",
            borderRadius: 16,
          },
          {},
        ]}
      >
        <View style={[styles.dataWrapper]}>
          <View style={styles.headerWrapper}>
            <Image style={styles.logo} source={{ uri: logo }}></Image>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.distance}>{distance} km</Text>
          </View>
          <View style={styles.divider} />
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
              <Feather
                color={iconsColor}
                size={iconsSize}
                name="phone"
              ></Feather>
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
      </Animated.View>
    </View>
  );
};

export default CenterScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  dataWrapper: {
    backgroundColor: "white",

    alignItems: "center",
    borderRadius: 16,
  },
  image: {
    height: Dimensions.get("screen").height * 0.4,
    width: Dimensions.get("screen").width,
  },
  iconsWrapper: {
    width: Dimensions.get("screen").width * 0.8,
    paddingHorizontal: 10,
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
  headerWrapper: {
    width: Dimensions.get("screen").width,
    height: 70,
    paddingHorizontal: 15,
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 10,
    alignContent: "space-around",
    backgroundColor: "white",
    justifyContent: "start",
  },
  title: {
    fontSize: 24,
    paddingStart: 10,
    width: "70%",
    fontWeight: "bold",
  },
  logo: {
    width: 50,
    height: 50,
    borderRadius: 50,
  },
  distance: {
    fontSize: 18,
  },
  icon: {
    width: 35,
    height: 35,
    borderRadius: 8,
    borderColor: "rgb(10 114 100)",
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
  },
  divider: {
    width: Dimensions.get("screen").width * 0.9,
    margin: 15,
    height: 1,
    backgroundColor: "rgb(226 226 226)",
    color: "gray",
  },
});
