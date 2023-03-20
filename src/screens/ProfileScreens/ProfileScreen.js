import React, { useState } from "react";
import {
  Dimensions,
  Image,
  StyleSheet,
  Switch,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import Icon from "react-native-vector-icons/Feather";
import CostumeText from "../../components/CostumeText";
import useTheme from "../../Themes/useTheme";

const ProfileScreen = () => {
  const toggleSwitch = () => {
    theme.toggleTheme();
  };
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const isEmpty = username === "" || password === "";

  const theme = useTheme();

  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: theme.colors.BACKGROUND,
        },
      ]}
    >
      <Switch
        style={{
          margin: 20,
          position: "absolute",
        }}
        trackColor={{ false: "#767577", true: "#81b0ff" }}
        thumbColor={theme.isLightTheme ? "#f5dd4b" : "#f4f3f4"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={theme.isLightTheme}
      />
      <View style={styles.dataWrapper}>
        <Image
          style={styles.appLogo}
          source={
            theme.isLightTheme
              ? require("../../../assets/logoWithoutTextDark.png")
              : require("../../../assets/logoWithoutText.png")
          }
        ></Image>
        <View
          style={{
            alignItems: "flex-start",
            width: "100%",
          }}
        >
          <CostumeText
            style={{
              color: theme.colors.TEXT,
              fontWeight: "bold",
              fontSize: 20,
            }}
          >
            Hi,
          </CostumeText>
          <CostumeText
            style={{
              color: theme.colors.TEXT,
              fontWeight: "bold",
              fontSize: 20,
            }}
          >
            Login now!
          </CostumeText>
          <View
            style={[
              {
                borderColor: theme.colors.TEXT,
                borderWidth: 1,
                borderRadius: 6,
              },
              styles.input,
            ]}
          >
            <Icon name="user" color={theme.colors.TEXT} size={16}></Icon>
            <View
              style={{
                height: "100%",
                width: 1,
                marginHorizontal: 10,
                backgroundColor: theme.colors.TEXT,
              }}
            ></View>
            <TextInput
              value={username}
              onChangeText={(value) => {
                setUsername(value);
              }}
              style={{
                flex: 1,
                color: theme.colors.TEXT,
                fontSize: 16,
              }}
            ></TextInput>
          </View>
          <View
            style={[
              {
                borderColor: theme.colors.TEXT,
                borderWidth: 1,
                borderRadius: 6,
              },
              styles.input,
            ]}
          >
            <Icon name="lock" color={theme.colors.TEXT} size={16}></Icon>
            <View
              style={{
                height: "100%",
                width: 1,
                marginHorizontal: 10,
                backgroundColor: theme.colors.TEXT,
              }}
            ></View>
            <TextInput
              value={password}
              onChangeText={(value) => {
                setPassword(value);
              }}
              secureTextEntry
              style={{
                flex: 1,
                color: theme.colors.TEXT,
                fontSize: 16,
              }}
            ></TextInput>
          </View>
        </View>
        <TouchableOpacity
          disabled={isEmpty}
          onPress={() => {}}
          style={[
            styles.button,
            isEmpty
              ? { backgroundColor: "gray" }
              : {
                  backgroundColor: theme.colors.PRIMARY,
                },
          ]}
        >
          <CostumeText
            style={{
              fontSize: 18,
              color: "white",
            }}
          >
            Login
          </CostumeText>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  dataWrapper: {
    width: Dimensions.get("screen").width * 0.7,
    flex: 1,
    justifyContent: "center",
    paddingVertical: 10,
    alignSelf: "center",
    alignContent: "center",
    alignItems: "center",
  },
  appLogo: {
    width: 150,
    height: 120,
  },
  input: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    height: 50,
    marginVertical: 10,
    fontSize: 16,
    padding: 10,
  },
  button: {
    width: "100%",
    height: 50,
    position: "absolute",
    bottom: Dimensions.get("screen").height * 0.1,
    borderRadius: 6,
    alignSelf: "flex-end",
    alignItems: "center",
    justifyContent: "center",
  },
});
