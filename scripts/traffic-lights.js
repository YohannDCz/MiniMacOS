function trafficLights() {
 let windows = document.querySelectorAll(".window");

windows.forEach((window1) => {

  let trafficLights = window1.querySelector("#trafficLights");
  let redButton = trafficLights.querySelector("#red");
  let yellowButton = trafficLights.querySelector("#yellow");
  let greenButton = trafficLights.querySelector("#green");

  console.log(redButton)
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
  window1.remove();
 };

 yellowButton.onclick = function () {
  window1.style.transform = "scale(0.7) translateY(50%)";
  window1.style.opacity = "0";
 };

 greenButton.onclick = function () {
  let heightPercentage = Math.round(
   (window1.clientHeight / window.innerHeight) * 100
  );
  let widthPercentage = Math.round(
   (window1.clientWidth / window.innerWidth) * 100
  );
  if (heightPercentage < 100 && widthPercentage < 100) {
   window1.style.width = "100%";
   window1.style.height = "100%";
   window1.style.top = "0";
   window1.style.left = "0";
   window1.style.transition = "top 0.25s, left 0.25s";
  } else if (heightPercentage === 100 && widthPercentage === 100) {
   window1.style.width = "700px";
   window1.style.height = "450px";
   window1.style.top = "200px";
   window1.style.left = "200px";
   window1.style.transition = "";
  }
 };
})
}
 
