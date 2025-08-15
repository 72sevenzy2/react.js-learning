import { useState, useReducer } from "react";

const initialstate = { todos: [], count: 0 };

function reducerfunc(state, action) {
  switch (action.type) {
    default:
      return ""
  }
}

function TodoApp() {
  const [state, dispatch] = useReducer(reducerfunc, initialstate)
  const [int, setint] = useState("");

  return (
    <div>
      <input type="text" placeholder="add a task" aria-label="add a task"
        value={int} onChange={(e) => { setint(e.target.value) }} />
      <button onClick={() => { if (int.trim()) { dispatch({ type: add, payload: int }); setint(""); } }}>add task</button>
      <p>{state.count} = todos</p>
      <ul>
        {state.todos.map((todo, index) => (
          <ul key={index}>{todo}</ul>
        ))}
      </ul>
    </div>
  )
}

export default TodoApp;