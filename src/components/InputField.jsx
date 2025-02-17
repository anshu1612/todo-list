import { useState ,useEffect} from "react";

const InputField = ({ editTask, onSelectAdd }) => {
  const [taskInput, setTaskInput] = useState("");
  useEffect(() => {
    if (editTask) {
      setTaskInput(editTask.name);
    }
  }, [editTask]);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!taskInput.trim()) return;

    onSelectAdd(taskInput);
    setTaskInput("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="flex">
        <input
          value={taskInput}
          type="text"
          onChange={(e) => setTaskInput(e.target.value)}
          placeholder="Add item..."
          className="input input-bordered input-primary w-full max-w-xs"
        />
        <button type="submit" className="btn btn-outline btn-primary ml-4">
        {editTask ? "Update" : "Add"}
        </button>
      </div>
    </form>
  );
};

export default InputField;
