const finder = document.getElementById('finder');
finder.addEventListener("click", function() {addWindow("./finder-window.html", "Finder", "window1", "movable1", "trafficLights1", "red1", "yellow1", "green1")});

const safari = document.getElementById('safariApp');
safari.addEventListener("click", function() {addWindow("./apps/safari.html", "Safari", "window2", "movable2", "trafficLights2", "red2", "yellow2", "green2")});

const vscode = document.getElementById('vscodeApp');
vscode.addEventListener("click", function() {addWindow("https://vscode.dev/", "VSCode", "window3", "movable3", "trafficLights3", "red3", "yellow3", "green3")});

const word = document.getElementById('wordApp');
word.addEventListener("click", function() {addWindow("./word.html", "Word", "window4", "movable4", "trafficLights4", "red4", "yellow4", "green4")});

const notes = document.getElementById('notesApp');
notes.addEventListener("click", function() {addWindow("./apps/notes.html", "Notes", "window5", "movable5", "trafficLights5", "red5", "yellow5", "green5")});

const calendar = document.getElementById('calendarApp');
calendar.addEventListener("click", function() {addWindow("./apps/calendar.html", "Calendrier", "window6", "movable6", "trafficLights6", "red6", "yellow6", "green6")});

const mail = document.getElementById('mailApp');
mail.addEventListener("click", function() {addWindow("./apps/mail.html", "Mail", "window7", "movable7", "trafficLights7", "red7", "yellow7", "green7")});

const settings = document.getElementById('settings');
settings.addEventListener("click", function() {addWindow("./apps/settings.html", "Réglages Système", "window8", "movable8", "trafficLights8", "red8", "yellow8", "green8")});

function addWindow(location, name, windowId, movableId, trafficLightsId, redId, yellowId, greenId) {
  if (document.getElementById(windowId) == null) {
    const windows = document.createElement('section');
    windows.id = windowId;
    windows.className = "window";
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
                        <div class="traffic-lights" id="${trafficLightsId}">
                          <button class="red" id="${redId}"></button>
                          <button class="yellow" id="${yellowId}"></button>
                          <button class="green" id="${greenId}"></button>
                        </div>
                        <div class="movable" id="${movableId}">
                          <div class="appname">${name}</div>
                        </div>
                      </div>
                      <iframe id="iframe" src=${location} width= "100%" height="100%" style="border:none;"></iframe>`
    document.body.appendChild(windows);
    trafficLights(trafficLightsId, redId, yellowId, greenId, windowId);
    resizeableWindows(windowId);
    draggableWindows(windowId, movableId);
  } else {
    const windows = document.getElementById(windowId);
    windows.style.transform = "scale(1)";
    windows.style.opacity = "1";
  }
}