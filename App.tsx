import { StatusBar } from "expo-status-bar";
import { useState, useEffect } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import {
  collection,
  getDocs,
  doc,
  getDoc,
  setDoc,
  deleteDoc,
} from "firebase/firestore";

import { ITask } from "./types/task.interface";
import { db } from "./firebase";

import Header from "./components/Header";
import Task from "./components/Task";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";

export default function App() {
  const [showAddTask, setShowAddTask] = useState(false);
  const [tasks, setTasks] = useState([] as ITask[]);

  useEffect(() => {
    const getTasks = async () => {
      const tasksFromServer = await fetchTasks();
      setTasks(tasksFromServer);
    };
    getTasks();
  }, []);

  const fetchTasks = async () => {
    const res = await getDocs(collection(db, "tasks"));
    let data = [] as ITask[];
    res.forEach((doc) => {
      data = [
        ...data,
        {
          id: doc.data().id,
          text: doc.data().text,
          reminder: doc.data().reminder,
          day: doc.data().day,
          details: doc.data().details,
          duration: doc.data().duration,
        },
      ];
    });

    return data;
  };
  const fetchTask = async (id: string) => {
    const taskRef = doc(db, "tasks", id);
    const res = await getDoc(taskRef);
    const data = await res.data();

    return data;
  };
  //Add task
  const addTask = async (task: {}) => {
    const newTaskRef = doc(collection(db, "tasks"));
    task = { ...task, id: newTaskRef.id };
    await setDoc(newTaskRef, task);

    setTasks([...tasks, task] as ITask[]);
  };
  //Delete tasks
  const deleteTask = async (id: string) => {
    await deleteDoc(doc(db, "tasks", id));

    setTasks(tasks.filter((task) => task.id !== id));
  };
  //Toggle reminder
  const toggleReminder = async (id: string) => {
    const taskToToggle = await fetchTask(id);
    const updatedTask = { ...taskToToggle, reminder: !taskToToggle.reminder };

    await setDoc(doc(db, "tasks", id), updatedTask);

    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: updatedTask.reminder } : task
      )
    );
  };

  return (
    <ScrollView style={styles.container}>
      <Header
        title="Task Tracker"
        onAdd={() => {
          setShowAddTask(!showAddTask);
        }}
        showAdd={showAddTask}
      />
      <View>
        {showAddTask ? (
          <AddTask
            onAdd={addTask}
            visible={showAddTask}
            onClose={() => setShowAddTask(false)}
          />
        ) : (
          false
        )}
      </View>
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
      ) : (
        <Text>No texts to show</Text>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 20,
    //paddingTop: 35,
    //alignItems: "center",
    //justifyContent: "center",
  },
});
