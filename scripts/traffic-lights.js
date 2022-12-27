   let trafficLights = document.getElementById("traffic-lights");
   let redButton = document.getElementById("red");
   let yellowButton = document.getElementById("yellow");
   let greenButton = document.getElementById("green");
   let windows = document.getElementById("window");
   let resizeable = document.getElementById("resizeable");
   let draggable = document.getElementById("draggable");

   trafficLights.onmouseover = function () {
    redButton.innerHTML = `<img src="../images/icons/red-button.svg" style="width:9px; height:9px">`;
    yellowButton.innerHTML = `<img src="../images/icons/yellow-button.svg" style="width:9px; height:9px">`;
    greenButton.innerHTML = `<img src="../images/icons/green-button.svg" style="width:6px; height:6px">`;
   };

   trafficLights.onmouseout = function () {
    redButton.innerHTML = "";
    yellowButton.innerHTML = "";
    greenButton.innerHTML = "";
   };

   redButton.onclick = function () {
    windows.style.display = "none";
   };

   yellowButton.onclick = function () {
    windows.style.transform = "scale(0.7) translateY(50%)";
    windows.style.opacity = "0";
   };

   greenButton.onclick = function () {
    windows.style.width = "100%";
    windows.style.height = "100%";
    windows.style.top = "0";
    windows.style.left = "0";
    windows.style.transition = "width 0.25s, height 0.25s";
   };