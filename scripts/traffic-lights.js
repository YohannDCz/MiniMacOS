function trafficLights(trafficLightsId, redId, yellowId, greenId, windowId) {
 let trafficLights = document.getElementById(trafficLightsId);
 let redButton = document.getElementById(redId);
 let yellowButton = document.getElementById(yellowId);
 let greenButton = document.getElementById(greenId);
 let windows = document.getElementById(windowId);

 trafficLights.onmouseenter = function () {
  redButton.innerHTML = `<img src="../images/icons/red-button.svg" style="width:9px; height:9px">`;
  yellowButton.innerHTML = `<img src="../images/icons/yellow-button.svg" style="width:9px; height:9px">`;
  greenButton.innerHTML = `<img src="../images/icons/green-button.svg" style="width:6px; height:6px">`;
 };

 trafficLights.onmouseleave = function () {
  redButton.innerHTML = "";
  yellowButton.innerHTML = "";
  greenButton.innerHTML = "";
 };

 redButton.onclick = function () {
  windows.remove();
 };

 yellowButton.onclick = function () {
  windows.style.transform = "scale(0.7) translateY(50%)";
  windows.style.opacity = "0";
 };

 greenButton.onclick = function () {
  let heightPercentage = Math.round(
   (windows.clientHeight / window.innerHeight) * 100
  );
  let widthPercentage = Math.round(
   (windows.clientWidth / window.innerWidth) * 100
  );
  if (heightPercentage < 100 && widthPercentage < 100) {
   windows.style.width = "100%";
   windows.style.height = "100%";
   windows.style.top = "0";
   windows.style.left = "0";
   windows.style.transition = "top 0.25s, left 0.25s";
  } else if (heightPercentage === 100 && widthPercentage === 100) {
   windows.style.width = "700px";
   windows.style.height = "450px";
   windows.style.top = "200px";
   windows.style.left = "200px";
   windows.style.transition = "";
  }
 };
}
