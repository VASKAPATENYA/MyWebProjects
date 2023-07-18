//Key Press

// document.addEventListener("keypress", run);

// function run(e){
//     // console.log(e.which);
//     console.log(e.key);
//     // console.log("Hey");
// }

//Key Down

// document.addEventListener("keydown", run);

// function run(e){
//     // console.log(e.which);
//     console.log(e.key);
//     // console.log("Hey");
// }

//Key Up

// document.addEventListener("keyup", run);

// function run(e){
//     // console.log(e.which);
//     console.log(e.key);
//     // console.log("Hey");
// }



const header = document.querySelector(".card-header");
const input = document.querySelector("#todo");

input.addEventListener("keyup", changeText);

function changeText(e){
    header.textContent=e.target.value;
    // console.log(e.target.value);
}
