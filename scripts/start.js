document.addEventListener("DOMContentLoaded", function () {
  const navigate = (url) => {
    window.location.href = url;
  }

  let i = 0;

  function move() {
    const password = document.getElementById("password");

    if (password) {
      password.innerHTML = `
        <div id="progress">
          <div id="bar"></div>
        </div>`;
    }

    if (i === 0) {
      i = 1;
      const elem = document.getElementById("bar");
      let width = 1;

      const frame = () => {
        if (width >= 100) {
          clearInterval(id);
          i = 0;
          navigate("./src/components/finder.html");
        } else {
          width++;
          if (elem) {
            elem.style.width = width + "%";
          }
        }
      };

      const id = setInterval(frame, 40);
    }
  }

  const arrow = document.getElementById("arrow");

  function showArrow(event) {
    if (arrow) {
      if (event.target.value.length === 0 && arrow.style.display === "flex") {
        arrow.style.display = "none";
      } else {
        arrow.style.display = "flex";
      }
    }
  }

  const inputElem = document.getElementById("input");
  if (inputElem) {
    inputElem.addEventListener("input", showArrow);
    inputElem.addEventListener("keypress", function (event) {
      if (event.key === "Enter") {
        move();
      }
    });
  }

  // Autres handlers pour les boutons et liens
});
