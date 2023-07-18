const form = document.getElementById("film-form");
const titleElement = document.querySelector("#title")
const directorElement = document.querySelector("#director")
const urlElement = document.querySelector("#url")
const cardBody = document.querySelectorAll(".card-body")[1];
const clear = document.querySelector("#clear-films")


//Loading All the Events

eventListeners();


function eventListeners()
{
    form.addEventListener("submit", addFilm);
    document.addEventListener("DOMContentLoaded", function()
    {
        let films= Storage.getFilmsFromStorage();
        UI.loadAllFilms(films);
    });

    cardBody.addEventListener("click", deleteFilm);
    clear.addEventListener("click", deleteAllFilms);
}

function addFilm(e)
{
    const title=titleElement.value;
    const director=directorElement.value;
    const url=urlElement.value;


    if (title==="" || director==="" || url ==="")
    {
        //Hata
        UI.displayMessages("Fill All The Blanks", "danger")
    }
    else
    {
        //New Film
        const newFilm = new Film(title, director, url);

        UI.addFilmToUI(newFilm);//Adding Films to UI
        Storage.addFilmToStorage(newFilm);//Adding Films to Storage
        UI.displayMessages("The Movie Was Added Successfully!", "success")

    }

    UI.clearInputs(titleElement, directorElement, urlElement);
    e.preventDefault();
}


function deleteFilm(e)
{
    if (e.target.id==="delete-film")
    {
        UI.deleteFilmFromUI(e.target)
        Storage.deleteFilmFromStorage(e.target.parentElement.previousElementSibling.previousElementSibling.textContent);
        UI.displayMessages("The Film Was Succesfully Deleted!", "success")
    }
}

function deleteAllFilms()
{
    if(confirm("Are You Sure You Want to Delete All Films?"))
    {
        UI.deleteAllFilmsFromUI();
        Storage.deleteAllFilmsFromStorage();
        UI.displayMessages("The Film Was Succesfully Deleted!", "success")    
    }
}