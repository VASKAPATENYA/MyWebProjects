let element;

//Selecting Elements by ID
element=document.getElementById("todo-form");
element=document.getElementById("tasks-title");

//Selecting Elements by Class
element=document.getElementsByClassName("list-group-item")[0];

//Selecting Elements by Tag
element=document.getElementsByTagName("a")[0];


//Selecting Elements by QuerySelector(Selecting Only One Element)
element=document.querySelector("li");
element=document.querySelector("#todo-form");
element=document.querySelector(".list-group-item");

//Selecting Elements by QuerySelectorAll
element=document.querySelectorAll("li");
element=document.querySelectorAll("#todo-form");
element=document.querySelectorAll(".list-group-item");

element.forEach(function(el)
{
    console.log(el);
}
);


// console.log(element);