let language;

function getLanguageFromLocalStorage() {
  language = localStorage.getItem("language");

  if (!language) {
    language = "english";
    setLocalStorageLanguage();
  }
}

function selectLanguage(selectedLanguage, currentSite) {
  language = selectedLanguage;
  setLocalStorageLanguage();
  styleLanguageButtons();

  renderTexts();
  if (currentSite == "index") translatePage();
  else if (currentSite == "legal-notice") renderLegalNotice();
  else if (currentSite == "privacy-policy") renderPrivacyPolicy();

  closeMobileMenu();
  flyInElements(true);
}

function styleIAmText() {
  const iAmText = document.getElementById("hero-i-am");
  if (language === "german") iAmText.classList.add("german");
  else iAmText.classList.remove("german");
}

function translatePage() {
  renderTexts();
  renderPortfolioProjects();
  translateContactFormPlaceholders();
  renderCurrentFeedback();
  styleIAmText();
}

function styleLanguageButtons() {
  const isGerman = language === "german";
  styleDEButton(isGerman);
  styleENButton(isGerman);
  styleMenuLanguageButtons(isGerman);
}

function styleMenuLanguageButtons(isGerman) {
  const deBtn = document.getElementById("de-btn--menu");
  const enBtn = document.getElementById("en-btn--menu");

  deBtn.classList.toggle("language-btn-mobile-active", isGerman);
  enBtn.classList.toggle("language-btn-mobile-active", !isGerman);
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
