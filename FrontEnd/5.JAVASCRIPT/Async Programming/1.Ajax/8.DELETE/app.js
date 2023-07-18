class Request
{
    constructor()
    {
        this.xhr=new XMLHttpRequest();
    }
    
    delete(url,callback)
    {
        this.xhr.open("DELETE", url);

        this.xhr.onload = () =>{
            if (this.xhr.status===200)
            {
                callback(null,"Data Deleted");
            }
            else
            {
                callback("DELETE REQUEST: An error has been occured", null);
            }
        }


        this.xhr.send()
    }
}

const request=new Request();
request.delete("https://jsonplaceholder.typicode.com/albums/1", function(err,response){
    if(err===null)
    {
        console.log(response)
    }
    else
    {
        console.log(err);
    }
});