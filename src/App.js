import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react'
import Dinesh, { dinesh } from './Dinesh';

import { Card } from './components';

const ReactComponent = () => {
  return (
    <span style={{ color: "red" }}>This is a react component</span>
  )
}


const data = [
  { id: 1, body: "hey body", title: "title1", userId: "asdf" },
  { id: 2, body: "two body", title: "title2", userId: "asasdfdf" },
]

function App() {
  const [select, setSeleted] = useState({
  })
  function handleSelection(item) {
    setSeleted(item)
  }
  return (
    <div className="App">
      <div>
        {dinesh}

      </div>

    </div>
  );
}

export default App;

