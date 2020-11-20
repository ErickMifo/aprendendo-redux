import React from 'react'
import  { Provider } from 'react-redux';
import NavBar from './components/navbar';
import Produtos from './components/produtos';
import store from './store';

function App() {
  return (
    <Provider store={store}>
        <NavBar />
        <Produtos />
    </Provider>
  );
}

export default App;
