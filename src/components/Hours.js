import moment from "moment";
import React from "react";
import { StyleSheet } from "react-native";
import { FlatGrid } from "react-native-super-grid";
import HourCard from "./HourCard";
const Hours = (props) => {
  const onPress = (duration) => {
    props.setValue({ ...props.value, time: duration });
  };
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
  for (let i = 0; i < 24; i++) {
    newHour = moment(newHour).add(30, "m");
    var disabled = false;
    if (moment(newHour).isBefore(currentTime)) disabled = true;
    var newTime = moment(newHour, ["HH:mm"]).format("h:mm A");
    var hour = newTime.split(" ")[0];
    var noon = newTime.split(" ")[1];

    hours.push({
      hour: hour,
      noon: noon,
      disabled: disabled,
    });
  }
  return (
    <FlatGrid
      itemDimension={50}
      spacing={8}
      scrollEnabled={false}
      renderItem={(item) => {
        return (
          <HourCard
            value={props.value.time}
            onPress={onPress}
            key={item.index}
            hour={item.item.hour}
            noon={item.item.noon}
            disabled={item.item.disabled}
          ></HourCard>
        );
      }}
      data={hours}
    ></FlatGrid>
  );
};

export default Hours;

const styles = StyleSheet.create({});
