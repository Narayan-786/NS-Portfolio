import React from "react";
import { ExternalLink } from "lucide-react";
export default function Project() {
  const projects = [
    {
      id: 1,
      title: "Babun-Copy",
      description: "First webpage designed using pure HTML and CSS.",
      link: "https://github.com/Narayan-786/Babun-Copy",
      technologies: ["HTML", "CSS", "Javascript"],
      image: "/Images/Screenshot 2025-05-20 193908.png"
    },
    {
      id: 2,
      title: "Psycho Listener",
      description: "Psycho Listener is a simple website that showcases songs along with their lyrics and videos, featuring a bold and edgy design that powerfully emphasizes its name.",
      link: "https://example.com",
      technologies: ["HTML", "CSS", "Javascript"],
      image: "/Images/Screenshot 2025-05-20 194703.png"
    },
    {
      id: 3,
      title: "Portfolio Website",
      description:
        "A modern portfolio website built with React & Tailwind CSS.",
      link: "https://example.com",
      technologies: ["React", "Tailwind CSS", "Responsive Design"],
      image: "/Images/Screenshot 2025-05-20 201809.png"
    }

  ];

  return (
    <div id="Project" className="min-h-screen w-full bg-gradient-to-b from-white to-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-teal-600 bg-clip-text text-transparent pb-1">
            My Projects
          </h2>
          <p className="mt-4 text-xl text-center text-gray-600 font-semibold">
            A showcase of all projects that I have made
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-col-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 p-5"
            >
              <div className="bg-gradient-to-b from-purple-700 to-white p-[4px] rounded-xl aspect-w-16 aspect-h-9 mb-4">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover rounded-lg "
                />
              </div>

              <h2 className="text-2xl font-semibold text-gray-800 mb-5">
                {project.title}
              </h2>
              <p className="text-gray-600 mb-5">{project.description}</p>
              <div className="flex flex-wrap gap-3.5 mb-2">
                {project.technologies.map((tech, index) => (
                  <div
                    key={index}
                    className="px-3 py-2 bg-indigo-100 text-indigo-800 rounded-full text-sm font-medium"
                  >
                    {tech}
                  </div>
                ))}
              </div>
              <a
                href={project.link}
                target="_blank"
                className="inline-flex items-center text-indigo-600 hover:text-indigo-800 font-semibold transition-all duration-200 mt-1"
              >
                View Project
                <ExternalLink className="w-4 h-4 ml-2" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
