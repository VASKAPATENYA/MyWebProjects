const todolist=document.querySelector("ul.list-group");
const todos =document.querySelectorAll("li.list-group-item");

// todos[1].remove();

todolist.removeChild(todolist.lastElementChild);