import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react'
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";


import Home from './routes/Home';
import About from './routes/About';
import Info from './routes/Info';
import Dinesh from './routes/Dinesh';

function App() {


  return (
    <div>
      <BrowserRouter >
        <div>
          <Link to="/about">About</Link>
        </div>
        <div>
          <Link to="/home">Home</Link>
        </div>
        <div>
          <Link to="/info">Info</Link>
        </div>

        <Switch>
          <Route path="/home"> <Home /> </Route>
          <Route path="/about"> <About /></Route>
          <Route path="/info"> <Info /></Route>
        </Switch>
      </BrowserRouter>
    </div >

  );
}

export default App;

