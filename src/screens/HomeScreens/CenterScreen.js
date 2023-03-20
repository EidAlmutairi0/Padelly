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

import { TouchableOpacity } from "react-native-gesture-handler";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import CostumeText from "../../components/CostumeText";
import Days from "../../components/Days";
import Durations from "../../components/Durations";
import SocialMediaIcon from "../../components/SocialMediaIcon";
import useTheme from "../../Themes/useTheme";
import useThemedStyles from "../../Themes/useThemedStyles";
const CenterScreen = ({ route }) => {
  const iconsColor = "rgb(10 114 100)";
  const iconsSize = 20;
  const { title, image, logo, distance, images } = route.params;
  const [isSwiper, setIsSwiper] = useState(true);
  const [screenSize, setScreenSize] = useState(
    new Animated.Value(Dimensions.get("screen").height * 0.53)
  );
  const navigation = useNavigation();

  const MIN_CONTENT_HEIGHT = Dimensions.get("screen").height * 0.53;
  const MAX_CONTENT_HEIGHT = Dimensions.get("screen").height * 0.75;
  const [scrollEnabled, setScrollEnabled] = useState(false);

  const [reservation, setReservation] = useState({
    date: "",
    duration: "",
    time: "",
  });

  const isEmpty = Object.values(reservation).some((value) => {
    if (value === "") {
      return true;
    }
    return false;
  });

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

  const theme = useTheme();
  const style = useThemedStyles(styles);

  return (
    <View style={style.container}>
      <View
        style={{
          height: Dimensions.get("screen").height * 0.4,
          width: Dimensions.get("screen").width,
          position: "absolute",
        }}
      >
        <Swiper scrollEnabled={isSwiper}>
          <Image style={style.image} source={{ uri: image }}></Image>
          {images &&
            images.map((image) => {
              return (
                <Image
                  key={image}
                  style={style.image}
                  source={{ uri: image }}
                ></Image>
              );
            })}
        </Swiper>
      </View>
      <SafeAreaView>
        <Pressable
          onPress={() => {
            navigation.goBack();
          }}
          style={style.backButton}
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
        <ScrollView
          style={{
            borderTopLeftRadius: 16,
            borderTopRightRadius: 16,
            backgroundColor: theme.colors.BACKGROUND,
          }}
        >
          <View style={[style.dataWrapper]}>
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
            <View style={style.headerWrapper}>
              <Image style={style.logo} source={{ uri: logo }}></Image>
              <View style={style.titleWrapper}>
                <CostumeText style={style.title} fontWeight="Bold">
                  {title}
                </CostumeText>
              </View>
              <Text style={style.distance}>{distance} km</Text>
            </View>
            <View style={style.divider} />
            <View style={style.iconsWrapper}>
              <SocialMediaIcon>
                <Ionicons
                  color={iconsColor}
                  size={iconsSize}
                  name="logo-instagram"
                ></Ionicons>
              </SocialMediaIcon>
              <SocialMediaIcon>
                <Icon
                  color={iconsColor}
                  size={iconsSize}
                  name="snapchat"
                ></Icon>
              </SocialMediaIcon>
              <SocialMediaIcon>
                <Ionicons
                  color={iconsColor}
                  size={iconsSize}
                  name="logo-whatsapp"
                ></Ionicons>
              </SocialMediaIcon>
              <SocialMediaIcon>
                <Feather
                  color={iconsColor}
                  size={iconsSize}
                  name="phone"
                ></Feather>
              </SocialMediaIcon>
              <SocialMediaIcon>
                <Feather
                  color={iconsColor}
                  size={iconsSize}
                  name="map-pin"
                ></Feather>
              </SocialMediaIcon>
            </View>
            <View style={style.reservationWrapper}>
              <View style={style.dates}>
                <View style={style.datesHeader}>
                  <Feather
                    name="calendar"
                    size={26}
                    color="rgb(1 160 139)"
                  ></Feather>
                  <CostumeText
                    style={{
                      fontSize: 18,
                      paddingHorizontal: 10,
                      color: theme.colors.TEXT,
                    }}
                  >
                    Date
                  </CostumeText>
                </View>
                <Days value={reservation} setValue={setReservation} />
              </View>
              <View style={style.dates}>
                <View style={style.datesHeader}>
                  <Icon
                    name="timer-sand"
                    size={26}
                    color="rgb(1 160 139)"
                  ></Icon>
                  <CostumeText
                    style={{
                      fontSize: 18,
                      paddingHorizontal: 10,
                      color: theme.colors.TEXT,
                    }}
                  >
                    Duration
                  </CostumeText>
                </View>
                <Durations value={reservation} setValue={setReservation} />
              </View>
              <View style={style.dates}>
                <View style={style.datesHeader}>
                  <Feather
                    name="clock"
                    size={26}
                    color="rgb(1 160 139)"
                  ></Feather>
                  <CostumeText
                    style={{
                      fontSize: 18,
                      paddingHorizontal: 10,
                      color: theme.colors.TEXT,
                    }}
                  >
                    Time
                  </CostumeText>
                </View>
                <Hours value={reservation} setValue={setReservation} />
              </View>
              <TouchableOpacity
                disabled={isEmpty}
                style={[
                  style.button,
                  isEmpty
                    ? {
                        backgroundColor: "gray",
                      }
                    : { backgroundColor: theme.colors.PRIMARY },
                ]}
              >
                <CostumeText
                  style={{
                    fontSize: 18,

                    color: "white",
                  }}
                >
                  Conform
                </CostumeText>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </Animated.View>
    </View>
  );
};

export default CenterScreen;

const styles = (theme) =>
  StyleSheet.create({
    container: {
      flex: 1,
    },

    dataWrapper: {
      backgroundColor: theme.colors.BACKGROUND,

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

      justifyContent: "start",
    },
    title: {
      fontSize: 24,
      paddingStart: 10,
      width: "100%",
      fontWeight: "bold",
      color: theme.colors.TEXT,
    },
    logo: {
      width: 50,
      height: 50,

      borderRadius: 50,
    },
    distance: {
      fontSize: 18,
      color: theme.colors.TEXT,
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
    button: {
      width: "90%",
      height: 50,

      borderRadius: 6,
      alignSelf: "center",
      alignItems: "center",
      justifyContent: "center",
    },
  });
