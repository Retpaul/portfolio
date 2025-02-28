export interface Project {
  id: string;
  title: string;
  description: string;
  shortDescription: string;
  technologies: string[];
  features: string[];
  image: string;
  githubUrl?: string;
  liveUrl?: string;
  category: "web" | "mobile" | "iot" | "other";
}

export const projects: Project[] = [
  {
    id: "school-management",
    title: "School Management System",
    shortDescription: "A comprehensive school management system for higher institutions with role-based access control.",
    description: "A robust school management system designed for higher institutions, featuring distinct portals for administrators, students, and lecturers. The system streamlines academic processes and enhances communication between all stakeholders.",
    technologies: ["React", "Next.js", "Node.js", "MongoDB", "TypeScript"],
    features: [
      "Role-based access control for admin, students, and lecturers",
      "Student and lecturer management",
      "Course scheduling and management",
      "Real-time updates and notifications",
      "Secure authentication and authorization"
    ],
    image: "https://images.unsplash.com/photo-1606761568499-6d2451b23c66?q=80&w=1471&auto=format&fit=crop",
    category: "web"
  },
  {
    id: "iot-smart-meter",
    title: "IoT Smart Electronic Meter",
    shortDescription: "An IoT-based smart electronic meter for monitoring power consumption and environmental metrics.",
    description: "Developed a sophisticated IoT solution for monitoring electronic meters. The system provides real-time data on power consumption, battery levels, sun intensity, and temperature, enabling efficient energy management and monitoring.",
    technologies: ["Node.js", "React", "Arduino", "IoT Protocols", "WebSocket"],
    features: [
      "Real-time power consumption monitoring",
      "Battery level tracking",
      "Sun intensity measurement",
      "Temperature monitoring",
      "Arduino integration with web interface"
    ],
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1470&auto=format&fit=crop",
    category: "iot"
  },
  {
    id: "signup-form",
    title: "React Signup Form",
    shortDescription: "A type-safe signup form with comprehensive validation using React Hook Form and Zod.",
    description: "Implemented a modern signup form with robust validation using React Hook Form and Zod. The form ensures data integrity through TypeScript integration and provides real-time feedback to users.",
    technologies: ["React", "TypeScript", "React Hook Form", "Zod"],
    features: [
      "Real-time form validation",
      "Type-safe implementation",
      "Custom validation rules",
      "Error handling and feedback",
      "Responsive design"
    ],
    image: "https://images.unsplash.com/photo-1517292987719-0369a794ec0f?q=80&w=1472&auto=format&fit=crop",
    category: "web"
  },
  {
    id: "email-confirmation",
    title: "Email Confirmation System",
    shortDescription: "A TypeScript-based email confirmation system for user account verification.",
    description: "Developed an email confirmation system that handles user account verification through email. The system uses TypeScript and FormData for secure and type-safe data handling.",
    technologies: ["TypeScript", "FormData", "Email Services"],
    features: [
      "Automated email verification",
      "Secure token generation",
      "Token expiration handling",
      "Resend verification option"
    ],
    image: "https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?q=80&w=1470&auto=format&fit=crop",
    category: "web"
  },
  {
    id: "appointment-scheduler",
    title: "Appointment Scheduling System",
    shortDescription: "A comprehensive appointment scheduling form with advanced validation and image upload.",
    description: "Created an appointment scheduling system with extensive form validation and file upload capabilities. The system uses React Hook Form and Zod for validation, with a modern UI using ShadCN components.",
    technologies: ["React Hook Form", "Zod", "ShadCN UI", "TypeScript"],
    features: [
      "Complex form validation",
      "Image upload functionality",
      "Service hour calculation",
      "Price type selection",
      "Notes and additional information"
    ],
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=1470&auto=format&fit=crop",
    category: "web"
  },
  {
    id: "role-auth",
    title: "Role-Based Authentication System",
    shortDescription: "A sophisticated authentication system with sub-roles and permissions for MERN stack.",
    description: "Implemented a comprehensive role-based authentication system for a MERN stack application. The system handles complex permission hierarchies and sub-roles, ensuring secure access control.",
    technologies: ["MongoDB", "Express.js", "React", "Node.js", "JWT"],
    features: [
      "Sub-role management",
      "Permission-based access control",
      "Secure token handling",
      "Password encryption",
      "Session management"
    ],
    image: "https://images.unsplash.com/photo-1510915228340-29c85a43dcfe?q=80&w=1470&auto=format&fit=crop",
    category: "web"
  },
  {
    id: "blog-admin",
    title: "Blog with Admin Panel",
    shortDescription: "A feature-rich blog platform with comprehensive admin capabilities.",
    description: "Developed a modern blog platform with an intuitive admin panel. The system supports content categorization, tagging, and commenting, with a powerful admin interface for content management.",
    technologies: ["Next.js", "ShadCN UI", "API Routes", "Database"],
    features: [
      "Category and tag management",
      "Comment system",
      "Admin dashboard",
      "Content moderation",
      "SEO optimization"
    ],
    image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=1470&auto=format&fit=crop",
    category: "web"
  }
];
