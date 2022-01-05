import Task from "./Task";
import { ITask } from "../types/task.interface";
import { FlatList, View } from "react-native";

export interface ITasksProps {
  tasks: ITask[];
  onDelete: (id: string) => void;
  onToggle: (id: string) => void;
}

const Tasks = ({ tasks, onDelete, onToggle }: ITasksProps) => {
  //const renderItem = (task: ITask) => <Task task={task} />;

  return (
    <View>
      {tasks.map((task, index) => (
        <Task key={index} task={task} onDelete={onDelete} onToggle={onToggle} />
      ))}
    </View>
  );
};

export default Tasks;
