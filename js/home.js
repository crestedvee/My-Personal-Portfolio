let sbody = document.querySelector("body");
let tBtn = document.getElementById("toggle-button");
let abtxt = document.getElementById("aboutMeTxt");
let abtxt2 = document.getElementById("aboutMeTxt2");
let abtxt3 = document.getElementById("aboutMeTxt3");
let pSum1 = document.getElementById("p1");
let pSum2 = document.getElementById("p2");
let pSum3 = document.getElementById("p3");
let pSum4 = document.getElementById("p4");
let pdetail = document.getElementsByClassName("project-detail");



let changeMode = () => {
  if(tBtn.innerHTML === "Dark Mode"){
    sbody.style.backgroundColor = "black"
    sbody.style.color = "white"
    sbody.style.opacity = 0.7;
    tBtn.innerHTML = "Light Mode";
    abtxt.style.color = "white";
    abtxt2.style.color = "white";
    abtxt3.style.color = "white";

    pdetail.style.backgroundColor = "white";
  }else {
    sbody.style.backgroundColor = "white"
    sbody.style.color = "black"
    sbody.style.opacity = null;
    tBtn.innerHTML = "Dark Mode"
    abtxt.style.color = "#282C35";
    abtxt2.style.color = "#282C35";
    abtxt3.style.color = "#282C35";

  }
}

tBtn.addEventListener("click", changeMode);