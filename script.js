let language = "english";
let currentFeedback = 0;

function init() {
  renderTexts();
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

// #region language

function selectLanguage(selectedLanguage) {
  language = selectedLanguage;
  styleLanguageButtons();
  translatePage();
}

function translatePage() {
  renderPortfolioProjects();
  renderTexts();
  translateContactFormPlaceholders();
  renderCurrentFeedback();
}

function styleLanguageButtons() {
  const isGerman = language === "german";
  styleDEButton(isGerman);
  styleENButton(isGerman);
}

function styleDEButton(isGerman) {
  const deBtn = document.getElementById("de-btn");
  deBtn.classList.toggle("btn-primary1--filled", isGerman);
  deBtn.classList.toggle("active-language", isGerman);
  deBtn.classList.toggle("btn-primary1--outline", !isGerman);
}

function styleENButton(isGerman) {
  const enBtn = document.getElementById("en-btn");
  enBtn.classList.toggle("btn-primary1--outline", isGerman);
  enBtn.classList.toggle("btn-primary1--filled", !isGerman);
  enBtn.classList.toggle("active-language", !isGerman);
}

const textJson = {
  english: {
    header: {
      about: "About me",
      skills: "Skills",
      portfolio: "Portfolio",
    },
    burger_menu: {
      about: "About me",
      skills: "My skills",
      portfolio: "Portfolio",
      contact: "Contact",
    },
    hero: {
      greeting_1: "I",
      greeting_2: "am",
      title: "Fullstack Developer",
      cta: "Let's talk!",
      scroll: "Scroll down",
    },
    about_me: {
      h2: "About me",
      subtext:
        "Software development combines the things I enjoy most: deeply analyzing complex problems, constantly expanding my knowledge, and bringing clarity and structure to complexity.",
      location:
        "I'm based near Augsburg, open to remote work and willing to relocate.",
      learning:
        "I'm driven by curiosity and a desire to improve. Learning new technologies and expanding my skills is something I genuinely enjoy.",
      problem_solving:
        "I believe good solutions start with a deep understanding of the problem. Through analytical thinking and a structured approach, I break down complex challenges and develop sustainable solutions.",
    },
    skills: {
      h2: "My skills",
      subtext:
        "My frontend development training has given me hands-on experience with a broad range of technologies. Backend skills will be added soon.",
      looking_for: "looking for",
      another_skill: "another skill?",
      missing_skills_answer:
        "Always curious and motivated to dive into new technologies and frameworks.",
      cta: "Get in touch",
      special_interest: "I have a special interest in learning",
    },
    portfolio: {
      h2: "Portfolio",
      subtext:
        "Explore a selection of my work here - Interact with projects to see my skills in action.",
    },
    contact: {
      h2: "Contact",
      problem: "Got a problem to solve?",
      role: "I'm looking for a backend or full-stack role with a backend focus. I'd love to hear from you if you're looking for a developer who enjoys solving complex problems and creating sustainable solutions.",
      need: "Need a Fullstack developer?",
      cta: "Contact me!",
      submit_form: "Send message",
      form_toast: "Message sent successfully",
      ive_read: "I've read the",
      privacy_policy: "privacy policy",
      agree: "and agree to the processing of my data as outlined.",
    },
    footer: {
      legal_notice: "Legal notice",
    },
  },
  german: {
    header: {
      about: "Über mich",
      skills: "Fähigkeiten",
      portfolio: "Portfolio",
    },
    burger_menu: {
      about: "Über mich",
      skills: "Fähigkeiten",
      portfolio: "Portfolio",
      contact: "Kontakt",
    },
    hero: {
      greeting_1: "Ich",
      greeting_2: "bin",
      title: "Fullstack Entwicklerin",
      cta: "Let's talk!",
      scroll: "Scrolle nach unten",
    },
    about_me: {
      h2: "About me",
      subtext:
        "Software development combines the things I enjoy most: deeply analyzing complex problems, constantly expanding my knowledge, and bringing clarity and structure to complexity.",
      location:
        "I'm based near Augsburg, open to remote work and willing to relocate.",
      learning:
        "I'm driven by curiosity and a desire to improve. Learning new technologies and expanding my skills is something I genuinely enjoy.",
      problem_solving:
        "I believe good solutions start with a deep understanding of the problem. Through analytical thinking and a structured approach, I break down complex challenges and develop sustainable solutions.",
    },
    skills: {
      h2: "My skills",
      subtext:
        "My frontend development training has given me hands-on experience with a broad range of technologies. Backend skills will be added soon.",
      missing_skills_question: "Looking for another skill?",
      looking_for: "looking for",
      another_skill: "another skill?",
      missing_skills_answer:
        "Always curious and motivated to dive into new technologies and frameworks.",
      cta: "Get in touch",
      special_interest: "I have a special interest in learning",
    },
    portfolio: {
      h2: "Portfolio",
      subtext:
        "Explore a selection of my work here - Interact with projects to see my skills in action.",
    },
    contact: {
      h2: "Contact",
      problem: "Got a problem to solve?",
      role: "I'm looking for a backend or full-stack role with a backend focus. I'd love to hear from you if you're looking for a developer who enjoys solving complex problems and creating sustainable solutions.",
      need: "Need a Fullstack developer?",
      cta: "Contact me!",
      submit_form: "Send message",
      form_toast: " Message sent successfully",
      ive_read: "I've read the",
      privacy_policy: "Datenschutzerklärung",
      agree: "and agree to the processing of my data as outlined.",
    },
    footer: {
      legal_notice: "Impressum",
    },
  },
};

function renderTexts() {
  const elements = document.querySelectorAll("[data-key]");
  elements.forEach((element) => {
    const section = element.dataset.section;
    const key = element.dataset.key;
    element.innerText = textJson[language][section][key];
  });
}

function translateContactFormPlaceholders() {
  const name = document.getElementById("contact-name");
  const email = document.getElementById("contact-email");
  const message = document.getElementById("contact-msg");

  if (language == "german") {
    name.placeholder = "Dein Name";
    email.placeholder = "Deine Email";
    message.placeholder = "Deine Nachricht";
  } else {
    name.placeholder = "Your name";
    email.placeholder = "Your email";
    message.placeholder = "Your message";
  }
}

// #endregion

// #region portfolio

function renderPortfolioProjects() {
  const projectSection = document.getElementById("project-section");
  projectSection.innerHMTL = "";
  let liveTestText;
  if (language == "german") liveTestText = "Live Test";
  else liveTestText = "Live test";

  projectSection.innerHTML = "";

  for (let index = 0; index < PROJECTS.length; index++) {
    projectSection.innerHTML += projectArticleHTML(
      PROJECTS[index],
      liveTestText,
    );
  }
}

const PROJECTS = [
  {
    img_src: "./assets/img/join-preview.png",
    alt_text_english: "Preview image of the project 'Join'",
    alt_text_german: "Vorschaubild des Projekts 'Join'",
    title: "Join",
    skills: "JavaScript | HTML | CSS | Firebase",
    description_english:
      "Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.",
    description_german:
      "Ein Task-Manager, inspiriert vom Kanban-System. Erstelle und organisiere Aufgaben per Drag-and-Drop und weise Nutzer sowie Kategorien zu.",
    live_test_url: "/",
    github_url: "https://github.com/AnnikaEgger/join-personal",
  },
  {
    img_src: "./assets/img/pollo-loco-preview.png",
    alt_text_english: "Preview image of the game 'El Pollo Loco'",
    alt_text_german: "Vorschaubild des Spiels 'El Pollo Loco'",
    title: "El Pollo Loco",
    skills: "JavaScript | HTML | CSS",
    description_english:
      "A simple Jump-and-Run game based on an object-oriented approach. Help &quot;Pepe Peligroso&quot; collect coins and salsa bottles to fight against the boss chicken.",
    description_german:
      "Ein einfaches Jump-and-Run-Spiel, entwickelt mit einem objektorientierten Ansatz. Hilf &quot;Pepe Peligroso&quot; Münzen und Salsa-Flaschen zu sammeln und das Boss-Huhn zu besiegen.",
    live_test_url: "/",
    github_url: "https://github.com/AnnikaEgger/el-pollo-loco",
  },
  {
    img_src: "./assets/img/pokedex-preview.png",
    alt_text_english: "Preview image of the project 'Pokédex'",
    alt_text_german: "Vorschaubild des Projekts 'Pokédex'",
    title: "Pokédex",
    skills: "JavaScript | HTML | CSS | API",
    description_english:
      "Based on the PokéAPI. A simple library that provides and catalogues pokemon information.",
    description_german:
      "Basierend auf der PokéAPI. Eine einfache Bibliothek, die Informationen zu Pokémon bereitstellt und katalogisiert.",
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

const FEEDBACKS = [
  {
    text_german:
      "Annika erwies sich als kompetente Problemlöserin. Sie arbeitete sich intensiv in technische Herausforderungen ein, entwickelte effektive Lösungen und testete das Projekt gründlich, um Fehler frühzeitig zu erkennen und eigenständig zu beheben.",
    text_english:
      "Annika proved to be a skilled problem solver. She thoroughly explored technical challenges, developed effective solutions, and tested the project carefully to identify and resolve issues early on.",
    author_english: "C. Nguyen-Wellmann - Team Partner",
    author_german: "C. Nguyen-Wellmann - Teamkollege",
    img_src: "./assets/img/about-me-portrait.png",
  },
  {
    text_german:
      "Annika überzeugte durch ihre zielstrebige, strukturierte Arbeitsweise, ihr Organisationstalent und ihre Initiative. Durch ihre eigenständige Koordination und Problemlösungskompetenz war sie eine wichtige Stütze des Projekts.",
    text_english:
      "Annika impressed us with her goal-oriented, structured way of working, strong organizational skills, and initiative. Through her coordination and problem-solving abilities, she was a valuable support throughout the project.",
    author_english: "K. Mathea - Team Partner",
    author_german: "K. Mathea - Teamkollege",
    img_src: "./assets/img/about-me-portrait.png",
  },
  {
    text_german:
      "Annika hat fantastische Arbeit geleistet und war für unser Team eine enorme Bereicherung. Besonders im Firebase-Backend hat sie einen extrem wichtigen Teil übernommen und super strukturierten Code geliefert. ",
    text_english:
      "Annika did a fantastic job and was a great asset to our team. She took on a crucial role in the Firebase backend and consistently delivered clean, well-structured code.",
    author_english: "L. Weigang - Team Partner",
    author_german: "L. Weigang - Teamkollege",
    img_src: "./assets/img/about-me-portrait.png",
  },
];

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
  const feedback = FEEDBACKS[currentFeedback];

  document.getElementById("feedback-author").innerText =
    feedback["author_" + language];
  document.getElementById("feedback-image").href = feedback.img_src;
  document.getElementById("feedback-text").innerText =
    feedback["text_" + language];
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

// #endregion

// #region burger menu

function closeMobileMenu() {
  document.getElementById("burger-menu-hidden-checkbox").checked = false;
}

// #endregion
