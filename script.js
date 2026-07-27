/**
 * Index of the currently visible feedback item.
 * @type {number}
 */
let currentFeedback = 0;

/**
 * Initialize the page: load language, style UI and start animations.
 * @returns {void}
 */
function init() {
  getLanguageFromLocalStorage();
  styleLanguageButtons();
  translatePage();
  setTimeout(flyInElements, 100);
}

// #region portfolio

/**
 * Render the portfolio projects into the project section.
 * @returns {void}
 */
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

/**
 * Move feedback carousel in the given direction and update UI.
 * @param {"forwards"|"backwards"} direction Direction to move the feedback.
 * @returns {void}
 */
function showNextFeedback(direction) {
  setCurrentFeedback(direction);
  renderCurrentFeedback();
  changeActiveDot();
}

/**
 * Update the `currentFeedback` index based on direction.
 * @param {"forwards"|"backwards"} direction Direction to move the feedback.
 * @returns {void}
 */
function setCurrentFeedback(direction) {
  if (direction == "forwards") {
    if (isLastFeedback()) currentFeedback = 0;
    else currentFeedback++;
  } else {
    if (isFirstFeedback()) currentFeedback = FEEDBACKS.length - 1;
    else currentFeedback--;
  }
}

/**
 * Check whether the current feedback is the last item.
 * @returns {boolean} True when on the last feedback.
 */
function isLastFeedback() {
  return currentFeedback >= FEEDBACKS.length - 1;
}

/**
 * Check whether the current feedback is the first item.
 * @returns {boolean} True when on the first feedback.
 */
function isFirstFeedback() {
  return currentFeedback <= 0;
}

/**
 * Render the currently selected feedback into the DOM.
 * Expects a global `FEEDBACKS` array and `language` variable.
 * @returns {void}
 */
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

/**
 * Update the visual active dot indicator for feedback carousel.
 * @returns {void}
 */
function changeActiveDot() {
  document.querySelectorAll(".feedback-dot").forEach((dot) => {
    dot.classList.remove("active-dot");
  });

  let activeDot = document.getElementById(
    "feedback-dot" + (currentFeedback + 1),
  );
  activeDot.classList.add("active-dot");
}

/**
 * Build HTML string for a project article.
 * @param {Object} project Project data object.
 * @param {string} liveTestText Text to use for the live test button.
 * @returns {string} HTML markup for the project article.
 */
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

// #region navbars

let lastSection;
let currentSection;

const burgerMenu = document.getElementById("burger-menu-hidden-checkbox");
burgerMenu.addEventListener("change", () => {
  styleCurrentSection("menu");
});

document.addEventListener("scroll", () => {
  styleCurrentSection("header");
});

/**
 * Select a section from the mobile menu.
 * Uses the global `event` from the click handler to determine target.
 * @returns {void}
 */
function selectSection() {
  document.querySelectorAll(".link-mobile-menu").forEach((link) => {
    link.classList.remove("link-mobile-menu-active");
  });
  event.target.classList.add("link-mobile-menu-active");
  closeMobileMenu();
}

/**
 * Close the mobile burger menu by unchecking the hidden checkbox.
 * @returns {void}
 */
function closeMobileMenu() {
  document.getElementById("burger-menu-hidden-checkbox").checked = false;
}

/**
 * Style the current navigation link based on visible section.
 * @param {"header"|"menu"} trigger Which UI triggered the update.
 * @returns {void}
 */
function styleCurrentSection(trigger) {
  let sectionMap;
  let linkId;

  if (trigger === "header") sectionMap = styleHeaderNavbar();
  else sectionMap = styleBurgerMenuNavbar();

  linkId = sectionMap[getCurrentSection()];
  if (linkId) styleNavLink(document.getElementById(linkId), trigger);
}

/**
 * Style header navbar links based on the current section.
 * @returns {Object} Map of section ids to header link ids.
 */
function styleHeaderNavbar() {
  currentSection = getCurrentSection();
  if (currentSection === lastSection) return getSectionHeaderMap();

  document.querySelectorAll(".header-link").forEach((link) => {
    link.classList.remove("header-active");
  });
  lastSection = getCurrentSection();
  return getSectionHeaderMap();
}

/**
 * Style burger/menu navbar links based on the current section.
 * @returns {Object} Map of section ids to menu link ids.
 */
function styleBurgerMenuNavbar() {
  document.querySelectorAll(".link-mobile-menu").forEach((link) => {
    link.classList.remove("link-mobile-menu-active");
  });
  return getSectionMenuMap();
}

/**
 * Return mapping of section IDs to header link IDs.
 * @returns {{[sectionId:string]:string}}
 */
function getSectionHeaderMap() {
  return {
    "about-me-section": "header-about-me",
    "my-skills-section": "header-skills",
    "portfolio-section": "header-portfolio",
  };
}

/**
 * Return mapping of section IDs to burger menu link IDs.
 * @returns {{[sectionId:string]:string}}
 */
function getSectionMenuMap() {
  return {
    "about-me-section": "menu-about-me",
    "my-skills-section": "menu-my-skills",
    "portfolio-section": "menu-portfolio",
    "contact-section": "menu-contact",
  };
}

/**
 * Add the active class to a navigation link depending on the trigger.
 * @param {HTMLElement} element Element to style.
 * @param {"header"|"menu"} trigger Origin of the styling change.
 * @returns {void}
 */
function styleNavLink(element, trigger) {
  if (trigger === "header") element.classList.add("header-active");
  else element.classList.add("link-mobile-menu-active");
}

/**
 * Determine the currently visible section on the page.
 * @returns {string|undefined} The id of the current section or undefined.
 */
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

/**
 * Check whether a DOMRect intersects the vertical center of the viewport.
 * @param {DOMRect} rect Bounding rect from `getBoundingClientRect()`.
 * @returns {boolean} True when rect is visible around viewport center.
 */
function isVisible(rect) {
  return (
    rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2
  );
}

// #endregion

// #region scroll animation

/**
 * Get the current vertical scroll position.
 * @returns {number} Scroll Y offset in pixels.
 */
function getScrollTop() {
  return window.pageYOffset || document.documentElement.scrollTop;
}

/**
 * Track scroll direction and return a getter for the current direction.
 * @returns {function():"down"|"up"} Function that returns the last known scroll direction.
 */
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

/**
 * Observe elements with `.fade-in-element` and toggle `.visible` based on intersection.
 * @param {boolean} [languageChange] When true, force elements visible (used on language switch).
 * @returns {void}
 */
function flyInElements(languageChange) {
  const getDirection = initScrollDirectionTracker();
  const observer = createFlyInObserver(getDirection, languageChange);

  document.querySelectorAll(".fade-in-element").forEach((el) => {
    observer.observe(el);

    const rect = el.getBoundingClientRect();
    if (rect.bottom < 0 || rect.top < window.innerHeight)
      el.classList.add("visible");
    else el.classList.remove("visible");
  });
}

/**
 * Create an IntersectionObserver that uses the provided direction getter.
 * @param {function():"down"|"up"} getDirection Getter returning current scroll direction.
 * @param {boolean} languageChange Flag to force visibility when switching language.
 * @returns {IntersectionObserver}
 */
function createFlyInObserver(getDirection, languageChange) {
  return new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) =>
        handleIntersection(entry, getDirection, languageChange),
      );
    },
    { threshold: 0.2 },
  );
}

/**
 * Handle a single IntersectionObserver entry and toggle visibility classes.
 * @param {IntersectionObserverEntry} entry Observer entry for the element.
 * @param {function():"down"|"up"} getDirection Getter returning current scroll direction.
 * @param {boolean} languageChange Flag to force visibility when switching language.
 * @returns {void}
 */
function handleIntersection(entry, getDirection, languageChange) {
  if (languageChange) {
    entry.target.classList.add("visible");
    return;
  }
  if (entry.isIntersecting && getDirection() === "down") {
    entry.target.classList.add("visible");
  } else if (!entry.isIntersecting && getDirection() === "up") {
    entry.target.classList.remove("visible");
  }
}

// #endregion

// #region pricacy policy

/**
 * Initialize the privacy policy page: load language and render content.
 * @returns {void}
 */
function initPrivacyPolicy() {
  getLanguageFromLocalStorage();
  styleLanguageButtons();
  renderPrivacyPolicy();
  renderTexts();
}

/**
 * Render the privacy policy content depending on the active language.
 * @returns {void}
 */
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
