"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ProjectModal } from "@/components/project-modal";
import { projects } from "@/data/projects";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import Image from "next/image";

export function Projects() {
  const [selectedProject, setSelectedProject] = useState(projects[0]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section
      id="projects"
      className="py-20 bg-neutral-50/50 dark:bg-neutral-900/50 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/5 to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-500/10 via-transparent to-transparent opacity-50" />

      <div className="container mx-auto px-4 relative">
        <div className="max-w-2xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 gradient-text">Featured Projects</h2>
          <p className="text-neutral-600 dark:text-neutral-300">
{`Here are some of the projects I've worked on. Each project showcases different skills and technologies.`}          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative"
            >
              <div className="bg-white dark:bg-neutral-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 glassmorphism h-full flex flex-col">
                {/* Project Image */}
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transform group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-xl font-semibold mb-2 text-neutral-900 dark:text-neutral-100">
                    {project.title}
                  </h3>
                  <p className="text-neutral-600 dark:text-neutral-300 mb-4 flex-1">
                    {project.shortDescription}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 text-xs rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-2 py-1 text-xs rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400">
                        +{project.technologies.length - 3} more
                      </span>
                    )}
                  </div>

                  {/* Actions */}
                  <div className="flex gap-3">
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1"
                      onClick={() => {
                        setSelectedProject(project);
                        setIsModalOpen(true);
                      }}
                    >
                      Learn More
                    </Button>
                    {project.githubUrl && (
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => window.open(project.githubUrl, "_blank")}
                      >
                        <FaGithub className="w-4 h-4" />
                      </Button>
                    )}
                    {project.liveUrl && (
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => window.open(project.liveUrl, "_blank")}
                      >
                        <FaExternalLinkAlt className="w-4 h-4" />
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <ProjectModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </section>
  );
}
