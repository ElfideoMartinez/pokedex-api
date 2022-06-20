import React,{useState, useEffect} from 'react'
import { Menubar } from 'primereact/menubar';
import { InputText } from 'primereact/inputtext';

import {Secciones} from '../Models/Pokemons';

const Header = ({setBusqueda}) => {
  const[inputBusquda,setInputBusqueda]=useState('?');

    
  
  const items=[
    {
      label: 'Pokemon',
      icon: <i className="pi pi-filter-fill"></i>,
      items:Secciones
    }
  ];
  return (
    <>
      <Menubar id='buscadorPokemon'
         model={items} 
         end={<span className="p-input-icon-right" style={{cursor: 'pointer'}}>
         <i className="pi pi-search" onClick={setBusqueda(inputBusquda)} />
         <InputText onChange={e=>{setInputBusqueda(e.target.value)}}/>
      </span>}
         />
    </>
  )
}

export default Header