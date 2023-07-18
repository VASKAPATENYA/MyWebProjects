//Set Item

localStorage.setItem("Adana", "01")
localStorage.setItem("Muğla", "48")
localStorage.setItem("İstanbul", "34")


//Arrays

// const todos=["Todo 1", "Todo 2", "Todo 3"]

// localStorage.setItem("todos", JSON.stringify(todos))

// const value=JSON.parse(localStorage.getItem("todos"))

// console.log(value)

const form=document.getElementById("todo-form");
const todoInput=document.getElementById("todo");

form.addEventListener("submit", addToDo);

function addToDo(e) 
{
    const value=todoInput.value;
    let todos;

    if (localStorage.getItem("todos")===null) {
        todos=[]
    }
    else
    {
        todos=JSON.parse(localStorage.getItem("todos"));
    }

    todos.push(value);

    localStorage.setItem("todos", JSON.stringify(todos));

    e.preventDefault();

}