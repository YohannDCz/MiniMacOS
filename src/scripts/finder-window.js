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