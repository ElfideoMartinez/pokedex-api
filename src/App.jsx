import './App.css';
import React,{useState} from 'react';

import TablaPokemon from './Components/TablaPokemon';
import Header from './Components/Header';

function App() {
  const [busqueda, setBusqueda]=useState('?');

  return (
    <>
      <React.StrictMode>
        <Header setBusqueda={setBusqueda}/>
        <TablaPokemon busqueda={busqueda}/>
      </React.StrictMode>
    </>
  )
}

export default App
