// Function to change content with fade effect
function changeContent(newContent, backgroundClass = null) {
  const content = document.getElementById("content");
  content.classList.remove("fade-in");
  content.classList.add("fade-out");

  setTimeout(() => {
    content.innerHTML = newContent;
    
    // Handle background class changes during transition
    if (backgroundClass) {
      document.body.classList.remove('home-page', 'resume-page');
      document.body.classList.add(backgroundClass);
    } else {
      document.body.classList.remove('home-page', 'resume-page');
    }
    
    content.classList.remove("fade-out");
    content.classList.add("fade-in");
  }, 500); // Match fade-out duration in CSS
}

// Remove active class from all buttons
function removeActiveClass() {
  const buttons = document.querySelectorAll(".navbar button");
  buttons.forEach(button => button.classList.remove("active"));
}

// Add event listeners for buttons
document.getElementById("home-btn").addEventListener("click", function () {
  removeActiveClass(); // Remove active class from all buttons
  this.classList.add("active"); // Add active class to the clicked button
  
  const homeContent = `
    <div id="home-section">
      <h1>Hi, I'm ${websiteData.personal.name}</h1>
      <h2 style="color: #f39c12; font-size: 1.5em; margin-bottom: 20px;">${websiteData.personal.currentDesignation}</h2>
      <p>
        ${websiteData.personal.description}
      </p>
    </div>`;
  changeContent(homeContent, 'home-page');
});

document.getElementById("experience-btn").addEventListener("click", function () {
  removeActiveClass(); // Remove active class from all buttons
  this.classList.add("active"); // Add active class to the clicked button

  const experienceContent = `
    <h2>${websiteData.experience.title}</h2>
    <ul>
      ${websiteData.experience.jobs.map(job => `
        <li>
          <strong>${job.position}</strong> - ${job.company} (${job.duration})
          <ul>
            ${job.responsibilities.map(responsibility => `<li>${responsibility}</li>`).join('')}
          </ul>
        </li>
      `).join('')}
    </ul>`;
  changeContent(experienceContent);
});

document.getElementById("projects-btn").addEventListener("click", function () {
  removeActiveClass(); // Remove active class from all buttons
  this.classList.add("active"); // Add active class to the clicked button

  const projectsContent = `
    <h2>${websiteData.projects.title}</h2>
    <div>
      ${websiteData.projects.projectList.map(project => `
        <div style="background-color: #2c3e50; margin-bottom: 25px; padding: 20px; border-radius: 10px; transition: background-color 0.3s ease;">
          <h3 style="color: #f39c12; font-size: 1.4em; margin-bottom: 10px;">
            ${project.name}
            ${project.links && project.links.length > 0 ? 
              project.links.map(link => `<a href="${link.url}" target="_blank" style="margin-left: 10px; color: #3498db; text-decoration: none; font-size: 0.8em;">[${link.name}]</a>`).join('') 
              : ''
            }
          </h3>
          <p style="color: #ecf0f1; margin-bottom: 15px; font-size: 1.1em;">${project.description}</p>
          ${project.details && project.details.length > 0 ? `
            <ul style="margin-top: 10px; padding-left: 20px;">
              ${project.details.map(detail => `<li style="color: #bdc3c7; margin-bottom: 8px;">${detail}</li>`).join('')}
            </ul>
          ` : ''}
        </div>
      `).join('')}
    </div>`;
  changeContent(projectsContent);
});

document.getElementById("resume-btn").addEventListener("click", function () {
  removeActiveClass(); // Remove active class from all buttons
  this.classList.add("active"); // Add active class to the clicked button

  const resumeContent = `
    <div style="text-align: center; padding: 50px 20px;">
      <p style="color: #ecf0f1; font-size: 1.2em; margin-bottom: 40px;">Download my complete resume to know more about my experience and skills.</p>
      <a href="${websiteData.resume.resumeFile}" download>
        <button style="padding: 15px 30px; background-color: #f39c12; border: none; border-radius: 10px; color: black; cursor: pointer; font-size: 1.2em; transition: background-color 0.3s ease;" onmouseover="this.style.backgroundColor='#e67e22'" onmouseout="this.style.backgroundColor='#f39c12'">
          ${websiteData.buttons.downloadResume}
        </button>
      </a>
    </div>`;
  changeContent(resumeContent, 'resume-page');
});
