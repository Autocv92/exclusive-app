import { useState } from "react";
import { useTodo } from "./useTodo";

export function AddTodo() {
  const [task, setTask] = useState("");
  // const { addTaskHandler } = useContext(TodoContext);
  const { addTaskHandler } = useTodo();

  return (
    <div>
      <input
        type="text"
        name="addTodo"
        className="border-2 p-1 outline-none focus:border-blue-500"
        placeholder="Add Task"
        onChange={(e) => setTask(e.target.value)}
      />
      <button
        onClick={() => addTaskHandler(task)}
        className="m-4 rounded-sm bg-cyan-600 p-2"
      >
        Add Task
      </button>
    </div>
  );
}

// AddTodo.propTypes = {
//   onAddTaskHander: PropTypes.func.isRequired,
// };
