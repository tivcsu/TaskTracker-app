import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  Platform,
  Button,
  Pressable,
} from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import { format } from "date-fns";

interface ITimePicker {
  onDateSet: (taskDate: string) => void;
}

const TimePicker = ({ onDateSet }: ITimePicker) => {
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState("date");
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === "ios");
    setDate(currentDate);
    onDateSet(currentDate);
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode("date");
  };

  const showTimepicker = () => {
    showMode("time");
  };

  return (
    <View>
      <View>
        <Pressable onPress={showDatepicker}>
          <Text>{format(date, "yyyy.MM.dd")}</Text>
        </Pressable>
      </View>
      <View>
        <Pressable onPress={showTimepicker}>
          <Text>{format(date, "k:m")}</Text>
        </Pressable>
      </View>
      {Platform.OS === "ios" && show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={mode}
          is24Hour={true}
          locale="en_GB"
          display="spinner"
          onChange={onChange}
        />
      )}
      {show && Platform.OS !== "ios" && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={mode}
          is24Hour={true}
          locale="en_GB"
          display="default"
          onChange={onChange}
        />
      )}
    </View>
  );
};

export default TimePicker;
