import { MdDelete } from "react-icons/md";
import { MdEdit } from "react-icons/md";

const TaskList = ({ tasks, onDelete, onEdit ,toggleTask}) => {
 
  return (
    <ul className="w-72 mt-10">
      {tasks.map((task) => (
        <li
          key={task.id}
          className="flex justify-between p-2 border rounded-lg mb-3 border-gray-400"
        >
          <div>
            <input
              type="checkbox"
              className="mr-4"
              checked={task.completed}
              onChange={() => toggleTask(task.id)}
            />
            <span
              className={`text-lg ${
                task.completed ? "line-through text-gray-500" : "text-black"
              }`}
            >
              {task.name}
            </span>
          </div>
          <div>
            <button
              className="mr-4"
              onClick={() => {
                onEdit(task);
              }}
            >
              <MdEdit />
            </button>
            <button onClick={() => onDelete(task.id)}>
              <MdDelete />
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
