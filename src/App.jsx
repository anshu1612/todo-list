import { useActionState, useState } from "react";
import InputField from "./components/InputField";
import TaskList from "./components/TaskList";

function App() {
  const [tasks, setTasks ] = useState([
    { id: 1, name: "Laundary" },
    { id: 2, name: "Cleaning" },
  ]);


  return (
    <>
      <div className="flex flex-col items-center">
        <h1 className="text-4xl text-primary mb-24">Todo List</h1>
        <InputField onSelectAdd={(newTask)=>setTasks([...tasks,{id:tasks.length+1,name:newTask}])} />
        <TaskList
          tasks={tasks}
          onDelete={(id) => setTasks(tasks.filter((task) => task.id !== id))}
        />
      </div>
    </>
  );
}

export default App;
