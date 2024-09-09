import { AddTodo } from "./AddTodo";
import { ListTodo } from "./ListTodo";

export function TodoApp() {
  return (
    <div className="m-9 flex justify-center">
      <div className="h-screen w-96">
        <h1 className="p-10">Task App</h1>
        <div>
          <AddTodo />
        </div>
        <ListTodo />
      </div>
    </div>
  );
}
