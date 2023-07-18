const filterInput=document.getElementById("filter")
const todoForm=document.getElementById("todo-form")

todoForm.addEventListener("submit", submitForm);

function submitForm(e) 
{
    console.log("Hey");



    e.preventDefault();
}


// filterInput.addEventListener("focus", function (e){
//     console.log(e)
//     console.log(e.type)
//     console.log(e.target.placeholder)
//     // console.log("Hey")
// });



//  filterInput.onfocus=function()
//  {
//     console.log("Hey")
//  }