import { FaPaintBrush } from "react-icons/fa";
import { SiCodechef, SiCodeforces, SiFiverr, SiLeetcode, SiPython } from "react-icons/si";
import { AiFillGithub, AiFillLinkedin, AiFillYoutube } from "react-icons/ai";
import { FaCodeCompare } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { BsWhatsapp } from "react-icons/bs";
import {
  project1,
  project2,
  project3,
  project4,
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
    title: "Study Buddy",
    image: project1,
    category: "Web",
    description: `Study Buddy is a smart web application designed to help students stay focused, organized, and motivated throughout
     their academic journey. It brings together essential tools in one place, 
     making studying more efficient and less stressful`,
    demoLink: "https://studybuddy-indol.vercel.app/",
    stacks: [
      {
        name: "html",
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
    title: "Modern Ai-Landing Page",
    image: project2,
    category: "Web",
    description: `A sleek, responsive, and visually engaging landing page built to showcase cutting-edge 
                  AI solutions and products. This modern design features a clean layout, 
                  vibrant gradients, smooth animations, and intuitive navigation — all optimized for high user engagement and conversion.`,
    demoLink: "https://glittery-fudge-49c041.netlify.app/",
    stacks: [
      {
        name: "Html",
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
    title: "Capstone Project",
    image: project3,
    category: "Web",
    description: `frontend art gallery landing page`,
    demoLink: "https://google.com/",
    stacks: [
      {
        name: "html",
        logo: html,
      },
      {
        name: "CSS",
        logo: css,
      },
    ],
  },
  {
    title: "My Portfolio",
    image: project4,
    category: "Web",
    description: `This portfolio is built using React and styled with CSS, 
                  showcasing my skills in modern front-end development. From intuitive UI to smooth user interactions, every section 
                  reflects my love for clean code and great design.`,
    demoLink: "https://gleaming-babka-c743d3.netlify.app/",
    stacks: [
      {
        name: "React",
        logo: react,
      },
      {
        name: "CSS",
        logo: css,
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

