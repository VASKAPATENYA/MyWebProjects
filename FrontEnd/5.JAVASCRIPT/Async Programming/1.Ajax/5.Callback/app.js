function process1(callback)
{
    setTimeout (function(){
        console.log("hey")
        callback()
    }, 2000);
}

function process2()
{
    setTimeout (function(){
        console.log("heyyyyyy")
    }, 1000);
}

process1(process2)