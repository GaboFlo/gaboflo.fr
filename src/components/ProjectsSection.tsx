import React, { useEffect, useRef, useState } from "react";
import { projects } from "../data/projects";
import { Project } from "../types";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";

const ProjectsSection: React.FC = () => {
  const projectRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});
  const [modalProject, setModalProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const focusedProjectId = urlParams.get("project");

    if (focusedProjectId) {
      const project = projects.find((p) => p.id === focusedProjectId);
      if (project) {
        setModalProject(project);
        setIsModalOpen(true);

        setTimeout(() => {
          const projectElement = projectRefs.current[focusedProjectId];
          if (projectElement) {
            projectElement.scrollIntoView({
              behavior: "smooth",
              block: "center",
            });
          }
        }, 500);
      }
    }
  }, []);

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setModalProject(null);

    const url = new URL(window.location.href);
    url.searchParams.delete("project");
    window.history.replaceState({}, "", url.toString());
  };

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Mes Projets
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Découvrez les projets sur lesquels je travaille actuellement
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              ref={(el) => (projectRefs.current[project.id] = el)}
              className="transition-all duration-300"
            >
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </div>

      {modalProject && (
        <ProjectModal
          project={modalProject}
          isOpen={isModalOpen}
          onClose={handleCloseModal}
        />
      )}
    </section>
  );
};

export default ProjectsSection;
