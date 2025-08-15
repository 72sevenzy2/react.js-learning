import { useState, useReducer } from "react";
import configsubmit from "./submitconfig";

const initialstate = { todos: [], count: 0 };

function reducerfunc(state, action) {
  switch (action.type) {
    case "add":
      return { ...state, todos: [...state.todos, action.payload], count: state.count + 1 };
      break;
    case "delete":
      return { ...state, todos: state.todos.filter((_, index) => index !== action.payload), count: state.count - 1 };
      break;
    default:
      return state;
  }
}

function TodoApp() {
  const [state, dispatch] = useReducer(reducerfunc, initialstate)
  const [int, setint] = useState("");

  return (
    <div>
      <input type="text" onKeyDown={(e) => configsubmit(e, "btnid")} placeholder="add a task" aria-label="add a task"
        value={int} onChange={(e) => { setint(e.target.value) }} />
      <button id="btnid" onClick={() => { if (int.trim()) { dispatch({ type: "add", payload: int }); setint(""); } }}>add task</button>
      <p>{state.count} = todos</p>
      <ul>
        {state.todos.map((todo, index) => (
          <ul key={index}>{todo}
            <button onClick={() => dispatch({ type: "delete", payload: index })}></button>
          </ul>
        ))}
      </ul>
    </div>
  )
}

export default TodoApp;