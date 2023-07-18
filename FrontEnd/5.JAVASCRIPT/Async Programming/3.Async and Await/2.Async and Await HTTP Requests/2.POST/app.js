class Request
{
    async post(url,data)
    {
        const response = await fetch(url,{
            method:"POST",
            body:JSON.stringify(data),
            headers:{"Content-type": "application/json; charset=UTF-8"}
        });

        const data = await response.json();
        
        return data;
    }
}


const request=new Request();

request.post("https://jsonplaceholder.typicode.com/albums", {userId:2, title:"Thriller"})
.then(newAlbum => console.log(newAlbum))
.catch(err => console.error(err));