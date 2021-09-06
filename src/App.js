import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react'

import { InButton, MyFile, OutButton, Dinesh } from './components';

function App() {

  return (
    <div className="App">
      <InButton />
      <div>-------</div>
      <OutButton />
      <div>-------</div>
      <MyFile />
      <div>-------</div>
      <Dinesh />


    </div>
  );
}

export default App;
