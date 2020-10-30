const reviews = [
    {
        id:1,
        name:'ReC0N',
        job:'Ethical Hacker',
        img:'pic1.jpg',
        text:'I have XP:2000 in Hacking :)'
    },
    {
        id:2,
        name:'Ax3L',
        job:'Cyber Security Expert',
        img:'pic2.jpg',
        text:'I have XP:3000 in Cyber Security :)'
    },
    {
        id:3,
        name:'BlAz3',
        job:'Cloud Engineer',
        img:'pic3.jpg',
        text:'I have XP:4000 in Cloud Computing :)'
    },
    {
        id:4,
        name:'Oz3X',
        job:'Web Developer',
        img:'pic4.png',
        text:'I have XP:5000 in Web Developement :)'
    }
]

//Select Image:

const img=document.getElementById('person-img');

const author=document.getElementById('author');

const job=document.getElementById('job');

const info=document.getElementById('info');


//Select Buttons:

const prevBtn=document.querySelector('.prev-btn');

const nextBtn=document.querySelector('.next-btn');

const randomBtn=document.querySelector('.random-btn');

//Set the Starting Items:

let currentItem = 0;

//Loading Initial Items:
window.addEventListener('DOMContentLoaded',function()
{
    const item = reviews[0];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text; 
})

//Show Persone Based on the Items:

function showPerson(person)
{
    const item = reviews[person];
    img.src = item.img;
    author.textContent = item.job;
    info.textContent = item.text;
}


//Show Next Persone

nextBtn.addEventListener('click',function()
{
    currentItem++;
    if(currentItem>reviews.length-1)
    {
        currentItem = 0;
    }
    showPerson(currentItem);
})

//Show Pervious Person

prevBtn.addEventListener('click',function()
{
    currentItem--;
    if(currentItem < 0)
    {
        currentItem = reviews.length-1;
    }
    showPerson(currentItem);
})

//Rendome Persone

randomBtn.addEventListener('click',function()
{
    currentItem = Math.floor(Math.random() * reviews.length);
    showPerson(currentItem);
})