import React,{useState, useEffect} from 'react'
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import formatResponse from '../Models/formatResponse';


const TablaPokemon = ({results}) => {
  const [resultados, setResultados] = useState([]);

  const buscarDatos=async()=>{
    await fetch('https://pokeapi.co/api/v2/pokemon/?&limit=20')
      .then(response=>response.json())
      .then(data=> {
        const {results}=data;
        setResultados(results);
      });
      setTimeout(1000);
      await formatResponse(results)

  }
  useEffect(()=>{
    const iniciar=async()=>{
      await buscarDatos();
    }
    iniciar();
    console.log(resultados)
  },[]);
  
  return (
    <>
            <div className="card" style={{ height: 'calc(100vh - 145px)'}}rowSpan="4">
                <DataTable value={resultados} scrollable scrollHeight="flex">
                  <Column field="name" header="Name"></Column>
                  <Column field="url"header="Pokemon Link"></Column>
                </DataTable>
            </div>
    </>
  )
}

export default TablaPokemon