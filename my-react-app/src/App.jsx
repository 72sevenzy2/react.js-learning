import React from 'react';
import './stylesheets/App.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import TodoApp from './todolist.jsx';

function App() {
  return (
    <>
      <TodoApp />
    </>
  )
}

export default App;