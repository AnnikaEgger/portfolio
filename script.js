let language;
let currentFeedback = 0;

function init() {
  getLanguageFromLocalStorage();
  styleLanguageButtons();
  translatePage();
  flyInElements();
}

function setLocalStorageLanguage() {
  localStorage.setItem("language", language);
}

function changeActiveHeaderLink(event) {
  const allLinks = document.querySelectorAll(".header-link");

  allLinks.forEach((link) => {
    link.classList.remove("header-active");
  });

  event.target.classList.add("header-active");
}

// #region language

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
}

function translatePage() {
  renderTexts();
  renderPortfolioProjects();
  translateContactFormPlaceholders();
  renderCurrentFeedback();
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

// #endregion

// #region portfolio

function renderPortfolioProjects() {
  const projectSection = document.getElementById("project-section");
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
  document
    .getElementById("feedback-image")
    .setAttribute("href", feedback.img_src);
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

function projectArticleHTML(project, liveTestText) {
  return `<article class="project-article fade-in-element">
            <div class="project-preview">
              <img
                src="${project.img_src}"
                alt="${project["alt_text_" + language]}"
              />
            </div>
            <div class="project-information">
              <h3>${project.title}</h3>
              <p class="project-skills">${project.skills}</p>
              <p class="project-description">${project["description_" + language]}</p>
              <div class="project-btns">
                <a target="_blank" href="${project.live_test_url}" class="btn btn-main btn-primary2--filled"
                  >${liveTestText} </a>
                <a target="_blank"
                  href="${project.github_url}"
                  class="btn btn-main btn-primary1--outline"
                  >Github</a>
              </div>
            </div>
          </article>`;
}

// #endregion

// #region burger menu

const burgerMenu = document.getElementById("burger-menu-hidden-checkbox");
burgerMenu.addEventListener("change", styleCurrentSection);

function selectSection() {
  document.querySelectorAll(".link-mobile-menu").forEach((link) => {
    link.classList.remove("link-mobile-menu-active");
  });
  event.target.classList.add("link-mobile-menu-active");
  closeMobileMenu();
}

function closeMobileMenu() {
  document.getElementById("burger-menu-hidden-checkbox").checked = false;
}

function styleCurrentSection() {
  document.querySelectorAll(".link-mobile-menu").forEach((link) => {
    link.classList.remove("link-mobile-menu-active");
  });

  const sectionMenuMap = getSectionMenuMap();
  const menuId = sectionMenuMap[getCurrentSection()];
  if (menuId) styleMenuLink(document.getElementById(menuId));
}

function getSectionMenuMap() {
  return {
    "about-me-section": "menu-about-me",
    "my-skills-section": "menu-my-skills",
    "portfolio-section": "menu-portfolio",
    "contact-section": "menu-contact",
  };
}

function styleMenuLink(element) {
  element.classList.add("link-mobile-menu-active");
}

function getCurrentSection() {
  const sections = document.querySelectorAll("section");
  for (const section of sections) {
    if (isVisible(section.getBoundingClientRect())) {
      return section.id === "project-section" ||
        section.id === "feedback-section"
        ? "portfolio-section"
        : section.id;
      break;
    }
  }
}

function isVisible(rect) {
  return (
    rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2
  );
}

// #endregion

// #region scroll animation

function getScrollTop() {
  return window.pageYOffset || document.documentElement.scrollTop;
}

function initScrollDirectionTracker() {
  let lastScrollTop = getScrollTop();
  let scrollDirection = "down";

  window.addEventListener(
    "scroll",
    () => {
      const currentScrollTop = getScrollTop();
      scrollDirection = currentScrollTop > lastScrollTop ? "down" : "up";
      lastScrollTop = currentScrollTop <= 0 ? 0 : currentScrollTop;
    },
    { passive: true },
  );

  return () => scrollDirection;
}

function handleIntersection(entry, getDirection) {
  if (entry.isIntersecting && getDirection() === "down") {
    entry.target.classList.add("visible");
  } else if (!entry.isIntersecting && getDirection() === "up") {
    entry.target.classList.remove("visible");
  }
}

function createFlyInObserver(getDirection) {
  return new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => handleIntersection(entry, getDirection));
    },
    { threshold: 0.2 },
  );
}

function flyInElements() {
  const getDirection = initScrollDirectionTracker();
  const observer = createFlyInObserver(getDirection);

  document.querySelectorAll(".fade-in-element").forEach((el) => {
    observer.observe(el);
  });
}

// #endregion

// #region pricacy policy

function initPrivacyPolicy() {
  getLanguageFromLocalStorage();
  styleLanguageButtons();
  renderPrivacyPolicy();
}

function renderPrivacyPolicy() {
  const contentWrapper = document.getElementById(
    "content-wrapper-privacy-policy",
  );
  const headline = document.getElementById("privacy-policy-h1");

  if (language === "german") {
    headline.innerHTML = "Daten&shy;schutz&shy;erklärung";
    contentWrapper.innerHTML = privacyPolicyGermanHTML();
  } else {
    headline.innerText = "Privacy Policy";
    contentWrapper.innerHTML = privacyPolicyEnglishHTML();
  }
}

// #endregion
