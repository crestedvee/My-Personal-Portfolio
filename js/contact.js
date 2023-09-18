let sbody = document.querySelector("body");
let tBtn = document.getElementById("toggle-button");
let fTitle = document.getElementById("h2-contact")
let cForm = document.getElementById("main-form");
let submitBtn = document.getElementById("btn-submit");
let lab1 = document.getElementById("l1");
let lab2 = document.getElementById("l2");
let lab3 = document.getElementById("l3");
let lab4 = document.getElementById("l4");
let hr1 = document.getElementById("line");
let mobileMenu = document.getElementById("dropdown");
let headerView = document.getElementById("header-nav");
let barBtn = document.getElementById("bar");
let barBtn2 = document.getElementById("bar2");
let barBtn3 = document.getElementById("bar3");


let changeMode = () => {
  if(tBtn.innerHTML === "Dark Mode"){
    sbody.style.backgroundColor = "black"
    sbody.style.color = "white"
    sbody.style.opacity = 0.7;
    tBtn.innerHTML = "Light Mode";
    fTitle.style.color = "white";
    cForm.style.backgroundColor = "#FFFFFF";
    submitBtn.style.backgroundColor = "#0892d0";
    submitBtn.classList.add('HoverClass1');
    submitBtn.style.color = "white";
    lab1.style.color = "#282C35";
    lab2.style.color = "#282C35";
    lab3.style.color = "#282C35";
    lab4.style.color = "#282C35";
    hr1.classList.add("changeClass1");
    hr1.classList.add("changeClass2");
  }else {
    sbody.style.backgroundColor = "white"
    sbody.style.color = "black"
    sbody.style.opacity = null;
    tBtn.innerHTML = "Dark Mode"
    fTitle.style.color = "black";
    fTitle.style.color = "white";
    cForm.style.backgroundColor = "#FFFFFF";
    submitBtn.style.backgroundColor= "#0892d0";
    submitBtn.style.Color= "#FFFFFF";
    fTitle.style.color = "#282C35";
  }
}

function changeVieMobileView(){
  document.getElementById("header-nav").classList.add('classHeader-nav');
}

const changeView = () => {
  document.getElementById("header-nav").classList.add("classHeader-nav");
}

tBtn.addEventListener("click", changeMode);
mobileMenu.addEventListener("click", changeView);
barBtn.addEventListener("click", changeView);
barBtn2.addEventListener("click", changeView);
barBtn3.addEventListener("click", changeView);
mobileMenu.onmouseenter = changeVieMobileView;