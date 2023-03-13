import React from "react";
import { StyleSheet } from "react-native";
import { FlatGrid } from "react-native-super-grid";
import HourCard from "./HourCard";

const Durations = () => {
  const durations = [
    {
      hour: "60",
      noon: "min",
    },
    {
      hour: "90",
      noon: "min",
    },
    {
      hour: "120",
      noon: "min",
    },
  ];
  return (
    <FlatGrid
      itemDimension={50}
      spacing={8}
      scrollEnabled={false}
      renderItem={(item) => {
        return (
          <HourCard
            key={item.index}
            hour={item.item.hour}
            noon={item.item.noon}
            disabled={item.item.disabled}
          ></HourCard>
        );
      }}
      data={durations}
    ></FlatGrid>
  );
};

export default Durations;

const styles = StyleSheet.create({
  container: {
    padding: 8,
    flexDirection: "row",
  },
});
