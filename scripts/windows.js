const finder = document.getElementById('finder');
finder.addEventListener("click", function() {addWindow("./finder-window.html", "Finder")});

const safari = document.getElementById('safariApp');
safari.addEventListener("click", function() {addWindow("./apps/safari.html", "Safari")});

const vscode = document.getElementById('vscodeApp');
vscode.addEventListener("click", function() {addWindow("https://vscode.dev/", "VSCode",)});

const word = document.getElementById('wordApp');
word.addEventListener("click", function() {addWindow("./word.html", "Word")});

const notes = document.getElementById('notesApp');
notes.addEventListener("click", function() {addWindow("./apps/notes.html", "Notes")});

const calendar = document.getElementById('calendarApp');
calendar.addEventListener("click", function() {addWindow("./apps/calendar.html", "Calendrier")});

const mail = document.getElementById('mailApp');
mail.addEventListener("click", function() {addWindow("./apps/mail.html", "Mail")});

const settings = document.getElementById('settings');
settings.addEventListener("click", function() {addWindow("./apps/settings.html", "Réglages Système")});

counter = 0;

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
                      <div class="header" id="header">
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
    // let highestZindex = getHighestZindex(".window")
  } else {
    const windows = document.getElementById(name);
    windows.style.transform = "scale(1)";
    windows.style.opacity = "1";
  }
}