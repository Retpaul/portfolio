interface Tool {
  name: string;
  category: "frontend" | "backend" | "database" | "tools" | "security";
  logo: string;
  url: string;
}

export const tools: { category: string; items: Tool[] }[] = [
  {
    category: "Frontend",
    items: [
      {
        name: "React",
        category: "frontend",
        logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg",
        url: "https://reactjs.org"
      },
      {
        name: "Next.js",
        category: "frontend",
        logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nextjs/nextjs-original.svg",
        url: "https://nextjs.org"
      },
      {
        name: "TailwindCSS",
        category: "frontend",
        logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/tailwindcss/tailwindcss-plain.svg",
        url: "https://tailwindcss.com"
      },
      {
        name: "Framer Motion",
        category: "frontend",
        logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg",
        url: "https://www.framer.com/motion"
      },
      {
        name: "Zustand",
        category: "frontend",
        logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg",
        url: "https://zustand-demo.pmnd.rs"
      },
      {
        name: "ShadcnUI",
        category: "frontend",
        logo: "https://avatars.githubusercontent.com/u/139895814?s=200&v=4",
        url: "https://ui.shadcn.com"
      }
    ]
  },
  {
    category: "Backend",
    items: [
      {
        name: "Node.js",
        category: "backend",
        logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg",
        url: "https://nodejs.org"
      },
      {
        name: "Express.js",
        category: "backend",
        logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original.svg",
        url: "https://expressjs.com"
      },
      {
        name: "TypeScript",
        category: "backend",
        logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg",
        url: "https://www.typescriptlang.org"
      }
    ]
  },
  {
    category: "Database & Storage",
    items: [
      {
        name: "MongoDB",
        category: "database",
        logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original.svg",
        url: "https://www.mongodb.com"
      },
      {
        name: "Sanity",
        category: "database",
        logo: "https://avatars.githubusercontent.com/u/17177659?s=200&v=4",
        url: "https://www.sanity.io"
      }
    ]
  },
  {
    category: "Tools & Technologies",
    items: [
      {
        name: "Vite",
        category: "tools",
        logo: "https://raw.githubusercontent.com/vitejs/vite/main/docs/public/logo.svg",
        url: "https://vitejs.dev"
      },
      {
        name: "Arduino",
        category: "tools",
        logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/arduino/arduino-original.svg",
        url: "https://www.arduino.cc"
      },
      {
        name: "Canva",
        category: "tools",
        logo: "https://upload.wikimedia.org/wikipedia/commons/0/08/Canva_icon_2021.svg",
        url: "https://www.canva.com"
      },
      {
        name: "Wireshark",
        category: "security",
        logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/linux/linux-original.svg",
        url: "https://www.wireshark.org"
      }
    ]
  }
];
