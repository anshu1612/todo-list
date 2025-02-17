import { useActionState, useState } from "react";
import InputField from "./components/InputField";
import TaskList from "./components/TaskList";

function App() {
  const [tasks, setTasks] = useState([
    
  ]);
  const [editTask, setEditTask] = useState(null);
  const handleAddOrUpdate = (taskName) => {
    if (editTask) {
      setTasks(
        tasks.map((task) =>
          task.id === editTask.id ? { ...task, name: taskName } : task
        )
      );
      setEditTask(null);
    } else {
      setTasks([...tasks, { id: tasks.length + 1, name: taskName }]);
    }
  };

  return (
    <>
      <div className="flex flex-col items-center">
        <h1 className="text-4xl text-black mt-6 mb-24">Todo List</h1>
        <InputField editTask={editTask} onSelectAdd={handleAddOrUpdate} />
        <TaskList
          tasks={tasks}
          onDelete={(id) => setTasks(tasks.filter((task) => task.id !== id))}
          onEdit={(task) => setEditTask(task)}
        />
      </div>
    </>
  );
}

export default App;
