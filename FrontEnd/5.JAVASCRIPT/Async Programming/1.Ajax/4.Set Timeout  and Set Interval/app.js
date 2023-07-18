// Set Timeout

// setTimeout(function(){
//     console.log("Hey")
// },2000);


// Set Interval

let i=0
let value=setInterval(function(){
    console.log("Number: ", i)
    i++
},0);

let a=0
// Clear Interval
document.getElementById("btn").addEventListener("click", function(){
    if (a%2===0)
    {
        document.getElementById("btn").textContent="Start"
        document.getElementById("btn").className="btn btn-success"
        clearInterval(value)
    }
    else
    {
        document.getElementById("btn").textContent="Stop"
        document.getElementById("btn").className="btn btn-danger"
        value=setInterval(function(){
            console.log("Number: ", i)
            i++
        },0);
    }
    a++
});

