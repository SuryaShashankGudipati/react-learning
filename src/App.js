import logo from './logo.svg';
import React from 'react'
import { Provider } from 'react-redux'
import store from './store'


import Layout from './layout'

function App() {
  return (
    <Provider store={store}>
      <div>
        <Layout />
      </div>
    </Provider>

  );
}

export default App;

