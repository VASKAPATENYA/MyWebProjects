//Picking Elements

const githubForm = document.getElementById("github-form");
const nameInput = document.getElementById("githubname");
const clearLastUsers = document.getElementById("clear-last-users");
const lastUsers = document.getElementById("last-users");
const github = new Github();
const ui = new UI();

eventListeners();

function eventListeners(){
    githubForm.addEventListener("submit", getData);
    clearLastUsers.addEventListener("click", clearAllSearched);
    document.addEventListener("DOMContentLoaded", getAllSearched);
}


//Get Data
function getData(e){
    let username = nameInput.value.trim();
    if (username === ""){
        alert("PLEASE TYPE A VALID USERNAME!");
    }
    else{
        github.getGithubData(username)
        .then(response =>{
            if (response.user.message === "Not Found"){
                ui.showError("User Not Found")
            }
            else{
                ui.addSearchedUsersToUI();
                Storage.addSearchedUsersToStorage(username);
                ui.showUserInfo(response.user);
                ui.showRepoInfo(response.repo);
            }

        })
        .catch(err => ui.showError(err));
    }
    
    
    ui.clearInput();
    e.preventDefault();
}

//Clear All
function clearAllSearched(e){



    e.preventDefault();
}

//Get Searched
function getAllSearched(e){



    e.preventDefault();
}

