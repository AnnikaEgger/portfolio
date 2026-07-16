let language = "english";
let currentFeedback = 0;

function init() {
  renderPortfolioProjects();
  renderCurrentFeedback();
}

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
    else currentFeedback--;
  }
}

function isLastFeedback() {
  return currentFeedback >= FEEDBACKS.length - 1;
}

function isFirstFeedback() {
  return currentFeedback <= 0;
}

function renderCurrentFeedback() {
  const author = document.getElementById("feedback-author");
  const img = document.getElementById("feedback-image");

  renderFeedbackText();
  author.innerText = FEEDBACKS[currentFeedback].author;
  img.href = FEEDBACKS[currentFeedback].img_src;
}

function renderFeedbackText() {
  const text = document.getElementById("feedback-text");

  if (language == "english")
    text.innerText = FEEDBACKS[currentFeedback].text_english;
  else text.innerText = FEEDBACKS[currentFeedback].text_german;
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

// Die Zusammenarbeit mit Annika war eine große Bereicherung für unser Team.

const FEEDBACKS = [
  {
    text_german:
      "Annika erwies sich als kompetente Problemlöserin. Sie arbeitete sich intensiv in technische Herausforderungen ein, entwickelte effektive Lösungen und testete das Projekt gründlich, um Fehler frühzeitig zu erkennen und eigenständig zu beheben.",
    text_english:
      "Annika proved to be a skilled problem solver. She thoroughly explored technical challenges, developed effective solutions, and tested the project carefully to identify and resolve issues early on.",
    author: "C. Nguyen-Wellmann - Team Partner",
    img_src: "./assets/img/about-me-portrait.png",
  },
  {
    text_german:
      "Annika überzeugte durch ihre zielstrebige, strukturierte Arbeitsweise, ihr Organisationstalent und ihre Initiative. Durch ihre eigenständige Koordination und Problemlösungskompetenz war sie eine wichtige Stütze des Projekts.",
    text_english:
      "Annika impressed us with her goal-oriented, structured way of working, strong organizational skills, and initiative. Through her coordination and problem-solving abilities, she was a valuable support throughout the project.",
    author: "K. Mathea - Team Partner",
    img_src: "./assets/img/about-me-portrait.png",
  },
  {
    text_german:
      "Annika hat fantastische Arbeit geleistet und war für unser Team eine enorme Bereicherung. Besonders im Firebase-Backend hat sie einen extrem wichtigen Teil übernommen und super strukturierten Code geliefert. ",
    text_english:
      "Annika did a fantastic job and was a great asset to our team. She took on a crucial role in the Firebase backend and consistently delivered clean, well-structured code.",
    author: "L. Weigang - Team Partner",
    img_src: "./assets/img/about-me-portrait.png",
  },
];

// #region portfolio

function renderPortfolioProjects() {
  const projectSection = document.getElementById("project-section");
  projectSection.innerHMTL = "";

  for (let index = 0; index < PROJECTS.length; index++) {
    projectSection.innerHTML += projectArticleHTML(PROJECTS[index]);
  }
}

const PROJECTS = [
  {
    img_src: "./assets/img/join-preview.png",
    alt_text: "Preview image of the project 'Join'",
    title: "Join",
    skills: "JavaScript | HTML | CSS | Firebase",
    description:
      "  Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.",
    live_test_url: "/",
    github_url: "https://github.com/AnnikaEgger/join-personal",
  },
  {
    img_src: "./assets/img/pollo-loco-preview.png",
    alt_text: "Preview image of the game 'el pollo loco'",
    title: "El Pollo Loco",
    skills: "JavaScript | HTML | CSS",
    description:
      " A simple Jump-and-Run game based on an object-oriented approach. Help &quot;Pepe Peligroso&quot; collect coins and salsa bottles to fight against the boss chicken.",
    live_test_url: "/",
    github_url: "https://github.com/AnnikaEgger/el-pollo-loco",
  },
  {
    img_src: "./assets/img/pokedex-preview.png",
    alt_text: "Preview image of the project 'Pokédex'",
    title: "Pokédex",
    skills: "JavaScript | HTML | CSS | API",
    description:
      "   Based on the PokéAPI a simple library that provides and catalogues pokemon information.",
    live_test_url: "/",
    github_url: "https://github.com/AnnikaEgger/pokedex",
  },
];

const projectJson = {
  img_src: "",
  alt_text: "",
  title: "",
  skills: "",
  description: "",
  live_test_url: "",
  github_url: "",
};

// #endregion

// #region burger menu

function closeMobileMenu() {
  document.getElementById("burger-menu-hidden-checkbox").checked = false;
}

// function changeActiveHeaderLink(event) {
//   const allLinks = document.querySelectorAll(".header-link");

//   allLinks.forEach((link) => {
//     link.classList.remove("header-active");
//   });

//   event.target.classList.add("header-active");
// }

// #endregion
