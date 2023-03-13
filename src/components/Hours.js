import moment from "moment";
import React from "react";
import { StyleSheet, View } from "react-native";
import HourCard from "./HourCard";
const Hours = () => {
  var today = new Date();

  var myToday = new Date(
    today.getFullYear(),
    today.getMonth(),
    today.getDate(),
    15,
    30,
    0
  );

  const currentTime = new Date();
  var newHour = myToday;
  let hours = [];
  for (let i = 0; i < 3; i++) {
    newHour = moment(newHour).add(30, "m");
    var newTime = moment(newHour, ["HH:mm"]).format("h:mm A");
    var hour = newTime.split(" ")[0];
    var noon = newTime.split(" ")[1];
    console.log(hour);
    hours.push(<HourCard hour={hour} noon={noon}></HourCard>);
  }
  return <View>{hours}</View>;
};

export default Hours;

const styles = StyleSheet.create({});
