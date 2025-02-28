"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const experiences = [
  {
    title: "Senior Full Stack Engineer",
    company: "Tech Innovations Inc.",
    period: "2023 - Present",
    description: [
      "Led development of IoT integration platform",
      "Architected scalable microservices infrastructure",
      "Mentored junior developers and conducted code reviews",
    ],
  },
  {
    title: "Full Stack Developer",
    company: "Digital Solutions Ltd",
    period: "2021 - 2023",
    description: [
      "Developed role-based authentication system",
      "Implemented real-time data synchronization",
      "Optimized application performance and reduced load times by 40%",
    ],
  },
  {
    title: "Frontend Developer",
    company: "WebTech Solutions",
    period: "2019 - 2021",
    description: [
      "Built responsive web applications using React",
      "Implemented modern UI/UX designs",
      "Collaborated with design team to improve user experience",
    ],
  },
];

export function Experience() {
  const containerRef = useRef<HTMLElement>(null);
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
      <motion.div
        style={{ opacity, y }}
        className="container mx-auto px-4"
      >
        <h2 className="text-3xl font-bold mb-12 text-center gradient-text">
          Experience
        </h2>

        <div className="max-w-3xl mx-auto">
          {experiences.map((experience, index) => (
            <motion.div
              key={experience.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2 }}
              className="relative pl-8 pb-12 last:pb-0"
            >
              {/* Timeline line */}
              <div className="absolute left-0 top-0 bottom-0 w-px bg-blue-500/20">
                <motion.div
                  className="absolute top-0 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-blue-500"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ delay: index * 0.2 + 0.2 }}
                />
              </div>

              {/* Content */}
              <div className="glassmorphism p-6 rounded-lg hover-card">
                <div className="flex flex-wrap gap-4 justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-semibold">{experience.title}</h3>
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
                      transition={{ delay: index * 0.2 + i * 0.1 }}
                      className="text-neutral-600 dark:text-neutral-300 flex items-center gap-2"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-500/50" />
                      {item}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
