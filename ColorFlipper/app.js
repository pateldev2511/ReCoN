const colors= ["greeen","red","rgba(133,122,200)","#f15025"];
const btn=document.getElementById('btn');
const color=document.querySelector(".color");

btn.addEventListener("click",function()
{
    const randomNumber = getRandomNumber();
    document.body.style.backgroundColor=colors[randomNumber];
    color.textContent = colors[randomNumber];
});

function getRandomNumber(){
    return Math.floor(Math.random() * colors.length);
    /*
    function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
    }*/
}
