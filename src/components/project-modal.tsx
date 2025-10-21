"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Button } from "./ui/button";
import { FaGithub, FaExternalLinkAlt, FaTimes } from "react-icons/fa";
import Image from "next/image";
import { Project } from "@/lib/types";

interface ProjectModalProps {
  project: Project;
  isOpen: boolean;
  onClose: () => void;
}

export function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      >
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.95, opacity: 0 }}
          onClick={(e) => e.stopPropagation()}
          className="bg-white dark:bg-neutral-900 rounded-xl shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto relative"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-neutral-500 hover:text-neutral-700 dark:text-neutral-400 dark:hover:text-neutral-200 z-10"
          >
            <FaTimes className="w-5 h-5" />
          </button>

          {/* Project Image */}
          <div className="relative h-64 w-full">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <h2 className="text-2xl font-bold text-white">
                {project.title}
              </h2>
            </div>
          </div>

          {/* Content */}
          <div className="p-6">
            <p className="text-neutral-600 dark:text-neutral-300 mb-6">
              {project.description}
            </p>

            {/* Technologies */}
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-2">Technologies</h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 rounded-full text-sm bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Features */}
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-2">Key Features</h3>
              <ul className="list-disc list-inside space-y-2 text-neutral-600 dark:text-neutral-300">
                {project.features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
            </div>

            {/* Links */}
            <div className="flex gap-4">
              {project.githubUrl && (
                <Button
                  variant="outline"
                  onClick={() => window.open(project.githubUrl, "_blank")}
                >
                  <FaGithub className="mr-2 h-4 w-4" />
                  View Code
                </Button>
              )}
              {project.liveUrl && (
                <Button
                  onClick={() => window.open(project.liveUrl, "_blank")}
                >
                  <FaExternalLinkAlt className="mr-2 h-4 w-4" />
                  Live Demo
                </Button>
              )}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
