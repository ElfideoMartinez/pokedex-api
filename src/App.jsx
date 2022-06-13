import './App.css';
import React,{useState} from 'react';

import TablaPokemon from './Components/TablaPokemon';
import Header from './Components/Header';

function App() {
  const [results, setResults]=useState([]);
  
  return (
    <>
      <Header setResults={setResults}/>
      <TablaPokemon results={results}/>
    </>
  )
}

export default App
