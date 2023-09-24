let sbody = document.querySelector("body");
let divBody = document.getElementById("main-body");
let tBtn = document.getElementById("toggle-button");
let abtxt = document.getElementById("aboutMeTxt");
let abtxt2 = document.getElementById("aboutMeTxt2");
let abtxt3 = document.getElementById("aboutMeTxt3");
let pSum1 = document.getElementById("p1");
let pSum2 = document.getElementById("p2");
let pSum3 = document.getElementById("p3");
let pSum4 = document.getElementById("p4");
let pdetail = document.getElementById("project-list");
let mobileMenu = document.getElementsByClassName("dropdown")[0];
let headerView = document.getElementsByClassName("header-nav")[0];
let headerName = document.getElementById('header-name');
let navChild1 = document.getElementById('nav1');
let navChild2 = document.getElementById('nav2');
let navChild3 = document.getElementById('nav3');
let navChild4 = document.getElementById('nav4');
let contactF = document.getElementsByClassName('contact');
let mainSection = document.getElementById('section');
let footerSection = document.getElementById('footer');
let headerColor = document.getElementById('header');
let selectElement = document.querySelector("#toggle-button2");
let imageDiv = document.getElementById("about-me-img");
let mySkills = document.getElementById("my-main-skills");
let copyRight = document.getElementById("copy-right");


function changeVieMobileView() {
  document.getElementById("header-nav").classList.add('classHeader-nav');
}

selectElement.addEventListener("change", (e) => {
  const value = e.target.value;

  if (value === "light") {
    
    sbody.style.color = "#000000";
    sbody.style.opacity = null;
    mainSection.style.backgroundImage = "url(/images/img16.avif)";
    headerColor.style.backgroundImage = "url(/images/img15.jpeg)";
    footerSection.style.backgroundImage = "url(/images/img15.jpeg)";
    mySkills.style.backgroundImage = "url(/images/img15.jpeg)";
    pdetail.style.backgroundImage = "none";
    pdetail.style.backgroundImage = "url(/images/img15.jpeg)";
    imageDiv.style.backgroundColor = "transparent";
    abtxt.style.color = "#282C35";
    abtxt2.style.color = "#282C35";
    abtxt3.style.color = "#282C35";
    headerName.style.color = "#011638";
    copyRight.style.color = "#011638";
    navChild1.style.color = "#FFFFFF";
    navChild2.style.color = "#FFFFFF";
    navChild3.style.color = "#FFFFFF";
    navChild4.style.color = "#FFFFFF";
    selectElement.style.color = "#FFFFFF";
    imageDiv.style.backgroundColor = "transparent";
  } else {
    sbody.style.color = "#f4dbd8";
    sbody.style.backgroundColor = "#282C35";
    sbody.style.opacity = "0.8";
    headerColor.style.backgroundImage = "url(/images/img13.jpeg)";
    footerSection.style.backgroundImage = "url(/images/img13.jpeg)";
    mainSection.style.background = "none";
    mainSection.style.backgroundColor = "#282C35";
    mySkills.style.backgroundImage = "url(/images/img13.jpeg)";
    abtxt.style.color = "#f4dbd8";
    abtxt2.style.color = "#f4dbd8";
    abtxt3.style.color = "#f4dbd8";
    headerName.style.color = "#59d2fe";
    navChild1.style.color = "#59d2fe";
    navChild2.style.color = "#59d2fe";
    navChild3.style.color = "#59d2fe";
    navChild4.style.color = "#59d2fe";
    selectElement.style.color = "#59d2fe";
    copyRight.style.color = "#59d2fe";
    navChild1.classList.add("menuClass1");
    navChild2.classList.add("menuClass1");
    navChild3.classList.add("menuClass1");
    navChild4.classList.add("menuClass1");
    pdetail.style.backgroundImage = "url(/images/img13.jpeg)";
    imageDiv.style.backgroundColor = "transparent";
  }
});


const changeView = () => {
  if(headerView.classList.toggle('active')){
    mainSection.style.top = "18.1rem";
    footerSection.style.top = "192rem";
  } else {
    mainSection.style.top = "8rem";
    footerSection.style.top = "182rem";
  }
}


mobileMenu.addEventListener("click", changeView);