import { MdDelete } from "react-icons/md";
import { MdEdit } from "react-icons/md";
const TaskList = ({ tasks,onDelete,onEdit }) => {
  return (
    <ul className="w-72 mt-10">
      {tasks.map((task) => (
        <li key={task.id} className="flex justify-between p-2 border rounded-lg mb-3 border-gray-400">
          {task.name} 
          <div>
          <button onClick={()=>{onEdit(task)}}><MdEdit/></button>
          <button onClick={()=>onDelete(task.id)}><MdDelete/></button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
