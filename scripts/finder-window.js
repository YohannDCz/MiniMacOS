let list = document.querySelectorAll(".list");
for (let i = 0; i < list.length; i++) {
  list[i].onclick = function () {
    let j = 0;
    while (j < list.length) {
      list[j++].className = "list";
    }
    list[i].className = "list active";
  };
}

let section = document.getElementById("finder-section");
let folders = document.querySelectorAll(".folder");
for (let i = 0; i < folders.length; i++) {
  folders[i].onclick = function () {
    let j = 0;
    while (j < folders.length) {
      folders[j++].className = "folder";
    }
    folders[i].className = "folder active";
    section.onclick = function () {
      folders[i].className = "folder";
    }
  }
}


let section1 = document.querySelector("section");
let header = document.getElementById("header");
if (section1.scrollTop == 0) {
  header.style.boxShadow = "none";
  header.style.clipPath = "none";
} else {
  header.style.boxShadow = "0px 0px 3px rgba(140, 140, 140, 0.75)";
  header.style.clipPath = "inset(0px 0px -15px 0px)";
}