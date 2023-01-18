const isVisible = elem => !!elem && !!(elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length);

function hideOnClickOutside(element) {
  const outsideClickListener = event => {
    if (!element.contains(event.target) && isVisible(element)) {
      element.querySelector(".box.active").className = 'box';
      element.querySelector(".container.active").className = 'container';
      for (let k = 0; k < list.length; k++) {
        list[k].onmouseover = null;
      }
      removeClickListener();
    }
  }
  const removeClickListener = () => {
    document.removeEventListener('click', outsideClickListener);
  }
  document.addEventListener('click', outsideClickListener);
}


let list = document.querySelectorAll(".box");
let tab = document.querySelectorAll(".tab")

for (let i = 0; i < list.length; i++) {
  list[i].onclick = function () {
    switch (list[i].className) {
      case "box":
        let h = 0;
        while (h < list.length) {
          list[h].className = "box";
          list[h++].nextElementSibling.className = "container"
        }
        list[i].className = "box active";
        list[i].nextElementSibling.className = "container active";


        for (let k = 0; k < list.length; k++) {
          list[k].onmouseover = function () {
            let h = 0;
            while (h < list.length) {
              list[h].className = "box";
              list[h++].nextElementSibling.className = "container";
            }
            list[k].className = "box active";
            list[k].nextElementSibling.className = "container active";
            hideOnClickOutside(tab[k]);
          }
          hideOnClickOutside(tab[i]);
        }
        break;
      case "box active":
        let j = 0;
        while (j < list.length) {
          list[j].className = "box";
          list[j++].nextElementSibling.className = "container";
        }
        list[i].className = "box";
        list[i].nextElementSibling.className = "container";

        for (let k = 0; k < list.length; k++) {
          list[k].onmouseover = null;
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
    enabled[y].style.backgroundColor = "rgba(49, 104, 198, 0.5)";
  };
  enabled[y].onmouseleave = function () {
    enabled[y].style.backgroundColor = "transparent";
  }
}