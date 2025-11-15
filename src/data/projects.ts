import { Project } from "../types";

export const projects: Project[] = [
  {
    id: "train-price",
    title: "Observatoire des prix des TGV",
    description:
      "Un projet à venir qui permettra de suivre et d'analyser les fluctuations des prix des billets de train",
    url: "https://observatoire-billets-train.gaboflo.fr/",
    githubUrl: "https://github.com/GaboFlo/observatoire-billets-train/",
    status: "live",
    icon: "train",
    urlTestEnabled: true,
  },
  {
    id: "energy-comparison",
    title: "Simulateur et comparateur d'électricité",
    description:
      "Un outil permettant de comparer facilement les différentes offres d'énergie disponibles sur le marché, en fonction de vos consommations passées. Immédiat et sans inscriptions.",
    url: "https://comparateur-electricite.gaboflo.fr/",
    githubUrl:
      "https://github.com/GaboFlo/Comparateur-et-simulateur-de-tarifs-d-electricite",
    status: "live",
    icon: "zap",
    urlTestEnabled: true,
  },
  {
    id: "hover-translator",
    title: "Extension de navigateur - Traducteur au survol",
    description:
      "Extension de navigateur pour la traduction au survol avec dictionnaire personnalisable (traduction des correspondances de codes ou identifiants techniques récurrents, ...).",
    url: "https://github.com/GaboFlo/MyHoverCustomTranslator",
    githubUrl: "https://github.com/GaboFlo/MyHoverCustomTranslator",
    status: "live",
    urlTestEnabled: false,
    icon: "translate",
    customLinks: [
      {
        icon: "chrome",
        url: "https://chromewebstore.google.com/detail/nmknpgpdoclllikijfkhocimieblajmh",
        label: "Installer sur Chrome Web Store",
        enabled: true,
        svgPath: "/assets/icons/chrome.svg",
      },
      {
        icon: "firefox",
        url: "https://addons.mozilla.org/addon/traducteur-personnel-au-survol/",
        label: "Installer sur Firefox Add-ons",
        enabled: true,
        svgPath: "/assets/icons/firefox.svg",
      },
    ],
  },
];
