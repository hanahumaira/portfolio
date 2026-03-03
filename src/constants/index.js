import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  hrms,
  utmcexp,
  lingonow,
  carboncut,
  portfolio,
  eventhub,
  geo,
  soon,
  maipk,
  lphp,
  escort,
  gates,
  uniqueedge
} from "../assets";
import { 
  FaGithub, FaDocker, FaJava, FaPython, FaHtml5, FaCss3, FaJs, FaReact, FaNodeJs, FaCloud, FaTools, FaCheckCircle
} from "react-icons/fa";
import { 
  SiMongodb, SiMysql, SiPostgresql, SiSpringboot, SiTailwindcss, SiFigma, SiRasa, 
  SiJira, SiJenkins, SiFirebase, SiFlutter, SiVuedotjs, 
  SiPhp, SiTestin, SiJupyter 
} from "react-icons/si";

export const navLinks = [
  {
    id: "home",
    title: "Home",
  },
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Projects",
  },
];

const services = [
  {
    title: "Full Stack Developer",
    icon: web,
  },
  {
    title: "Software Quality Assurance",
    icon: mobile,
  },
  {
    title: "Project Manager",
    icon: backend,
  },
  {
    title: "ML Developer",
    icon: creator,
  },
];

const techCategories = [
  {
    title: "Languages",
    items: [
      { name: "HTML 5", icon: FaHtml5 },
      { name: "CSS 3", icon: FaCss3 },
      { name: "JavaScript", icon: FaJs },
      { name: "Python", icon: FaPython },
      { name: "Java", icon: FaJava },
      { name: "PHP", icon: SiPhp }
    ]
  },
  {
    title: "Frameworks & Libraries",
    items: [
      { name: "React JS", icon: FaReact },
      { name: "Vue.js", icon: SiVuedotjs },
      { name: "Slim.php", icon: SiPhp },
      { name: "Spring Boot", icon: SiSpringboot },
      { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "Node.js", icon: FaNodeJs },
      { name: "Flutter", icon: SiFlutter },
      { name: "Rasa", icon: SiRasa }
    ]
  },
  {
    title: "Databases",
    items: [
      { name: "MySQL", icon: SiMysql },
      { name: "PostgreSQL", icon: SiPostgresql },
      { name: "MongoDB", icon: SiMongodb }
    ]
  },
  {
    title: "Tools & Platforms",
    items: [
      { name: "GitHub", icon: FaGithub },
      { name: "Docker", icon: FaDocker },
      { name: "Jira", icon: SiJira },
      { name: "Jenkins", icon: SiJenkins },
      { name: "JMeter", icon: FaTools  },
      { name: "AWS", icon: FaCloud },
      { name: "Firebase", icon: SiFirebase },
      { name: "Figma", icon: SiFigma },
      { name: "Katalon", icon: FaCheckCircle  },
      { name: "TestLink", icon: SiTestin },
      { name: "Jupyter Notebook", icon: SiJupyter }
    ]
  }
];

const experiences = [
  {
    title: "Full Stack Developer",
    company_name: "Gates IT Solution",
    icon: gates,
    iconBg: "#ffffff",
    date: "Sept 2025 - Present",
    points: [
      "Developed and maintained government web systems for Perak state agencies, covering wakaf baitulmal, zakat, bantuan, and perumahan services.",
      "Built and enhanced full-stack Laravel modules with MySQL to support reliable service workflows and day-to-day operations.",
      "Handled user acceptance testing (UAT) with stakeholders to validate system functionality before release.",
      "Conducted end-user training sessions and post-deployment support to improve system adoption.",
    ],
  },
  {
    title: "Freelance Software Developer",
    company_name: "Unique Edge Technology",
    icon: uniqueedge,
    iconBg: "#E6DEDD",
    date: "Aug 2025 - Present",
    points: [
      "Designed and developed the full-stack Energy Efficiency and Conservation Reporting Tool (ESCORT) from scratch in a 2-person team.",
      "Contributed across architecture, backend and frontend implementation, testing, and delivery.",
      "Implemented multi-year energy performance analysis to support trend tracking and decision-making.",
      "Built compliance-ready reporting features to support regulatory submission workflows.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "MAIPKBestari",
    description:
      "Developed a full-stack government system for wakaf baitulmal, zakat, and bantuan modules for MAIPk Perak.",
    tags: [
      { name: "laravel", color: "red-text-gradient" },
      { name: "mysql", color: "blue-text-gradient" },
      { name: "jenkins", color: "green-text-gradient" },
    ],
    image: maipk,
  },
  {
    name: "MyLPHP",
    description:
      "Developed a housing management web system for Lembaga Perumahan dan Hartanah Perak (LPHP) Perak.",
    tags: [
      { name: "laravel", color: "red-text-gradient" },
      { name: "mysql", color: "blue-text-gradient" },
      { name: "livewire", color: "pink-text-gradient" },
      { name: "jenkins", color: "green-text-gradient" },
    ],
    image: lphp,
  },
  {
    name: "ESCORT",
    description:
      "Developed a full-stack web system for energy efficiency reporting with multi-year analysis and compliance-ready reporting for Unique Edge Technology.",
    tags: [
      { name: "laravel", color: "red-text-gradient" },
      { name: "mysql", color: "blue-text-gradient" },
      { name: "figma", color: "pink-text-gradient" },
    ],
    image: escort,
  },
  {
    name: "Portfolio",
    description:
      "A 3D interactive personal portfolio website showcasing projects and skills, built using React, Three.js, Tailwind CSS, and Framer Motion.",
    tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: "threejs", color: "green-text-gradient" },
      { name: "tailwindcss", color: "pink-text-gradient" },
      { name: "framermotion", color: "purple-text-gradient" },
    ],
    image: portfolio,
    source_code_link: "https://github.com/hanahumaira/portfolio", 
  },
  {
    name: "HRMS",
    description:
      "A Laravel-based HR management system integrated with Rasa conversational AI and deployed on Microsoft Azure, streamlining HR operations for Burhanuddin & Associates.",
    tags: [
      { name: "laravel", color: "red-text-gradient" },
      { name: "mysql", color: "green-text-gradient" },
      { name: "rasa", color: "blue-text-gradient" },
      { name: "azure", color: "pink-text-gradient" },
    ],
    image: hrms,
    live_demo_link: "https://drive.google.com/file/d/1HoYz2f1TAO1hAwjuATsUeIV2Fp1ffOxY/view?usp=drive_link", 
  },
  {
    name: "UTMCExp",
    description:
      "System development for a web-based booking management system for UTM Campus Experience using Node.js, Angular, and PostgreSQL, hosted on AWS.",
    tags: [
      { name: "nodejs", color: "green-text-gradient" },
      { name: "angular", color: "red-text-gradient" },
      { name: "postgresql", color: "blue-text-gradient" },
      { name: "aws", color: "pink-text-gradient" },
    ],
    image: utmcexp,
    live_demo_link: "https://drive.google.com/file/d/1fsX8fqFReM-dubYgHdbM94WVBSg6GVtY/view?usp=drive_link", 
  },
  {
    name: "EventHub",
    description:
      "Built the backend of a mobile event-based application using Flutter and Firebase, improving event management efficiency.",
    tags: [
      { name: "flutter", color: "blue-text-gradient" },
      { name: "firebase", color: "orange-text-gradient" },
    ],
    image: eventhub,
    source_code_link: "https://github.com/hanahumaira/EventHub",
  },
  {
    name: "APGCE Geohackathon",
    description:
      "Developed machine learning models using big data from Geology & Geophysics subsurface datasets for the Asia Petroleum Geoscience Conference & Exhibition.",
    tags: [
      { name: "machine learning", color: "blue-text-gradient" },
      { name: "big data", color: "green-text-gradient" },
      { name: "geoscience", color: "pink-text-gradient" },
    ],
    image: geo, 
    source_code_link: "https://github.com/hanahumaira/geo-things",
  },
  {
    name: "CarbonCut",
    description:
      "A Spring Boot and MySQL-based carbon footprint monitoring system developed for Majlis Bandaraya Iskandar Puteri to enhance carbon emissions management.",
    tags: [
      { name: "springboot", color: "green-text-gradient" },
      { name: "mysql", color: "blue-text-gradient" },
    ],
    image: carboncut,
    source_code_link: "https://github.com/adamyaacob123/MBIP-SpringMVC", 
  },
  {
    name: "LingoNow",
    description:
      "A web application for managing slang terms using Vue.js for the frontend and Slim.php for the backend, providing an intuitive interface for data management.",
    tags: [
      { name: "vuejs", color: "green-text-gradient" },
      { name: "slimphp", color: "blue-text-gradient" },
    ],
    image: lingonow,
    source_code_link: "https://github.com/abbyspeed/LingoNow", 
  },
];

export { services, techCategories, experiences, testimonials, projects };