import React from 'react';

export default function Projects() {
  const navigateProject = (direction) => {
    // Define navigation logic here if needed
    console.log(`Navigating ${direction}`);
  };

  return (
    <div id="grid__bl">
      <div id="grid__bl__btn">Projects</div>
      <div id="grid__bl__content">
        <div id="grid__bl__content__projects">
          <div className="project p-1">
            <img className="project__img project-1" src="assets/portfolio-projects/clinic.png" alt="Project 1" />
            <h2 className="project__title">Clinic App</h2>
            <a className="btn" href="https://dental-clinic-app.netlify.app/" target="_blank" rel="noopener noreferrer">
              Demo
            </a>
            <a className="btn" href="https://github.com/BHAVISHEK1/Clinic-App" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          </div>

          <div className="project p-2">
            <img className="project__img project-2" src="assets/portfolio-projects/bookshelf.png" alt="Project 2" />
            <h2 className="project__title">My Bookshelf</h2>
            <a className="btn" href="https://personal-bookshelfs.netlify.app/" target="_blank" rel="noopener noreferrer">
              Demo
            </a>
            <a className="btn" href="https://github.com/BHAVISHEK1/MyBookshelf" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          </div>

          <div className="project p-3">
            <img className="project__img project-3" src="assets/portfolio-projects/webdoodler2.png" alt="Project 3" />
            <h2 className="project__title">Chrome extension</h2>
            <a className="btn" href="https://chromewebstore.google.com/detail/webpage-doodler/lbodekjfnafmhkbaegjapfimodhppepa?hl=en-GB&utm_source=ext_sidebar" target="_blank" rel="noopener noreferrer">
              Demo
            </a>
            <a className="btn" href="https://github.com/BHAVISHEK1/WebDoodler_ChromeExtension" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          </div>

          <div className="project p-4">
            <img className="project__img project-4" src="assets/portfolio-projects/trackspend.png" alt="Project 4" />
            <h2 className="project__title">Money Tracker</h2>
            <a className="btn" href="https://track-as-u-spend.netlify.app/" target="_blank" rel="noopener noreferrer">
              Demo
            </a>
            <a className="btn" href="https://github.com/BHAVISHEK1/mini_projects" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          </div>

          <div className="project p-5">
            <img className="project__img project-5" src="assets/portfolio-projects/sign.png" alt="Project 5" />
            <h2 className="project__title">Sign Scraper</h2>
            <a className="btn" href="https://signscraper.netlify.app/" target="_blank" rel="noopener noreferrer">
              Demo
            </a>
            <a className="btn" href="https://github.com/BHAVISHEK1/mini_projects" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          </div>

          <button className="arrow" onClick={() => navigateProject(-1)}>
            &#10094;
          </button>
          <button className="arrow" onClick={() => navigateProject(1)}>
            &#10095;
          </button>
        </div>
      </div>
    </div>
  );
}
