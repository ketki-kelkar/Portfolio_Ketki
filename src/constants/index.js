import {
  javascript,
  bootstrap,
  firebase,
  html,
  css,
  reactjs,
  tailwind,
  jioclone,
  amazon,
  bsjs,
  htmlCss,
  mongodb,
  microverse,
  sql,
  cpp,
  c,
  java,
  python,
  matlab,
  lt,
  cisco,
  vm,
} from '../assets';

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'projects',
    title: 'Projects',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const technologies = [
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'Tailwind CSS',
    icon: tailwind,
  },
  {
    name: 'Bootstrap',
    icon: bootstrap,
  },

  {
    name: 'SQL',
    icon: sql,
  },
  {
    name: 'MongoDB',
    icon: mongodb,
  },
  {
    name: 'Firebase',
    icon: firebase,
  },
];

const sw = [
  {
    name: 'ltSpice',
    icon: lt,
  },
  {
    name: 'Cisco Packet Tracer',
    icon: cisco,
  },
  {
    name: 'VMWare',
    icon: vm,
  },
]

const Languages = [
  {
    name: 'C++',
    icon: cpp,
  },
  {
    name: 'C',
    icon: c,
  },
  {
    name: 'Java',
    icon: java,
  },
  {
    name: 'Python',
    icon: python,
  },
  {
    name: 'Matlab',
    icon: matlab,
  },
]

const experiences = [
  {
    title: 'Web Development Intern',
    company_name: 'Oasis InfoByte Intern',
    icon: microverse,
    iconBg: '#333333',
    date: 'July 2023 - Aug 2023',
  },
  {
    title: 'DRDO, Intern',
    company_name: 'Defence Research and Development Organisation',
    icon: microverse,
    iconBg: '#333333',
    date: 'Aug 2023 - Oct 2023',
  },
];

const educations =[
  {
    title: 'Matriculation',
    name: 'Atomic energy Central School, Indore',
    icon: microverse,
    iconBg: '#333333',
    cgpa:'Percentage : 97.2%',
    date: 'Mar 2018 - Mar 2019',
  },
  {
    title: 'Intermediate',
    name: 'Atomic energy Central School, Indore',
    icon: microverse,
    iconBg: '#333333',
    cgpa:'Percentage : 95.6%',
    date: 'Mar 2020 - Mar 2021',
  },
  {
    title: 'Graduation - B.Tech CSE core',
    name: 'VIT Chennai - Vellore Institute of Technology ',
    icon: microverse,
    iconBg: '#333333',
    cgpa:'CGPA : 97.2',
    date: 'Mar 2021 - Mar 2025',
  },
]
const projects = [
  {
    id: 'project-1',
    name: 'HTML and CSS tasks',
    description: 'In this project we created different types of tasks which was needed to perform using HTML and CSS various functionalities.',
    tags: [
      {
        name: 'HTML',
        color: 'blue-text-gradient',
      },
      {
        name: 'CSS',
        color: 'green-text-gradient',
      },
    ],
    image: htmlCss,
    repo: 'https://github.com/ketki-kelkar/Ethnus_Mern_Tasks',
    demo: 'https://ketki-kelkar.github.io/Ethnus_Mern_Tasks/',
  },
  {
    id: 'project-2',
    name: 'BS-JS Tasks',
    description: 'In this project we created different types of tasks and web pages which included different functionalities of Bootstrap and Javascript.',
    tags: [
      {
        name: 'Bootstrap',
        color: 'blue-text-gradient',
      },
      {
        name: 'Javascript',
        color: 'green-text-gradient',
      },
    ],
    image: bsjs,
    repo: 'https://github.com/ketki-kelkar/BS_JS_EthnusTask',
    demo: 'https://ketki-kelkar.github.io/BS_JS_EthnusTask/',
  },
  {
    id: 'project-3',
    name: 'JIO WEBSITE CLONE',
    description: ' Developed an IPL Clone website inspired by Jio, utilizing React.js for robust functionality and enriched with sophisticated styling using Tailwind CSS. Leveraged Firebase for seamless website deployment.  Provides immersive and engaging platform for cricket enthusiasts, enhancing their experience through a user-friendly interface, dynamic features resulting in visually appealing and interactive website.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'firebase',
        color: 'green-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient',
      },
    ],
    image: jioclone,
    demo: 'https://jio-website-clone.web.app/',
  },
  {
    id: 'project-4',
    name: 'AMAZON CLONE',
    description:'Created an e-commerce clone drawing inspiration from Amazon. Implemented robust user authentication to ensure secure access and personalized shopping experiences. Engineered cart management system, enabling seamless addition, removal, and viewing of items for a smooth and intuitive shopping process.  Seamlessly Integrated a secured payment gateway, replicating the user experience found on Amazon, enhancing the checkout process resulting in Amazon-inspired e-commerce platform.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'Tailwind CSS',
        color: 'green-text-gradient',
      },
      {
        name: 'Firebase',
        color: 'pink-text-gradient',
      },
    ],
    image: amazon,
    demo: 'https://challenge-c3f70.web.app/',
  },
 
];

export {  technologies, experiences, projects,Languages,sw, educations };
