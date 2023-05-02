export const APP_CONSTANTS = {
  username: "Syed Ali Haider Abedi",
  profilePicture: require("../../assets/profle.png"),
  greetingsOBJ: {
    greetingText: function () {
      return `Hi I am ${APP_CONSTANTS.username}`;
    },
    greetingGIF: {
      gifLink: "https://media.giphy.com/media/hvRJCLFzcasrR4ia7z/giphy.gif",
      gifWidth: "width:40px",
    },
  },
  introductionOBJ: {
    position: "A Software Engineer",
    introduction:
      "who loves making web apps with Javascript/ VueJs/ Laravel Rest and some other cool libraries and frameworks",
    introductionGIF: {
      gifLink: require("../../assets/rocket.png"),
      gifWidth: "width:20px",
    },
    introImage: {
      imgLink: "https://media.giphy.com/media/zhYSVCirREeIZtONCI/giphy.gif",
      style: "max-width:650px",
    },
  },
  profession: {
    title: "What I do",
    body: "Make Web apps with awesome technologies",
    sideImage: {
      style: "max-width:650px",
      imgLink: "https://media.giphy.com/media/juua9i2c2fA0AIp2iq/giphy.gif",
    },
    technologies: {
      iconsSize: "xl",
      iconsList: [
        { iconColor: "orange", icon: "mdi-language-html5" },
        { iconColor: "blue-6", icon: "mdi-language-css3" },
        { iconColor: "yellow-8", icon: "mdi-language-javascript" },
        { iconColor: "blue-9", icon: "mdi-language-python" },
        { iconColor: "green", icon: "mdi-vuejs" },
        { iconColor: "red", icon: "mdi-npm" },
        { iconColor: "blue", icon: "mdi-database" },
        { iconColor: "black", icon: "mdi-github" },
        { iconColor: "red", icon: "mdi-git" },
      ],
    },
    skills: {
      skillIcon: { iconColor: "yellow-9", icon: "mdi-lightning-bolt" },
      skillList: [
        "Develop Highly interactive Front end Apps",
        "Develop Maintainable Backend Services",
      ],
    },
  },
  proficiecy: {
    title: "Proficiency",
    skills: {
      minSliderVal: 0,
      maxSliderVal: 10,
      sliderColor: "purple-4",
      thumbColor: "purple-4",
      innerTrackColor: "white",
      trackSize: "13px",
      thumbSize: "0px",
      skillList: [
        { title: "Frontend/Design", sliderValue: 6 },
        { title: "Programming", sliderValue: 5 },
        { title: "Backend", sliderValue: 3 },
      ],
    },
  },
  openSourceProjs: {
    title: "Open Source Projects",
    titleIcon: "mdi-book",
    languageConf: {
      icon: "mdi-circle",
      iconColor: "pink",
      iconSize: "sm",
    },
    starsConf: {
      icon: "mdi-star",
      iconColor: "yellow-9",
      iconSize: "md",
    },
    pullReqsConf: {
      icon: "mdi-source-pull",
      iconColor: "",
      iconSize: "md",
    },
    projects: [
      {
        projTitle: "Miceloc",
        projLink: "https://github.com/iamshah26/Miceloc",
        projDesc:
          "Hotel management landing page. Personally, worked on all the mechanics implemented in the vuejs as well as some level of state managment",
        stars: 0,
        language: "Vuejs",
        pullReqs: 0,
      },
      {
        projTitle: "Ecommerce Website",
        projLink: "https://github.com/iamshah26/Eccomerce-website22",
        projDesc:
          "A single page application made with reactjs that shows you recent releases, top rated, upcoming and recently released products along with the search capabilities.",
        stars: 0,
        language: "Reactjs",
        pullReqs: 0,
      },
      {
        projTitle: "JetClass Landing page",
        projLink: "https://github.com/iamshah26/jetclass",
        projDesc:
          "A Bootstrap project to create a landing page of live project.",
        stars: 0,
        language: "Html/Bootstrap",
        pullReqs: 0,
      },
      {
        projTitle: "Voltro Website",
        projLink: "https://github.com/iamshah26/voltro-website",
        projDesc: "A Html/Css project for the front end app.",
        stars: 0,
        language: "Html/Css",
        pullReqs: 0,
      },
      {
        projTitle: "Todolist",
        projLink: "https://github.com/iamshah26/TodoList",
        projDesc: "Todolist in which CRUD operation is performed",
        stars: 0,
        language: "Vuejs",
        pullReqs: 0,
      },
      {
        projTitle: "Tranlation Web App",
        projLink: "https://github.com/iamshah26/Translation-app",
        projDesc:
          "A Chat Application made using javascript which translates and speak any langauge ",
        stars: 0,
        language: "Javascript",
        pullReqs: 0,
      },
    ],
  },
  achievements: {
    title: "Achievements & Certifications",
    desc: "ACHIVEMENTS, CERTIFICATIONS, AWARD LETTERS AND SOME COOL STUFF I HAVE DONE!",
    certificationImgStyle: "",
    certifications: [
      {
        title: "JavaScript Algorithms and Data Structures",
        position: "FreeCodeCamp 2023",
        desc: "Representing approximately 300 hours of coursework",
        imageLink: require("../../assets/JS.webp"),
        imageStyle: "max-width:400px",
        imgSectionHeight: "height:320px",
      },
      {
        title: "Product Management Certificatte",
        position: "GREAT LEARNING 2023",
        desc: "Completed Great Learning Certified: Product Management certification",
        imageLink: require("../../assets/PM.webp"),
        imageStyle: "max-width:400px",
        imgSectionHeight: "height:320px",
      },
    ],
  },
  experiences: {
    title: "Experiences",
    expList: [
      {
        entityName: "Voltro By Falkenherz",
        expCardBg: "bg-green-8",
        entityLogo: {
          logo: require("assets/ExperiencesImages/voltro.png"),
          style: "top: 151px",
        },
        position: "Software Engineer Intern",
        duration: "Oct 2022-April-2023",
        description:
          "Voltro value integrity, innovation, excellence, transparency, accountability, and selflessness, all to make our customers and ourselves successful.Provide world-class reliable quality digital services",
        responsibilities: [
          "Responsible for conceptualizing and executing clear, quality code to develop the best software",
          "Contributed in Edtech systems and Websites using Vue JS - Vuetify/Quasar framework - Laravel - Javascript - Docker",
        ],
      },
      {
        entityName: "Pixarsart Studios",
        expCardBg: "bg-yellow-9",

        entityLogo: {
          logo: require("assets/ExperiencesImages/pixarsart.jpg"),
          style: "top: 111px",
        },
        position: "Project Cordinator Intern",
        duration: "August 2022-September 2022",
        description:
          "At Pixarsart our aim is to create the most effective online presence for your brand. We use the latest technology to provide you with the most intuitive solutions to cater to all your business needs. We want to see your business thrive.",
        responsibilities: [
          "Ensuring the schedule, budget and details of a given task are well organized.Communicate with various departments to keep everyone on board about any changes to the project plan.",
          " In addition,organize reporting, plan meetings and provide updates to project managers.",
        ],
      },

      {
        entityName: "Fiver",
        expCardBg: "bg-green-9",

        entityLogo: {
          logo: require("assets/ExperiencesImages/Fiver.png"),
          style: "top: 110px",
        },
        position: "Virtual Assistant At Amazon",
        duration: "Aug 2019-oct 2019",
        description:
          "Fiver is a platform for enthusiastic free lancers where tons of niche experts provide their services to needy clients.",
        responsibilities: [
          "Responsible for conceptualizing, product hunting and creating innovative listing for the products.",
          "Responsible for using tools like Jungle Scout , Helium10 , Viral Box and Google trends to manage large scale products",
          "Creating and fixing mechanics for different products",
        ],
      },
      {
        entityName: "Inkeshaf Film and Theatre",
        expCardBg: "bg-blue-5",

        entityLogo: {
          logo: require("assets/ExperiencesImages/comsats.png"),
          style: "top: 150px",
        },
        position: "Member",
        duration: "Feb 2019 – Sep 2020",
        description:
          "Organized and executed film screenings and discussion panels, engaging with a diverse range of audiences to facilitate meaningful conversations about social and cultural issues.",
        responsibilities: [
          "Collaborated with a team of writers, actors, and directors to produce multiple theatre productions, including contributing to the script development, staging, and performances.",
          "Developed strong organizational, communication, and leadership skills through regular meetings, event planning, and coordination with external partners",
        ],
      },
    ],
  },
  socialMediaLinks: {
    facebook: "https://www.facebook.com/Abedishah26/",
    linkedin: "https://www.linkedin.com/in/saeyad-haider-09a743233/",
    github: "https://github.com/iamshah26?tab=repositories",
    twitter: "https://twitter.com/haiderabedi26",
    gmail: "haiderabedi26z@gmail.com",
  },
};
