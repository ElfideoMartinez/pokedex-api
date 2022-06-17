import './App.css';
import React,{useState} from 'react';

import TablaPokemon from './Components/TablaPokemon';
import Header from './Components/Header';

function App() {
  const [results, setResults]=useState([]);
  
  return (
    <>
      <React.StrictMode>
        <Header setResults={setResults}/>
        <TablaPokemon resultados={results}/>
      </React.StrictMode>
    </>
  )
}

export default App
