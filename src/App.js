import logo from './logo.svg';
import React from 'react'
import { Provider } from 'react-redux'
import store from './store'


function Dinesh() {
  return (<div>Dinehs</div>)
}

function App() {
  return (
    <Provider store={store}>
      <div>
        <Dinesh />
      </div>
    </Provider>

  );
}

export default App;

