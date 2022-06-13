const CallApi=async(b)=>{
    const datos=fetch(`https://pokeapi.co/api/v2/pokemon/${b}`)
        .then(response=>response.json());
    return datos;
}

export default CallApi;