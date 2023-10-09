function DayName() {
 let a = new Date();
 let weekdays = new Array(7);
 weekdays[0] = "Dim.";
 weekdays[1] = "Lun.";
 weekdays[2] = "Mar.";
 weekdays[3] = "Mer.";
 weekdays[4] = "Jeu.";
 weekdays[5] = "Ven.";
 weekdays[6] = "Sam.";
 let x = weekdays[a.getDay()];
 document.getElementById("dayname").innerHTML = x;
}

function DayNum() {
 let b = new Date();
 document.getElementById("daynum").innerHTML = b.getDate();
}

function MonthName() {
 let c = new Date();
 let month = new Array(12);
 month[0] = "jan.";
 month[1] = "fév.";
 month[2] = "mar.";
 month[3] = "avr.";
 month[4] = "mai";
 month[5] = "jun.";
 month[6] = "jul.";
 month[7] = "aoû.";
 month[8] = "sep.";
 month[9] = "oct.";
 month[10] = "nov.";
 month[11] = "déc.";
 let y = month[c.getMonth()];
 document.getElementById("monthname").innerHTML = y;
}

function Time() {
 let d = new Date();
 document.getElementById("time").innerHTML =
  d.getHours() + ":" + (d.getMinutes() < 10 ? "0" : "") + d.getMinutes();
}

const interval = setInterval(() => {
 DayName();
 DayNum();
 MonthName();
 Time();
}, 1000);
