import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";
import project5 from "../assets/projects/stock.jfif";

export const HERO_CONTENT = `I am a passionate full stack developer with a knack for crafting robust and scalable web applications. With 1 year of hands-on experience, I have honed my skills in front-end technologies like React and Next.js, as well as back-end technologies like Node.js, MySQL, PostgreSQL, and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 5 years of professional experience, I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "Aug 2023 - Nov 2023",
    role: "Software Development Intern",
    company: "Cummins Inc., Pune",
    description: `Spearheaded data analytics initiatives, extracting meaningful insights for business strategy. Collaborated with cross-functional teams to develop and deliver applications using PostgreSQL and PowerApps. Worked on software like Oracle and SCADA for developing solutions for real-time applications.`,
    technologies: ["PostgreSQL", "PowerApps", "SQL", "SCADA", "Python", "PowerBI"]
  },
];

export const PROJECTS = [
  {
    title: "E-Commerce Website",
    image: project1,
    description:
      "A fully functional e-commerce website with features like product listing, shopping cart, and user authentication.",
    technologies: ["HTML", "CSS", "React", "Node.js", "MongoDB","Tailwind"],
  },
  {
    title: "Task Management App",
    image: project2,
    description:
      "An application for managing tasks and projects, with features such as task creation, assignment, and progress tracking.",
    technologies: ["HTML", "CSS", "Angular", "Firebase"],
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "React", "Bootstrap"],
  },
  {
    title: "Time Series Analysis - Stock Predictions with LSTM network",
    image: project4,
    description:
      "A project to analyze and predict stock prices using Long Short-Term Memory (LSTM) networks.",
    technologies: ["Python", "TensorFlow", "Keras", "Pandas"],
  },
  {
    title: "Financial Markets Experience Program",
    image: project5,
    description:
      "A comprehensive program to understand financial markets, trading strategies, and market analysis.",
    technologies: ["Python", "Pandas", "Matplotlib"],
  },
];

export const CONTACT = {
  address: "Pune , Maharashtra  ",
  phoneNo: "+91-7758095284",
  email: "gaurav.thakabhau2021@vitstudent.ac.in",
};
