import { ITask } from "../types/task.interface";
import { FaTimes } from "react-icons/fa";
import { View, Text, StyleSheet, Button, Pressable } from "react-native";

interface ITaskProps {
  task: ITask;
  onDelete: (id: string) => void;
  onToggle: (id: string) => void;
}

const Task = ({ task, onDelete, onToggle }: ITaskProps) => {
  return (
    <Pressable
      style={
        task.reminder
          ? { ...styles.taskWithReminder, borderLeftColor: task.color }
          : styles.task
      }
      onLongPress={() => onToggle(task.id)}
    >
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <View>
          <Text style={styles.taskName}>{task.text}</Text>
          <Text>{task.day}</Text>
          <Text>{task.duration}</Text>
          <Text>{task.repeat}</Text>
          <View style={styles.taskDetails}>
            <Text>{task.details}</Text>
          </View>
        </View>

        <View>
          <Pressable onPress={() => onDelete(task.id)}>
            <Text style={{ color: "red", fontWeight: "600" }}>X</Text>
          </Pressable>
        </View>
      </View>
    </Pressable>

    /*
    <div
      className={`task ${task.reminder ? "reminder" : ""}`}
      onDoubleClick={() => onToggle(task.id)}
    >
      <h3>
        {task.text}{" "}
        <FaTimes
          style={{ color: "red", cursor: "pointer" }}
          onClick={() => onDelete(task.id)}
        />
      </h3>
      <p>{task.day}</p>
    </div> */
  );
};

const styles = StyleSheet.create({
  task: {
    backgroundColor: "#f4f4f4",
    margin: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  taskWithReminder: {
    backgroundColor: "#f4f4f4",
    margin: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    borderLeftWidth: 5,
  },
  taskName: {
    fontSize: 16,
    fontWeight: "500",
  },
  taskDetails: {
    marginTop: 10,
  },
});

export default Task;
