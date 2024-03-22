let div = document.querySelector(".h1");
let strText = div.textContent;
div.textContent="";
let splitText = strText.split("")
console.log(splitText)
for(let i = 0; i< splitText.length;i++){
    div.innerHTML += "<span>" + splitText[i] + "</span>"
}

let char=0;
let timer = setInterval(onTick, 50);

function onTick(){
    const span = div.querySelectorAll('span')[char];
    span.classList.add('type');
    char++
    if(char === splitText.length)
    {
        complete();
        return;
    }
}
function complete(){
    clearInterval(timer)
    timer = null;
}


var typed = new Typed(".type",{
strings: ["Freelancer","WebDev..","Programer!","Designer","Gamer"],
typeSpeed: 120,
backSpeed: 100,
loop: true
})
