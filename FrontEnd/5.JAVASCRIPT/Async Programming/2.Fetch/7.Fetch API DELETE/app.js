class Request
{
    delete(url,data)
    {
        return new Promise((resolve,reject) => {
            fetch("https://jsonplaceholder.typicode.com/albums/1",{
                method:"DELETE",
                body:JSON.stringify(data),
                headers:{
                    "Content-type": "application/json; charset=UTF-8" 
                }
            })
       
        .then(response => response.json())
        .then(data => resolve("Data Deleted"))
        .catch(err => reject("err"))
        })
    }
}


const request=new Request();

request.delete("https://jsonplaceholder.typicode.com/albums/1", {userId:10, title:"Allah"})
.then(newAlbum => console.log(newAlbum))
.catch(err => console.error(err));