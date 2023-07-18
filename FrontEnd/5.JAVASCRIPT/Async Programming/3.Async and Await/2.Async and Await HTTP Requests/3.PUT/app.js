class Request
{
    async put(url,data)
    {
        const response = await fetch(url,{
            method:"PUT",
            body:JSON.stringify(data),
            headers:{
                "Content-type": "application/json; charset=UTF-8" 
            }
        });

        const data = await response.json();

        return data
    }
}


const request=new Request();

request.put("https://jsonplaceholder.typicode.com/albums/1", {userId:10, title:"Allah"})
.then(newAlbum => console.log(newAlbum))
.catch(err => console.error(err));