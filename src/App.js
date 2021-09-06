import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react'

import { Card } from './components';

function reactComponent() {
  return (
    <span style={{ color: "red" }}>This is a react component</span>
  )
}


const data = [
  { id: 1, body: "hey body", title: "title", userId: "userId" }
]

function App() {
  const [select, setSeleted] = useState({

  })


  // useEffect(() => {
  //   fetch('https://jsonplaceholder.typicode.com/posts')
  //     .then((response) => response.json())
  //     .then((json) => setData(json));
  // }, [])

  function handleSelection(item) {
    setSeleted(item)
  }

  const textElement = "<div><h1>Inner HTML<h1></div>"

  return (
    <div className="App">
      {textElement}
      <div style={{ backgroundColor: "green" }}>
        {select && <div>{select.title}</div>}
      </div>
      <div dangerouslySetInnerHTML={{ __html: textElement }} />
    </div>
  );
}

export default App;

