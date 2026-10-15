// All portfolio content lives here — edit this file to update the site.

export const profile = {
  name: "Poojitha Kancharla",
  role: "Software Engineer",
  location: "Hyderabad, India",
  email: "poojithakancharla0609@gmail.com",
  linkedin: "https://www.linkedin.com/in/poojitha-kancharla-3b4b7235b/",
  github: "https://github.com/Poojitha0609",
  summary:
    "Software Engineer with hands-on experience in web development, UI/UX design, and building task management, ticketing, and CMS applications. Skilled in React.js, JavaScript, Python, and SQL, with knowledge of REST APIs, CRUD operations, and database management. Strong foundation in software development, problem-solving, and AI-assisted development tools.",
};

export const skills: { group: string; items: string[] }[] = [
  { group: "Languages", items: ["Python", "Java", "C", "JavaScript (ES6+)", "SQL"] },
  { group: "Frontend", items: ["HTML5", "CSS3", "React.js", "Tailwind CSS", "Bootstrap"] },
  { group: "Backend", items: ["Node.js", "Express.js"] },
  { group: "Databases", items: ["MySQL", "MongoDB"] },
  { group: "Tools & Platforms", items: ["Git", "GitHub", "AWS (EC2)", "Vercel"] },
];

export const experience = [
  {
    title: "Software Developer Intern",
    company: "Tamada Media",
    location: "Hyderabad",
    period: "July 2026 – Present",
    points: [
      "Independently developed an internal worklog portal and managed structured work-log data using SQL, enabling efficient data retrieval, filtering, aggregation, and performance analysis.",
      "Pixie: contributed to highlighting key points and extracting important information from articles to improve content readability and accessibility for the DailyMattr app.",
      "DailyMattr CMS Portal: assisted in designing the Content Management System portal, focusing on user interface design, content organization, and usability.",
      "Gained hands-on experience with AWS, including launching and managing EC2 instances.",
    ],
  },
  {
    title: "Web Development Intern (AICTE Verified)",
    company: "InternPe",
    location: "Hyderabad",
    period: "June 2025",
    points: [
      "Developed responsive web pages using HTML5, CSS3, and JavaScript, ensuring user-friendly layouts across screen sizes.",
      "Implemented interactive frontend features using JavaScript DOM manipulation and event handling.",
      "Applied CSS Flexbox and Grid to create structured layouts and improve responsiveness.",
    ],
  },
];

export const projects = [
  {
    name: "TASKR",
    tagline: "Internal Worklog Portal",
    tech: ["React.js", "JavaScript", "HTML5", "CSS3", "Bootstrap"],
    points: [
      "Centralized task management and worklog portal with separate dashboards for managers and team members.",
      "CRUD operations for task assignments, daily worklogs, and ticket tracking — status updates, issue monitoring, and resolution management.",
      "Role-based access control (RBAC) and authentication workflows for role-specific access to features.",
      "Interactive dashboards to monitor task progress, team activity, worklog entries, and ticket lifecycle.",
    ],
  },
  {
    name: "Smart Plant Watering System",
    tagline: "Automating Plant Care through IoT",
    tech: ["Arduino", "Soil Moisture Sensor", "Blynk IoT"],
    points: [
      "Automated watering system using Arduino and a soil moisture sensor to detect when plants need water.",
      "Activates a water pump automatically when soil moisture falls below a predefined threshold.",
      "Remote monitoring via the Blynk IoT platform with real-time soil moisture readings and system status.",
    ],
  },
];

export const certifications = [
  "Java with DSA and MERN Stack Development — Apna College",
  "IoT & LiDAR Technologies in Healthcare Workshop — University of Hyderabad & Deakin University",
  "Foundation Certification in BS Data Science — IIT Madras",
];

export const education = {
  school: "Swami Vivekananda Institute of Technology, JNTUH",
  degree: "Bachelor of Technology in Computer Science",
  period: "November 2022 – May 2026",
  score: "CGPA 8.72 / 10",
};
