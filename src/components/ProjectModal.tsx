import {
  BookOpen,
  ExternalLink,
  Github,
  Share2,
  Train,
  X,
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

interface ProjectModalProps {
  project: Project;
  isOpen: boolean;
  onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({
  project,
  isOpen,
  onClose,
}) => {
  const [showShareTooltip, setShowShareTooltip] = useState(false);

  const getIcon = () => {
    switch (project.icon) {
      case "zap":
        return <Zap size={32} className="text-yellow-500" />;
      case "train":
        return <Train size={32} className="text-blue-500" />;
      case "translate":
        return <BookOpen size={32} className="text-green-500" />;
      default:
        return null;
    }
  };

  const trackClick = (type: "visit" | "github" | "custom" | "share") => {
    if (window._paq) {
      window._paq.push([
        "trackEvent",
        "Projects",
        "ModalClick",
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

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
      onClick={handleBackdropClick}
    >
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-8 md:p-10">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-gray-100 dark:bg-gray-700 rounded-xl">
                {getIcon()}
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                  {project.title}
                </h2>
                <span
                  className={`px-3 py-1 rounded-full text-sm font-medium ${
                    project.status === "live"
                      ? "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400"
                      : "bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-400"
                  }`}
                >
                  {project.status === "live" ? "En ligne" : "À venir"}
                </span>
              </div>
            </div>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors p-2"
              aria-label="Fermer la modale"
            >
              <X size={24} />
            </button>
          </div>

          <p className="text-gray-600 dark:text-gray-300 text-lg mb-10 leading-relaxed">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-6 mb-10">
            <a
              href={project.status === "live" ? project.githubUrl : undefined}
              onClick={() => project.status === "live" && trackClick("github")}
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-colors ${
                project.status === "live"
                  ? "bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600"
                  : "bg-gray-100 text-gray-400 cursor-not-allowed"
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
              GitHub
            </a>

            {project.customLinks && project.status === "live" && (
              <>
                {project.customLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.enabled !== false ? link.url : undefined}
                    onClick={() =>
                      link.enabled !== false && trackClick("custom")
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-colors ${
                      link.enabled !== false
                        ? "bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600"
                        : "bg-gray-100 text-gray-400 cursor-not-allowed"
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
                        size="md"
                        iconName={link.icon}
                      />
                    )}
                    {link.icon === "chrome" ? "Chrome" : "Firefox"}
                  </a>
                ))}
              </>
            )}

            <button
              onClick={handleShare}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg font-medium bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600 transition-colors relative"
              aria-label="Partager ce projet"
            >
              <Share2 size={20} />
              Partager
              {showShareTooltip && (
                <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-gray-800 text-white text-xs rounded whitespace-nowrap z-10">
                  Lien copié !
                </div>
              )}
            </button>
          </div>

          {project.status === "live" && project.urlTestEnabled && (
            <a
              href={project.url}
              onClick={() => trackClick("visit")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors"
            >
              Tester le projet
              <ExternalLink size={20} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
