class Request
{
    async get(url)
    {
        const response=await fetch(url);

        const data=await response.json();

        return data
    }
}


const request=new Request();
let albums;


request.get("https://jsonplaceholder.typicode.com/albums")
.then(albums => console.log(albums))
.catch(err => console.error(err));