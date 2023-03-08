const finder = document.getElementById('finder');
const finderWindow = document.getElementById('Finder');
finder.addEventListener("click", function () {
  finderWindow.style.display = "flex";
})

const safari = document.getElementById('safariApp');
const safariWindow = document.getElementById('Safari');
safari.addEventListener("click", function () {
  safariWindow.style.display = "flex";
});

const vscode = document.getElementById('vscodeApp');
const vscodeWindow = document.getElementById('VSCode');
vscode.addEventListener("click", function () {
  vscodeWindow.style.display = "flex";
});

const word = document.getElementById('wordApp');
const wordWindow = document.getElementById('Word1');
word.addEventListener("click", function () {
  wordWindow.style.display = "flex";
});

const notes = document.getElementById('notesApp');
const notesWindow = document.getElementById('Notes1');
notes.addEventListener("click", function () {
  notesWindow.style.display = "flex";
});

const calendar = document.getElementById('calendarApp');
const calendarWindow = document.getElementById('Calendar1');
calendar.addEventListener("click", function () {
  calendarWindow.style.display = "flex";
});

const mail = document.getElementById('mailApp');
const mailWindow = document.getElementById('Mail1');
mail.addEventListener("click", function () {
  mailWindow.style.display = "flex";
});

const settings = document.getElementById('settings');
const settingsWindow = document.getElementById('Settings1');
settings.addEventListener("click", function () {
  settingsWindow.style.display = "flex"
});

let counter = 0;

function addWindow(location, name) {
  if (document.getElementById(name) == null) {
    const windows = document.createElement('section');
    windows.id = name;
    windows.className = "window";
    windows.style.zIndex = "revert";
    let randomX = Math.ceil(Math.random() * 2);
    let randomY = Math.ceil(Math.random() * 2);
    windows.style.position = "absolute";
    if (randomX == 1) {
      windows.style.left = "200px";
    } else if (randomX == 2) {
      windows.style.left = "600px";
    }
    if (randomY == 1) {
      windows.style.top = "50px";
    } else if (randomY == 2) {
      windows.style.top = "200px";
    }
    windows.innerHTML = `
                      <div class="header-window" id="header-window">
                        <div class="trafficLights" id="trafficLights">
                          <button class="red" id="red"></button>
                          <button class="yellow" id="yellow"></button>
                          <button class="green" id="green"></button>
                        </div>
                        <div class="movable" id="movable">
                          <div class="appname">${name}</div>
                        </div>
                      </div>
                      <iframe class="iframe" id="iframe" src=${location} width= "100%" height="100%" style="border:none;"></iframe>`
    document.body.appendChild(windows);
    resizeableWindows();
    draggableWindows();
    modifyZIndex();
    trafficLights();
  } else {
    const windows = document.getElementById(name);
    windows.style.transform = "scale(1)";
    windows.style.opacity = "1";
  }
}