class Request
{
    async delete(url,data)
    {
        const response = await fetch("https://animechan.vercel.app/api/random",{
            method:"DELETE"
        });

        return "Element has been deleted."
    }
}


const request=new Request();

request.delete("https://jsonplaceholder.typicode.com/albums/1", {userId:10, title:"Allah"})
.then(newAlbum => console.log(newAlbum))
.catch(err => console.error(err));