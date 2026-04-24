import burger from "./assets/images/burger.png";
import chatapp from "./assets/images/chat.png";
import timetrack from "./assets/images/timetrack.png";
import weather from "./assets/images/weather.png";
import avatar from "./assets/images/avatar.png";
import avatarDark from "./assets/images/avatardark.png";

const logotext = "Namrata Chauhan";
const meta = {
  title: "Namrata Chauhan",
  description:
    "I’m Namrata Chauhan, Full stack devloper,currently working in Gandhinagar,Gujarat",
};

const introdata = {
  title: "I’m Namrata Chauhan",
  animated: {
    first: "I'm a Web Developer",
  },
  description:
    "I work with React.js, Next.js, Express.js, Node.js and MongoDB to build reliable, scalable web applications, with a focus on usability and maintainable code.",
};

const dataabout = {
  title: "a bit about my self",
  aboutme:
    "I am a MERN stack developer with approximately 2 years of experience, currently working as a Junior Software Development Engineer (SDE). I specialize in building scalable and maintainable web applications using the MERN stack, Next.js, and React Native.",
};
const worktimeline = [
  {
    jobtitle: "Software Development Intern",
    where: "Zignuts Technolab, Gandhinagar, Gujarat",
    date: "Feb 2024 - Aug 2024",
  },
  {
    jobtitle: "Jr. Software Development Engineer",
    where: "Zignuts Technolab, Gandhinagar, Gujarat",
    date: "Aug 2024 - Present",
  },
];

const skillCategories = [
  {
    category: "FE Technology",
    skills: [
      {
        name: "HTML5",
        value: 100,
      },
      {
        name: "CSS3",
        value: 99,
      },
      {
        name: "Javascript",
        value: 90,
      },
      {
        name: "React JS",
        value: 95,
      },
      {
        name: "Next Js",
        value: 80,
      },
      {
        name: "React Native",
        value: 90,
      },
    ],
  },
  {
    category: "Backend",
    skills: [
      {
        name: "Node Js",
        value: 85,
      },
      {
        name: "Express Js",
        value: 85,
      },
      {
        name: "Java",
        value: 60,
      },
    ],
  },
  {
    category: "Database",
    skills: [
      {
        name: "Mongo DB",
        value: 95,
      },
      {
        name: "SQL",
        value: 95,
      },
    ],
  },
  {
    category: "UI Library",
    skills: [
      {
        name: "Bootstrap",
        value: 100,
      },
      {
        name: "Tailwind Css",
        value: 100,
      },
      {
        name: "Material UI",
        value: 100,
      },
    ],
  },
  {
    category: "Version Control Tools",
    skills: [
      {
        name: "Git",
        value: 96,
      },
    ],
  },
];

const services = [
  {
    title: "Web Application Development",
    description:
      "Custom-built web applications tailored to your business needs, ensuring seamless functionality and a great user experience",
  },
  {
    title: "Front-End Development: ",
    description:
      "Creating visually appealing and responsive interfaces using modern technologies like HTML, CSS, JavaScript, React JS, Next JS and Redux.",
  },
  {
    title: "Back-End Development",
    description:
      "Building robust and scalable server-side applications using Node.js and Java, with efficient database management using MongoDB and SQL.",
  },
  {
    title: "App Development",
    description:
      "Developing cross-platform mobile applications using React Native, delivering a seamless user experience across iOS and Android devices.",
  },
];

const dataportfolio = [
  {
    title: "Food Zone",
    img: burger,
    description: "Food Ordering web application with admin panel. (Next Js)",
    link: "https://food-zone-gamma.vercel.app",
    tags: ["Next.js", "Admin Panel", "Web app"],
  },
  {
    title: "Time Track",
    img: timetrack,
    description:
      "Time and Activity Tracking Application for employees. (MERN Stack)",
    link: "https://github.com/Niyati2601/time-track",
    tags: ["MERN", "Web app", "Admin panel"],
  },
  {
    title: "Chat Box",
    img: chatapp,
    description:
      "Chat Application with real-time messaging and user authentication. (React Js and Firebase)",
    link: "https://chat-box-omega-navy.vercel.app/login",
    tags: ["React", "Firebase", "Web app"],
  },
  {
    title: "Cloud Cast",
    img: weather,
    description:
      "Weather Forecasting Application that provides real-time weather updates and forecasts. (React Native CLI)",
    link: "https://drive.google.com/file/d/1cKx1B39L1JKzVODFRfrLyvI942GatdXa/view?usp=drive_link",
    tags: ["React Native CLI", "Node.js", "Forecast", "Mobile app"],
    isDownload: true,
  },
];

const professionalProjects = [
  {
    title: "Learning Management System",
    description:
      "Developed responsive frontend for a time-bound learning management system with a focus on usability and performance.",
    tags: ["React.js", "Web app", "Admin Panel"],
  },
  {
    title: "Scholarship Platform",
    description:
      "Built and integrated frontend modules for student and admin panels, including API flows for application handling.",
    tags: ["React.js", "Student Panel", "Admin Panel"],
  },
  {
    title: "Service Marketplace",
    description:
      "Developed a service marketplace web application with customer and admin functionality.",
    tags: ["React.js", "Admin Panel", "Customer Panel", "Web app"],
  },
  {
    title: "Admin Dashboard",
    description:
      "Designed and implemented an admin dashboard for operations, monitoring, and user management.",
    tags: ["React.js", "Admin Panel"],
  },
  {
    title: "OCR Insurance System",
    description:
      "Implemented OCR-based PDF data extraction and visualization for an insurance data system.",
    tags: ["Next JS", "Web app"],
  },
  {
    title: "Employee Management System",
    description:
      "Contributed to the development of an internal employee management system used for day-to-day operations.",
    tags: ["React.js", "RBAC Web app"],
  },
  {
    title: "Responsive Web Apps",
    description:
      "Built multiple responsive web applications using HTML, CSS, JavaScript, and modern frontend practices.",
    tags: ["HTML", "CSS", "JavaScript", "Web app"],
  },
];

const contactConfig = {
  YOUR_EMAIL: "chauhannamrata856@gmail.com",
  YOUR_FONE: "+91 9909019908",
  description:
    "If you have any query feel free to reach out by filling given form and I will get back to you. ",
  YOUR_SERVICE_ID: "service_wiyd8ww",
  YOUR_TEMPLATE_ID: "template_9g6pvyk",
  YOUR_USER_ID: "GzYvI9GcVwYQiuW4-",
};

const socialprofils = {
  github: "https://github.com/Namrata-Chauhan8",
  email: "mailto:chauhannamrata856@gmail.com",
  linkedin: "https://linkedin.com/in/namrata-chauhan-a3647a265",
  instagram: "https://instagram.com/chauhan__namrata8/",
};
export {
  meta,
  dataabout,
  dataportfolio,
  worktimeline,
  skillCategories,
  services,
  introdata,
  contactConfig,
  socialprofils,
  logotext,
  avatar,
  avatarDark,
  professionalProjects,
};
