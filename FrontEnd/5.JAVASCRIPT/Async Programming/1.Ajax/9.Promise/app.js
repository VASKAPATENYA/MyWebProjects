function getData(data)
{
    return new Promise(function(resolve, reject)
    {
        setTimeout(function()
        {
            if (typeof data==="string")
            {
                //Good
                resolve(data)
            }
            else
            {
                //Bad
                reject(new Error("Please enter a string."))
            }
        },2000)
    })
}

getData("23")
.then(response => console.log("Incoming Value: " + response))
.catch(err => console.error(err))