const Projects: Project[] = [
  {
    id: "gamepeople-emulator",
    title: "Gamepeople Emulator",
    description: "A Gameboy emulator",
    image: require("../assets/images/under-construction.png").default,
    type: "Emulator",
    buttons: {
      github: "https://github.com/Creampelt/gamepeople-emulator"
    },
    hidden: false,
    incomplete: true
  },
  {
    id: "simple-subs",
    title: "Simple Subs",
    description: "A simple lunch-ordering app for Lick-Wilmerding High School",
    image: require("../assets/images/project-screenshots/simple-subs.png").default,
    type: "Mobile and Web App",
    buttons: {
      ios: "https://apps.apple.com/us/app/simplesubs/id1464274843",
      android: "https://play.google.com/store/apps/details?id=org.lwhs.simplesubs",
      web: "https://simple-subs-app.web.app",
      github: "https://github.com/SimpleSubs/mobile-app"
    },
    hidden: false,
    incomplete: false
  },
  {
    id: "simple-subs-console",
    title: "Simple Subs Admin Console",
    description: "A console where cafeteria staff can view existing orders and users and update the menu and profile information",
    image: [],
    type: "Web App",
    buttons: {
      web: "https://simple-subs.web.app",
      github: "https://github.com/SimpleSubs/admin-console"
    },
    hidden: true,
    incomplete: false
  },
  {
    id: "simple-subs-printer",
    title: "Simple Subs Printer",
    description: "A console where cafeteria staff can view existing orders and users and update the menu and profile information",
    image: [],
    type: "Command-line",
    buttons: {
      github: "https://github.com/SimpleSubs/automatic-printer"
    },
    hidden: true,
    incomplete: false
  },
  {
    id: "hyphen-hacks-helper",
    title: "Hyphen-Hacks Helper",
    description: "App for annual, student-organized school hackathon to help attendees navigate the event",
    image: require("../assets/images/project-screenshots/hyphen-hacks-helper/announcements.jpg").default,
    type: "Mobile",
    buttons: {
      ios: "https://apps.apple.com/us/app/hyphen-hacks-helper/id1483173457",
      android: "https://play.google.com/store/apps/details?id=com.hyphenhacks.main",
      github: "https://github.com/hyphen-hacks/hyphen-hacks-mobile"
    },
    hidden: false,
    incomplete: false
  },
  {
    id: "sv-for-pete",
    title: "Silicon Valley for Pete",
    description: "Website for grassroots campaign organization Silicon Valley for Pete",
    image: [
      require("../assets/images/project-screenshots/sv-for-pete/pete_home.jpg").default,
      require("../assets/images/project-screenshots/sv-for-pete/pete_sign_up.jpg").default
    ],
    type: "Website",
    buttons: {
      github: "https://github.com/Creampelt/pete-website"
    },
    hidden: false,
    incomplete: false
  },
  {
    id: "missfits-website",
    title: "Missfits Website",
    description: "Team website for FIRST Robotics Competition Team 6418: The Missfits",
    image: [
      require("../assets/images/project-screenshots/missfits-website/home.jpg").default,
      require("../assets/images/project-screenshots/missfits-website/outreach.jpg").default
    ],
    type: "Website",
    buttons: {
      web: "https://team6418.org",
      github: "https://github.com/Creampelt/missfits-website"
    },
    hidden: false,
    incomplete: false
  },
  {
    id: "tuner-cli",
    title: "Tuner CLI",
    description: "Command-line interface to calculate the pitch, frequency, and intonation of .wav files",
    image: [
      require("../assets/images/project-screenshots/tuner-cli/tuner--help.jpg").default,
      require("../assets/images/project-screenshots/tuner-cli/a441.png").default
    ],
    type: "Command-line",
    buttons: {
      github: "https://github.com/Creampelt/tuner-cli"
    },
    hidden: false,
    incomplete: false
  },
  {
    id: "lamp",
    title: "Lamp",
    description: "LED lamp inspired by the form of bioluminescent millipedes",
    image: require("../assets/images/project-screenshots/lamp/final-model.jpg").default,
    type: "Tech Arts",
    hidden: false,
    incomplete: false
  },
  {
    id: "chair",
    title: "Chair",
    description: "Folding, industrial-style chair",
    image: require("../assets/images/project-screenshots/chair/unfolded.jpg").default,
    type: "Tech Arts",
    hidden: false,
    incomplete: false
  },
  {
    id: "speaker",
    title: "Speaker",
    description: "Bluetooth speaker with pitch and volume reactive LEDs",
    image: require("../assets/images/project-screenshots/speaker/full-shot.jpg").default,
    type: "Tech Arts",
    buttons: {
      github: "https://gist.github.com/Creampelt/1b61be5f5196f39ff682ea6d3a81968d"
    },
    hidden: false,
    incomplete: false
  }
];

export default Projects;