"use client";

import { motion } from "framer-motion";
import { tools } from "@/data/tools";
import Image from "next/image";

export function Tools() {
  return (
    <section
      id="tools"
      className="py-20 bg-neutral-50/50 dark:bg-neutral-900/50 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/5 to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-500/10 via-transparent to-transparent opacity-50" />

      <div className="container mx-auto px-4 relative">
        <div className="max-w-2xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 gradient-text">{`Tech Stack & Tools`}</h2>
          <p className="text-neutral-600 dark:text-neutral-300">
            {`            Here are the technologies, frameworks, and tools I use to bring ideas to life.
`}{" "}
          </p>
        </div>

        <div className="space-y-16">
          {tools.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-semibold mb-6 text-neutral-900 dark:text-neutral-100">
                {category.category}
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
                {category.items.map((tool, toolIndex) => (
                  <motion.a
                    key={tool.name}
                    href={tool.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex flex-col items-center p-4 rounded-xl bg-white dark:bg-neutral-800 shadow-lg hover:shadow-xl transition-all duration-300 glassmorphism"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{
                      delay: categoryIndex * 0.1 + toolIndex * 0.05,
                      type: "spring",
                      stiffness: 100,
                    }}
                    viewport={{ once: true }}
                    whileHover={{ y: -5 }}
                  >
                    <div className="relative w-12 h-12 mb-3">
                      <Image
                        src={tool.logo}
                        alt={tool.name}
                        fill
                        className="object-contain filter dark:brightness-90 group-hover:brightness-110 transition-all"
                      />
                    </div>
                    <span className="text-sm font-medium text-neutral-700 dark:text-neutral-300 text-center group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-colors">
                      {tool.name}
                    </span>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
