// Website Content Data
const websiteData = {
  // Personal Information
  personal: {
    name: "Venkata Ateet Gogineni",
    currentDesignation: "Software Engineer",
    title: "Game Developer",
    subtitle: "React Native Developer",
    description: `
      <p><strong>🎮 Game Developer & Mobile App Engineer</strong> with 3+ years of experience in Unity, C#, and React Native</p>
      <p><strong>🚀 Specialized in:</strong> Cross-platform Unity–React Native integrations, performance-optimized mobile apps, and immersive gameplay systems</p>
      <p><strong>💡 Passionate about:</strong> Innovation, collaborative problem-solving, and delivering engaging user experiences on Android and iOS</p>
    `,
    githubUrl: "https://github.com/ateetgogineni?tab=repositories",
    linkedinUrl: "https://linkedin.com/in/venkata-ateet-gogineni",
    linkedinHandle: "venkata-ateet-gogineni",
    email: "ateetgogeneni@outlook.com",
    phone: "(+91) 9618325678"
  },

  // Experience Data
  experience: {
    title: "Professional Experience",
    jobs: [
      {
        position: "Software Engineer",
        company: "PurpleTalk",
        duration: "Sep 2025 - Present",
        responsibilities: [
          "Collaborated in Unity to develop a narrative-based game, focusing on immersive storytelling elements.",
          "Utilized AWS for efficient bundle storage and Google Cloud for data path management, enhancing gameplay performance.",
          "Leveraged Yarn for narrative structure implementation, facilitating dynamic and engaging content delivery.",
          "Developed a plugin to generate text-to-image features, supporting localization for both Android and iOS platforms, which expanded user accessibility."
        ]
      },
      {
        position: "Associate Analyst Engineer",
        company: "PurpleTalk",
        duration: "Aug 2022 - Sep 2025",
        responsibilities: [
          "Developed cross-platform mobile applications and games using Unity and React Native.",
          "Engineered innovative Unity-React Native bridge solutions, significantly enhanced app performance and user experience.",
          "Designed and implemented engaging gameplay mechanics while optimizing application performance for scalability across Android and iOS platforms.",
          "Conducted feature development and stability enhancements, leading to a robust, user-friendly application.",
          "Efficiently debugged and resolved technical issues, resulting in improved overall app performance and increased user satisfaction.",
          "Collaborated in agile workflows, utilizing Git for version control to streamline project management and development processes.",
          "Integrated Firebase and APIs to enhance app functionality and boost user engagement.",
          "Demonstrated strong problem-solving skills by rapidly learning new technologies and adapting to dynamic project requirements."
        ]
      },
      {
        position: "Trainee Software Engineer",
        company: "PurpleTalk",
        duration: "Aug 2022 - Oct 2023",
        responsibilities: [
          "Contributed to the integration of SDKs for Clash application, utilizing React Native and Unity technologies to enhance gameplay experiences.",
          "Developed and integrated a multiplayer Rummy game in Unity, implementing server integration to support real-time player interactions.",
          "Executed the Unity-native bridge support for GamePe, facilitating regional language support and broadening user accessibility.",
          "Collaborated with cross-functional teams to ensure seamless integration of game features and improved overall performance across platforms."
        ]
      },
      {
        position: "Intern",
        company: "PurpleTalk, Hyderabad", 
        duration: "01/2022 – 06/2022",
        responsibilities: [
          "Gained hands-on experience with Unity and game development fundamentals by supporting the team in asset management and prototyping game features.",
          "Assisted in testing and optimizing game performance during the development cycle.",
          "Documented workflows and processes to streamline the team's development practice."
        ]
      }
    ]
  },

  // Projects Data
  projects: {
    title: "My Projects",
    projectList: [
      {
        name: "Bigg Boss: The Game",
        description: "An advanced reality-based narrative game featuring expanded gameplay mechanics, enhanced narrative, and multi-language support for Android and iOS.",
        details: [
          "Implemented regional language support (localization) in Unity, overcoming native limitations by developing a custom plugin that converts text to images via Android/iOS native code and dynamically renders them in-game.",
          "Managed asset bundle handling for efficient loading of game assets and themes.",
          "Added narrative dialogue audio support, ensuring immersive storytelling with synchronized voice-over playback.",
          "Collaborated with cross-platform teams to optimize performance and maintain feature parity on both Android and iOS."
        ],
        links: []
      },
      {
        name: "Big Brother: The Game",
        description: "A high-stakes reality-based narrative game where players compete in challenges, make strategic choices, and navigate unpredictable storylines to become the ultimate house champion.",
        details: [
          "Implemented gameplay features and performed bug fixes to enhance narrative flow and player experience.",
          "Integrated Xsolla Web Store for in-game purchases and monetization within the Unity game.",
          "Learned and utilized Yarn scripting system for dialogue and narrative branching to manage interactive storylines."
        ],
        links: [
          { name: "Play Store", url: "https://play.google.com/store/apps/details?id=com.purpletalk.bigbrother" },
          { name: "App Store", url: "https://apps.apple.com/app/big-brother-the-game/id1234567890" }
        ]
      },
      {
        name: "Slot Stream",
        description: "A cross-platform slot machine game combining React Native and Unity WebGL, offering multiple themed slot games with immersive visuals, sound, and daily rewards.",
        details: [
          "Developed React Native front-end to handle user data, AWS integration, and game session management.",
          "Implemented Unity WebGL slot games divided by themes, loaded dynamically in React Native WebView.",
          "Designed and managed React Native ↔ Unity communication using DOM-based messaging to control game flow, update scores, start/stop games, and load next game.",
          "Optimized performance and user experience across mobile devices by synchronizing WebView and Unity states effectively.",
          "Collaborated with backend and design teams to integrate real-time game metrics and scoring."
        ],
        links: [
          { name: "Play Store", url: "https://play.google.com/store/apps/details?id=com.purpletalk.slotstream" }
        ]
      },
      {
        name: "Blackjack",
        description: "A real-time multiplayer 1 vs N Blackjack card game built entirely in Unity, where multiple players compete against a dealer in synchronized online sessions.",
        details: [
          "Handled complete client-side game logic including card distribution, player actions, and round-based win/loss calculations.",
          "Developed and managed all UI components, such as betting panels, scoreboards, and result animations.",
          "Implemented real-time synchronization with the server, ensuring accurate session flow and consistent multiplayer behavior.",
          "Collaborated with backend developers to refine socket message structures and ensure seamless gameplay communication."
        ],
        links: []
      },
      {
        name: "GamePe",
        description: "A full-fledged Unity-based gaming platform featuring live multiplayer games such as Tambola, Ludo, Snakes & Ladders, and Gin Rummy, along with live hosts, leaderboards, and chat-based community interactions.",
        details: [
          "Worked on integration of Cricket Clash game into the GamePe platform with optimized performance and UI consistency.",
          "Implemented complete application and chat localization, adding multilingual support across all in-game systems.",
          "Overcame Unity's native localization limitations by designing a custom localization framework for text and UI elements.",
          "Collaborated with design and QA teams to test multi-language layouts and ensure compatibility across regions."
        ],
        links: [
          { name: "Play Store", url: "https://play.google.com/store/apps/details?id=com.purpletalk.gamepe" }
        ]
      },
      {
        name: "Rummy",
        description: "A real-time multiplayer Rummy card game built in Unity, featuring interactive gameplay, server synchronization, and dynamic UI updates based on live data.",
        details: [
          "Developed complete client-side game logic and managed real-time communication with the multiplayer server.",
          "Designed and implemented responsive UI and lobby systems, dynamically populated from live server data.",
          "Integrated the Rummy module into the Clash React Native platform through Unity SDK bridging.",
          "Collaborated with backend developers to ensure smooth gameplay data flow and optimize performance."
        ],
        links: []
      },
      {
        name: "Clash - Games & Group Chats",
        description: "A multiplayer gaming platform where users compete in 1v1 and tournament battles across 12 arcade-style games, featuring real-time matchmaking and reward-based gameplay.",
        details: [
          "Integrated Unity-based games into a React Native app through a custom SDK bridge for seamless cross-engine performance.",
          "Worked on Cricket Clash and Deer Hunt Unity 3D modules, ensuring stable communication between Unity and React Native layers.",
          "Collaborated with backend and UI teams to optimize loading performance and game transitions across Android and iOS."
        ],
        links: [
          { name: "Play Store", url: "https://play.google.com/store/apps/details?id=com.purpletalk.clash" }
        ]
      }
    ]
  },

  // Resume/Education Data
  resume: {
    title: "Resume",
    education: {
      degree: "Bachelor of Technology in Computer Science",
      institution: "Malla Reddy College Of Engineering and Technology, Hyderabad",
      year: "(2021)"
    },
    resumeFile: "assets/Gogineni_Venkata_Ateet_Resume.pdf"
  },

  // Button Labels
  buttons: {
    home: "Home",
    experience: "Experience", 
    projects: "Real Time Projects",
    resume: "Resume",
    viewProjects: "View My Projects",
    downloadResume: "Download My Resume (PDF)",
    viewGithub: "View My GitHub Repositories"
  },

  // Section Headings
  headings: {
    education: "Education",
    github: "GitHub",
    downloadResume: "Download Resume"
  }
};