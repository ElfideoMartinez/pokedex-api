const formatResponse= async(object)=>{
    let datos=[];
    if(typeof(object)!=Array){
        console.log(true);
        const {results} =object;

        results.forEach(async (element,index)=>{
            const {url}=element;
            datos[index]= await fetch(url)
                .then(response=>response.json());
        });


        }
    console.log(datos[0]);

}
export default formatResponse