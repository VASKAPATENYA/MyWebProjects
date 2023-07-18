const btn = document.getElementById("menu-btn")
const overlay=document.getElementById("overlay")
const menu=document.getElementById("mobil-menu")
const counters=document.querySelectorAll(".counter")
let scrollStarted=false


btn.addEventListener("click", navToggle);
document.addEventListener("scroll", scrollPage)

function navToggle()
{
    btn.classList.toggle('open');
    overlay.classList.toggle('overlay-show');
    document.body.classList.toggle('stop-scrolling');
    menu.classList.toggle('show-menu');
}

function scrollPage()
{
    const scrollPos=window.scrollY;
    if (scrollPos > 70 && !scrollStarted)
    {
        countUp();
        scrollStarted=true;
    }
    else if(scrollPos < 70 && scrollStarted)
    {
        reset();
        scrollStarted=false;
    }
}

function countUp()
{
    counters.forEach((counter) =>{
        counter.innerHTML='0';
        const updateCounter= () =>{
            //Gets the counter target
            const target = +counter.getAttribute('data-target')
            //Gets the current value
            const c=+counter.innerText;

            //Creates an increment
            const increment = target / 100;

            if (c<target)
            {
                //Round up and set counter value
                counter.innerText=`${Math.ceil(c+increment)}`;
                if(counter.getAttribute('data-target')>100)
                {
                    setTimeout(updateCounter, 10);
                }
                else if(counter.getAttribute('data-target')<100 && counter.getAttribute('data-target')>20)
                {
                    setTimeout(updateCounter, 35);
                }
                else if(counter.getAttribute('data-target')<20)
                {
                    setTimeout(updateCounter, 150);
                }
            }
            else
            {
                counter.innerText=target
            }
        }
        updateCounter()
    });
}

function reset()
{
    counters.forEach((counter) => (counter.innerHTML="0"));
}