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
let mobileMenu = document.getElementsByClassName("dropdown")[0];
let headerView = document.getElementsByClassName("header-nav")[0];
let contactF = document.getElementsByClassName('contact');
let headerName = document.getElementById('header-name');
let navChild1 = document.getElementById('nav1');
let navChild2 = document.getElementById('nav2');
let navChild3 = document.getElementById('nav3');
let contactSection = document.getElementById('contact');
let footerSection = document.getElementById('footer');
let selectElement = document.querySelector("#toggle-button2");
let headerSec = document.getElementById("header");
let copyRight = document.getElementById("copy-right");
let input1 = document.getElementById("username");
let input2 = document.getElementById("email");
let input3 = document.getElementById("num");
let input4 = document.getElementById("msg");
let contactDiv = document.getElementById("contact-div");
let contactNum = document.getElementById("fnum");
let contactMail = document.getElementById("fmail");
let contactAdd = document.getElementById("fadd");

function changeVieMobileView() {
  document.getElementById("header-nav").classList.add('classHeader-nav');
}

const changeView = () => {
  if (headerView.classList.toggle('active')) {
    contactSection.style.top = "16.1rem";
    footerSection.style.top = "73rem";
  } else {
    contactSection.style.top = "8rem";
    footerSection.style.top = "65rem";
  }
}

selectElement.addEventListener("change", (e) => {
  const value = e.target.value;

  if (value === "light") {
      sbody.style.backgroundColor = "white";
      sbody.style.color = "black";
      sbody.style.opacity = null;
      headerSec.style.backgroundImage = "url(/images/img15.jpeg)";
      footerSection.style.backgroundImage = "url(/images/img15.jpeg)";
      contactSection.style.backgroundImage = "url(/images/img16.avif)";
      fTitle.style.color = "#282C35";
      headerName.style.color = "#011638";
      navChild1.style.color = "#FFFFFF";
      navChild2.style.color = "#FFFFFF";
      navChild3.style.color = "#FFFFFF";
      cForm.style.backgroundImage = "none";
      cForm.style.backgroundColor = "ffffff";
      contactDiv.style.background = "none";
      contactDiv.style.backgroundColor = "#ffffff";
      lab1.style.color = "#282C35";
      lab2.style.color = "#282C35";
      lab3.style.color = "#282C35";
      lab4.style.color = "#282C35";
      input1.style.backgroundColor = "#FFFFFF";
      input2.style.backgroundColor = "#FFFFFF";
      input3.style.backgroundColor = "#FFFFFF";
      input4.style.backgroundColor = "#FFFFFF";
      copyRight.style.color = "#FFFFFF";
      submitBtn.style.backgroundColor = "#0892d0";
      submitBtn.style.Color = "#FFFFFF";

  } else {
    sbody.style.color = "#f4dbd8";
    sbody.style.backgroundColor = "#282C35";
    sbody.style.opacity = "0.8";
    headerSec.style.backgroundImage = "url(/images/img13.jpeg)";
    footerSection.style.backgroundImage = "url(/images/img13.jpeg)";
    contactSection.style.background = "none";
    contactSection.style.backgroundColor = "#282C35";
    fTitle.style.color = "#f4dbd8";
    cForm.style.backgroundImage = "url(/images/img13.jpeg)";
    submitBtn.style.backgroundColor = "#0892d0";
    submitBtn.classList.add('HoverClass2');
    submitBtn.style.color = "white";
    lab1.style.color = "#f4dbd8";
    lab2.style.color = "#f4dbd8";
    lab3.style.color = "#f4dbd8";
    lab4.style.color = "#f4dbd8";
    input1.style.backgroundColor = "#f4dbd8";
    input2.style.backgroundColor = "#f4dbd8";
    input3.style.backgroundColor = "#f4dbd8";
    input4.style.backgroundColor = "#f4dbd8";
    contactDiv.style.backgroundColor = "#f4dbd8";
    headerName.style.color = "#59d2fe";
    navChild1.style.color = "#59d2fe";
    navChild2.style.color = "#59d2fe";
    navChild3.style.color = "#59d2fe";
    selectElement.style.color = "#59d2fe";
    navChild1.classList.add("menuClass1");
    navChild2.classList.add("menuClass1");
    navChild3.classList.add("menuClass1");
    hr1.classList.add("changeClass1");
    hr1.classList.add("changeClass2");
    copyRight.style.color = "#59d2fe";
    contactNum.style.color = "#282C35";
    contactMail.style.color = "#282C35";
    contactAdd.style.color = "#282C35";
  }
});

mobileMenu.addEventListener("click", changeView);