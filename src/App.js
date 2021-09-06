import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react'

import InButton from './components/InButton';
import OutButton from './components/OutButton';



function App() {

  //Declare all react states 

  const [loading, setLoading] = useState(false)
  const [data, setData] = useState([])


  // use other react hooks
  useEffect(() => {
    setLoading(true)
    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(json => {
        setData(json)
        setLoading(false)
      })
  }, [])

  // Write any custom funciton 

  // Then final return what needed

  if (loading) {
    return (
      <div className="App">
        <h1>Loading....</h1>
      </div>
    )
  }

  return (
    <div className="App">
      {data && <div>{data.title}</div>}
    </div>
  );
}

export default App;
