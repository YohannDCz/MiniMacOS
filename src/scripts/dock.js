let icons = document.querySelectorAll(".ico");
let length = icons.length;

icons.forEach((item, index) => {
 item.addEventListener("mouseover", (e) => {
  focus(e.target, index);
 });
 item.addEventListener("mouseleave", (e) => {
  icons.forEach((item) => {
   item.style.transform = "scale(1)  translateY(0px)";
  });
 });
});

const focus = (elem, index) => {
 let previous = index - 1;
 let previous1 = index - 2;
 let next = index + 1;
 let next2 = index + 2;

 if (previous === -1) {
  elem.style.transform = "scale(1.25)  translateY(-15px)";
  icons[next].style.transform = "scale(1.2) translateY(-9px)";
  icons[next2].style.transform = "scale(1.15) translateY(-3px)";
 } else if (next === length) {
  elem.style.transform = "scale(1.25)  translateY(-15px)";
  icons[previous].style.transform = "scale(1.2) translateY(-9px)";
  icons[previous1].style.transform = "scale(1.15) translateY(-3px)";
 } else if (previous === 0) {
  elem.style.transform = "scale(1.25)  translateY(-15px)";
  icons[previous].style.transform = "scale(1.2) translateY(-9px)";
  icons[next].style.transform = "scale(1.2) translateY(-9px)";
  icons[next2].style.transform = "scale(1.15) translateY(-3px)";
 } else {
  elem.style.transform = "scale(1.25)  translateY(-15px)";
  icons[previous].style.transform = "scale(1.2) translateY(-9px)";
  icons[previous1].style.transform = "scale(1.15) translateY(-3px)";
  icons[next].style.transform = "scale(1.2) translateY(-9px)";
  icons[next2].style.transform = "scale(1.15) translateY(-3px)";
 }
};
``