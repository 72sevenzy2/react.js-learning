import { useReducer } from "react";

const initstate = { todos: [] };
function reducerfunc(state, action) {
  switch (action.type) {
    default:
      return state;
  }
}

function TodoList() {
  const [state, dispatch] = useReducer(reducerfunc, initstate);

  return (
    <div>
      <h1>Todo List</h1>
      <input type="text" />
    </div>
  );
}

export default TodoList;