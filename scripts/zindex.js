function modifyZIndex() {
  const windows = document.querySelectorAll(".window")
  
  windows.forEach((windowX) => windowX.onclick = function () {
    windowX.style.zIndex = parseInt(windowX.style.zIndex, 10) + 2;
    console.log(windowX.style.zIndex)
  })
}