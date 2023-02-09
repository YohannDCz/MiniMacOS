function modifyZIndex() {
  const windows = document.querySelectorAll(".window");
  const iframes = document.querySelectorAll(".iframe");
  
  windows.forEach((windowX) => windowX.onclick = function () {
    windowX.style.zIndex = ++counter;
  })

  // windows.addEventListener('click', function (event) {
  //   if (containingElement.contains(event.target)) {
  //     windowX.style.zIndex = ++counter;
  //   } else {
  //     return
  //   }
  // });

}