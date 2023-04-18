import AddTask from "./AddTask/AddTask.js";
import TaskList from "./AddTask/TaskList.js";
import { TasksProvider } from "./AddTask/TasksContext.js";

export default function TaskApp() {
  return (
    <TasksProvider>
      <h1>Day off in Kyoto</h1>
      <AddTask />
      <TaskList />
    </TasksProvider>
  );
}
