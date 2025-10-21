"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import Image from "next/image";
import { profile } from "@/assests/images";

// Hero Variant 1: Background Image with Text Overlay
function HeroBackground() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 1.05 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={profile}
          alt="Kwarpo Retyit"
          fill
          priority
          className="object-cover object-center"
          quality={100}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black/80" />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/40 to-purple-900/40" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6 text-white leading-tight">
            Kwarpo Retyit
          </h1>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
            Full-Stack Engineer
          </h2>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-lg sm:text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-10 leading-relaxed px-4"
        >
          Transforming Figma mockups into pixel-perfect React interfaces and building robust Node.js/Express APIs. Passionate about clean code and seamless user experiences. 🚀
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center px-4"
        >
          <button
            onClick={() => scrollTo("projects")}
            className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-4 rounded-lg text-lg font-semibold transition-all hover:scale-105 shadow-2xl hover:shadow-blue-500/50"
          >
            View Projects
          </button>
          <button
            onClick={() => scrollTo("contact")}
            className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-10 py-4 rounded-lg text-lg font-semibold transition-all hover:scale-105 shadow-xl"
          >
            Contact Me
          </button>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:block"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="w-6 h-10 border-2 border-white/60 rounded-full flex items-start justify-center p-2"
          >
            <motion.div className="w-1.5 h-3 bg-white/80 rounded-full" />
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
}

// Hero Variant 2: Side by Side Layout
function HeroSideBySide() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 1.05 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
      className="min-h-screen flex items-center py-12 sm:py-20 relative overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-950 to-purple-950" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,_var(--tw-gradient-stops))] from-blue-600/15 via-transparent to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,_var(--tw-gradient-stops))] from-purple-600/15 via-transparent to-transparent" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-7xl mx-auto">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="order-2 lg:order-1 text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <h2 className="text-xl md:text-2xl font-semibold mb-3 flex items-center justify-center lg:justify-start gap-2">
                <span className="text-2xl">👋</span>
                <span className="text-blue-400">{`Hello, I'm`}</span>
              </h2>
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-4 text-white leading-tight">
                Kwarpo Retyit
              </h1>
              <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
                Full-Stack Engineer
              </h3>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed"
            >
              I transform Figma mockups into pixel-perfect React interfaces and build robust Node.js/Express APIs. With deep expertise in TypeScript, MongoDB, and Socket.IO, I craft seamless data flows and real-time experiences. 🚀
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-10"
            >
              <button
                onClick={() => scrollTo("projects")}
                className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-4 rounded-lg text-lg font-semibold transition-all hover:scale-105 shadow-2xl hover:shadow-blue-500/50"
              >
                View Projects
              </button>
              <button
                onClick={() => scrollTo("contact")}
                className="border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white px-10 py-4 rounded-lg text-lg font-semibold transition-all hover:scale-105 shadow-xl"
              >
                Contact Me
              </button>
            </motion.div>

            {/* Tech Stack */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="flex flex-wrap gap-3 justify-center lg:justify-start"
            >
              {["React", "Node.js", "TypeScript", "MongoDB", "Next.js"].map(
                (tech, index) => (
                  <motion.span
                    key={tech}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.7 + index * 0.08, duration: 0.4 }}
                    className="px-5 py-2.5 bg-white/5 backdrop-blur-sm rounded-full text-sm font-medium text-gray-300 border border-white/10 hover:border-blue-400/50 hover:bg-white/10 transition-all"
                  >
                    {tech}
                  </motion.span>
                )
              )}
            </motion.div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="order-1 lg:order-2 flex justify-center"
          >
            <div className="relative w-full max-w-lg">
              {/* Glow Effects */}
              <motion.div
                animate={{
                  scale: [1, 1.05, 1],
                  opacity: [0.3, 0.5, 0.3],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -inset-4 bg-gradient-to-br from-blue-500 to-purple-500 rounded-3xl blur-3xl"
              />

              {/* Image Container */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white/10">
                <Image
                  src={profile}
                  alt="Kwarpo Retyit"
                  width={600}
                  height={600}
                  priority
                  className="w-full h-auto object-cover aspect-square"
                  quality={100}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/30 via-transparent to-transparent" />
              </div>

              {/* Available Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.8 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ delay: 0.8, duration: 0.5 }}
                className="absolute -bottom-4 -right-4 bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-3 rounded-full shadow-2xl border-2 border-white/20"
              >
                <p className="text-sm font-bold text-white flex items-center gap-2">
                  Available for Hire 💼
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}

// Main Demo Component with Automatic Transitions
export default function HeroDemo() {
  const [variant, setVariant] = useState<"background" | "sideBySide">("background");

  // Auto-switch between variants every 8 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setVariant((prev) => prev === "background" ? "sideBySide" : "background");
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-slate-900">
      {/* Progress Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="fixed top-6 right-6 z-50 backdrop-blur-md bg-white/5 px-4 py-3 rounded-xl border border-white/10 shadow-2xl"
      >
        <div className="flex items-center gap-3">
          <div className="flex gap-2">
            <motion.div
              animate={{
                scale: variant === "background" ? 1.2 : 1,
                backgroundColor: variant === "background" ? "#3b82f6" : "#ffffff30",
              }}
              transition={{ duration: 0.3 }}
              className="w-2 h-2 rounded-full"
            />
            <motion.div
              animate={{
                scale: variant === "sideBySide" ? 1.2 : 1,
                backgroundColor: variant === "sideBySide" ? "#3b82f6" : "#ffffff30",
              }}
              transition={{ duration: 0.3 }}
              className="w-2 h-2 rounded-full"
            />
          </div>
          <span className="text-xs text-gray-300 font-medium">
            {variant === "background" ? "Background" : "Side by Side"}
          </span>
        </div>
      </motion.div>

      {/* Animated Variant Transition */}
      <AnimatePresence mode="wait">
        {variant === "background" ? (
          <HeroBackground key="background" />
        ) : (
          <HeroSideBySide key="sideBySide"  />
        )}
      </AnimatePresence>
    </div>
  );
}