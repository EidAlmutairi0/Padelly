import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import Center from "../../components/Center";
import useTheme from "../../Themes/useTheme";
import useThemedStyles from "../../Themes/useThemedStyles";

const HomeScreen = () => {
  const theme = useTheme();
  const style = useThemedStyles(styles);

  return (
    <ScrollView style={style.container}>
      <View style={style.centers}>
        <Center
          image="https://www.timeoutriyadh.com/cloud/timeoutriyadh/2022/06/05/padelmasters-court-1024x768.jpg"
          logo="https://scontent-mad1-1.cdninstagram.com/v/t51.2885-19/290356432_446178513619142_7557701356714870663_n.jpg?stp=dst-jpg_s320x320&_nc_ht=scontent-mad1-1.cdninstagram.com&_nc_cat=102&_nc_ohc=ksqXepoehyQAX_6FKGX&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_AfCtFm-3SJsXUeUWJwOcBz_zsLEZI8K4VKkhgqZ_6Ooc0Q&oe=641722AA&_nc_sid=8fd12b"
          title="Padel Thunder"
          distance="2"
          images={[
            "https://lh3.googleusercontent.com/p/AF1QipPO28nInIUXlEqK2O-Xr_fPzcFxPxPfHxJNtFUQ=s1360-w1360-h1020",
          ]}
        ></Center>
        <Center
          image="https://pbs.twimg.com/media/FHn6G3ZXoAEsERY.jpg"
          logo="https://scontent-mad2-1.cdninstagram.com/v/t51.2885-19/302195858_476010174533673_6949548475127358964_n.jpg?stp=dst-jpg_s320x320&_nc_ht=scontent-mad2-1.cdninstagram.com&_nc_cat=109&_nc_ohc=0L7pCdP6PH0AX8B4lix&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_AfAhSbABO9RuPuMJafdSWTdlqvFxgBiKoVvOSnoNE3qPgw&oe=641733EA&_nc_sid=8fd12b"
          title="Valley Padel"
          distance="10.1"
          images={[
            "https://lh3.googleusercontent.com/p/AF1QipNo4VYG4A4XAkH2664Pga1NWsQGEbDMFAuWXjSs=s1360-w1360-h1020",
          ]}
        ></Center>
        <Center
          image="https://pbs.twimg.com/media/Fbkw9NOaQAELzFp?format=jpg&name=large"
          logo="https://lh5.googleusercontent.com/-6D58RrSaadI/AAAAAAAAAAI/AAAAAAAAAAA/Kmimmux2TDo/s88-p-k-no-ns-nd/photo.jpg"
          title="Padel Masters"
          distance="3"
        ></Center>
      </View>
    </ScrollView>
  );
};

export default HomeScreen;

const styles = (theme) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.colors.BACKGROUND,
    },
    centers: {
      paddingVertical: 20,
      alignItems: "center",
      alignContent: "center",
      alignSelf: "center",
      width: "90%",
      height: "100%",
    },
  });
