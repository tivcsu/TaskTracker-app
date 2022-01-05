import React from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";

interface ISliderWithColorValues {
  values: string[];
  selectedValue: string;
  title: string;
  setSelected: (value: string) => void;
}

const SliderWithColorValues = ({
  values,
  selectedValue,
  title,
  setSelected,
}: ISliderWithColorValues) => {
  return (
    <View>
      <Text>{title}</Text>
      <View style={styles.sliderContainer}>
        {values.map((value, index) => (
          <Pressable
            key={index}
            style={
              selectedValue === value
                ? { ...styles.colorActive, backgroundColor: value }
                : { ...styles.color, backgroundColor: value }
            }
            onPress={() => setSelected(value)}
          ></Pressable>
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
  color: {
    borderRadius: 100,
    width: 30,
    height: 30,
  },
  colorActive: {
    borderRadius: 100,
    width: 30,
    height: 30,
    borderColor: "black",
    borderWidth: 2,
  },
  colorText: {
    color: "black",
  },
  colorTextActive: {
    color: "white",
  },
});

export default SliderWithColorValues;
