const formatResponse= async(object)=>{
    if(typeof(object)!=Array){
        console.log(true);

        await fetch(object.url)
            .then(response=>{response.json(); console.log(response)});
    }
}
export default formatResponse