import { Project } from "@/lib/types";

export const projects: Project[] = [
  {
    id: "school-management",
    title: "School Management System",
    shortDescription:
      "A comprehensive school management system for higher institutions with role-based access control for all users.",
    description:
      "A robust school management system designed for higher institutions, featuring distinct portals for administrators, students, and lecturers. The system streamlines academic processes and enhances communication between all stakeholders.",
    technologies: ["React", "Next.js", "Node.js", "MongoDB", "Email Service"],
    features: [
      "Role-based access control for admin, students, and lecturers",
      "Student and lecturer management",
      "Course scheduling and management",
      "Real-time updates and notifications",
      "Secure authentication and authorization",
    ],
    image:
      "https://images.unsplash.com/photo-1606761568499-6d2451b23c66?q=80&w=1471&auto=format&fit=crop",
    liveUrl: "https://price.livingseed.org",
    category: "web",
  },
  {
    id: "information-management",
    title: "Information Management",
    shortDescription:
      "A comprehensive information management system for organizations with role-based access control.",
    description:
      "A robust information management system designed for a specific organization, featuring distinct portals for administrators, participants, and resource persons. The system streamlines information flow and enhances communication between all stakeholders.",
    technologies: ["React", "Next.js", "Node.js", "MongoDB", "Email Service"],
    features: [
      "Role-based access control for admin, participants, and resource persons",
      "Participant and resource person management",
      "Information scheduling and management",
      "Real-time updates and notifications",
      "Secure authentication and authorization",
    ],
    image:
      "https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=1470&auto=format&fit=crop",
    liveUrl: "https://ledeyo.livingseed.org",
    category: "web",
  },
  {
    id: "personal-finance-manager",
    title: "Personal Finance Manager",
    shortDescription:
      "A backend API for managing personal finances with transaction tracking and budgeting. Security features included.",
    description:
      "Built a robust RESTful API for personal finance management. Features include transaction tracking, budget planning, expense categorization, and financial reporting with secure authentication.",
    technologies: ["Node.js", "Express.js", "MongoDB", "JWT", "REST API"],
    features: [
      "Transaction CRUD operations",
      "Budget tracking and alerts",
      "Expense categorization",
      "Financial reports and analytics",
      "Secure user authentication",
    ],
    image:
      "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=1470&auto=format&fit=crop",
    githubUrl: "https://github.com/Retpaul/Finance-Manager",
    category: "API",
  },
  {
    id: "ecommerce-product-listing",
    title: "E-Commerce Product Listing",
    shortDescription:
      "A responsive product listing page with shopping cart functionality and checkout process, which shows modern design principles.",
    description:
      "Created a fully functional e-commerce product listing interface with an interactive shopping cart system. Features include product browsing, add-to-cart functionality, cart management (add, remove, update quantities), and a complete checkout flow. Built with React and styled with modern CSS for a seamless shopping experience. All data is managed in the frontend using React state management.",
    technologies: [
      "React",
      "TypeScript",
      "TailwindCSS",
      "React Hooks",
      "Next.js",
    ],
    features: [
      "Dynamic product listing with images and details",
      "Add to cart functionality with quantity selection",
      "Shopping cart with item management (add, remove, update)",
      "Real-time cart total calculation",
      "Checkout process with order summary",
      "Responsive design for all devices",
      "Local state management for cart persistence",
    ],
    image:
      "https://images.unsplash.com/photo-1472851294608-062f824d29cc?q=80&w=1470&auto=format&fit=crop",
    githubUrl: "https://github.com/Retpaul/product-listing",
    liveUrl: "https://product-listing-ebon.vercel.app/",
    category: "web",
  },
  {
    id: "chat-app",
    title: "Real-Time Chat Application",
    shortDescription:
      "A backend service for real-time messaging with WebSocket support. Which supports private and group chats.",
    description:
      "Developed a scalable real-time chat application backend with WebSocket integration. Supports private messaging, group chats, message persistence, and online status tracking.",
    technologies: ["Node.js", "Socket.io", "Express.js", "MongoDB", "Redis"],
    features: [
      "Real-time messaging with WebSocket",
      "Private and group chat support",
      "Message history and persistence",
      "Online/offline status tracking",
      "Typing indicators",
    ],
    image:
      "https://images.unsplash.com/photo-1611606063065-ee7946f0787a?q=80&w=1470&auto=format&fit=crop",
    githubUrl: "https://github.com/Retpaul/chat-app",
    category: "API",
  },
  {
    id: "iot-heart-fitness-tracker",
    title: "IoT Heart Fitness Tracker",
    shortDescription:
      "A wearable IoT device that monitors heart rate in real-time and alerts users when abnormal patterns are detected.",
    description:
      "Developed a comprehensive heart fitness tracking system with a wearable band that continuously monitors pulse and heart rate. The system features real-time data transmission, abnormal heart rate detection, and instant alerts when the heart rate exceeds safe thresholds. Built a robust API backend to handle data collection, processing, and alert management.",
    technologies: [
      "Node.js",
      "Express.js",
      "Arduino",
      "IoT Protocols",
      "WebSocket",
      "REST API",
    ],
    features: [
      "Real-time heart rate monitoring via wearable band",
      "Abnormal heart rate detection and alerts",
      "Pulse tracking and historical data storage",
      "Instant alarm system for elevated heart rates",
      "RESTful API for data management",
      "WebSocket integration for real-time updates",
    ],
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=1470&auto=format&fit=crop",
    githubUrl: "https://github.com/Retpaul/iot_api/tree/main/backend",
    category: "iot",
  },
  {
    id: "location-finder-app",
    title: "Hotels & Restaurants Locator",
    shortDescription:
      "A location-based app that helps you discover nearby hotels and restaurants in any city using geolocation.",
    description:
      "Developed a location-based discovery application that helps users find hotels and restaurants in their vicinity. The app uses geolocation APIs to detect the user's current location and displays nearby establishments with detailed information. Features interactive maps, distance calculation, ratings, and filtering options to help travelers and locals discover the best places around them. Perfect for exploring new cities or finding hidden gems in your area.",
    technologies: [
      "React",
      "Google Maps API",
      "Geolocation API",
      "TypeScript",
      "TailwindCSS",
    ],
    features: [
      "Real-time geolocation to detect user's current position",
      "Search for hotels and restaurants by city or area",
      "Interactive map with location markers",
      "Distance calculation from user's location",
      "Filter by ratings, price range, and amenities",
      "Detailed information cards for each location",
      "Responsive design for mobile and desktop use",
    ],
    image:
      "https://images.unsplash.com/photo-1524850011238-e3d235c7d4c9?q=80&w=1470&auto=format&fit=crop",
    githubUrl: "https://github.com/Retpaul/locator",
    liveUrl: "https://locator-pi.vercel.app/",
    category: "web",
  },
  {
    id: "book-management-system",
    title: "Book Management System",
    shortDescription:
      "A RESTful API for managing books with user authentication, profile management, and email notifications.",
    description:
      "Built a comprehensive Book Management System with a RESTful API using Node.js, Express, and MongoDB. The system features JWT-based authentication, user profile management, and a complete book collection management system. Implemented email notifications using Nodemailer and EJS templating, sending welcome emails to new users upon registration. Includes advanced search and filtering capabilities with pagination for efficient data retrieval.",
    technologies: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT",
      "EJS",
      "Nodemailer",
    ],
    features: [
      "User registration with email verification and welcome emails",
      "JWT-based authentication and authorization",
      "Complete CRUD operations for books",
      "Advanced search and filtering by genre, author, and rating",
      "User profile management (view, update, delete)",
      "Pagination for efficient data retrieval",
      "Comprehensive Postman API documentation",
    ],
    image:
      "https://images.unsplash.com/photo-1507842217343-583bb7270b66?q=80&w=1470&auto=format&fit=crop",
    githubUrl: "https://github.com/Retpaul/book_app_backend",
    liveUrl: "https://documenter.getpostman.com/view/29921932/2sAY4sjQ1h",
    category: "API",
  },

  {
    id: "modern-portfolio",
    title: "Modern Portfolio Website",
    shortDescription:
      "A sleek and interactive portfolio website showcasing projects and skills with modern animations.",
    description:
      "Designed and developed a modern, responsive portfolio website featuring smooth animations, interactive UI elements, and a clean design aesthetic. Built with Next.js for optimal performance and SEO, incorporating Framer Motion for engaging animations, and styled with Tailwind CSS. The portfolio includes project showcases, skills section, contact form, and a blog section. Features dark mode toggle, smooth scrolling, and optimized for all devices.",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Framer Motion",
      "TailwindCSS",
      "ShadCN UI",
    ],
    features: [
      "Responsive design with mobile-first approach",
      "Smooth animations and transitions with Framer Motion",
      "Dark mode and light mode toggle",
      "Interactive project showcase with filtering",
      "Contact form with validation",
      "SEO optimized with Next.js",
      "Fast loading and performance optimized",
    ],
    image:
      "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?q=80&w=1470&auto=format&fit=crop",
    githubUrl: "https://github.com/Retpaul/portfolio",
    liveUrl: "https://portfolio-blond-mu-85.vercel.app/",
    category: "web",
  },
];
