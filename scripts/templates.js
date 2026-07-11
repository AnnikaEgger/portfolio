function projectArticleHTML(project) {
  return `<article class="project-article">
            <div class="project-preview">
              <img
                src="${project.img_src}"
                alt="${project.alt_text}"
              />
            </div>
            <div class="project-information">
              <h3>${project.title}</h3>
              <p class="project-skills">${project.skills}</p>
              <p class="project-description">${project.description}</p>
              <div class="project-btns">
                <a href="${project.live_test_url}" class="btn btn-main btn-primary2--filled"
                  >Live test</a>
                <a
                  href="${project.github_url}"
                  class="btn btn-main btn-primary1--outline"
                  >Github</a>
              </div>
            </div>
          </article>`;
}
