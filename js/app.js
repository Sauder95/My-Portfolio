// ############ TITLE VARS ################################//
const myName = document.querySelector(".intro");
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
  if (array[i].className !== "title-break") {
    myName.innerHTML += "<span>" + array[i] + "</span>";
  } else {
    return;
  }
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
  if (aboutTitle) {
    return;
  } else {
    aboutTitle.style.animation = " 6s ease-in-out normal show";
  }
});

slider.forEach(slide => {
  observer.observe(slide);
});

// =============== EXTENDABLE ========================//

const extendButtons = document.querySelectorAll(".ext-btn");
const card = document.querySelector(".info");

for (let i = 0; i < extendButtons.length; i++) {
  extendButtons[i].onclick = function () {
    let content = this.nextElementSibling;
    let profilePic = document.querySelector(".profile-picture");
    if (content.style.maxHeight) {
      this.textContent = "More ...";
      content.style.maxHeight = null;
      profilePic.style.maxHeight = null;
      profilePic.style.borderWidth = null;
      profilePic.style.marginBottom = null;
    } else {
      this.textContent = "Less ...";
      content.style.maxHeight = content.scrollHeight + "px";
      profilePic.style.maxHeight = card.scrollHeight + "px";
      profilePic.style.borderWidth = "2px";
      profilePic.style.marginBottom = "2rem";
    }
  };
}
