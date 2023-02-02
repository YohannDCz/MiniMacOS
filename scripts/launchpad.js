const iframeLaunchpad = document.getElementById('iframeLaunchpad');
const launchpad = document.getElementById('launchpad');
const header = document.querySelector(".navbar");
launchpad.onclick = function () {
  if (iframeLaunchpad.style.visibility === "hidden") {
    header.style.display = "none"
    iframeLaunchpad.style.zIndex = 910;
    iframeLaunchpad.style.transform = "scale(1)";
    iframeLaunchpad.style.backdropFilter = "blur(20px)";
    iframeLaunchpad.style.opacity = 1;
    iframeLaunchpad.style.visibility = "visible";
    iframeLaunchpad.style.transition = "all 0.2s";
  } else if (iframeLaunchpad.style.visibility === "visible") {
    header.style.display = "flex";
    iframeLaunchpad.style.zIndex = 0;
    iframeLaunchpad.style.transform = "scale(1.2)";
    iframeLaunchpad.style.backdropFilter = "blur(0px)";
    iframeLaunchpad.style.opacity = 0;
    iframeLaunchpad.style.visibility = "hidden";
    iframeLaunchpad.style.transition = "all 0.2s";
  }
}

const background = iframeLaunchpad.contentWindow.document.getElementById('exit');
background.onclick = function () {
  iframeLaunchpad.style.zIndex = 100;
  iframeLaunchpad.style.transform = "scale(1.2)";
  iframeLaunchpad.style.backdropFilter = "blur(0px)";
  iframeLaunchpad.style.opacity = 0;
  iframeLaunchpad.style.visibility = "hidden";
  iframeLaunchpad.style.transition = "all 0.2s";
}

let input = document.getElementById('input');
let img = document.getElementById('input-image');

input.onfocus = function () {
  img.style.left = "8px";
  input.style.left = "32px";
}