// Data: Projects
// TODO: Replace with your real projects and screenshots

export const projects = [
  {
    id: 1,
    title: "Calori Tracker",
    description: "Cal Ai a calori tracker app tha tracks realtime daily calories",
    image: null, // TODO: Add project screenshot
    category: "Full Stack",
    tech: ["React", "Node.js", "Express", "MongoDB", "Stripe", "Tailwind"],
    github: "https://github.com/sandeep62065/CAL-Ai", // TODO: Replace
    demo: "https://cal-ai-eosin.vercel.app", // TODO: Replace
    featured: true,
  },
  {
    id: 2,
    title: "Real-Time Chat App",
    description: "An innovative web application that leverages advanced AI models to generate humorous and context-aware excuses for various situations. Features include a chat interface, customizable excuse categories, and social sharing options. Built with a focus on user experience and responsive design.",
    image: null,
    category: "Full Stack",
    tech: ["React", "Node.js", "Socket.io", "MongoDB", "Express"],
    github: "https://notmyfaultai.vercel.app",
    demo: "https://notmyfaultai.vercel.app",
    featured: true,
  },
  {
    id: 3,
    title: "SukoonAI",
    description: "SukoonAI is an AI-powered mental health support platform developed as a team project, aimed at providing accessible and empathetic emotional assistance. The platform offers real-time AI-driven conversations, personalized wellness suggestions, and a secure, user-friendly experience to support mental well-being anytime, anywhere.",
    image: null,
    category: "Full Stack",
    tech: ["React", "Redux", "Node.js", "Express", "MongoDB"],
    github: "https://github.com/Vikash-Sharma-45/Sukoon-Ai-Backend",
    demo: "https://sukoon-ai-kttc.vercel.app",
    featured: true,
  },
  {
    id: 4,
    title: "feedme-now",
    description: "A full-featured restaurant website built with React and Node.js. Features include menu display, order management, and user authentication.",
    image: null,
    category: "Full Stack",
    tech: ["React", "Node.js", "Express", "MongoDB", "Rich Text"],
    github: "https://github.com/sandeep62065/feedme-now",
    demo: "https://feedme-now-ax6d.vercel.app/",
    featured: true,
  },
  {
    id: 5,
    title: "Fire Fight Service Website",
    description: "API-driven weather application with 7-day forecasts, geolocation support, hourly breakdowns, and beautiful animated weather icons.",
    image: null,
    category: "Frontend",
    tech: ["React", "OpenWeather API", "Tailwind CSS"],
    github: "https://github.com/Vikash-Sharma-45/Fire-fight",
    demo: "https://fire-fight.vercel.app",
    featured: true,
  },
  {
    id: 6,
    title: "Portfolio Generator",
    description: "SaaS tool allowing developers to create stunning portfolios by filling out a simple form. Generates unique designs with multiple themes.",
    image: null,
    category: "Full Stack",
    tech: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
    github: "https://github.com/vikashsparmar",
    demo: "#",
    featured: false,
  },
];

// Data: Tech Stack
export const techStack = {
  Frontend: [
    { name: "React.js", icon: "⚛️", color: "#61DAFB", level: 90 },
    { name: "HTML5", icon: "🌐", color: "#E34F26", level: 95 },
    { name: "CSS3", icon: "🎨", color: "#1572B6", level: 90 },
    { name: "JavaScript", icon: "⚡", color: "#F7DF1E", level: 88 },
    { name: "Tailwind CSS", icon: "🌬️", color: "#06B6D4", level: 85 },
    { name: "Bootstrap", icon: "🅱️", color: "#7952B3", level: 80 },
    { name: "Redux", icon: "🔄", color: "#764ABC", level: 75 },
    { name: "Framer Motion", icon: "🎭", color: "#0055FF", level: 70 },
  ],
  Backend: [
    { name: "Node.js", icon: "🟢", color: "#339933", level: 88 },
    { name: "Express.js", icon: "🚂", color: "#000000", level: 88 },
    { name: "REST APIs", icon: "🔌", color: "#10B981", level: 90 },
    { name: "JWT Auth", icon: "🔐", color: "#F59E0B", level: 85 },
    { name: "Socket.io", icon: "🔴", color: "#010101", level: 75 },
  ],
  Database: [
    { name: "MongoDB", icon: "🍃", color: "#47A248", level: 88 },
    { name: "Mongoose", icon: "🌿", color: "#800000", level: 85 },
    { name: "SQL", icon: "🗃️", color: "#336791", level: 65 },
    { name: "Firebase", icon: "🔥", color: "#FFCA28", level: 70 },
  ],
  "Tools & DevOps": [
    { name: "Git & GitHub", icon: "🐙", color: "#F05032", level: 90 },
    { name: "VS Code", icon: "💙", color: "#007ACC", level: 95 },
    { name: "Postman", icon: "📮", color: "#FF6C37", level: 88 },
    { name: "Docker", icon: "🐳", color: "#2496ED", level: 60 },
    { name: "Vercel", icon: "▲", color: "#000000", level: 85 },
    { name: "Netlify", icon: "🌊", color: "#00C7B7", level: 80 },
  ],
  Languages: [
    { name: "JavaScript", icon: "⚡", color: "#F7DF1E", level: 88 },
    { name: "Python", icon: "🐍", color: "#3776AB", level: 65 },
    { name: "C/C++", icon: "⚙️", color: "#00599C", level: 70 },
  ],
};

// Data: Experience
export const experience = [
  {
    id: 1,
    company: "Xorvo Technologies",
    role: "Backend Developer Intern",
    duration: "Aug 2026 - Oct 2025", // TODO: Update actual dates
    location: "Remote", // TODO: Update actual location
    type: "Internship",
    achievements: [
      "Developed and optimized RESTful APIs using Node.js and Express.js for production applications",
      "Integrated MongoDB with Mongoose for efficient data modeling and retrieval",
      "Collaborated with frontend team to ensure seamless API integration and data flow",
      "Improved backend response time by 40% through query optimization and caching strategies", // TODO: Update actual %
      "Implemented JWT-based authentication and authorization middleware",
    ],
    color: "#10B981",
  },
  {
    id: 2,
    company: "Freelance Projects",
    role: "Full Stack Developer",
    duration: "Oct 2025 - Present",
    location: "Remote",
    type: "Freelance",
    achievements: [
      "Built and deployed 5+ full-stack MERN applications for clients",
      "Worked with clients to define requirements and deliver solutions on time",
      "Implemented responsive designs and optimized for performance",
      "Provided ongoing maintenance and feature additions",
    ],
    color: "#F59E0B",
  },
];

// Data: Education
export const education = [
  {
    id: 1,
    degree: "B.Tech in CSE",
    institution: "Dr. A.P.J. Abdul Kalam Technical University (AKTU)",
    duration: "2023 - 2027",
    cgpa: "8.0/10", // TODO: Add actual CGPA
    highlights: [
      "Data Structures & Algorithms",
      "Database Management Systems",
      "Web Development",
      "Machine Learning",
      "Operating Systems",
    ],
    color: "#10B981",
    icon: "🎓",
  },
  {
    id: 2,
    degree: "12th - Science (UP Board)",
    institution: "Govt. Jublee Intermediate",
    duration: "2022", // TODO: Add year
    percentage: "70%", // TODO: Add percentage
    highlights: ["Physics", "Chemistry", "Mathematics", "English"],
    color: "#06B6D4",
    icon: "📚",
  },
  {
    id: 3,
    degree: "10th (CBSE Board)",
    institution: "Divya Jyoti Public School",
    duration: "2020", // TODO: Add year
    percentage: "75%", // TODO: Add percentage
    highlights: ["Mathematics", "Science", "Social Studies", "Hindi", "English"],
    color: "#F59E0B",
    icon: "🏫",
  },
];

// Data: Achievements
export const achievements = [
  {
    id: 1,
    category: "Certification",
    title: "Full Stack Web Development",
    issuer: "Apna College", // TODO: Add actual platform
    year: "2023",
    icon: "🏆",
    color: "#10B981",
  },
  {
    id: 2,
    category: "Certification",
    title: "MongoDB Developer Certification",
    issuer: "MongoDB University",
    year: "2023",
    icon: "🍃",
    color: "#47A248",
  },
  {
    id: 3,
    category: "Certification",
    title: "JavaScript Algorithms & Data Structures",
    issuer: "freeCodeCamp",
    year: "2023",
    icon: "⚡",
    color: "#F59E0B",
  },
  {
    id: 4,
    category: "Certification",
    title: "Node.js Essential Training",
    issuer: "LinkedIn Learning",
    year: "2023",
    icon: "🟢",
    color: "#339933",
  },
  {
    id: 5,
    category: "Hackathon",
    title: "Nexux Hackathon",
    issuer: "2nd", // TODO: Add position/achievement
    year: "2024",
    icon: "💡",
    color: "#06B6D4",
  },
  {
    id: 6,
    category: "Hackathon",
    title: "Hack With India",
    issuer: "10th", // TODO: Update actual number
    year: "2026",
    icon: "🚀",
    color: "#8B5CF6",
  },
];

// Data: Testimonials
export const testimonials = [
  {
    id: 1,
    quote: "Sandeep's backend development skills are exceptional. He delivered clean, optimized APIs ahead of schedule.", // TODO: Get real testimonials
    name: "John Doe",
    role: "CTO",
    company: "Xorvo Technologies",
    avatar: null,
  },
  {
    id: 2,
    quote: "Working with Sandeep was a great experience. His MERN stack knowledge and problem-solving skills are impressive.",
    name: "Jane Smith",
    role: "Product Manager",
    company: "Tech Startup",
    avatar: null,
  },
  {
    id: 3,
    quote: "Sandeep built our entire e-commerce platform in record time. The code quality and attention to detail was outstanding.",
    name: "Alex Johnson",
    role: "Founder",
    company: "E-Commerce Startup",
    avatar: null,
  },
];

// Data: Blog/Code Snippets
export const blogPosts = [
  {
    id: 1,
    title: "Building Scalable REST APIs with Node.js & Express",
    excerpt: "Learn best practices for building production-ready APIs including error handling, validation, and authentication.",
    date: "Mar 2024",
    tags: ["Node.js", "Express", "REST API"],
    type: "blog",
    code: null,
    link: "#", // TODO: Link to real blog
  },
  {
    id: 2,
    title: "MongoDB Aggregation Pipeline Explained",
    excerpt: "A deep dive into MongoDB's aggregation framework with real-world examples for MERN stack developers.",
    date: "Feb 2024",
    tags: ["MongoDB", "Database"],
    type: "blog",
    code: `db.orders.aggregate([
  { $match: { status: "active" } },
  { $group: {
    _id: "$userId",
    total: { $sum: "$amount" }
  }},
  { $sort: { total: -1 } }
])`,
    link: "#",
  },
  {
    id: 3,
    title: "React Custom Hooks: useLocalStorage",
    excerpt: "Creating reusable custom hooks to persist state in localStorage with TypeScript-ready implementations.",
    date: "Jan 2024",
    tags: ["React", "JavaScript", "Hooks"],
    type: "snippet",
    code: `const useLocalStorage = (key, initial) => {
  const [value, setValue] = useState(
    () => JSON.parse(
      localStorage.getItem(key)
    ) ?? initial
  );
  useEffect(() => {
    localStorage.setItem(key, 
      JSON.stringify(value));
  }, [key, value]);
  return [value, setValue];
};`,
    link: "#",
  },
];
