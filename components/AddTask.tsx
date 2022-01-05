import { useState } from "react";

import {
  TextInput,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Switch,
  Pressable,
  Modal,
  ScrollView,
} from "react-native";

import SliderWithFixValues from "./SliderWithFixValues";
import SliderWithColorValues from "./SliderWithColorValues";

interface IAddTaskProps {
  onAdd: ({}) => void;
  onClose: () => void;
  visible: boolean;
}

const AddTask = ({ onAdd, onClose, visible }: IAddTaskProps) => {
  const [text, setText] = useState("");
  const [day, setDay] = useState("");
  const [details, setDetails] = useState("");
  const [reminder, setReminder] = useState(false);
  const [date, setDate] = useState(new Date(1598051730000));
  const [duration, setDuration] = useState("1m");
  const [repeat, setRepeat] = useState("Once");
  const [color, setColor] = useState("green");

  const handleAddTask = () => {
    if (!text) {
      alert("Please add a task");
      return;
    }
    onAdd({ text, day, details, reminder, duration, repeat, color });
    setText("");
    setDay("");
    setDetails("");
    setDuration("1m");
    setRepeat("Once");

    onClose();
  };

  const onChange = (event: any, selectedDate: any) => {
    const currentDate = selectedDate || date;
    setDate(currentDate);
  };

  return (
    <View style={styles.defaultView}>
      <Modal
        animationType="slide"
        visible={visible}
        onRequestClose={() => onClose()}
        //onDismiss={() => modalClose()}
        presentationStyle="pageSheet"
        style={styles.modalView}
      >
        <ScrollView>
          <ScrollView style={styles.modalView}>
            <Pressable onPress={() => onClose()}>
              <Text
                style={{
                  color: "red",
                  fontWeight: "600",
                  fontSize: 30,
                  marginLeft: "auto",
                }}
              >
                X
              </Text>
            </Pressable>
            <Text>Task</Text>
            <TextInput
              style={styles.input}
              placeholder="Add Task"
              value={text}
              onChangeText={(text) => setText(text)}
            />
            <Text>Date & time</Text>
            <TextInput
              style={styles.input}
              placeholder="Add Date and Time"
              value={day}
              onChangeText={(text) => setDay(text)}
            />
            <Text>Details</Text>
            <TextInput
              multiline
              numberOfLines={4}
              style={styles.multilineInput}
              placeholder="Details"
              value={details}
              onChangeText={(text) => setDetails(text)}
            />
            <SliderWithFixValues
              title="How long?"
              values={["1m", "10m", "30m", "1h"]}
              selectedValue={duration}
              setSelected={setDuration}
              color={color}
            />
            <SliderWithFixValues
              title="How long?"
              values={["Once", "Daily", "Weekly", "Monthly", "Yearly"]}
              selectedValue={repeat}
              setSelected={setRepeat}
              color={color}
            />
            <SliderWithColorValues
              title="Color"
              values={["blue", "green", "black"]}
              selectedValue={color}
              setSelected={setColor}
            />

            <View
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Switch
                style={{ marginRight: 20 }}
                value={reminder}
                onValueChange={() => setReminder(!reminder)}
              ></Switch>
              <Text>Reminder</Text>
            </View>

            <TouchableOpacity onPress={() => handleAddTask()}>
              <View style={{ ...styles.addTask, backgroundColor: color }}>
                <Text style={styles.addTaskText}>Add Task</Text>
              </View>
            </TouchableOpacity>
          </ScrollView>
        </ScrollView>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  defaultView: {
    flex: 1,
  },
  modalView: {
    backgroundColor: "white",
    borderRadius: 20,
    padding: 25,
    height: "100%",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 5,
  },
  input: {
    borderRadius: 4,
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: "grey",
    paddingVertical: 10,
    paddingHorizontal: 10,
    marginVertical: 10,
  },
  multilineInput: {
    borderRadius: 4,
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: "grey",
    paddingVertical: 10,
    paddingHorizontal: 10,
    marginVertical: 10,
    minHeight: 80,
  },
  addTask: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    borderRadius: 12,
    marginVertical: 10,
  },
  addTaskText: {
    color: "white",
  },

  sliderContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 10,
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 8,
    backgroundColor: "#f4f4f4",
  },
});

export default AddTask;
