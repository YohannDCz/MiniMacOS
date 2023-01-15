function header(name) {
  const menu = document.querySelector(".menu");
  const header = document.querySelector("header");
  const appHeader = document.querySelector(`.${name}`);
  const active = appHeader.contentWindow.document;

  let targetNodes = active.querySelectorAll(".box");

  console.log(targetNodes);

  function workOnClassAdd() {
    appHeader.style.height = "100vh";
    header.style.height = "100vh";
    menu.style.height = "100vh";
    active.body.style.height = "100vh";
  }

  function workOnClassRemoval() {
    appHeader.style.height = "24px";
    header.style.height = "24px";
    menu.style.height = "24px";
    active.body.style.height = "24px";
  }

  console.log(appHeader.clientHeight)
  console.log(header.clientHeight)
  console.log(active.body.clientHeight)


  targetNodes.forEach((targetNode) => {
    class ClassWatcher {

      constructor(targetNode, classToWatch, classAddedCallback, classRemovedCallback) {
        this.targetNode = targetNode
        this.classToWatch = classToWatch
        this.classAddedCallback = classAddedCallback
        this.classRemovedCallback = classRemovedCallback
        this.observer = null
        this.lastClassState = targetNode.classList.contains(this.classToWatch)

        this.init()
      }

      init() {
        this.observer = new MutationObserver(this.mutationCallback)
        this.observe()
      }

      observe() {
        this.observer.observe(this.targetNode, { attributes: true })
      }

      disconnect() {
        this.observer.disconnect()
      }

      mutationCallback = mutationsList => {
        for (let mutation of mutationsList) {
          if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
            let currentClassState = mutation.target.classList.contains(this.classToWatch)
            if (this.lastClassState !== currentClassState) {
              this.lastClassState = currentClassState
              if (currentClassState) {
                this.classAddedCallback()
                console.log(appHeader.clientHeight)
                console.log(header.clientHeight)
                console.log(active.body.clientHeight)
              }
              else {
                this.classRemovedCallback()
                console.log(appHeader.clientHeight)
                console.log(header.clientHeight)
                console.log(active.body.clientHeight)
              }
            }
          }
        }
      }
    }

    let classWatcher = new ClassWatcher(targetNode, 'active', workOnClassAdd, workOnClassRemoval)
  })
}