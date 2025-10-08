export const DATA = {
  home: {
    hero: {
      name: "Aashujeet Rai",
      title: "Full stack developer",
      subtitle:
        "I build fast, accessible and visually engaging web experiences.",
    },
    skills: {
      sectionTitle: "Skills & Expertise",
      sectionDescription:
        " Specialized in creating modern digital experiences with cutting-edge technologies",
      overview: [
        {
          name: "Full Stack Development",
          level: 65,
          icon: "lucide:layout-dashboard",
          color: "primary",
        },
        {
          name: "LLM Based - Agent Development",
          level: 70,
          icon: "lucide:code",
          color: "secondary",
        },
        {
          name: "Mobile Development",
          level: 50,
          icon: "lucide:smartphone",
          color: "success",
        },
        {
          name: "Web Application",
          level: 58,
          icon: "lucide:video",
          color: "success",
        },
      ],
    },
  },
  about: {
    profile: {
      name: "Aashujeet Rai",
      title: "Full Stack Developer",
      image:
        "/images/Profile/profile.jpg",
      description: [
        "I'm a creative full-stack developer with a passion for developing LLM Model Based-Agents and clean code. I focus on building beautiful, functional, and high-performance websites and web apps.",
        "My approach is both technical and aesthetic — I enjoy turning complex problems into elegant user experiences. I work primarily with modern frameworks like React, Vite, and TailwindCSS.",
        "Outside of code, I enjoy motion design, product strategy, and always pushing the boundaries of front-end development.",
      ],
    },
    education: [
      {
        title: "Chandigarh College of Arts",
        date: "2021 - 2024",
        icon: "mdi:palette",
        description:
          "Earned a Bachelor's degree in Computer Science which focused on foundational art and visual design website, which sparked my early interest in creative problem solving. Explored traditional media, digital illustration, and visual storytelling.",
      },
      {
        title: "Central Institute of Petrochemicals Engineering & Technology",
        date: "2018 - 2021",
        icon: "mdi:school",
        description:
          "Earned a Diploma's degree in Plastic engineering with a strong skills in plastic engineering, field of plastics, covering material properties, manufacturing processes like injection molding and extrusion, tooling and mold design, quality control, and environmental sustainability",
      },
    ],
    experience: [
      {
        title: "Full Stack Developer Intern",
        date: "2025 - 2025",
        icon: "mdi:briefcase",
        description:
        "Worked as a Full Stack Developer Intern as remote work on EasyShiksha mostly working on the server side application server-side applications and RESTful APIs using Node.js and Express.js.On the front end, I built a responsive and desktop-optimized interface with React and Next.js "
            
      },
      
    ],
    technologies: {
      frontend: {
        description:
          "I craft dynamic, responsive UIs using modern JavaScript frameworks and CSS tools.",
        tools: [
          { name: "React", icon: "logos:react" },
          { name: "Next.js", icon: "skill-icons:nextjs-dark" },
          { name: "Tailwind", icon: "logos:tailwindcss-icon" },
          { name: "TypeScript", icon: "logos:typescript-icon" },
          { name: "HTML5", icon: "logos:html-5" },
          { name: "CSS3", icon: "logos:css-3" },
        ],
      },
      backend: {
        description:
          "I build fast APIs and scalable backends using Node.js, Bun, and Python.",
        tools: [
          { name: "Node.js", icon: "logos:nodejs-icon" },
          { name: "Python", icon: "logos:python" },
          { name: "MySQL", icon: "logos:mysql-icon" },
          { name: "PostgresSQL", icon: "logos:postgresql" },
        ],
      },
      uiUx: {
        description:
          "I design smooth, user-centered interfaces and high-fidelity prototypes.",
        tools: [
          { name: "Notion", icon: "logos:notion-icon" },
        ],
      },
      graphicDesign: {
        description:
          "My graphic work includes logos, branding, and posters using Adobe Suite.",
        tools: [
          { name: "Photoshop", icon: "logos:adobe-photoshop" },
        ],
      },
    },
  },

  projects: {
    sectionTitle: "Featured Projects",
    sectionDescription:
      "A selection of my recent projects showcasing development expertise",
    work: [
      {
        id: 1,
        title: "AI-Powered QMS—Python & FastAPI",
        description:
          "Developed a QMS application with React for the frontend and a Python/FastAPI backend with LLM-based agent functionalities.",
        image: "/images/qms/QMS1.png",
        category: "Applications",
        details:
          "Developed a QMS application with React for the frontend and a Python/FastAPI backend.Implemented a complete role-based user authentication system with sign-up and login JWT.Integrated the Google Gemini API to create an AI assistant.Designed a feature-rich dashboard, multi-step wizard, advanced filtering, and bulk actions.",
        gallery: [
          "/images/qms/QMS1.png",
          "/images/qms/QMS2.png",
          "/images/qms/QMS3.png",
          "/images/qms/QMS4.png",
        ],
        github: "https://github.com/Aashujeet6260/QMS-Module-Development-",
        live: "https://qms-module-development.vercel.app/login",
        tech: [
          { name: "Python", icon: "logos:python" },
          { name: "React", icon: "logos:react" },
          { name: "TailwindCSS", icon: "logos:tailwindcss-icon" },
          { name: "TypeScript", icon: "logos:typescript-icon" },
          { name: "FastAPI", icon: "simple-icons:fastapi" },
        ],
      },

      {
        id: 9,
        title: "HCP Insight and RepAssist AI",
        description:
          "Developed a CRM application module for engaging HCPs using React and Redux for the frontend and Implemented a conversational AI agent with LangGraph and custom tools.",
        image: "/images/hcp-agent/HCP1.png",
        category: "Applications",
        details:
          "Developed a CRM module for HCP engagement using React and Redux for a responsive, real-time interface. Built a FastAPI backend in Python to manage core business logic and API endpoints, integrated with Vercel-PostgreSQL and Implemented a conversational AI agent using LangGraph and custom tools, and enabled real-time UI updates via WebSockets and Redux state management.",
          gallery: [
            "/images/hcp-agent/HCP1.png",
            "/images/hcp-agent/HCP2.png",
          ],
        github: "https://github.com/Aashujeet6260/QMS-Module-Development-",
        live: "https://hcp-insight-and-rep-assist-ai.vercel.app/",
        tech: [
          { name: "Python", icon: "logos:python" },
          { name: "React", icon: "logos:react" },
          { name: "TailwindCSS", icon: "logos:tailwindcss-icon" },
          { name: "TypeScript", icon: "logos:typescript-icon" },
          { name: "FastAPI", icon: "simple-icons:fastapi" },
        ],
      },

      {
        id: 2,
        title: "Job Portal Web App",
        description:
          "Developed a full-stack job portal using the MERN stack to facilitate seamless interaction between students and recruiters",
        image: "/images/job-portal/JobPortal1.png",
        gallery: [
          "/images/job-portal/JobPortal1.png",
          "/images/job-portal/JobPortal2.png",
          "/images/job-portal/JobPortal3.png",
          "/images/job-portal/JobPortal4.png",
        ],
        category: "Web Development",
        details:
          "A fully funtional full-stack job portal (MERN stack) enabling smooth interaction between students and recruiters. Designed a scalable Node.js/Express.js backend (MVC) to manage jobs, applications, and users, and implemented secure JWT-based authentication with bcrypt.js for data protection.",
        github: "https://github.com",
        live: "https://example.com",
        tech: [
          { name: "React", icon: "logos:react" },
          { name: "TailwindCSS", icon: "logos:tailwindcss-icon" },
          { name: "TypeScript", icon: "logos:typescript-icon" },
          { name: "PostgreSQL", icon: "logos:postgresql" },
        ],
      },
      {
        id: 3,
        title: "StockMarket Dashboard",
        description:
          "Developed a Application of an Stock Market Dashboard combining Node.js and a Python ML model to visualize real-time market data and predict stock prices",
        image: "/images/web_page/StockMarketDashborad.jpeg",
        category: "Applications",
        details:
          "Stock Market Dashboard combining Node.js and a Python ML model to visualize real-time market data and predict stock prices. Built a RESTful API (Node.js/Express.js) for financial metrics and historical data, integrated a Linear Regression model (scikit-learn) for forecasts, and designed an interactive Chart.js frontend for dynamic, real-time visualizations.",
        gallery: [
          "/images/web_page/StockMarketDashborad.jpeg",
        ],
        github: "https://github.com/Aashujeet6260/stockmarket-datasheet",
        live: "https://stockmarket-datasheet.onrender.com/",
        tech: [
          { name: "Next.js", icon: "skill-icons:nextjs-dark" },
          { name: "TailwindCSS", icon: "logos:tailwindcss-icon" },
          { name: "TypeScript", icon: "logos:typescript-icon" },
        ],
      },


      {
        id: 4,
        title: "Voting Application in Node.js & MongoDB",
        description:
          "Voting platform using the MERN stack to facilitate secure, one-person-one-vote elections with Aadhar-based authentication.",
        image: "https://img.heroui.chat/image/dashboard?w=600&h=400&u=4",
        gallery: [
          "https://img.heroui.chat/image/dashboard?w=600&h=400&u=4",
          "https://img.heroui.chat/image/dashboard?w=600&h=400&u=4-1",
          "https://img.heroui.chat/image/dashboard?w=600&h=400&u=4-2",
          "https://img.heroui.chat/image/dashboard?w=600&h=400&u=4-3",
        ],
        category: "Applications",
        details:
          "Developed a secure full-stack voting platform (MERN stack) enabling Aadhar-based authentication and one-person-one-vote elections. Designed a Node.js/Express RESTful API with JWT authentication.",
        github: "https://github.com/Aashujeet6260/voting_machine",
        live: "https://voting-machine-c2m4.onrender.com/",
        tech: [
          { name: "React", icon: "logos:react" },
          { name: "TailwindCSS", icon: "logos:tailwindcss-icon" },
          { name: "Vercel", icon: "simple-icons:vercel" },
          { name: "Node.js", icon: "logos:nodejs-icon" },
        ],
      },


      {
        id: 5,
        title: "Spotify Website Clone",
        description:
          "Developed a responsive Spotify-like music player using HTML, CSS, and JavaScript",
        image: "/images/web_page/spotify.jpg",
        category: "Web Development",
        details:
          "Developed a responsive Spotify-like music player using HTML, CSS, and JavaScript. Implemented dynamic features such as play, pause, seek, and song switching using JavaScript. Connected and played local audio files directly within the browser using the HTML5 <audio> element and JavaScript event handling.",
        gallery: [
          "/images/web_page/spotify.jpg",
        ],

        github: "https://github.com/Aashujeet6260/spotifyclone.github.io",
        tech: [
          { name: "HTML5", icon: "logos:html-5" },
          { name: "CSS3", icon: "logos:css-3" },
          
        ],
      },

      {
        id: 6,
        title: "Ecommerce Website- Grocery Store",
        description:
          "Build a Ecommerce Website with User-friendly online shopping platform using PHP, WordPress, WooCommerce, and XAMPP",
        image: "/images/web_page/ecommerce.jpg",
        category: "Web Development",
        details:
          "Built a user-friendly online shopping platform using PHP, WordPress, WooCommerce, and XAMPP. Implemented secure user authentication, a dynamic product catalog, and a shopping cart system with MySQL database integration. Designed a responsive interface using Elementor.",
        gallery: [
          "/images/web_page/ecommerce.jpg",
        ],

        github: "https://github.com/Aashujeet6260/Ecommerce_Website",
        tech: [
          { name: "HTML5", icon: "logos:html-5" },
          { name: "CSS3", icon: "logos:css-3" },
          
        ],
      },

      {
        id: 7,
        title: "Netflix Website Clone- HomePage",
        description:
          "Developed a responsive Spotify-like music player using HTML, CSS, and JavaScript",
        image: "/images/web_page/netflix.jpg",
        category: "Web Development",
        details:
          "Developed a responsive front-end clone of the Netflix homepage using HTML and CSS. The project focuses on recreating the visual layout, UI design, and responsive behavior of the original platform.",
        gallery: [
          "/images/web_page/netflix.jpg",
        ],

        github: "https://github.com/Aashujeet6260/netflix-homepage-clone",
        tech: [
          { name: "HTML5", icon: "logos:html-5" },
          { name: "CSS3", icon: "logos:css-3" },
          
        ],
      },


      {
        id: 8,
        title: "SaaS Subscription API",
        description:
          "Backend API managing SaaS subscriptions, billing, and user accounts.",
        image: "https://img.heroui.chat/image/dashboard?w=600&h=400&u=10",
        gallery: [
          "https://img.heroui.chat/image/dashboard?w=600&h=400&u=10",
          "https://img.heroui.chat/image/dashboard?w=600&h=400&u=10-1",
          "https://img.heroui.chat/image/dashboard?w=600&h=400&u=10-2",
          "https://img.heroui.chat/image/dashboard?w=600&h=400&u=10-3",
        ],
        category: "Backend Services",
        details:
          "RESTful API supporting SaaS subscription workflows with Stripe integration, usage metering, tiered pricing, webhook handling, trial periods, and analytics. Optimized for high concurrency with Redis caching.",
        github: "https://github.com",
        tech: [
          { name: "Node.js", icon: "logos:nodejs-icon" },
          { name: "Stripe", icon: "logos:stripe" },
          { name: "PostgreSQL", icon: "logos:postgresql" },
          { name: "JWT", icon: "simple-icons:jsonwebtokens" },
        ],
      },




    ],
  },


  contact: {
    heading:
      "Have a project in mind? Get in touch and let's create something amazing.",
    location: {
      mapSrc:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14022.381332611828!2d77.35368407330393!3d28.535516964781026!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cef5c6edb79d1%3A0x2bcdc68d70f77eb1!2sNoida%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1730549831234!5m2!1sen!2sin",
      address: "Noida, UP",
    },
  },
  morphingTexts: {
    about: ["Creative", "Passionate", "Developer"] as const,
    projects: ["My Work", "Creations", "Experiments", "Innovations"] as const,
    contact: ["Let's", "Build", "Together"] as const,
  },
  navigation: [
    { name: "Home", href: "/", icon: "lucide:home" },
    { name: "About", href: "/about", icon: "lucide:user" },
    { name: "Projects", href: "/projects", icon: "lucide:folder-code" },
    { name: "Contact", href: "/contact", icon: "lucide:send" },
  ],
  footer: {
    name: "Aashujeet Rai",
    description: "Always interested in new projects and collaborations.",
    contact: {
      email: "aashujeet2001@gmail.com",
      location: "Noida, UP",
    },
    socialLinks: [
      { platform: "X", url: "https://x.com", icon: "simple-icons:x" },
      { platform: "GitHub", url: "https://github.com", icon: "mdi:github" },
      {
        platform: "LinkedIn",
        url: "https://linkedin.com",
        icon: "mdi:linkedin",
      },
      {
        platform: "Dribbble",
        url: "https://dribbble.com",
        icon: "mdi:dribbble",
      },
    ],
    services: [ "Web Development", "Web Application Devlopement", "AI Agent Development" ],
  },
} as const;
