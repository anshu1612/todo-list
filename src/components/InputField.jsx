import { useState } from "react";

const InputField = ({ onSelectAdd }) => {
  const [taskInput, setTaskInput] = useState("");
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
          Add
        </button>
      </div>
    </form>
  );
};

export default InputField;
