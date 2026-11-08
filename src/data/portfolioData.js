// ============================================================
// portfolioData.js — N Pallavi Portfolio Data
// All content and links live in this file.
// ============================================================

export const personalInfo = {
  name: "N Pallavi",
  firstName: "N Pallavi",
  brandName: "N Pallavi", // shown in the preloader, navbar and footer
  title: "Data Analytics",
  location: "Bengaluru, India",
  phone: "+918309003075",
  emails: {
    primary: "pallavin290@gmail.com",
    secondary: "",
  },
  summary: "Aspiring Data Analyst with B. Tech in ECE and AI/ML certifications, passionate about turning data into actionable insights.",
  resumeUrl: "/RESUME.PP.pdf", // put the PDF inside /public
};

// TAP Academy — the academy you trained with. Used in the footer credit.
export const academy = {
  name: "TAP Academy",
  url: "https://thetapacademy.com/",
};

export const socialLinks = {
  github: "https://github.com/",
  linkedin: "https://www.linkedin.com/in/n-pallavi-75289332a",
  instagram: "",
};

export const heroContent = {
  greeting: "Hi, I'm N Pallavi",
  titleHighlight: "Data Analyst",
  subtitle: "Turning complex datasets into clear, actionable business insights through Python, SQL, and Power BI dashboards.",
  ctaPrimary: { text: "View My Work", href: "#projects" },
  ctaSecondary: {
    text: "Contact Me",
    href: "mailto:pallavin290@gmail.com?subject=Hiring Inquiry – Portfolio&body=Hello,%0D%0A%0D%0AI came across your portfolio and would like to discuss an opportunity with you.%0D%0A%0D%0ABest Regards,",
  },
  ctaResume: { text: "Download Resume", href: "/RESUME.PP.pdf" },
};

export const aboutContent = {
  heading: "Hello!",
  // HTML is allowed here (it is rendered with dangerouslySetInnerHTML)
  bio: `Hi, my name is <span class="text-black text-xl font-black mx-1 tracking-wide uppercase">N Pallavi</span>, an aspiring Data Analyst based in Bengaluru, India. I am committed to developing technology solutions that deliver meaningful impact through empathetic collaboration, strategic problem-solving, and continuous learning, sharpening my skills through the placement training program at TAP Academy.`,
  techStack: ["Python", "SQL", "Power BI", "Pandas", "NumPy", "Excel"],
};

export const skillsContent = {
  badge: "My Process",
  heading: "Here's how I turn data into actionable insights",
  description: "A structured, end-to-end analytical approach from data gathering to executive decision-making.",
  cards: [
    { number: "01", title: "Research & Extract", text: "Identify key business questions and extract raw data from databases and APIs using SQL and Python." },
    { number: "02", title: "Clean & Transform", text: "Process, clean, and validate datasets using Pandas, NumPy, and Excel to ensure accuracy and consistency." },
    { number: "03", title: "Analyze & Model", text: "Perform exploratory data analysis and statistical modeling to uncover patterns, trends, and correlations." },
    { number: "04", title: "Visualize & Report", text: "Design interactive Power BI dashboards and executive reports that drive data-informed decisions." },
  ],
  endText: "Ready to deliver insights!",
};

export const technicalSkills = {
  categories: [
    {
      title: "Programming",
      skills: [{ name: "Python" }],
    },
    {
      title: "Data Analysis",
      skills: [{ name: "Excel" }, { name: "Pandas" }, { name: "NumPy" }],
    },
    {
      title: "Database & Tools",
      skills: [{ name: "SQL" }, { name: "Jupyter Notebook" }, { name: "MS Word" }],
    },
    {
      title: "Data Visualization",
      skills: [{ name: "Power BI" }, { name: "Data Dashboards" }],
    },
  ],
};

export const leadershipList = [
  {
    title: "Technical Symposium Coordinator",
    role: "Lead Student Organizer",
    description: "Coordinated technical workshops and presentations at college symposium, guiding peer teams and managing event operations.",
    badge: "Leadership",
  },
  {
    title: "Data Analytics & AI Study Group",
    role: "Peer Mentor",
    description: "Led collaborative group sessions focusing on Python, exploratory data analysis, and Machine Learning fundamentals.",
    badge: "Community",
  },
];

export const internshipsList = [
  {
    organization: "TAP Academy",
    role: "Data Analytics Trainee",
    duration: "2024 - Present",
    skills: [
      "Data extraction, transformation, and exploratory analysis",
      "Interactive dashboard creation and business intelligence reporting",
      "Database schema querying, optimization, and data validation",
    ],
    tech: ["Python", "SQL", "Power BI", "Excel", "Pandas"],
  },
];

export const softSkillsList = [
  { name: "Team Collaboration", icon: "🤝", desc: "Working seamlessly with cross-functional teams to align project deliverables and business goals." },
  { name: "Problem Solving", icon: "🧩", desc: "Breaking down complex data problems into logical, systematic, and solvable components." },
  { name: "Analytical Thinking", icon: "📈", desc: "Evaluating datasets critically to identify trends, outliers, and underlying patterns." },
  { name: "Communication", icon: "💬", desc: "Translating technical data findings into clear, impactful presentations for non-technical stakeholders." },
];

export const projects = [
  {
    id: "project-one",
    number: "01",
    badge: "🚀 Flagship Project",
    title: "5-Stage Pipelined RISC-V Processor on FPGA",
    description: "Designed a 32-bit RISC-V processor using a five-stage pipeline architecture (Fetch, Decode, Execute, Memory, Write-back) and implemented it on an FPGA board for optimized hardware performance.",
    techTags: ["RISC-V", "FPGA", "Verilog", "Computer Architecture"],
    links: { github: "https://github.com/", demo: "" },
    isFlagship: true,
  },
  {
    id: "project-two",
    number: "02",
    badge: null,
    title: "Exploratory Data Analysis & BI Dashboard",
    description: "Comprehensive data analytics project utilizing Python and Power BI to extract business insights, analyze key performance indicators, and present interactive visual reports.",
    techTags: ["Python", "Pandas", "SQL", "Power BI"],
    links: { github: "https://github.com/", demo: "" },
    isFlagship: false,
  },
];

// Used only by the optional Certificates component (bonus step)
export const certificates = {
  featured: [
    { name: "AI/ML Certification", issuer: "TAP Academy", icon: "🏅" },
  ],
  viewAllUrl: "https://www.linkedin.com/in/n-pallavi-75289332a",
};

export const education = {
  degree: "B.Tech in Electronics & Communication Engineering",
  institution: "Mother Theresa Institute of Engineering and Technology",
  cgpa: "Completed",
  graduation: "2024",
  twelfth: "",
  tenth: "",
};

export const footerContent = {
  taglines: ["Data Analytics", "Python · SQL · Power BI", "Transforming Data into Impact"],
  credential: "B.Tech in ECE | Mother Theresa Institute of Engineering and Technology",
  copyright: `© ${new Date().getFullYear()} N Pallavi | Built with React`,
};

// EmailJS — read from .env.local (variables must start with VITE_)
export const emailjsConfig = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID || "YOUR_EMAILJS_SERVICE_ID",
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "YOUR_EMAILJS_TEMPLATE_ID",
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "YOUR_EMAILJS_PUBLIC_KEY",
};
