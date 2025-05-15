import { FaPaintBrush } from "react-icons/fa";
import { SiCodechef, SiCodeforces, SiLeetcode, SiPython } from "react-icons/si";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { FaCodeCompare } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { BsWhatsapp } from "react-icons/bs";
import {
  project1,
  project2,
  project3,
  project4,
  project5,
  project6,
  figma,
  canva,
  css,
  html,
  javascript,
  tailwind,
  bootstrap,
  react,
  nodejs,
  python,
  cpp,
  swift,
  emailicon,
  messengericon,
  whatsappicon,
} from "./assets";

export const menu = [
  { name: "About" },
  { name: "Services" },
  { name: "Skills" },
  { name: "Projects" },
  { name: "Contact" },
];

export const services = [
  {
    title: "UI/UX Design",
    icon: <FaPaintBrush />,
    description: `Crafting visually stunning and user-centric designs that ensure seamless user experiences. 
                  From wireframes to high-fidelity prototypes, I focus on creating intuitive interfaces that 
                  blend creativity and functionality, enhancing engagement and usability.`,
  },
  {
    title: "Web Development",
    icon: <FaCodeCompare />,
    color: "blueviolet",
    colorRGB: "138, 43, 226",
    description: `Building responsive, dynamic, and high-performance websites tailored to your needs. 
    Using modern technologies like React, Node.js, and more, I ensure your site is optimized 
    for speed, scalability, and accessibility, delivering a robust online presence.`,
  },
  {
    title: "Python Developer",
    icon: <SiPython />,
    color: "var(--color-success)",
    colorRGB: "var(--color-success-rgb)",
    description: `I am proficient in the core concepts of Python and capable of building small-scale applications, 
    automating tasks, and writing clean, readable code. I understand how to use Python built-in data types, 
    control structures, functions, and libraries to create efficient and practical solutions.`,
  },
];

export const projects = [
  {
    title: "Nature Page",
    image: project1,
    category: "Web",
    description: `The Nature Page is a beautifully designed website that showcases the beauty of nature through visually appealing images and informative content. Built using HTML, CSS, and Figma, it provides a seamless and engaging user experience.`,
    demoLink: "https://github.com/tanmay-7706/Nature_Page",
    stacks: [
      {
        name: "HTML",
        logo: html,
      },
      {
        name: "CSS",
        logo: css,
      },
      {
        name: "Figma",
        logo: figma,
      }
    ],
  },
  {
    title: "AI Landing Page",
    image: project2,
    category: "Web",
    description: `The AI Landing Page is a visually engaging single-page website designed to showcase AI-related products or services. Built using HTML, CSS, and JavaScript, this project demonstrates proficiency in front-end development and responsive design.`,
    demoLink: "https://github.com/tanmay-7706/AI_Landing_Page",
    stacks: [
      {
        name: "HTML",
        logo: html,
      },
      {
        name: "CSS",
        logo: css,
      },
      {
        name: "JavaScript",
        logo: javascript,
      },
    ],
  },
  {
    title: "MovDVD",
    image: project3,
    category: "Web",
    description: `MovDVD is a dynamic web-series recommendation platform designed to assist users in discovering films based on their preferences. It fetches data from an external API to provide real-time movie suggestions using JavaScript, HTML, and CSS.`,
    demoLink: "https://github.com/tanmay-7706/MovDVD",
    stacks: [
      {
        name: "HTML",
        logo: html,
      },
      {
        name: "CSS",
        logo: css,
      },
      {
        name: "JavaScript",
        logo: javascript,
      },
    ],
  },
  {
    title: "Speech Converter",
    image: project4,
    category: "Web",
    description: `The Speech Converter is a web-based application that converts text into speech. It uses the Web Speech API to synthesize speech and is built using HTML, CSS, and JavaScript, providing an interactive and accessible tool.`,
    demoLink: "https://github.com/tanmay-7706/Speech-Converter",
    stacks: [
      {
        name: "HTML",
        logo: html,
      },
      {
        name: "CSS",
        logo: css,
      },
      {
        name: "JavaScript",
        logo: javascript,
      },
    ],
  },
  {
    title: "FlowNest",
    image: project5,
    category: "Web",
    description: `FlowNest is a project management and team collaboration platform built with React and Vite. It integrates ESLint for code quality and is designed to help teams efficiently manage tasks, communicate, and track project progress.`,
    demoLink: "https://flownest.vercel.app",
    stacks: [
      {
        name: "React",
        logo: react,
      },
      {
        name: "JavaScript",
        logo: javascript,
      },
      {
        name: "Tailwind CSS",
        logo: tailwind,
      },
      {
        name: "Figma",
        logo: figma,
      }
    ],
  },
  {
    title: "My Portfolio",
    image: project6,
    category: "Web",
    description: `The Portfolio project showcases a personalized, responsive web portfolio. Built using modern web technologies, it highlights my skills, projects, and achievements, providing an interactive platform for potential employers and collaborators.`,
    demoLink: "https://github.com/tanmay-7706/Portfolio",
    stacks: [
      {
        name: "React",
        logo: react,
      },
      {
        name: "JavaScript",
        logo: javascript,
      },
      {
        name: "Tailwind CSS",
        logo: tailwind,
      },
      {
        name: "canva",
        logo: canva,
      },

    ],
  },
];


export const skills = [
  {
    title: "UI/UX",
    data: [
      {
        skill: "Figma",
        level: "Experienced",
        logo: figma,
      },
      {
        skill: "Canva",
        level: "Intermediate",
        logo: canva,
      },
    ],
  },
  {
    title: "Programming Languages",
    data: [
      {
        skill: "Python",
        level: "Intermediate",
        logo: python,
      },
      {
        skill: "C++",
        level: "Intermediate",
        logo: cpp,
      },
      {
        skill: "Swift",
        level: "Basic",
        logo: swift,
      },
    ],
  },
  {
    title: "Frontend Development",
    data: [
      {
        skill: "HTML",
        level: "Experienced",
        logo: html,
      },
      {
        skill: "CSS",
        level: "Experienced",
        logo: css,
      },
      {
        skill: "JavaScript",
        level: "Experienced",
        logo: javascript,
      },
      {
        skill: "Tailwind",
        level: "Intermediate",
        logo: tailwind,
      },
      {
        skill: "Bootstrap",
        level: "Intermediate",
        logo: bootstrap,
      },
      {
        skill: "React",
        level: "Intermediate",
        logo: react,
      },
      {
        skill: "Node JS",
        level: "Basic",
        logo: nodejs,
      },
    ],
  },
];
export const contactInfo = [
  {
    name: "Email",
    value: "tanmaysingh7706@gmail.com",
    link: "mailto:tanmaysingh7706@gmail.com",
    icon: emailicon,
    btnIcon: <MdOutlineEmail />,
    color: "rgb(56,115,205)",
  },
  {
    name: "Messenger",
    value: "Tanmay Singh",
    link: "http://m.me/profile?id=profile-i",
    icon: messengericon,
    btnIcon: <RiMessengerLine />,
    color: "rgb(139,74,251)",
  },
  {
    name: "WhatsApp",
    value: "+919929388227",
    link: "https://api.whatsapp.com/send?phone=+919929388227",
    icon: whatsappicon,
    btnIcon: <BsWhatsapp />,
    color: "rgb(38,234,112)",
  },
];
export const socialHandles = [
  {
    name: "Github",
    icon: <AiFillGithub />,
    link: "https://github.com/tanmay-7706",
  },
  {
    name: "LinkedIn",
    icon: <AiFillLinkedin />,
    link: "https://www.linkedin.com/in/tanmaysingh7706",
  },
  {
    name: "LeetCode",
    icon: <SiLeetcode />,
    link: "https://leetcode.com/u/tanmay_7706/",
  },
  {
    name: "CodeChef",
    icon: <SiCodechef />,
    link: "https://codeforces.com/profile/tanmay_7706",
  },
  {
    name: "CodeForces",
    icon: <SiCodeforces />,
    link: "https://www.codechef.com/users/tanmay_7706",
  },

];

