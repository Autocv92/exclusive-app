import { useContext } from "react";
import { TodoContext } from "./TodoContext";

export function useTodo() {
  const context = useContext(TodoContext);
  if (context === undefined) {
    throw new Error("TodoContext was used outside");
  }
  return context;
}
