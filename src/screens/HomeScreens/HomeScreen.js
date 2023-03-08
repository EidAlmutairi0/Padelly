import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import Center from "../../components/Center";

const HomeScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.centers}>
        <Center
          image="https://www.timeoutriyadh.com/cloud/timeoutriyadh/2022/06/05/padelmasters-court-1024x768.jpg"
          logo="https://scontent-mrs2-2.cdninstagram.com/v/t51.2885-19/290356432_446178513619142_7557701356714870663_n.jpg?stp=dst-jpg_s320x320&_nc_ht=scontent-mrs2-2.cdninstagram.com&_nc_cat=102&_nc_ohc=_aRs8JgNEZQAX8U0AuD&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_AfC7NoLDUtPyhmQ_3ySs8XMaYF-xnm6Tho7yRRnZ6Lh3Zg&oe=640D3F6A&_nc_sid=8fd12b"
          title="Padel Thunder"
          distance="2"
        ></Center>
        <Center
          image="https://pbs.twimg.com/media/FHn6G3ZXoAEsERY.jpg"
          logo="https://scontent-mrs2-1.cdninstagram.com/v/t51.2885-19/302195858_476010174533673_6949548475127358964_n.jpg?stp=dst-jpg_s320x320&_nc_ht=scontent-mrs2-1.cdninstagram.com&_nc_cat=109&_nc_ohc=7jfg1URsqjcAX_JFaRK&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_AfAso4ba_HfYFnM8yRge0ZxPf8y19w76b4EjRjKwscUuRg&oe=640D50AA&_nc_sid=8fd12b"
          title="Valley Padel"
          distance="10.1"
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
