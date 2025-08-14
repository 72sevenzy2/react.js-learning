import React from 'react';
import './stylesheets/App.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import TodoList from './todolist';

function App() {
  return (
    <>
      <TodoList />
    </>
  )
}

export default App;