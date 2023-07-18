const searchInput=document.getElementById("search-input");

searchInput.addEventListener("keydown", function(event)
{
    if (event.code==="Enter") 
    {
        search();
    }
})

function search()
{
    const input=searchInput.value;
    window.location.href="https://www.google.com/search?q=" + input + "&rlz=1C1YTUH_trTR1023TR1023&oq=" + input + "&aqs=chrome..69i57j46i131i433i512j46i433i512l2j46i131i433j46i512j0i512j0i433i512j46i131i175i199i433j0i271.1432j1j7&sourceid=chrome&ie=UTF-8";
}