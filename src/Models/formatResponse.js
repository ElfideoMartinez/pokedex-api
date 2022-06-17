const formatResponse= async(data)=>{
    try{
        const dataArray=[];
        data.forEach(async  element=>{
            await fetch(element.url)
                .then(response=> response.json())
                .then(results=> dataArray.push(results));
        });
        
    }catch(e){
        console.log('Undefined Data');
        return undefined;
    }

}
export default formatResponse