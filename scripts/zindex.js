function modifyZIndex() {
  const windows = document.querySelectorAll(".window") ;
  
  windows.forEach((windowX) => windowX.onclick = function () {
    windowX.style.zIndex = ++counter;
  })
}