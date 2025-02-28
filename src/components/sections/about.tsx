"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { FaServer, FaShieldAlt, FaMobile } from "react-icons/fa";

const skills = [
  { name: "Frontend Development", level: 90 },
  { name: "Backend Development", level: 85 },
  { name: "Database Design", level: 80 },
  { name: "API Development", level: 85 },
  { name: "Cybersecurity", level: 75 },
  { name: "IoT Integration", level: 70 },
];

const specialties = [
  {
    icon: <FaServer className="w-6 h-6" />,
    title: "Full Stack Development",
    description:
      "Building scalable applications with React, Next.js, and Node.js",
  },
  {
    icon: <FaShieldAlt className="w-6 h-6" />,
    title: "Cybersecurity",
    description:
      "Implementing secure authentication and data protection measures",
  },
  {
    icon: <FaMobile className="w-6 h-6" />,
    title: "IoT Integration",
    description:
      "Connecting smart devices with web applications for real-time monitoring",
  },
];

export function About() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);
  const y = useTransform(scrollYProgress, [0, 0.5], [100, 0]);

  return (
    <section
      ref={containerRef}
      className="py-20 bg-neutral-50/50 dark:bg-neutral-900/50"
      id="about"
    >
      <motion.div
        style={{ opacity, y }}
        className="container mx-auto px-4"
      >
        <h2 className="text-3xl font-bold mb-12 text-center gradient-text">
          About Me
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-6"
          >
            <p className="text-lg text-neutral-600 dark:text-neutral-300 leading-relaxed">
              As a Full-Stack Engineer, I specialize in building scalable and
              efficient web applications using modern technologies. My expertise
              spans both frontend and backend development, with a focus on creating
              seamless user experiences.
            </p>

            <div className="space-y-4">
              {skills.map((skill, index) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium">{skill.name}</span>
                    <span className="text-sm text-neutral-500">
                      {skill.level}%
                    </span>
                  </div>
                  <div className="h-2 bg-neutral-200 dark:bg-neutral-700 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-gradient-to-r from-blue-500 to-purple-500"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <div className="grid gap-6">
            {specialties.map((specialty, index) => (
              <motion.div
                key={specialty.title}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 + index * 0.1 }}
                className="p-6 rounded-lg glassmorphism hover-card"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 rounded-full bg-blue-500/10 text-blue-500">
                    {specialty.icon}
                  </div>
                  <h3 className="text-xl font-semibold">{specialty.title}</h3>
                </div>
                <p className="text-neutral-600 dark:text-neutral-300">
                  {specialty.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
