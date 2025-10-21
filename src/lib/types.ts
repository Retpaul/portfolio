export interface Project {
  id: string;
  title: string;
  description: string;
  shortDescription: string;
  technologies: string[];
  features: string[];
  image: string;
  githubUrl?: string;
  liveUrl?: string;
  category: "web" | "mobile" | "iot" | "other" | "API";
}
