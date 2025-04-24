import React from "react";
import { Github, Coffee } from "lucide-react";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-100 dark:bg-gray-900 py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <p className="text-gray-700 dark:text-gray-300">
              © {currentYear} - Tous droits réservés
            </p>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="https://github.com/GaboFlo"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white dark:bg-gray-800 rounded-full text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:shadow-md transition-all"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>

            <a
              href="https://buymeacoffee.com/gaboflo"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white dark:bg-gray-800 rounded-full text-gray-700 dark:text-gray-300 hover:text-yellow-600 dark:hover:text-yellow-400 hover:shadow-md transition-all"
              aria-label="Buy Me A Coffee"
            >
              <Coffee size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
