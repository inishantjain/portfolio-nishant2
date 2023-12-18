import project1_image from "./assets/project1.png";
import project2_image from "./assets/project2.png";
import project3_image from "./assets/project3.png";
import project4_image from "./assets/project4.png";
import project5_image from "./assets/project5.png";

export const user = {
  username: "Nishant Jain",
  resumeLink: "https://drive.google.com/", //TODO:
  email: "nishant.jain12@gmail.com",
  github: "https://github.com/inishantjain",
  linkedin: "https://linkedin.com/in/inishantjain",
  title: "Crafting Web Magic ✨: I Develop Web Applications.",
};
export const roles: string[] = [
  "FULL STACK DEVELOPER",
  "BLOCKCHAIN DEVELOPER",
  "BACKEND DEVELOPER",
  "FRONTEND DEVELOPER",
];

export const projects = [
  {
    id: 0,
    title: "NextJS Real Time Chat App",
    img_url: project5_image,
    github_url: "https://github.com/inishantjain/chat-app-nextjs",
    link: "https://chat-app-nish.vercel.app/",
    technologiesIcon: ["nextjs", "redis", "tailwind"],
  },
  {
    id: 1,
    title: "React Ai Project",
    img_url: project4_image,
    github_url: "https://github.com/inishantjain/mystiscript-ai-react",
    link: "https://mystiscript-ai-react.vercel.app/",
    technologiesIcon: ["react", "redux", "node", "express", "prisma", "postgresql", "tailwind"],
  },
  {
    id: 2,
    title: "Edtech Project",
    img_url: project1_image,
    github_url: "https://github.com/inishantjain/Studynotion-megaproject",
    link: "https://studynotion-megaproject.vercel.app/",
    technologiesIcon: ["react", "express", "redux", "node", "mongodb", "mongoose", "tailwind"],
  },
  {
    id: 3,
    title: "Sensor Dashboard",
    img_url: project2_image,
    github_url: "#",
    link: "https://github.com/inishantjain/Sensor-Dashboard",
    technologiesIcon: ["react", "express", "node", "chartjs", "styled components", "mysql"],
  },
  {
    id: 4,
    title: "Portfolio Project",
    img_url: project3_image,
    github_url: "https://github.com/inishantjain/myinitialprojects/tree/main/Portfolio%20Website",
    link: "https://nishant-project-portfolio.netlify.app/",
    technologiesIcon: ["html", "css", "js"],
  },
];

export const about: string[] = [
  `Hello, I'm Nishant. I'm currently immersed in the exciting world of web application development. Hailing from Agra, Uttar Pradesh, I'm pursuing a Bachelor's degree in Electronics and Communication.`,
  `My journey into web development began this year, and it has been a lot of fun. Every day brings new learning opportunities and the chance to work with cutting-edge technologies. This journey is not just about acquiring skills  about building a robust tech stack that can handle the demands of modern web development. In addition to web development.`,
  ` I have a keen interest in Web3 and Blockchain technology and also develop ethereum based Dapps.`,
  `I enjoy working on new projects and sharing my work on my LinkedIn profile. It's a great way to document my progress and connect with other tech enthusiasts.`,
];
