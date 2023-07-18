
// Old Way
// function test(data)
// {
//     return new Promise((resolve) =>{
//         resolve(data)
//     });
// }



// Asny
// async function test (data)
// {
//     return data
// }

// Await
// async function test (data)
// {
//     let promise = new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (typeof data === "string")
//             {
//                 resolve(data)
//             }
//             else{
//                 reject(new Error("Please enter a string!"))
//             }
//         },2000)
//     })
//     const response = await promise
//     return response
// }

// test("Heyy")
// .then(data => console.log(data))
// .catch(err=> console.error(err));


// With Fetch
async function test(url)
{
    const response=await fetch(url);

    const data = await response.json();

    console.log(data);
}

test("https://animechan.vercel.app/api/random")
.then(a=>console.log(a));