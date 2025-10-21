"use client";

import { motion } from "framer-motion";
import { About } from "@/components/sections/about";
import { Experience } from "@/components/sections/experience";
import { Blog } from "@/components/sections/blog";
import { Contact } from "@/components/sections/contact";
import { Tools } from "@/components/sections/tools";
import PortfolioProjects from "@/components/sections/projects";
import HeroDemo from "@/components/sections/Hero";

export default function Home() {


  return (
    <main className="relative">
      {/* Hero Section */}
     <HeroDemo />

      {/* Main Sections */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        id="about"
      >
        <About />
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
        id="tools"
      >
        <Tools />
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2 }}
        id="projects"
      >
        <PortfolioProjects />
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.4 }}
        id="experience"
      >
        <Experience />
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.6 }}
        id="blog"
      >
        <Blog />
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.8 }}
        id="contact"
      >
        <Contact />
      </motion.section> 
    </main>
  );
}
