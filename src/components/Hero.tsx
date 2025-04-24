import { ArrowDown } from "lucide-react";
import React from "react";

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800 -z-10"></div>

      {/* Background decoration */}
      <div className="absolute top-40 right-10 w-72 h-72 bg-blue-500/10 dark:bg-blue-500/5 rounded-full blur-3xl -z-5"></div>
      <div className="absolute bottom-40 left-10 w-64 h-64 bg-purple-500/10 dark:bg-purple-500/5 rounded-full blur-3xl -z-5"></div>

      <div className="container mx-auto px-4 flex flex-col items-center text-center z-10">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight mb-6 animate-fade-in">
          Des projets{" "}
          <span className="text-blue-600 dark:text-blue-400">open source</span>
        </h1>

        <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-2xl mb-10 animate-fade-in-delay">
          Quelques projets pour rendre service et partager des connaissances
        </p>

        <div className="flex flex-col sm:flex-row gap-4 mb-16 animate-fade-in-delay-2">
          <a
            href="#projects"
            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1"
          >
            Voir mes projets
          </a>
          <a
            href="#about"
            className="px-6 py-3 bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-900 dark:text-white font-medium rounded-lg shadow-md hover:shadow-lg transition-all transform hover:-translate-y-1"
          >
            En savoir plus
          </a>
        </div>

        <a
          href="#projects"
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce bg-white dark:bg-gray-800 p-2 rounded-full shadow-md"
          aria-label="Défiler vers le bas"
        >
          <ArrowDown size={24} className="text-blue-600 dark:text-blue-400" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
