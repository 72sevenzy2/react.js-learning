import React from 'react';
import './stylesheets/App.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Notf from './components/notfound';
import Home from './components/home';
import UserProfs from './components/userprof';
import { Routs } from './routes';

function App() {
  return (
    <Router>
      <nav>
        <Link to={Routs.home}>Home</Link>
      </nav>

      <Routes>
        <Route path={Routs.home} element={<Home />} />
        <Route path='/users/:usernames' element={<UserProfs />} />
        <Route path='*' element={<Notf />} />
      </Routes>
    </Router>
  )
}

export default App;