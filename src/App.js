import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react'

import { Card } from './components';

function App() {

  const [data, setData] = useState([])

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((json) => setData(json));
  }, [])

  return (
    <div className="App">
      {
        data.map(eachItem => <Card key={eachItem.id} title={eachItem.title} body={eachItem.body} userId={eachItem.fetchuserId} />)
        //data.map(eachItem => <Card key={eachItem.id} data={eachItem}  />)
      }
    </div>
  );
}

export default App;


