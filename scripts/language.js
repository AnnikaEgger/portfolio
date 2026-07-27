/**
 * Currently selected language key. Expected values: 'english' or 'german'.
 * @type {string}
 */
let language;

/**
 * Persist the current `language` value to localStorage.
 * @returns {void}
 */
function setLocalStorageLanguage() {
  localStorage.setItem("language", language);
}

/**
 * Load the language from localStorage into the `language` variable.
 * If no language is stored, default to 'english' and persist it.
 * @returns {void}
 */
function getLanguageFromLocalStorage() {
  language = localStorage.getItem("language");

  if (!language) {
    language = "english";
    setLocalStorageLanguage();
  }
}

/**
 * Select a language, persist it, update UI and re-render content.
 * @param {string} selectedLanguage Language key to select ('english'|'german').
 * @param {string} currentSite Current site identifier to trigger page-specific renders.
 * @returns {void}
 */
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

/**
 * Toggle the `german` class on the hero 'I am' text for styling differences.
 * @returns {void}
 */
function styleIAmText() {
  const iAmText = document.getElementById("hero-i-am");
  if (language === "german") iAmText.classList.add("german");
  else iAmText.classList.remove("german");
}

/**
 * Re-render the page content for the active language.
 * @returns {void}
 */
function translatePage() {
  renderTexts();
  renderPortfolioProjects();
  translateContactFormPlaceholders();
  renderCurrentFeedback();
  styleIAmText();
}

/**
 * Update language button styles across the UI based on current language.
 * @returns {void}
 */
function styleLanguageButtons() {
  const isGerman = language === "german";
  styleDEButton(isGerman);
  styleENButton(isGerman);
  styleMenuLanguageButtons(isGerman);
}

/**
 * Update the mobile menu language buttons to reflect the current language.
 * @param {boolean} isGerman Whether the active language is German.
 * @returns {void}
 */
function styleMenuLanguageButtons(isGerman) {
  const deBtn = document.getElementById("de-btn--menu");
  const enBtn = document.getElementById("en-btn--menu");

  deBtn.classList.toggle("language-btn-mobile-active", isGerman);
  enBtn.classList.toggle("language-btn-mobile-active", !isGerman);
}

/**
 * Style the DE language button based on active language.
 * @param {boolean} isGerman Whether the active language is German.
 * @returns {void}
 */
function styleDEButton(isGerman) {
  const deBtn = document.getElementById("de-btn");
  deBtn.classList.toggle("btn-primary1--filled", isGerman);
  deBtn.classList.toggle("active-language", isGerman);
  deBtn.classList.toggle("btn-primary1--outline", !isGerman);
}

/**
 * Style the EN language button based on active language.
 * @param {boolean} isGerman Whether the active language is German.
 * @returns {void}
 */
function styleENButton(isGerman) {
  const enBtn = document.getElementById("en-btn");
  enBtn.classList.toggle("btn-primary1--outline", isGerman);
  enBtn.classList.toggle("btn-primary1--filled", !isGerman);
  enBtn.classList.toggle("active-language", !isGerman);
}

/**
 * Render localized text for all elements with `data-key` attributes.
 * Elements must provide `data-section` and `data-key` attributes.
 * @returns {void}
 */
function renderTexts() {
  const elements = document.querySelectorAll("[data-key]");
  elements.forEach((element) => {
    const section = element.dataset.section;
    const key = element.dataset.key;
    element.innerText = textJson[language][section][key];
  });
}

/**
 * Set localized placeholders for the contact form inputs.
 * @returns {void}
 */
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
