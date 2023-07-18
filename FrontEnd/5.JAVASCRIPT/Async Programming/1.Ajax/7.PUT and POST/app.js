class Request
{
    constructor()
    {
        this.xhr=new XMLHttpRequest();
    }
    
    put(url,data,callback)
    {
        this.xhr.open("PUT", url);
        this.xhr.setRequestHeader("Content-type", "application/json", url);

        this.xhr.onload = () =>{
            if (this.xhr.status===200)
            {
                callback(null,this.xhr.responseText);
            }
            else
            {
                callback("Put Request: An error has been occured", null);
            }
        }


        this.xhr.send(JSON.stringify(data))
    }

    post(url,data,callback)
    {
        this.xhr.open("POST", url);
        this.xhr.setRequestHeader("Content-type", "application/json", url);

        this.xhr.onload = () =>{
            if (this.xhr.status===200)
            {
                callback(null,this.xhr.responseText);
            }
            else
            {
                callback("Post Request: An error has been occured", null);
            }
        }


        this.xhr.send(JSON.stringify(data))
    }
}

const request=new Request();
request.put("https://jsonplaceholder.typicode.com/albums/50",{userId:143, title:"Allah"}, function(err,album){
    if(err===null)
    {
        console.log(album)
    }
    else
    {
        console.log(err);
    }
});

// request.post("https://jsonplaceholder.typicode.com/albums/49",{userId:148, title:"Allah"}, function(err,album){
//     if(err===null)
//     {
//         console.log(album)
//     }
//     else
//     {
//         console.log(err);
//     }
// });