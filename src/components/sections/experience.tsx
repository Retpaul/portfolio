"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";

const experiences = [
  {
    title: "Software Engineer I",
    company: "Opex Consulting",
    period: "January 2025 - Present",
    description: [
      "Engineered backend APIs and services using Node.js, Express.js, and TypeScript with scalable architecture",
      "Implemented real-time communication features with Socket.IO for dynamic interactions",
      "Translated Figma designs into pixel-perfect code and managed state with Redux Toolkit",
      "Integrated MongoDB for efficient and secure data storage solutions",
    ],
  },
  {
    title: "Freelance Engineer",
    company: "Reservon",
    period: "November 2024 - December 2024",
    description: [
      "Translated Figma designs into high-quality, pixel-perfect code",
      "Managed application state with Redux Toolkit for optimal performance",
      "Collaborated with engineering team for seamless API integration",
      "Utilized GitHub for effective collaboration and version control",
    ],
  },
  {
    title: "Software Engineer Intern",
    company: "Talents Factory",
    period: "November 2024 - January 2025",
    description: [
      "Developed visually appealing user interfaces with seamless user experience",
      "Integrated APIs using Redux Toolkit Query for efficient data flow",
      "Leveraged TypeScript to enforce type safety and enhance code maintainability",
      "Followed best practices for clean, scalable, and readable code",
    ],
  },
  {
    title: "Backend Engineer Intern",
    company: "Sycamore NG",
    period: "September 2024 - December 2024",
    description: [
      "Developed RESTful APIs with comprehensive testing using Jest, Vitest, and Supertest",
      "Implemented robust authentication with JWT and role-based access control",
      "Optimized database queries and designed structured error-handling mechanisms",
      "Deployed applications on Render with seamless integration pipelines",
    ],
  },

  {
    title: "Fullstack Developer Intern",
    company: "Peace House Research and Innovation Centre",
    period: "September 2022 - September 2024",
    description: [
      "Enhanced application performance by 20% through MERN stack optimization",
      "Implemented agile methodologies, reducing development time by 10%",
      "Developed IoT smart meter backend connecting Arduino to frontend systems",
      "Mentored junior engineers in JavaScript and modern frameworks",
    ],
  },
];

const education = {
  degree: "BSc. Chemistry",
  institution: "Plateau State University, Bokkos",
  period: "January 2015 - March 2019",
  certifications: [
    "Cisco Networking Essentials",
    "Cisco IoT Fundamentals",
    "Cisco Introduction to Cybersecurity",
  ],
};

export function Experience() {
  const containerRef = useRef<HTMLElement>(null);
  const [activeTab, setActiveTab] = useState<"experience" | "education">(
    "experience"
  );

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, 0]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);

  return (
    <section
      ref={containerRef}
      className="py-20 relative overflow-hidden bg-neutral-50/50 dark:bg-neutral-900/50"
      id="experience"
    >
      <motion.div style={{ opacity, y }} className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center gradient-text">
          Experience & Education
        </h2>

        {/* Tabs */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex rounded-lg p-1 glassmorphism">
            <button
              onClick={() => setActiveTab("experience")}
              className={`px-6 py-2 rounded-md transition-all duration-300 ${
                activeTab === "experience"
                  ? "bg-blue-500 text-white shadow-lg"
                  : "text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100"
              }`}
            >
              Experience
            </button>
            <button
              onClick={() => setActiveTab("education")}
              className={`px-6 py-2 rounded-md transition-all duration-300 ${
                activeTab === "education"
                  ? "bg-blue-500 text-white shadow-lg"
                  : "text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100"
              }`}
            >
              Education
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="max-w-3xl mx-auto">
          {activeTab === "experience" ? (
            <motion.div
              key="experience"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              {experiences.map((experience, index) => (
                <motion.div
                  key={experience.title + experience.company}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="relative pl-8 pb-12 last:pb-0"
                >
                  {/* Timeline line */}
                  <div className="absolute left-0 top-0 bottom-0 w-px bg-blue-500/20">
                    <motion.div
                      className="absolute top-0 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-blue-500"
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ delay: index * 0.1 + 0.2 }}
                    />
                  </div>

                  {/* Content */}
                  <div className="glassmorphism p-6 rounded-lg hover-card">
                    <div className="flex flex-wrap gap-4 justify-between items-start mb-4">
                      <div>
                        <h3 className="text-xl font-semibold">
                          {experience.title}
                        </h3>
                        <p className="text-neutral-500 dark:text-neutral-400">
                          {experience.company}
                        </p>
                      </div>
                      <span className="px-3 py-1 rounded-full text-sm bg-blue-500/10 text-blue-500">
                        {experience.period}
                      </span>
                    </div>
                    <ul className="space-y-2">
                      {experience.description.map((item, i) => (
                        <motion.li
                          key={i}
                          initial={{ opacity: 0, x: 20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 + i * 0.05 }}
                          className="text-neutral-600 dark:text-neutral-300 flex items-start gap-2"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-blue-500/50 mt-2 flex-shrink-0" />
                          <span>{item}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <motion.div
              key="education"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="space-y-8"
            >
              {/* Degree */}
              <div className="glassmorphism p-8 rounded-lg hover-card">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-6 h-6 text-blue-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 14l9-5-9-5-9 5 9 5z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                      />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-semibold mb-2">
                      {education.degree}
                    </h3>
                    <p className="text-lg text-neutral-600 dark:text-neutral-300 mb-1">
                      {education.institution}
                    </p>
                    <span className="inline-block px-3 py-1 rounded-full text-sm bg-blue-500/10 text-blue-500">
                      {education.period}
                    </span>
                  </div>
                </div>
              </div>

              {/* Certifications */}
              <div className="glassmorphism p-8 rounded-lg hover-card">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-full bg-green-500/10 flex items-center justify-center">
                    <svg
                      className="w-5 h-5 text-green-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold">
                    Certifications & Training
                  </h3>
                </div>
                <div className="grid gap-3">
                  {education.certifications.map((cert, index) => (
                    <motion.div
                      key={cert}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center gap-3 p-3 rounded-lg bg-neutral-100/50 dark:bg-neutral-800/50"
                    >
                      <div className="w-2 h-2 rounded-full bg-green-500" />
                      <span className="text-neutral-700 dark:text-neutral-300">
                        {cert}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </motion.div>
    </section>
  );
}
