import React from 'react'
import  { Provider } from 'react-redux';
import NavBar from './components/navbar';
import Produtos from './components/produtos';
import storeQuantidade from './store';

function App() {
  return (
    <Provider store={storeQuantidade}>
        <NavBar />
        <Produtos />
    </Provider>
  );
}

export default App;
