/*let landingPage = document.querySelector(".landing-page");

let imgsArray = ["01.jpg","02.jpg","03.jpg"];

setInterval(() => {

let randomNumber = Math.floor(Math.random() * imgsArray.length);

landingPage.style.backgroundImage = 'url("imgs/03.jpg")';

},1000 )*/

let manuBtn = document.getElementById("manuBtn")
let sideNav = document.getElementById("sideNav")
let menu = document.getElementById("menu")

sideNav.style.right = "-250px";

manuBtn.onclick = function(){
    if(sideNav.style.right == "-250px"){
        sideNav.style.right = "0";
        menu.src = "close.png";
    }
    else{
        sideNav.style.right = "-250px";
        menu.src = "menu.png";
    }
}




