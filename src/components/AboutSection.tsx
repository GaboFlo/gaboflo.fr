import React from "react";

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6 text-center">
            À propos
          </h2>

          <div className="prose dark:prose-invert prose-lg max-w-none">
            <p>
              Passionné par la technologie et le développement web, je consacre
              un peu de mon temps libre à la création de projets open source qui
              ont un impact positif sur la vie quotidienne de tous.
            </p>
            <br />
            <p>
              Tous mes projets sont open source et disponibles sur GitHub.
              N'hésitez pas à contribuer ou à me faire part de vos commentaires
              pour améliorer ces initiatives.
            </p>
            <br />
            <div className="mt-8 bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-blue-900 dark:text-blue-300 mb-2">
                Vous appréciez mon travail ?
              </h3>
              <p className="text-blue-800 dark:text-blue-200 mb-4">
                Votre soutien m'aide à continuer à développer et à maintenir ces
                projets open source.
              </p>
              <a
                href="https://buymeacoffee.com/gaboflo"
                className="inline-block px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg shadow-md hover:shadow-lg transition-all transform hover:-translate-y-1"
                target="_blank"
                rel="noopener noreferrer"
              >
                Soutenir mes projets
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
