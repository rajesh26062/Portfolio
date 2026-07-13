export interface Project {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  tags: string[];
  role: string;
  duration: string;
  technologies: string[];
  problem: string;
  solution: string;
  challenges: string;
  process: string[];
  results: string[];
  lessons: string;
}

export interface TimelineItem {
  id: number;
  year: string;
  title: string;
  company: string;
  description: string;
  category: 'education' | 'experience' | 'creativity' | 'milestone';
  icon: string;
}

export interface Course {
  id: string;
  title: string;
  description: string;
  category: string;
  lessonsCount: number;
  duration: string;
  studentsCount: number;
  price: string;
  originalPrice?: string;
  rating: number;
  image: string;
  status: 'published' | 'coming-soon';
  link?: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  content: string;
  image: string;
}

export interface ResourceItem {
  id: string;
  title: string;
  description: string;
  category: 'PDF' | 'Template' | 'Checklist' | 'Cheat Sheet';
  fileSize: string;
  downloadUrl: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: string;
  pricing: string;
  features: string[];
  cta: string;
}

export const portfolioData = {
  personalInfo: {
    name: "Rajesh Choudhary",
    titles: [
      "Software Engineer",
      "Software Quality Assurance Engineer",
      "Software Tester",
      "Content Creator",
      "Freelancer",
      "Entrepreneur",
      "Teacher",
      "Mentor",
      "Motivator",
      "Lifelong Learner"
    ],
    tagline: "Building technology. Ensuring quality. Helping people grow.",
    bioIntro: "I wear multiple hats. To me, engineering, testing, teaching, and creating are not separate careers—they are a unified mission to solve problems, construct digital solutions, and inspire growth.",
    philosophies: [
      {
        title: "Quality is Not an Afterthought",
        text: "Building software is only half the battle. Ensuring it works under pressure, scales gracefully, and delivers a flawless user experience is what separates good software from great software."
      },
      {
        title: "Learn, Build, Teach, Repeat",
        text: "The best way to master a concept is to explain it to someone else. By creating educational content, courses, and mentoring, I bridge the gap between complex engineering concepts and real-world execution."
      },
      {
        title: "The Multihyphenate Mindset",
        text: "In a world of hyper-specialization, I choose to be a generalist-expert. Navigating between coding backend APIs, writing automation scripts, scripting content, and building businesses keeps my perspective sharp and innovative."
      }
    ],
    contactLinks: {
      email: "choudharyrajesh@outlook.com",
      github: "https://github.com/rajesh",
      linkedin: "https://linkedin.com/in/rajesh",
      instagram: "https://instagram.com/rajesh",
      whatsapp: "https://wa.me/rajesh",
      calendar: "https://calendly.com/rajesh"
    }
  },

  aboutStory: {
    philosophyTitle: "Bridging Code, Quality, and Community",
    philosophyBody: "For years, the tech industry has drawn a line between builders (developers) and verifiers (testers). I believe that division is artificial. As a Software Engineer and QA Specialist, I bridge that gap. I build systems with testability in mind, and I test systems with deep engineering context. My work at Adobe and various startup client sites has shown me that high-impact engineering comes from this holistic view. Beyond that, my passion lies in sharing knowledge. Through mentoring, content creation, and courses, I work to make technology accessible, inspiring the next generation of engineers to build with confidence and precision.",
    impactMetric: "10k+",
    impactText: "Students and professionals mentored worldwide across software engineering and testing."
  },

  competencies: [
    {
      id: "engineering",
      title: "Software Engineering",
      description: "Developing robust, modern web apps and microservices with clean code, solid patterns, and highly performant layouts.",
      icon: "Code",
      skills: ["React / Next.js", "TypeScript", "Node.js", "REST APIs", "SQL", "Clean Architecture"]
    },
    {
      id: "testing",
      title: "Software Testing & QA",
      description: "Designing end-to-end automation test suites, performance benchmarks, and comprehensive regression test plans.",
      icon: "CheckSquare",
      skills: ["Playwright / Selenium", "Postman / API Testing", "CI/CD Pipelines", "Regression & Smoke Testing", "Jira & TestRail"]
    },
    {
      id: "education",
      title: "Teaching & Mentorship",
      description: "Translating complex tech stacks and career roadmaps into actionable, engaging curriculums for students.",
      icon: "GraduationCap",
      skills: ["Video Production", "Curriculum Design", "Career Roadmaps", "1-on-1 Mentoring", "Live Bootcamps"]
    },
    {
      id: "entrepreneurship",
      title: "Entrepreneurship & Freelancing",
      description: "Partnering with global clients to audit systems, scale engineering throughput, and launch tech products.",
      icon: "Briefcase",
      skills: ["QA Consulting", "Freelance Delivery", "Product Management", "Brand Strategy", "Content Partnerships"]
    }
  ],

  testingSection: {
    intro: "Quality is the heartbeat of user trust. I build comprehensive test strategies that catch edge cases long before they reach production. Here is my quality engineering stack:",
    categories: [
      {
        title: "Test Execution Types",
        items: [
          { name: "Manual Testing", desc: "User-centric exploratory testing focusing on accessibility, usability, and UI flows." },
          { name: "API Testing", desc: "Validating RESTful APIs for schema compliance, response codes, payloads, and authorization using Postman." },
          { name: "Regression Testing", desc: "Ensuring new updates do not break existing modules using automated test suites." },
          { name: "Smoke & Sanity", desc: "Fast-executing suites verifying that critical paths work on staging/production environments." },
          { name: "Functional Testing", desc: "Checking business requirements against product implementation." }
        ]
      },
      {
        title: "Tools & Methodologies",
        items: [
          { name: "Jira & Bug Tracking", desc: "Structuring defect life cycles, writing clean bug reports, and managing sprint boards." },
          { name: "SQL Data Verification", desc: "Writing complex queries to audit database status and verify backend persistence." },
          { name: "Testing Documentation", desc: "Designing structured Defect Reports, Test Plans, and Test Suites." }
        ]
      }
    ],
    sampleArtifacts: [
      { name: "Sample Test Plan.pdf", desc: "Standard QA outline for an enterprise dashboard release.", size: "1.2 MB" },
      { name: "API Test Suite.json", desc: "Postman collection with pre-request scripting and assertions.", size: "450 KB" }
    ]
  },

  journeyTimeline: [
    {
      id: 1,
      year: "2018 - 2022",
      title: "Bachelor of Technology in Computer Science",
      company: "Engineering University",
      description: "Laid the mathematical and theoretical foundations of computer science, data structures, and database systems. Graduated with Honors.",
      category: "education",
      icon: "Award"
    },
    {
      id: 2,
      year: "2021",
      title: "First Software QA Internship",
      company: "Fast-Growing Tech Startup",
      description: "Introduced to the software testing lifecycle. Wrote 200+ manual test cases and automated basic flows using Selenium.",
      category: "experience",
      icon: "Briefcase"
    },
    {
      id: 3,
      year: "2022 - 2024",
      title: "Quality Assurance Engineer",
      company: "Adobe",
      description: "Ensured the quality of cloud products. Handled comprehensive API integration testing, visual regression testing, and cross-platform compatibility suites.",
      category: "experience",
      icon: "AdobeLogo"
    },
    {
      id: 4,
      year: "2023",
      title: "Content Creation Kickoff",
      company: "YouTube & LinkedIn",
      description: "Started sharing daily programming tips, software testing roadmaps, and motivational stories, growing a community of engineering enthusiasts.",
      category: "creativity",
      icon: "Youtube"
    },
    {
      id: 5,
      year: "2024 - Present",
      title: "Freelancer & QA Consultant",
      company: "Self-Employed",
      description: "Consulted startups on setting up automated CI/CD checks, auditing API robustness, and building custom web applications.",
      category: "experience",
      icon: "Zap"
    },
    {
      id: 6,
      year: "2025",
      title: "Launching Digital Courses",
      company: "Rajesh Academy",
      description: "Created comprehensive modules on API testing and Web Automation, helping hundreds transition from manual QA to automation engineer roles.",
      category: "milestone",
      icon: "BookOpen"
    },
    {
      id: 7,
      year: "2026 & Beyond",
      title: "Future Vision: Scaling Impact",
      company: "Next Gen Systems",
      description: "Building automated testing SaaS platforms and establishing a physical training institute to nurture tech talent globally.",
      category: "milestone",
      icon: "Compass"
    }
  ] as TimelineItem[],

  projects: [
    {
      slug: "qa-orchestrator",
      title: "QA Orchestrator Framework",
      subtitle: "Enterprise-grade CI/CD Test Runner",
      description: "An automated dashboard that triggers, monitors, and aggregates results from Playwright, Selenium, and Postman API runs, visualising real-time test coverage and logs.",
      image: "project-dashboard.jpg",
      tags: ["TypeScript", "Next.js", "Playwright", "Docker", "Node.js"],
      role: "Lead QA Architect & Full Stack Engineer",
      duration: "4 Months",
      technologies: ["Next.js 14", "Docker", "Playwright", "Tailwind CSS", "Redis", "Postgres"],
      problem: "A major enterprise client had fragmented test reports across Jenkins, Github Actions, and custom machines. Teams spent 10+ hours weekly manually diagnosing test failures and tracking down logs.",
      solution: "Built a centralized test orchestration system that uses Docker runners to launch tests in parallel. It automatically parses Junit XML, matches logs to test steps, and presents analytics inside an interactive dashboard.",
      challenges: "Managing real-time event streaming for hundreds of parallel test runs. Solved this using Redis pub/sub and Server-Sent Events (SSE) in the Next.js API layer.",
      process: [
        "Analyzed existing test pipelines across 4 repositories.",
        "Designed the database schema for projects, test runs, test suites, and test cases.",
        "Implemented Docker-based executor runners to spin up test agents on-demand.",
        "Created an intuitive frontend with status filter views, error code grouping, and logs terminal."
      ],
      results: [
        "Reduced manual test review time by 85%.",
        "Decreased total pipeline execution duration by 42% through parallel containerization.",
        "Zero-configuration setup for developers, enabling self-service test runs."
      ],
      lessons: "Centralized logging requires strict log parsing formats. Enforcing standardized Junit reporting across teams solved major reporting edge cases."
    },
    {
      slug: "api-mocking-engine",
      title: "MockForge Engine",
      subtitle: "Dynamic Mock API Service for QA Teams",
      description: "A developer tool that generates real-time, programmable mock API endpoints with custom latency, status codes, and JSON schemas to simulate downstream dependencies.",
      image: "project-ai.jpg",
      tags: ["Node.js", "Express", "React", "TypeScript", "Tailwind"],
      role: "Creator & Solo Developer",
      duration: "2 Months",
      technologies: ["React", "Vite", "Node.js", "Express", "SQLite", "Monaco Editor"],
      problem: "Frontend and QA teams frequently experienced blockers because backend API specs were still in development, or downstream sandbox environments were unstable.",
      solution: "Created MockForge, allowing users to define dynamic mocks via UI. Developers can write short JS script snippets in an embedded Monaco Editor to program mock behaviors based on request payloads.",
      challenges: "Executing user-submitted code snippets safely on the backend node server to evaluate custom mock responses. Resolved this by running scripts inside isolated vm2 nodes.",
      process: [
        "Designed the UI schema using Tailwind and Shadcn-inspired styling.",
        "Configured wildcard routing on Express server to capture mock requests.",
        "Created mock dashboard interface with latency controls, body-matching rules, and active logs."
      ],
      results: [
        "Enabled parallel frontend development, saving 4-6 sprint days per milestone.",
        "Created stable environment simulations for QA smoke runs, resulting in 99% test stability.",
        "Adopted by 3 engineering squads, managing over 50k mock calls daily."
      ],
      lessons: "Providing pre-built mock templates (like standard CRUD models) drastically increases tool adoption rate over forcing developers to code mocks from scratch."
    },
    {
      slug: "creative-spaces",
      title: "EduFlow Platform",
      subtitle: "LMS for Interactive Learning & Testing Courses",
      description: "A premium, minimalist course hosting platform focusing on video lectures, interactive coding quizzes, assignments tracking, and custom certificate generation.",
      image: "project-creatives.jpg",
      tags: ["Next.js", "Stripe", "Prisma", "PostgreSQL", "Mux Video"],
      role: "Full Stack Engineer & Content Director",
      duration: "5 Months",
      technologies: ["Next.js App Router", "Tailwind CSS", "Prisma", "Supabase", "Stripe API", "Mux SDK"],
      problem: "Third-party course hosting options have high commission fees, lack specialized coding workspace components, and do not fit a premium brand identity.",
      solution: "Developed a custom, lightweight LMS built on Next.js. Features secure stream rendering via Mux, dynamic quiz validation, and a custom student workspace. Fully integrated with Stripe for seamless, multi-currency course purchase flow.",
      challenges: "Securing video files from illegal downloads. Solved by implementing dynamic signed-cookie URLs through Mux SDK, preventing direct sharing of video sources.",
      process: [
        "Mapped out the user flows: guest browsing, checkout, learning workspace, and course completion.",
        "Built responsive media streaming workspace using React player hooks.",
        "Configured webhooks for Stripe checkout to handle automated course enrollment and receipt mailing."
      ],
      results: [
        "Achieved 100% platform control, eliminating 10% platform service fees.",
        "Flawless stream performance with sub-second video buffer time via Mux CDN.",
        "Successfully registered and completed checkouts for over 1,500 students in the first 30 days."
      ],
      lessons: "For educational products, the onboarding speed is everything. Removing barriers (e.g. allowing guest cart checkouts) increased conversions by 18%."
    }
  ] as Project[],

  contentCreator: {
    stats: {
      subscribers: "50K+",
      impressions: "5M+",
      videosCount: "120+",
      collaborations: "15+"
    },
    channels: [
      { name: "YouTube", handle: "@RajeshChoudharyQA", link: "https://youtube.com", icon: "Youtube", desc: "Tutorials on Web Automation, Playwright, API Testing, and Software Engineering. I explain complex workflows in short, understandable breakdowns.", followers: "32k Subscribers" },
      { name: "LinkedIn", handle: "rajesh-choudhary", link: "https://linkedin.com", icon: "Linkedin", desc: "Thought leadership, testing strategies, bug-hunting case studies, and career tips for QA engineers transitioning into automation roles.", followers: "15k Connections" },
      { name: "Instagram", handle: "@rajesh.builds", link: "https://instagram.com", icon: "Instagram", desc: "Behind-the-scenes of building a portfolio, content creation gear, coding routines, and daily motivation.", followers: "8k Followers" }
    ],
    milestones: [
      { year: "2023", title: "Channel Launched", desc: "Uploaded the first crash course on Postman API testing, gaining 1,000 subscribers in the first month." },
      { year: "2024", title: "10K Subscribers & Adobe QA Series", desc: "Created the viral series 'QA inside Adobe', detailing testing standards of global SaaS systems." },
      { year: "2025", title: "50K Community & Premium Partnerships", desc: "Partnered with global QA tools like BrowserStack and Postman to bring tutorials to a wider audience." }
    ],
    videos: [
      { id: "v1", title: "Playwright Framework Tutorial (Zero to Production)", url: "https://www.youtube.com/embed/dQw4w9WgXcQ", views: "45K views" },
      { id: "v2", title: "API Testing with Postman - Complete Guide", url: "https://www.youtube.com/embed/dQw4w9WgXcQ", views: "88K views" }
    ]
  },

  services: [
    {
      id: "qa-consulting",
      title: "QA Architecture Consulting",
      description: "Complete review of your engineering pipelines. I will assess your test plans, design an automation roadmap using Playwright/Selenium, and integrate automated checks in CI/CD.",
      icon: "Shield",
      pricing: "Starting at $1,500/project",
      features: [
        "Audit of current codebase & manual QA process",
        "CI/CD testing pipeline integration plan",
        "Playwright or Cypress boilerplate setup",
        "Standard Bug reporting & tracking templates"
      ],
      cta: "Schedule Audit"
    },
    {
      id: "freelance-dev",
      title: "Custom Full-Stack Development",
      description: "Building responsive, modern, and highly interactive websites and dashboards using React, Next.js, and TypeScript, optimized for speed, design, and search engine optimization.",
      icon: "Code",
      pricing: "Starting at $2,000/website",
      features: [
        "Premium minimalist layout (Apple/Stripe inspired)",
        "Mobile-first responsive styling with Tailwind",
        "Performance optimization (95+ Lighthouse score)",
        "Search engine optimization (SEO) integration"
      ],
      cta: "Work With Me"
    },
    {
      id: "career-mentorship",
      title: "1-on-1 QA Career Mentorship",
      description: "Personalized path to scale your career from manual testing to Test Automation Architect or Full Stack QA. I review your resume, run mock interviews, and teach you API/web automation.",
      icon: "GraduationCap",
      pricing: "$250/month",
      features: [
        "Weekly 45-minute coaching call",
        "Resume audit & LinkedIn optimization",
        "Custom roadmap for Playwright/API testing",
        "Mock technical interview & feedback session"
      ],
      cta: "Apply for Mentorship"
    }
  ] as ServiceItem[],

  courses: [
    {
      id: "playwright-mastery",
      title: "Enterprise Playwright Automation Masterclass",
      description: "Master modern web automation. Learn dynamic page routing, storage state sharing, mock APIs, parallel execution, and CI/CD integration using Playwright and TypeScript.",
      category: "Automation",
      lessonsCount: 42,
      duration: "12 Hours",
      studentsCount: 840,
      price: "$99",
      originalPrice: "$199",
      rating: 4.9,
      image: "project-dashboard.jpg",
      status: "published",
      link: "#"
    },
    {
      id: "api-testing-pro",
      title: "API Testing & Automation Pro with Postman",
      description: "Go from basic GET/POST requests to writing dynamic assertions, chaining variables, scripting environment logic, and automating run setups inside Postman collections.",
      category: "API Testing",
      lessonsCount: 28,
      duration: "7 Hours",
      studentsCount: 1205,
      price: "$49",
      originalPrice: "$99",
      rating: 4.8,
      image: "project-ai.jpg",
      status: "published",
      link: "#"
    },
    {
      id: "qa-career-blueprint",
      title: "QA to SDET Career Blueprint",
      description: "A complete non-technical to technical roadmap. Build programming fundamentals, understand OOP, database operations, and learn how to construct automation frameworks.",
      category: "Career",
      lessonsCount: 60,
      duration: "20 Hours",
      studentsCount: 0,
      price: "$149",
      rating: 0,
      image: "project-creatives.jpg",
      status: "coming-soon"
    }
  ] as Course[],

  blogs: [
    {
      slug: "why-manual-qa-is-not-dying",
      title: "Why Manual Testing is Not Dying (And How to Be Great At It)",
      excerpt: "Despite the rise of Playwright and AI tools, human exploratory testing remains vital. Here is how manual testers can provide high business value.",
      date: "May 12, 2026",
      readTime: "5 min read",
      category: "Software Testing",
      content: `The tech world is obsessed with automation. From Playwright scripts to AI bug detectors, the common narrative is that manual software testing is obsolete. But here is the truth: automation only catches the bugs you expect it to look for. It doesn't explore. It doesn't empathize with the user.

In this post, we discuss:
- The limitations of automation scripting.
- Why exploratory testing is irreplaceable for user experience.
- How to write bug reports that developers actually want to read.
- Transitioning from reactive testing to proactive product analysis.`,
      image: "project-ai.jpg"
    },
    {
      slug: "postman-dynamic-variables",
      title: "Postman Automation: Scripting Dynamic Collections",
      excerpt: "Automate your API flows in Postman. Learn how to write pre-request scripts and assertions to chain token headers automatically.",
      date: "April 18, 2026",
      readTime: "7 min read",
      category: "API Testing",
      content: `API testing is much more than calling a URL and checking if it returns a 200 OK. Standard systems require authentication, token expiry checks, and chaining inputs from previous endpoints. Doing this manually for every request is tedious.

In this guide, we dive into:
- Setting up collection variables and environments.
- Writing pre-request scripts to generate dynamic timestamps.
- Capturing authorization tokens and setting them for follow-up requests.
- Asserting JSON Schema structures to ensure backward compatibility.`,
      image: "project-dashboard.jpg"
    },
    {
      slug: "freelancing-as-a-tester",
      title: "How I Built a QA Consulting Freelance Business",
      excerpt: "Step-by-step breakdown of how to find international clients, audit codebases, and charge premium rates for quality engineering services.",
      date: "March 02, 2026",
      readTime: "8 min read",
      category: "Business",
      content: `Moving from a standard engineering job to freelancing can be terrifying. For QA engineers, it is even harder because clients rarely look for 'manual testers' on contract sites. The trick is to position yourself not as a tester, but as a Quality Consultant who saves engineering hours.

I explain the complete system I used:
- Identifying high-ticket startups in need of automation structures.
- Pitching value: reducing pipeline duration and bug leakage.
- Pricing your services by value, not by hour.
- Maintaining long-term retainer agreements.`,
      image: "project-creatives.jpg"
    }
  ] as BlogPost[],

  resources: [
    { id: "res1", title: "Enterprise QA Test Plan Template", description: "A detailed Word/PDF template that outlines scopes, environments, test cycles, and sign-off criteria.", category: "Template", fileSize: "140 KB", downloadUrl: "#" },
    { id: "res2", title: "Postman Assertions Cheat Sheet", description: "Quick reference of common Javascript scripts inside Postman for validation.", category: "Cheat Sheet", fileSize: "85 KB", downloadUrl: "#" },
    { id: "res3", title: "Playwright Setup Checklist", description: "A step-by-step PDF check list for setting up Playwright from scratch in a new project.", category: "Checklist", fileSize: "110 KB", downloadUrl: "#" },
    { id: "res4", title: "Resume Blueprint for QA Engineers", description: "Recruiter-optimized resume layout that got me interviewed at Adobe and various high-paying startups.", category: "PDF", fileSize: "220 KB", downloadUrl: "#" }
  ] as ResourceItem[]
};
