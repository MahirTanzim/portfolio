/* ==========================================================
   YOUR CONTENT LIVES HERE.
   To change the site, edit this file only.
   - New project?  Copy one object in PROJECTS and edit it.
   - New skill?    Add a line to a group in SKILLS.
   - Leave a value as "" to hide it (e.g. demo: "").
   ========================================================== */

const SITE = {
  name: "Alex Byte",
  initials: "AB",
  role: "Software Developer",
  eyebrow: "HELLO WORLD // DEVELOPER PROFILE",
  intro:
    "I build Java and Spring Boot backends with clean APIs, and React frontends that people enjoy using.",
  // Lines the hero types out one after another
  typing: ["> whoami", "> backend developer", "> open to work_"],
  about:
    "Computer Science graduate who likes turning messy problems into simple, reliable software. Former polytechnic teacher, so I explain things clearly and enjoy mentoring.",
  facts: [
    { icon: "⌖", text: "Dhaka, Bangladesh" },
    { icon: "♧", text: "B.Sc. in Computer Science" },
    { icon: "▣", text: "Open to full-time roles" },
  ],
  email: "you@example.com",
  github: "https://github.com/your-username",
  linkedin: "https://www.linkedin.com/in/your-username",
  resume: "", // e.g. "assets/resume.pdf"  (leave "" to hide the button)
  footerLine: "Let's build something great together!",
};

/* level is 1-10 and draws the bar. Be honest: it is just a rough guide. */
const SKILLS = [
  {
    group: "Backend",
    items: [
      { name: "Java", level: 8 },
      { name: "Spring Boot", level: 7 },
      { name: "PostgreSQL", level: 7 },
    ],
  },
  {
    group: "Frontend",
    items: [
      { name: "React", level: 6 },
      { name: "HTML / CSS", level: 7 },
    ],
  },
  {
    group: "Core & Tools",
    items: [
      { name: "Python", level: 6 },
      { name: "C / C++", level: 6 },
      { name: "DSA", level: 7 },
      { name: "Git & GitHub", level: 8 },
    ],
  },
];

/* To add a project: copy a block, paste it, edit it. That's it. */
const PROJECTS = [
  {
    icon: "ERP",
    title: "Mini ERP",
    description:
      "Internal business system with secure login, role-based permissions and a full audit trail of who changed what.",
    stack: ["Java", "Spring Boot", "JWT", "PostgreSQL"],
    github: "https://github.com/your-username/erp",
    demo: "",
  },
  {
    icon: "EDU",
    title: "E-learning Platform",
    description:
      "Courses, lessons and student progress, with a Spring Boot REST API and a React frontend.",
    stack: ["Spring Boot", "React", "PostgreSQL"],
    github: "https://github.com/your-username/elearning",
    demo: "https://example.com",
  },
  {
    icon: "NEW",
    title: "Your Next Project",
    description: "Copy this block in data.js to add another card. No HTML needed.",
    stack: ["Any", "Stack"],
    github: "",
    demo: "",
  },
];

const EXPERIENCE = [
  {
    role: "Software Developer",
    org: "Company Name",
    period: "2025 – Present",
    points: [
      "Build and maintain backend services with Java, Spring Boot and PostgreSQL.",
      "Replace this with a result, e.g. 'cut report generation time by 40%'.",
    ],
  },
  {
    role: "Lecturer",
    org: "Polytechnic College",
    period: "Earlier",
    points: [
      "Taught programming and computer fundamentals to diploma students.",
      "Built a habit of explaining technical ideas simply.",
    ],
  },
];
