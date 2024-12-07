// Function to change content with fade effect
function changeContent(newContent) {
  const content = document.getElementById("content");
  content.classList.remove("fade-in");
  content.classList.add("fade-out");

  setTimeout(() => {
    content.innerHTML = newContent;
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
      <h1>Hi, I'm Gogineni Venkata Ateet</h1>
      <p>
        A passionate <strong>Game Developer</strong> and <strong>React Native Developer</strong> focused on building immersive experiences and cross-platform applications.
      </p>
      <a href="#projects-section">
        <button class="cta-button">View My Projects</button>
      </a>
    </div>`;
  changeContent(homeContent);
});

document.getElementById("experience-btn").addEventListener("click", function () {
  removeActiveClass(); // Remove active class from all buttons
  this.classList.add("active"); // Add active class to the clicked button

  const experienceContent = `
    <h2>Professional Experience</h2>
    <ul>
      <li>
        <strong>Associate Game Developer</strong> - PurpleTalk, Hyderabad (11/2023 – Present)
        <ul>
          <li>Designed and developed engaging 2D games using Unity, incorporating animations, sound effects, and interactive gameplay mechanics.</li>
          <li>Led build size optimization efforts, reducing game build size by up to 30% through advanced asset management and compression techniques.</li>
          <li>Implemented interactive features such as leaderboards, achievements, and in-app purchases, enhancing player retention and engagement.</li>
          <li>Worked closely with the design team to ensure seamless integration of visual and gameplay elements.</li>
          <li>Used performance profiling tools to identify bottlenecks and optimize memory usage for stable performance on low-end devices.</li>
        </ul>
      </li>
      <li>
        <strong>Trainee Game Developer</strong> - PurpleTalk, Hyderabad (07/2022 – 11/2023)
        <ul>
          <li>Contributed to the development of 2D games using Unity, focusing on gameplay logic, animations, and UI/UX elements.</li>
          <li>Collaborated in an Agile development environment to meet project deadlines and deliver polished game features.</li>
          <li>Assisted in debugging and resolving performance issues, ensuring smooth gameplay across devices.</li>
          <li>Created reusable code modules and tools to improve development efficiency for future projects.</li>
        </ul>
      </li>
      <li>
        <strong>Intern</strong> - PurpleTalk, Hyderabad (01/2022 – 06/2022)
        <ul>
          <li>Gained hands-on experience with Unity and game development fundamentals by supporting the team in asset management and prototyping game features.</li>
          <li>Assisted in testing and optimizing game performance during the development cycle.</li>
          <li>Documented workflows and processes to streamline the team's development practice.</li>
        </ul>
      </li>
    </ul>`;
  changeContent(experienceContent);
});

document.getElementById("projects-btn").addEventListener("click", function () {
  removeActiveClass(); // Remove active class from all buttons
  this.classList.add("active"); // Add active class to the clicked button

  const projectsContent = `
    <h2>My Projects</h2>
    <ul>
      <li><strong>Clash:</strong> React Native app with real-time updates and payment gateway integration.</li>
      <li><strong>Rummy:</strong> Unity-based interactive game optimized for mobile platforms.</li>
      <li><strong>GamePe:</strong> Hybrid app combining Unity and React Native for real-time interactions.</li>
      <li><strong>Slot Stream:</strong> Live-streamed slot gaming platform with social interaction features.</li>
    </ul>`;
  changeContent(projectsContent);
});

document.getElementById("resume-btn").addEventListener("click", function () {
  removeActiveClass(); // Remove active class from all buttons
  this.classList.add("active"); // Add active class to the clicked button

  const resumeContent = `
  <h2>Resume</h2>
  <p><strong>Email:</strong> ateetgogeneni@outlook.com</p>
  <p><strong>Phone:</strong> (+91) 9618325678</p>
  <p><strong>LinkedIn:</strong> <a href="#" target="_blank">venkata-ateet-gogineni</a></p>
  <h3>Education</h3>
  <p>Bachelor of Technology in Computer Science,</p>
  <p>Malla Reddy College Of Engineering and Technology, Hyderabad (2021)</p>
  <h3>GitHub</h3>
  <p><a href="https://github.com/ateetgogineni?tab=repositories" target="_blank">
      <button style="padding: 10px 20px; background-color: #f39c12; border: none; border-radius: 10px; color: black; cursor: pointer;">
        View My GitHub Repositories
      </button>
    </a>
  </p>
  <h3>Download Resume</h3>
  <p><a href="assets/Gogineni_Venkata_Ateet_Resume_1.pdf" download>
      <button style="padding: 10px 20px; background-color: #f39c12; border: none; border-radius: 10px; color: black; cursor: pointer;">
        Download My Resume (PDF)
      </button>
    </a>
  </p>`;
changeContent(resumeContent);
});
