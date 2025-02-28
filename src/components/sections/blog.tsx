"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";

const categories = ["All", "Development", "DevOps", "Security", "IoT"];

const posts = [
  {
    title: "Building Scalable Web Applications with Next.js",
    excerpt: "Learn how to build and deploy scalable web applications using Next.js and modern web technologies.",
    date: "2024-02-28",
    category: "Development",
    readTime: "5 min read",
    image: "/blog/nextjs-scaling.jpg"
  },
  {
    title: "Implementing Zero-Trust Security in Modern Applications",
    excerpt: "A comprehensive guide to implementing zero-trust security architecture in your applications.",
    date: "2024-02-25",
    category: "Security",
    readTime: "8 min read",
    image: "/blog/security.jpg"
  },
  {
    title: "IoT Device Management Best Practices",
    excerpt: "Best practices for managing and securing IoT devices in enterprise environments.",
    date: "2024-02-20",
    category: "IoT",
    readTime: "6 min read",
    image: "/blog/iot.jpg"
  },
  {
    title: "Containerization and Microservices Architecture",
    excerpt: "Understanding containerization and microservices architecture for modern applications.",
    date: "2024-02-15",
    category: "DevOps",
    readTime: "7 min read",
    image: "/blog/containers.jpg"
  }
];

export function Blog() {
  const [activeCategory, setActiveCategory] = useState("All");
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, 0]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);

  const filteredPosts = activeCategory === "All"
    ? posts
    : posts.filter(post => post.category === activeCategory);

  return (
    <section
      ref={containerRef}
      className="py-20 relative overflow-hidden"
      id="blog"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-500/5 to-transparent" />
      
      <motion.div
        style={{ opacity, y }}
        className="container mx-auto px-4 relative"
      >
        <h2 className="text-3xl font-bold mb-12 text-center gradient-text">
          Blog Posts
        </h2>

        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full text-sm transition-all ${
                activeCategory === category
                  ? "bg-blue-500 text-white"
                  : "bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 hover:bg-neutral-200 dark:hover:bg-neutral-700"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category}
            </motion.button>
          ))}
        </div>

        {/* Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post, index) => (
            <motion.article
              key={post.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <div className="glassmorphism rounded-xl overflow-hidden hover-card">
                {/* Image */}
                <div className="aspect-video bg-neutral-800/50 relative">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="text-sm text-neutral-400">{post.date}</span>
                    <span className="text-sm px-2 py-1 rounded-full bg-blue-500/10 text-blue-400">
                      {post.category}
                    </span>
                    <span className="text-sm text-neutral-400">{post.readTime}</span>
                  </div>

                  <h3 className="text-xl font-semibold mb-3 group-hover:text-blue-500 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-neutral-400 text-sm mb-4 line-clamp-2">
                    {post.excerpt}
                  </p>

                  <Button variant="ghost" className="group-hover:text-blue-500">
                    Read More
                  </Button>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
