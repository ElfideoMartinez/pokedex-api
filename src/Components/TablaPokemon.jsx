import React,{useState, useEffect} from 'react'
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import formatResponse from '../Models/formatResponse';


const TablaPokemon = ({resultados}) => {
  const [datosPokemon,setDatosPokemon]=useState([]);

  const {results} = resultados;
  
  useEffect(() => {
    async function update(){
      const datosFormateados=await formatResponse(results);
      setDatosPokemon(datosFormateados);
    }
    update().then(console.log(datosPokemon));
  },[]);
  

  return (
    <>
      <div>
            <div className="card" style={{ height: 'calc(100vh - 145px)' }}>
                <DataTable value={results} scrollable scrollHeight="flex">
                    <Column field="name" header="Name"></Column>
                    <Column field="url" header="Url"></Column>
                    <Column field="abilities" header="Habilidades"></Column>
                </DataTable>
            </div>
        </div>
    </>
  )
}

export default TablaPokemon