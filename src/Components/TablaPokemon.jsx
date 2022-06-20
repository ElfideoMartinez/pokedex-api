import React,{useState, useEffect} from 'react'
import {CallApi} from '../Helpers/ApiCall';

import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';


const TablaPokemon = ({busqueda}) => {
  const [listaPokeon, setListaPokemon]=useState([]);
  const [cargando,setCargando]=useState(true);
  useEffect(() =>{
    const iniciar=async()=>{
      const lista=await CallApi(busqueda)
      setListaPokemon(lista);
      setTimeout(
        console.log(listaPokeon)
      ,2000);
    }
    iniciar();
    setTimeout(()=>{
      console.log(listaPokeon);
      setCargando(false);

    })
  },[busqueda]);

  return (
    <>
     {cargando &&
      <div className="card" style={{ height: 'calc(100vh - 145px)' }}>
      <DataTable value={listaPokeon} scrollable scrollHeight="flex">
        <Column field="id" header="Id"></Column>
        <Column field="name" header="Name"></Column>
        <Column field="abilities" header="Abilities"></Column>
      </DataTable>
     </div>
     }
    </>
  )
}

export default TablaPokemon