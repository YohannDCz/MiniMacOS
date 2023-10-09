const isVisible = elem => !!elem && !!(elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length);

function hideOnClickOutside(element) {
  const outsideClickListener = event => {
    if (!element.contains(event.target) && isVisible(element)) {
      element.querySelector(".box.active").className = 'box';
      element.querySelector(".container.active").className = 'container';
      for (let k = 0; k < boxes.length; k++) {
        boxes[k].onmouseover = null;
      }
      removeClickListener();
    }
  }
  const removeClickListener = () => {
    document.removeEventListener('click', outsideClickListener);
  }
  document.addEventListener('click', outsideClickListener);
}


let boxes = document.querySelectorAll(".box");
let tab = document.querySelectorAll(".tab")

for (let i = 0; i < boxes.length; i++) {
  boxes[i].onclick = function () {
    switch (boxes[i].className) {
      case "box":
        let h = 0;
        while (h < boxes.length) {
          boxes[h].className = "box";
          boxes[h++].nextElementSibling.className = "container"
        }
        boxes[i].className = "box active";
        boxes[i].nextElementSibling.className = "container active";


        for (let k = 0; k < boxes.length; k++) {
          boxes[k].onmouseover = function () {
            let h = 0;
            while (h < boxes.length) {
              boxes[h].className = "box";
              boxes[h++].nextElementSibling.className = "container";
            }
            boxes[k].className = "box active";
            boxes[k].nextElementSibling.className = "container active";
            hideOnClickOutside(tab[k]);
          }
          hideOnClickOutside(tab[i]);
        }
        break;
      case "box active":
        let j = 0;
        while (j < boxes.length) {
          boxes[j].className = "box";
          boxes[j++].nextElementSibling.className = "container";
        }
        boxes[i].className = "box";
        boxes[i].nextElementSibling.className = "container";

        for (let k = 0; k < boxes.length; k++) {
          boxes[k].onmouseover = null;
        }
        break;
    }
  }
}

let enabled = document.querySelectorAll(".enabled");
for (let y = 0; y < enabled.length; y++) {
  enabled[y].onmouseenter = function () {
    let z = 0;
    while (z < enabled.length) {
      enabled[z++].style.backgroundColor = "transparent";
    }
    enabled[y].style.backgroundColor = "rgba(0,136,255,0.5)";
  };
  enabled[y].onmouseleave = function () {
    enabled[y].style.backgroundColor = "transparent";
  }
}