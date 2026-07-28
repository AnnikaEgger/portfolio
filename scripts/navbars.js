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
