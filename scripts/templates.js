function projectArticleHTML(project, liveTestText) {
  return `<article class="project-article">
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
                <a href="${project.live_test_url}" class="btn btn-main btn-primary2--filled"
                  >${liveTestText}</a>
                <a
                  href="${project.github_url}"
                  class="btn btn-main btn-primary1--outline"
                  >Github</a>
              </div>
            </div>
          </article>`;
}

function privacyPolicyGermanHTML() {}

function privacyPolicyEnglishHTML() {}
