import { Project } from "../types";

export const projects: Project[] = [
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
  },
  {
    id: "train-price",
    title: "Observatoire des prix des TGV",
    description:
      "Un projet à venir qui permettra de suivre et d'analyser les fluctuations des prix des billets de train",
    url: "",
    githubUrl: "",
    status: "upcoming",
    icon: "train",
  },
];
