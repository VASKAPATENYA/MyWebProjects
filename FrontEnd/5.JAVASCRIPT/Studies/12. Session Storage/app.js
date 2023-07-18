//Selecting the Buttons

const add =document.querySelector("#add");
const del =document.querySelector("#delete");
const clear =document.querySelector("#clear");


//Selecting the Inputs

const addkey =document.querySelector("#addkey");
const addvalue =document.querySelector("#addvalue");
const deletekey =document.querySelector("#deletekey");

//Events

add.addEventListener("click", additem);
del.addEventListener("click", deleteitem);
clear.addEventListener("click", clearitem);

//Functions

function additem(e) 
{
    sessionStorage.setItem(addkey.value, addvalue.value);
}

function deleteitem(e) 
{
    sessionStorage.removeItem(deletekey.value);
}

function clearitem(e) 
{
sessionStorage.clear();
}