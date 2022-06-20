export const CallApi=async(input)=>{
    const datos=await fetch(`http://pokeapi.co/api/v2/pokemon/${input}`)
        .then(response=>response.json());
    const {results}=datos;
    
    const texto = await Promise.all(results.map(async element=>{
        const datos=await fetch(element.url);
        return datos.json();
    }));
    const reultados=texto.map(element =>{
        return(
            {
                id: element.id,
                name: element.name,
                abilities: element.abilities,
                types: element.types,
            }
        )
    });
    setTimeout(()=>{
        console.log(reultados);
    },2000);
    return reultados;
 
}