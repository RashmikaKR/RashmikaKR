
const portfolioData = {
  personalInfo: {
    firstName: "Rashmika",
    lastName: "Ramkumar",
    title: "AI & ML Student",
    tagline: "Learning, Experimenting, and Innovating to Shape the Future of Technology",
    email: "krrashmika2004@gmail.com", 
    phone: "+91 7667690991",
    location: "Perundurai, India",
    bio: "Eager to enhance my expertise and build a fulfilling career in an organization that fosters innovation, creativity, and forward-thinking",
    socialLinks: {
      github: "https://github.com/RashmikaRamkumar",
      linkedin: "https://www.linkedin.com/in/rashmika-ramkumar-0b9572259",
      kaggle: "https://kaggle.com/rashmikakr",
      email: "mailto:krrashmika2004@gmail.com",
    },
  },
  
  education: [
    {
      degree: "B. Tech - AI & ML",
      institution: "Kongu Engineering College, Perundurai",
      duration: "2022 – 2026*",
      score: "CGPA: 8.85 / 10.0*",
    },
    {
      degree: "HSC",
      institution: "Bala Barathi Matric Hr Sec School",
      duration: "2022",
      score: "Percentage: 90.1%",
    },
    {
      degree: "SSLC",
      institution: "Bala Barathi Matric Hr Sec School",
      duration: "2020",
      score: "Percentage: 91%",
    },
  ],
  
  skills: {
    programmingLanguages: [
      { name: "Python", level: 90 },
      { name: "JavaScript", level: 85 },
      { name: "Java", level: 80 },
      { name: "C", level: 75 },
      { name: "HTML", level: 90 },
      { name: "CSS", level: 85 },
      { name: "Terraform", level: 70 },
    ],
    frontend: [
      { name: "React", level: 85 },
      { name: "Vite", level: 80 },
      { name: "Tailwind CSS", level: 85 },
    ],
    backend: [
      { name: "Node.js", level: 80 },
      { name: "Express", level: 75 },
      { name: "Flask", level: 75 },
    ],
    ai_ml: [
      { name: "NumPy", level: 90 },
      { name: "Pandas", level: 90 },
      { name: "scikit-learn", level: 85 },
      { name: "TensorFlow", level: 80 },
      { name: "OpenCV", level: 80 },
      { name: "Seaborn", level: 85 },
      { name: "PyTorch", level: 80 },
    ],
    tools: [
      { name: "Netlify", level: 85 },
      { name: "Vercel", level: 85 },
      { name: "Render", level: 80 },
      { name: "MongoDB", level: 80 },
      { name: "MySQL", level: 75 },
      { name: "Postman", level: 85 },
      { name: "Git", level: 90 },
      { name: "Power BI", level: 75 },
      { name: "Tableau", level: 80 },
      { name: "Canva", level: 80 },
      { name: "Figma", level: 75 },
      { name: "Docusaurus", level: 70 },
    ]
  },
  
  areasOfInterest: ["Generative AI", "Database Management System"],
  
  experience: [
    {
      title: "Software Engineer",
      company: "ChainAim Technologies",
      location: "USA (Remote)",
      startDate: "Jul 2024",
      endDate: "Dec 2024",
      description: [
        "Documented Actus Quickstart using Docusaurus to help users start with the Actus Framework",
        "Explored zero knowledge proofs on MINA blockchain"
      ],
    },
    {
      title: "Frontend Developer",
      company: "Shinelogics",
      location: "Chennai (Remote)",
      startDate: "Aug 2024",
      endDate: "Dec 2024",
      description: [
        "Developed a Recruitment Platform Interface that optimized the hiring workflow by streamlining resume processing & interview scheduling",
        "Used React to enhance UI/UX for a seamless user experience"
      ],
    },
    {
      title: "Data Engineer",
      company: "Centillion Labs",
      location: "Bangalore (Remote)",
      startDate: "Dec 2023",
      endDate: "Mar 2024",
      description: [
        "Employed Selenium and BeautifulSoup for web scraping and data extraction",
        "Developed a Python based vulnerability detection system for Azure cloud"
      ],
    },
  ],
  
  projects: [
    {
      title: "AI-Powered Smart Farming Assistant (Farmora)",
      description: "Smart AI assistant for farmers, offering crop recommendations, disease diagnostics, weather insights, market trends, and a multilingual voice chatbot. Includes a task manager, and calendar API for seamless farm management.",
      technologies: ["React", "FastAPI", "MongoDB", "Firebase", "Python"],
      githubLink: "https://github.com/RashmikaRamkumar/Farmora",
      liveLink: "https://farmora-demo.vercel.app",
      image: "https://placehold.co/600x400",
      category: "ai-ml"
    },
    {
      title: "Smart Product Management Chatbot (Farmlink-Bot)",
      description: "Built an NLU-powered chatbot for sellers to manage product listings with secure session handling via Firebase. Automates inventory tracking and seller interactions.",
      technologies: ["Mistral", "MongoDB", "React", "Tailwind CSS"],
      githubLink: "https://github.com/RashmikaRamkumar/Farmlink-Bot",
      liveLink: "https://farmlink-bot.vercel.app",
      image: "https://placehold.co/600x400",
      category: "ai-ml"
    },
    {
      title: "Attendance Monitoring System (AttendanceSync)",
      description: "Developed a real-time attendance tracking system for the Department of AI. Featuring user authentication using JWT, RBAC, and email reminders.",
      technologies: ["React", "MongoDB", "Node.js", "Render", "Nodemailer"],
      githubLink: "https://github.com/RashmikaRamkumar/AttendanceSync",
      liveLink: "https://attendance-sync.onrender.com",
      image: "https://placehold.co/600x400",
      category: "fullstack"
    },
    {
      title: "Integrated Common Services to People (EduVerse-Services)",
      description: "Developed a mentor-student connection platform for Intel Unnati Industrial Training Programme. Streamlines educational resources and facilitates collaborative learning.",
      technologies: ["React", "MongoDB", "Node.js", "JWT", "Cloudinary"],
      githubLink: "https://github.com/RashmikaRamkumar/EduVerse-Services",
      liveLink: "https://eduverse-services.vercel.app",
      image: "https://placehold.co/600x400",
      category: "web"
    },
  ],
  
  // Separate achievements from certifications
  achievements: [
    {
      title: "KEC Hackathon'25 Winner",
      issuer: "KEC",
      date: "2025",
      description: "First place winner at KEC Hackathon'25, a National Level Hackathon (30 hrs).",
      type: "competition"
    },
    {
      title: "KEC Hackathon'24 Winner",
      issuer: "KEC",
      date: "2024",
      description: "First place winner at KEC Hackathon'24 (30 hrs).",
      type: "competition"
    },
    {
      title: "SIH Internal Hackathon Winner",
      issuer: "Smart India Hackathon",
      date: "2024",
      description: "First place winner at Smart India Hackathon Internal.",
      type: "competition"
    },
    {
      title: "Hacksphere'25 Runner-Up",
      issuer: "Hacksphere",
      date: "2025",
      description: "Second place in Hacksphere'25 24-hour hackathon.",
      type: "competition"
    },
    {
      title: "Hacknovate'25 Runner-Up",
      issuer: "Hacknovate",
      date: "2025",
      description: "Second place in Hacknovate'25 24-hour hackathon.",
      type: "competition"
    },
    {
      title: "Academic Excellence Award",
      issuer: "University",
      date: "2023-2024",
      description: "Received Academic Excellence Award for outstanding academic performance.",
      type: "award"
    },
  ],
  
  // New certifications array
  certifications: [
    {
      title: "Microsoft Azure AI Engineer Associate",
      issuer: "Microsoft",
      date: "Oct 2024",
      description: "Professional certification validating expertise in designing and implementing AI solutions, machine learning models, and cognitive services in Azure.",
      credential: "https://certification.microsoft.com",
    },
    {
      title: "MongoDB Certified Associate Developer",
      issuer: "MongoDB",
      date: "Feb 2025",
      description: "Professional certification validating expertise in MongoDB development.",
      credential: "https://university.mongodb.com/certification",
    }
  ],
  
  leadership: [
    {
      position: "Joint Secretary",
      organization: "AI Coding Club",
      duration: "2024-2025",
      description: "Leading the AI Coding Club, organizing workshops, hackathons, and collaborative learning sessions.",
    },
    {
      position: "Executive Member",
      organization: "CSI",
      duration: "2023-2024",
      description: "Organizing technical events, workshops, and managing club activities as part of the Computer Society of India student chapter.",
    },
  ],
  
  contributions: [
    {
      title: "Tech Companies Global Dataset",
      platform: "Kaggle",
      date: "Dec 2024",
      description: "Contributed to Tech Companies Global Dataset on Kaggle.",
      link: "https://kaggle.com/datasets/techcompanies",
    },
    {
      title: "Actus Framework Guide",
      platform: "Actus",
      date: "Nov 2024",
      description: "Documented Actus Framework guide.",
      link: "https://github.com/actus-userguides",
    },
    {
      title: "Book Chapter: Interpretable Image Processing for Autonomous Vehicles",
      platform: "Academic Publication",
      date: "2024",
      description: "Co-authored a book chapter in 'Distributed Deep Learning and Explainable AI (XAI) in Industry 4.0'.",
      link: "https://doi.org/10.1000/xyz123",
    },
  ],
  
  publications: [
    {
      title: "Enhanced Early Identification of Autism Spectrum Disorder using Deep Learning and Advanced Machine Learning",
      journal: "IEEE",
      date: "2024",
      description: "Research on applying deep learning techniques for early autism detection.",
      doi: "10.1109/ICECA63461.2024.10800797",
      link: "https://doi.org/10.1109/ICECA63461.2024.10800797",
    },
  ],
  
  githubStats: {
    username: "RashmikaRamkumar",
    languages: [
      { name: "JavaScript", percentage: 40.82 },
      { name: "Python", percentage: 14.29 },
      { name: "Jupyter Notebook", percentage: 12.24 },
      { name: "TypeScript", percentage: 6.12 },
      { name: "Java", percentage: 4.08 },
    ],
    commitActivity: [
      { time: "Morning", percentage: 17.26, commits: 178 },
      { time: "Daytime", percentage: 25.80, commits: 266 },
      { time: "Evening", percentage: 46.46, commits: 479 },
      { time: "Night", percentage: 10.48, commits: 108 },
    ],
    productiveDay: [
      { day: "Monday", percentage: 24.44, commits: 252 },
      { day: "Tuesday", percentage: 16.59, commits: 171 },
      { day: "Wednesday", percentage: 5.92, commits: 61 },
      { day: "Thursday", percentage: 12.80, commits: 132 },
      { day: "Friday", percentage: 11.74, commits: 121 },
      { day: "Saturday", percentage: 16.39, commits: 169 },
      { day: "Sunday", percentage: 12.12, commits: 125 },
    ]
  },
  
  leetCodeStats: {
    username: "rashmi2004",
    solved: {
      easy: 120,
      medium: 85,
      hard: 32,
    },
  },
};

export default portfolioData;
