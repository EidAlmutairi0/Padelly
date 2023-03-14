import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import {
  Animated,
  Dimensions,
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import Hours from "../../components/Hours";

import { SafeAreaView } from "react-native-safe-area-context";
import Swiper from "react-native-swiper";
import Feather from "react-native-vector-icons/Feather";
import Ionicons from "react-native-vector-icons/Ionicons";

import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import CostumeText from "../../components/CostumeText";
import Days from "../../components/Days";
import Durations from "../../components/Durations";
const CenterScreen = ({ route }) => {
  const iconsColor = "rgb(10 114 100)";
  const iconsSize = 20;
  const { title, image, logo, distance } = route.params;
  const [isSwiper, setIsSwiper] = useState(true);
  const [screenSize, setScreenSize] = useState(
    new Animated.Value(Dimensions.get("screen").height * 0.53)
  );
  const navigation = useNavigation();

  const MIN_CONTENT_HEIGHT = Dimensions.get("screen").height * 0.53;
  const MAX_CONTENT_HEIGHT = Dimensions.get("screen").height * 0.75;
  const [scrollEnabled, setScrollEnabled] = useState(false);

  const handleSwipeDown = () => {
    Animated.spring(screenSize, {
      toValue: MIN_CONTENT_HEIGHT,
      useNativeDriver: false,
    }).start();
    setIsSwiper(true);
  };

  const handleSwipeUp = () => {
    Animated.spring(screenSize, {
      toValue: MAX_CONTENT_HEIGHT,
      useNativeDriver: false,
    }).start();
    setIsSwiper(false);
    setScrollEnabled(true);
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
        <Swiper scrollEnabled={isSwiper}>
          <Image style={styles.image} source={{ uri: image }}></Image>
          <Image style={styles.image} source={{ uri: image }}></Image>
        </Swiper>
      </View>
      <SafeAreaView>
        <Pressable
          onPress={() => {
            navigation.goBack();
          }}
          style={styles.backButton}
        >
          <Ionicons name="arrow-back" size={30} color="white"></Ionicons>
        </Pressable>
      </SafeAreaView>

      <Animated.View
        scrollEnabled={scrollEnabled}
        onTouchStart={(e) => (this.touchY = e.nativeEvent.pageY)}
        onTouchEnd={(e) => {
          if (this.touchY - e.nativeEvent.pageY > 50) {
            handleSwipeUp();
          } else if (e.nativeEvent.pageY - this.touchY > 200) {
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
        <ScrollView>
          <View style={[styles.dataWrapper]}>
            <View
              onTouchStart={(e) => (this.touchY = e.nativeEvent.pageY)}
              onTouchEnd={(e) => {
                if (this.touchY - e.nativeEvent.pageY > 1) {
                  handleSwipeUp();
                } else if (e.nativeEvent.pageY - this.touchY > 1) {
                }
              }}
              style={{
                width: 50,
                height: 8,
                backgroundColor: "rgb(194 194 194)",
                borderRadius: 12,
                marginTop: 5,
              }}
            ></View>
            <View style={styles.headerWrapper}>
              <Image style={styles.logo} source={{ uri: logo }}></Image>
              <View style={styles.titleWrapper}>
                <CostumeText style={styles.title} fontWeight="Bold">
                  {title}
                </CostumeText>
              </View>
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
                <Icon
                  color={iconsColor}
                  size={iconsSize}
                  name="snapchat"
                ></Icon>
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
            <View style={styles.reservationWrapper}>
              <View style={styles.dates}>
                <View style={styles.datesHeader}>
                  <Feather
                    name="calendar"
                    size={26}
                    color="rgb(1 160 139)"
                  ></Feather>
                  <CostumeText
                    style={{
                      fontSize: 18,
                      paddingHorizontal: 10,
                    }}
                  >
                    Date
                  </CostumeText>
                </View>
                <Days />
              </View>
              <View style={styles.dates}>
                <View style={styles.datesHeader}>
                  <Icon
                    name="timer-sand"
                    size={26}
                    color="rgb(1 160 139)"
                  ></Icon>
                  <CostumeText
                    style={{
                      fontSize: 18,
                      paddingHorizontal: 10,
                    }}
                  >
                    Duration
                  </CostumeText>
                </View>
                <Durations />
              </View>
              <View style={styles.dates}>
                <View style={styles.datesHeader}>
                  <Feather
                    name="clock"
                    size={26}
                    color="rgb(1 160 139)"
                  ></Feather>
                  <CostumeText
                    style={{
                      fontSize: 18,
                      paddingHorizontal: 10,
                    }}
                  >
                    Time
                  </CostumeText>
                </View>
                <Hours />
              </View>
            </View>
          </View>
        </ScrollView>
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
  backButton: {
    width: 50,
    height: 50,
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
    backgroundColor: "rgb(1 160 139)",
    top: 50,
    start: 10,
  },
  dates: {
    marginVertical: 4,
  },
  datesHeader: {
    flexDirection: "row",
    alignItems: "center",
  },
  image: {
    height: Dimensions.get("screen").height * 0.4,
    width: Dimensions.get("screen").width,
  },
  reservationWrapper: {
    width: Dimensions.get("screen").width,
    padding: 20,
  },
  iconsWrapper: {
    width: Dimensions.get("screen").width * 0.8,
    padding: 10,
    flexDirection: "row",
    alignItems: "center",

    justifyContent: "space-between",
  },
  titleWrapper: {
    width: "70%",
  },
  headerWrapper: {
    width: Dimensions.get("screen").width,
    height: 70,
    paddingHorizontal: 15,
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 10,
    alignContent: "space-between",
    backgroundColor: "white",
    justifyContent: "start",
  },
  title: {
    fontSize: 24,
    paddingStart: 10,
    width: "100%",
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
