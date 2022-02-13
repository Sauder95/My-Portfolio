// ############ TITLE VARS ################################//
const myName = document.querySelector(".name");
const text = myName.textContent;
const array = text.split("");
myName.textContent = "";
// ############ ABOUT SECTION VARS ################################//
const aboutTitle = document.querySelectorAll(".about-title");
const slider = document.querySelectorAll(".slider");
const options = {
  root: null,
  threshold: 0.3,
  rootMargin: "0px",
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

const observer = new IntersectionObserver(function (entries) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) {
      return;
    } else {
    }
    entry.target.classList.add("view");
    observer.unobserve(entry.target);
  });
}, options);

aboutTitle.forEach(title => {
  observer.observe(title);
});

slider.forEach(slide => {
  observer.observe(slide);
});

// =============== EXTENDABLE ========================//

const extendButtons = document.querySelector("#ext-btn");

for (let i = 0; i < extendButtons.length; i++) {
  extendButtons[i].onclick = function () {
    let content = this.nextElementSibling;
    console.log("hello");
    if (content.style.maxHeight) {
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  };
}
