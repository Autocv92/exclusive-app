import { useTodo } from "./useTodo";

export function ListTodo() {
  // const { todos } = useContext(TodoContext);
  const { todos } = useTodo();

  return (
    <ul>
      {todos.map((todo) => {
        return <li key={todo.id}>{todo.name}</li>;
      })}
    </ul>
  );
}
