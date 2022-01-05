import React from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";

interface ISliderWithFixValues {
  values: string[];
  selectedValue: string;
  title: string;
  setSelected: (value: string) => void;
  color: string;
}

const SliderWithFixValues = ({
  values,
  selectedValue,
  title,
  setSelected,
  color,
}: ISliderWithFixValues) => {
  return (
    <View>
      <Text>{title}</Text>
      <View style={styles.sliderContainer}>
        {values.map((value, index) => (
          <Pressable
            key={index}
            style={
              selectedValue === value
                ? { ...styles.durationActive, backgroundColor: color }
                : styles.duration
            }
            onPress={() => setSelected(value)}
          >
            <Text
              style={
                selectedValue === value
                  ? styles.durationTextActive
                  : styles.durationText
              }
            >
              {value}
            </Text>
          </Pressable>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  sliderContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 10,
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 8,
    backgroundColor: "#f4f4f4",
  },
  duration: {
    padding: 10,
  },
  durationActive: {
    padding: 10,
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: "green",
    borderRadius: 8,
  },
  durationText: {
    color: "black",
  },
  durationTextActive: {
    color: "white",
  },
});

export default SliderWithFixValues;
