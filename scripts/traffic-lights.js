let windows = document.querySelectorAll(".window");

windows.forEach((windowX) => {

  let trafficLights = windowX.querySelector("#trafficLights");
  let redButton = trafficLights.querySelector("#red");
  let yellowButton = trafficLights.querySelector("#yellow");
  let greenButton = trafficLights.querySelector("#green");

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
    windowX.style.display = "none";
  };

  yellowButton.onclick = function () {
    windowX.style.transform = "scale(0.7) translateY(50%)";
    windowX.style.opacity = "0";
  };

  greenButton.onclick = function () {
    let heightPercentage = Math.round(
      (windowX.clientHeight / window.innerHeight) * 100
    );
    let widthPercentage = Math.round(
      (windowX.clientWidth / window.innerWidth) * 100
    );
    if (heightPercentage < 100 && widthPercentage < 100) {
      windowX.style.width = "100vw";
      windowX.style.height = "calc(100vh - 24px)";
      windowX.style.top = "24px";
      windowX.style.left = "0";
      windowX.style.transition = "top 0.25s, left 0.25s";
    } else if (heightPercentage >= 90 && widthPercentage === 100) {
      windowX.style.width = "800px";
      windowX.style.height = "500px";
      windowX.style.top = "200px";
      windowX.style.left = "200px";
      windowX.style.transition = "";
    }
  };
})