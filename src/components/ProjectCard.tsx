import {
  BookOpen,
  ExternalLink,
  Github,
  Share2,
  Train,
  Zap,
} from "lucide-react";
import React, { useState } from "react";
import { Project } from "../types";
import { copyToClipboard, generateProjectShareLink } from "../utils/share";
import CustomIcon from "./CustomIcon";

declare global {
  interface Window {
    _paq?: unknown[];
  }
}

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const [showShareTooltip, setShowShareTooltip] = useState(false);

  const getIcon = () => {
    switch (project.icon) {
      case "zap":
        return <Zap size={24} className="text-yellow-500" />;
      case "train":
        return <Train size={24} className="text-blue-500" />;
      case "translate":
        return <BookOpen size={24} className="text-green-500" />;
      default:
        return null;
    }
  };

  const trackClick = (type: "visit" | "github" | "custom" | "share") => {
    if (window._paq) {
      window._paq.push([
        "trackEvent",
        "Projects",
        "Click",
        `${project.title} - ${type}`,
      ]);
    }
  };

  const handleShare = async () => {
    const shareLink = generateProjectShareLink(project.id);
    const success = await copyToClipboard(shareLink);

    if (success) {
      setShowShareTooltip(true);
      setTimeout(() => setShowShareTooltip(false), 2000);
      trackClick("share");
    }
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl p-6 flex flex-col h-full transition-all duration-300 transform hover:-translate-y-1">
      <div className="flex items-center gap-3 mb-4">
        <div className="p-2 bg-gray-100 dark:bg-gray-700 rounded-lg">
          {getIcon()}
        </div>
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
          {project.title}
        </h3>
      </div>

      <p className="text-gray-600 dark:text-gray-300 mb-6 flex-grow">
        {project.description}
      </p>

      <div className="flex items-center justify-between mt-auto">
        <span
          className={`px-3 py-1 rounded-full text-xs font-medium ${
            project.status === "live"
              ? "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400"
              : "bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-400"
          }`}
        >
          {project.status === "live" ? "En ligne" : "À venir"}
        </span>

        <div className="flex items-center gap-3">
          <a
            href={project.status === "live" ? project.githubUrl : undefined}
            onClick={() => project.status === "live" && trackClick("github")}
            className={`transition-colors ${
              project.status === "live"
                ? "text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white cursor-pointer"
                : "text-gray-400 dark:text-gray-600 cursor-not-allowed"
            }`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={
              project.status === "live"
                ? "Voir sur GitHub"
                : "GitHub - Bientôt disponible"
            }
            {...(project.status !== "live" && { "aria-disabled": "true" })}
          >
            <Github size={20} />
          </a>

          {project.customLinks && project.status === "live" && (
            <>
              {project.customLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.enabled !== false ? link.url : undefined}
                  onClick={() => link.enabled !== false && trackClick("custom")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`transition-colors ${
                    link.enabled !== false
                      ? "text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white cursor-pointer"
                      : "text-gray-400 dark:text-gray-600 cursor-not-allowed"
                  }`}
                  aria-label={
                    link.enabled !== false
                      ? link.label
                      : `${link.label} - Non disponible`
                  }
                  {...(link.enabled === false && { "aria-disabled": "true" })}
                >
                  {link.svgPath && (
                    <CustomIcon
                      svgPath={link.svgPath}
                      size="sm"
                      iconName={link.icon}
                    />
                  )}
                </a>
              ))}
            </>
          )}

          <button
            onClick={handleShare}
            className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white cursor-pointer transition-colors relative"
            aria-label="Partager ce projet"
          >
            <Share2 size={20} />
            {showShareTooltip && (
              <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-gray-800 text-white text-xs rounded whitespace-nowrap z-10">
                Lien copié !
              </div>
            )}
          </button>

          <a
            href={project.status === "live" ? project.url : undefined}
            onClick={() => trackClick("visit")}
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center gap-1 text-sm font-medium ${
              project.status === "live"
                ? "text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
                : "text-gray-400 cursor-not-allowed"
            }`}
            {...(project.status !== "live" && { "aria-disabled": "true" })}
          >
            {project.status === "live" && project.urlTestEnabled ? (
              <>
                Tester <ExternalLink size={16} />
              </>
            ) : project.status === "live" ? (
              ""
            ) : (
              "Bientôt disponible"
            )}
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
