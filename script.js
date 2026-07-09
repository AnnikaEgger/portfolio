let language = "english";
let currentFeedback = 0;

function changeActiveHeaderLink(event) {
  const allLinks = document.querySelectorAll(".header-link");

  allLinks.forEach((link) => {
    link.classList.remove("header-active");
  });

  event.target.classList.add("header-active");
}

function selectLanguage(selectedLanguage) {
  const deBtn = document.getElementById("de-btn");
  const enBtn = document.getElementById("en-btn");

  language = selectedLanguage;

  if (language == "german") {
    deBtn.classList.remove("btn-primary1--outline");
    deBtn.classList.add("btn-primary1--filled", "active-language");

    enBtn.classList.add("btn-primary1--outline");
    enBtn.classList.remove("btn-primary1--filled", "active-language");
  } else {
    deBtn.classList.add("btn-primary1--outline");
    deBtn.classList.remove("btn-primary1--filled", "active-language");

    enBtn.classList.remove("btn-primary1--outline");
    enBtn.classList.add("btn-primary1--filled", "active-language");
  }
}

function showNextFeedback(direction) {
  setCurrentFeedback(direction);
  renderCurrentFeedback();
  changeActiveDot();
}

function setCurrentFeedback(direction) {
  if (direction == "forwards") {
    if (isLastFeedback()) currentFeedback = 0;
    else currentFeedback++;
  } else {
    if (isFirstFeedback()) currentFeedback = FEEDBACKS.length - 1;
    else currentFeedback++;
  }
}

function isLastFeedback() {
  return currentFeedback >= FEEDBACKS.length - 1;
}

function isFirstFeedback() {
  return currentFeedback <= 0;
}

function renderCurrentFeedback() {
  const text = document.getElementById("feedback-text");
  const author = document.getElementById("feedback-author");
  const img = document.getElementById("feedback-image");

  text.innerText = FEEDBACKS[currentFeedback].text;
  author.innerText = FEEDBACKS[currentFeedback].author;
  img.href = FEEDBACKS[currentFeedback].img_src;
}

function changeActiveDot() {
  document.querySelectorAll(".feedback-dot").forEach((dot) => {
    dot.classList.remove("active-dot");
  });

  let activeDot = document.getElementById(
    "feedback-dot" + (currentFeedback + 1),
  );
  activeDot.classList.add("active-dot");
}

const FEEDBACKS = [
  {
    text: "Michael really kept the team together with his great organization and clear communication. We wouldn't have got this far without his commitment.",
    author: "V. Schuster - Team Partner",
    img_src: "./assets/img/about-me-portrait.png",
  },
  {
    text: "Michi was a top team colleague at DA. His positive commitment and willingness to take on responsibility made a significant contribution to us achieving our goals.",
    author: "V. Schuster - Team Partner",
    img_src: "./assets/img/about-me-portrait.png",
  },
  {
    text: "It was a great pleasure to work with Michael. He knows how to push and encourage team members to present the best work possible, always adding something to brainstorm. Regarding the well-being of group members, he was always present and available to listen and help others, with a great sense of humor as well.",
    author: "I.Nuber - Frontend Engineer",
    img_src: "./assets/img/about-me-portrait.png",
  },
];
