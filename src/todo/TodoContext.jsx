import { PropTypes } from "prop-types";
import { createContext, useReducer } from "react";

export const TodoContext = createContext([]);

const initialState = [];

// {type:"ADD_TASK", payload:{name: "new task"}}
const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TASK":
      return [...state, action.payload];
    default:
      throw new Error("Type didnot match");
  }
};

export const TodoProvider = ({ children }) => {
  const [todos, dispatch] = useReducer(reducer, initialState);

  const addTaskHandler = (value) => {
    console.log(value);
    if (value)
      dispatch({
        type: "ADD_TASK",
        payload: { id: Math.floor(Math.random() * 100), name: value },
      });
  };

  return (
    <TodoContext.Provider value={{ todos, addTaskHandler }}>
      {children}
    </TodoContext.Provider>
  );
};

TodoProvider.propTypes = {
  children: PropTypes.element,
};
