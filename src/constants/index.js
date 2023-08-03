import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  NJ,
  travash,
  crowdnix,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Web Developer",
    company_name: "Crowdnix Technologies",
 icon: crowdnix,
    iconBg: "#383E56",
    date: "May 2022 - Apr 2023",
    points: [
      "Learn php , codegingitor, mysql , webdevopment, Wordpress",
      "Proficient in HTML, CSS, and JavaScript",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Detail-oriented with a keen eye for design.",
      "Track record of delivering high-quality projects.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "NJ Designpark",
  icon:NJ,
    iconBg: "#E6DEDD",
    date: "Oct 2022 - Feb 2023",
    points: [
      "Strong understanding of responsive design principles..",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },

  {
    title: "Web Developer",
    company_name: "Travsah Software Solution ltd",
  icon:travash,
    iconBg: "#E6DEDD",
    date: "Mar 2023 - Prasent",
    points: [
      "Develop and maintain web applications using ReactJS, JavaScript, HTML, and CSS, ensuring high performance and responsiveness of applications across various devices and browsers.",
      "Integrate with backend APIs to fetch and display data in real-time, ensuring seamless data flow and user interactions.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Work collaboratively within an agile development environment, actively participating in daily stand-ups, sprint planning, and retrospectives.",
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
    name: "Indispare -E-Commerce",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "Laravel",
        color: "green-text-gradient",
      },
      {
        name: "React-Native",
        color: "pink-text-gradient",
      },
      {
        name: "Ant-Design",
        color: "pink-text-gradient",
      },

      {
        name: "Laravel",
        color: "pink-text-gradient",
      },
      
    ],
    image: carrent,
    source_code_link: "https://www.indispare.com/",
  },
  {
    name: "Travash.com",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: " CSS",
        color: "green-text-gradient",
      },
      {
        name: "Java Script",
        color: "pink-text-gradient",
      },
      {
        name: "Bootstreap",
        color: "red-text-gradient",
      },
      {
        name: "Laravel",
        color: "white-text-gradient",
      },

    ],
    image: jobit,
    source_code_link: "https://travash.com/",
  },
  {
    name: "Sharman Plumbing and Heating",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "Wordprss",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "HTML",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://sharmanplumbing.co.uk/",
  },
];

export { services, technologies, experiences, testimonials, projects };
