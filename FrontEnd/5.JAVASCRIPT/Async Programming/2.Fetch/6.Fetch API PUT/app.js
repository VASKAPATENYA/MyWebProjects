class Request
{
    put(url,data)
    {
        return new Promise((resolve,reject) => {
            fetch(url,{
                method:"PUT",
                body:JSON.stringify(data),
                headers:{
                    "Content-type": "application/json; charset=UTF-8" 
                }
            })
       
        .then(response => response.json())
        .then(data => resolve(data))
        .catch(err => reject("err"))
        })
    }
}


const request=new Request();

request.put("https://jsonplaceholder.typicode.com/albums/1", {userId:10, title:"Allah"})
.then(newAlbum => console.log(newAlbum))
.catch(err => console.error(err));