import moment from "moment";
import React from "react";
import { ScrollView, StyleSheet } from "react-native";
import DayCard from "./DayCard";

const Days = () => {
  var days = [];
  let date = new Date();

  for (let i = 0; i < 10; i++) {
    let tempDate = moment(date).add(i, "day");
    let formatDate = moment(tempDate).format("ddd/MMM/YYYY");
    var dayNum = moment(tempDate).format("DD");
    var day = formatDate.split("/")[0];
    var month = formatDate.split("/")[1];
    days.push(
      <DayCard key={i} month={month} day={day} dayNum={dayNum}></DayCard>
    );
  }
  return (
    <ScrollView horizontal={true} style={styles.container}>
      {days}
    </ScrollView>
  );
};

export default Days;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
});
