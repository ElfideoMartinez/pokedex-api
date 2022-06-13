import React,{useState, useEffect} from 'react'
import { Menubar } from 'primereact/menubar';
import { InputText } from 'primereact/inputtext';

import {itemsPokemon} from '../Models/Pokemos';
import CallApi from '../Models/CallApi';

const Header = ({setResults}) => {
    const [busqueda,setBusqueda] =useState('?');

    useEffect(()=>{
        const mostrarResult=async()=>{
            await CallApi(busqueda)
                .then(result=>{setResults(result);console.log(result)})
        }
        mostrarResult();
    },[busqueda]);

  const buscar=async()=>{
    const result=await CallApi(busqueda);
    console.log(result);
  }
  
  const items=[
    {
      label: 'Pokemon',
      icon: <i className="pi pi-filter-fill"></i>,
      items:itemsPokemon
    }
  ];
  return (
    <>
      <Menubar id='buscadorPokemon'
         model={items} 
         end={<span className="p-input-icon-right" style={{cursor: 'pointer'}}>
         <i className="pi pi-search" onClick={buscar} />
         <InputText onChange={e=>{setBusqueda(e.target.value)}}/>
      </span>}
         />
    </>
  )
}

export default Header