const formatResponse= async(data)=>{
    try{
        const dataArray=[];
        data.forEach(async  element=>{
            await fetch(element.url)
                .then(response=> response.json())
                .then(results=> dataArray.push(results));
        });
        setTimeout(2000);
        for(let i=0; i<dataArray.length; i++){
            console.log(dataArray[i]);
        }
        console.log(dataArray);
        
    }catch(e){
        console.log('Undefined Data');
        return;
    }

}
export default formatResponse