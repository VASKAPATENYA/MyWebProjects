function getExternalAPI()
{
    fetch("https://animechan.vercel.app/api/random")
    .then(response => response.json())
    .then(data => console.log(data.quote, data.anime))
    .catch(err => console.error("err"))
}

getExternalAPI()