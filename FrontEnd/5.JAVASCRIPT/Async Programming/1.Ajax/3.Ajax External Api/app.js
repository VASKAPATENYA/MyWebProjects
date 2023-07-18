document.getElementById("change").addEventListener("click", change);

function change()
{
    const xhr=new XMLHttpRequest();

    xhr.open("GET", "https://animechan.vercel.app/api/random");

    xhr.onload=function(){
        let list= document.getElementById("animes");
        if(this.status==200)
        {
            const responses=JSON.parse(this.responseText)
            console.log(responses)
            // document.getElementById("anime").textContent=responses.anime
        
            list.innerHTML+=`
            <tr>
            <td>${responses.anime}</td>
            <td>${responses.character}</td>
            <td>${responses.quote}</td>
            </tr>`

        }
    }
    
    xhr.send()
}