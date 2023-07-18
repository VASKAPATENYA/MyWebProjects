//Selecting All Elements

const form=document.querySelector("#todo-form");
const todoInput=document.querySelector("#todo");
const todoList=document.querySelector(".list-group");
const firstCardBody=document.querySelectorAll(".card-body")[0];
const secondCardBody=document.querySelectorAll(".card-body")[1];
const filter=document.querySelector("#filter");
const clearButton=document.querySelector("#clear-todos");

//Events

eventlistener();

function eventlistener() 
{    
    form.addEventListener("submit", addToDo);
    document.addEventListener("DOMContentLoaded", loadAllToDosToUI);
    secondCardBody.addEventListener("click", deleteTodo);
    filter.addEventListener("keyup",filterTodos);
    clearButton.addEventListener("click", clearAllTodos);
}

//**************************************************************************** */
//Funcitons

function addToDo(e)
{
    const newToDo=todoInput.value.trim();
    if (newToDo==="") {
        showAlert("danger", "Please type something in!");
    }
    else{
        addToDoToUI(newToDo);
        addToDoToStorage(newToDo);
        showAlert("success", "ToDo Added Successfully!");
    }


    e.preventDefault();
}

function getToDosFromStorage()
{
    let todos;
    if (localStorage.getItem("todos") === null)
    {
        todos=[];
    }
    else
    {
        todos=JSON.parse(localStorage.getItem("todos"));
    }
    return todos;
}

function addToDoToStorage(newToDo) 
{
    let todos=getToDosFromStorage();
    todos.push(newToDo);
    localStorage.setItem("todos", JSON.stringify(todos));
}

function showAlert(type, message) {
    const alert=document.createElement("div");

    alert.className=`alert alert-${type}`;
    alert.textContent=message;
    firstCardBody.appendChild(alert);


    setTimeout(function(){
        alert.remove();
    },2000);
}

function addToDoToUI(newToDo) 
{
    //Creating List Item
    const listItem=document.createElement("li");
    listItem.className="list-group-item d-flex justify-content-between";

    //Creating Link Item
    const link=document.createElement("a");
    link.href="#";
    link.className="delete-item";
    link.innerHTML="<i class = 'fa fa-remove'></i>";

    //Adding Text Node
    listItem.appendChild(document.createTextNode(newToDo));
    listItem.appendChild(link);

    //Adding The List Item To ToDo List
    todoList.appendChild(listItem);
    todoInput.value="";
}

function loadAllToDosToUI() 
{
    let todos=getToDosFromStorage();
    todos.forEach(function(todo)
    {
        addToDoToUI(todo);
    });    
}

function deleteTodo(e) 
{
    if(e.target.className==="fa fa-remove")
    {
        e.target.parentElement.parentElement.remove();
        deleteTodoFromStorage(e.target.parentElement.parentElement.textContent)
        showAlert("success", "Your ToDo was successfully removed!");
    }
}

function deleteTodoFromStorage(deletetodo) 
{
    let todos=getToDosFromStorage();
    todos.forEach(function(todo, index)
    {
        if(todo===deletetodo)
        {
            todos.splice(index,1);
        }
    });
    localStorage.setItem("todos", JSON.stringify(todos));
}

function filterTodos(e) 
{
    const filterValue=e.target.value.toLowerCase();
    const listItems=document.querySelectorAll(".list-group-item");

    listItems.forEach(function(listItem)
    {
        const text =listItem.textContent.toLocaleLowerCase();
        if (text.indexOf(filterValue)===-1)
        {
            listItem.setAttribute("style", "display : none !important");
        }
        else
        {
            listItem.setAttribute("style", "display : block");
        }
    });
}

function clearAllTodos()
{
    const listItems=document.querySelectorAll(".list-group-item");
    if(confirm("Do you want to delete all?"))
    {
        // todoList.innerHTML="";

        while (todoList.firstElementChild!=null) {
            todoList.firstElementChild.remove();
            // todoList.remove(todoList.firstElementChild);
        }
    }
    // localStorage.clear();
    localStorage.removeItem("todos");
    showAlert("success", "All todos have been deleted!");
}