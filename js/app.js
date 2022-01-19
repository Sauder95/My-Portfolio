// ############ TITLE VARS ################################//
const myName = document.querySelector(".name");
const text = myName.textContent;
const array = text.split("");
myName.textContent = "";
// ############ ABOUT SECTION VARS ################################//
const aboutTitle = document.querySelector(".about-title");
const options = {
  root: null,
  threshold: 0,
  // rootMargin: "-150px",
};

// ############ TITLE FADE IN ################################//

for (i = 0; i < array.length; i++) {
  myName.innerHTML += "<span>" + array[i] + "</span>";
}

let char = 0;
let timer = setInterval(onTick, 150);

function onTick() {
  const span = myName.querySelectorAll("span")[char];
  span.classList.add("show");

  char++;
  if (char === array.length) {
    complete();
    return;
  }
}

function complete() {
  clearInterval(timer);
  timer = "";
}

// ############ TITLE FADE IN ################################//

const observer = new IntersectionObserver(function (entries, observer) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      return;
    }
    console.log(entry.target);
    entry.target.classList.add("view");
  });
}, options);

observer.observe(aboutTitle);
