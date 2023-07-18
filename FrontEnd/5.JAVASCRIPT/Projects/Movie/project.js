const form = document.getElementById("film-form");
const titleElement = document.querySelector("#title")
const directorElement = document.querySelector("#director")
const urlElement = document.querySelector("#url")
const cardBody = document.querySelectorAll(".card-body")[1];
const clear = document.querySelector("#clear-films")


//Starting the UI Object
const ui = new UI();

//Starting the UI Object
const storage = new Storage();


//Loading All the Events

eventListeners();


function eventListeners()
{
    form.addEventListener("submit", addFilm);
    document.addEventListener("DOMContentLoaded", function()
    {
        let films= storage.getFilmsFromStorage();
        ui.loadAllFilms(films);
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
        ui.displayMessages("Fill All The Blanks", "danger")
    }
    else
    {
        //New Film
        const newFilm = new Film(title, director, url);

        ui.addFilmToUI(newFilm);//Adding Films to UI
        storage.addFilmToStorage(newFilm);//Adding Films to Storage
        ui.displayMessages("The Movie Was Added Successfully!", "success")

    }

    ui.clearInputs(titleElement, directorElement, urlElement);
    e.preventDefault();
}


function deleteFilm(e)
{
    if (e.target.id==="delete-film")
    {
        ui.deleteFilmFromUI(e.target)
        storage.deleteFilmFromStorage(e.target.parentElement.previousElementSibling.previousElementSibling.textContent);
        ui.displayMessages("The Film Was Succesfully Deleted!", "success")
    }
}

function deleteAllFilms()
{
    if(confirm("Are You Sure You Want to Delete All Films?"))
    {
        ui.deleteAllFilmsFromUI();
        storage.deleteAllFilmsFromStorage();
        ui.displayMessages("The Film Was Succesfully Deleted!", "success")    
    }
}