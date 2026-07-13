import Footer from "../components/Footer";
import Header from "../components/Header";
import { useDarkMode } from "../hooks/useDarkMode";

function IntercepteurReseauConfidentialite() {
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300">
      <Header isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
      <main className="container mx-auto px-4 pt-32 pb-16 max-w-3xl">
        <h1 className="text-3xl font-bold mb-1">
          Règles de confidentialité — Intercepteur Réseau
        </h1>
        <p className="text-gray-500 dark:text-gray-400 text-sm mb-10">
          Dernière mise à jour : 13 juillet 2026
        </p>

        <p className="mb-6 text-gray-700 dark:text-gray-300">
          Cette page décrit comment l'extension Chrome{" "}
          <strong className="text-gray-900 dark:text-white">
            Intercepteur Réseau
          </strong>{" "}
          traite (ou plutôt ne traite pas) les données lorsque vous
          l'utilisez.
        </p>

        <h2 className="text-xl font-semibold mt-9 mb-3 pb-2 border-b border-gray-200 dark:border-gray-700">
          Résumé
        </h2>
        <p className="mb-6 text-gray-700 dark:text-gray-300">
          <strong className="text-gray-900 dark:text-white">
            Intercepteur Réseau ne collecte, ne stocke, ne transmet et ne vend
            aucune donnée utilisateur.
          </strong>{" "}
          Toutes les données traitées par l'extension restent strictement
          locales à votre navigateur et ne quittent jamais votre machine.
        </p>

        <h2 className="text-xl font-semibold mt-9 mb-3 pb-2 border-b border-gray-200 dark:border-gray-700">
          Ce que fait l'extension
        </h2>
        <p className="mb-6 text-gray-700 dark:text-gray-300">
          Intercepteur Réseau est un outil de développement qui s'ajoute au
          panneau Chrome DevTools. Il permet à l'utilisateur d'intercepter,
          d'inspecter, de modifier et de rejouer les requêtes réseau
          (HTTP/HTTPS) émises par l'onglet actuellement ouvert dans DevTools,
          via le protocole natif de débogage de Chrome (Chrome DevTools
          Protocol).
        </p>

        <h2 className="text-xl font-semibold mt-9 mb-3 pb-2 border-b border-gray-200 dark:border-gray-700">
          Quelles données sont traitées, et où
        </h2>
        <ul className="mb-6 pl-5 list-disc space-y-2 text-gray-700 dark:text-gray-300">
          <li>
            <strong className="text-gray-900 dark:text-white">
              Requêtes et réponses réseau de l'onglet inspecté
            </strong>{" "}
            (URL, méthode, en-têtes, corps de requête/réponse) : lues et
            éventuellement modifiées{" "}
            <strong className="text-gray-900 dark:text-white">
              en mémoire, localement
            </strong>
            , uniquement pendant que le panneau DevTools est ouvert et que
            l'interception est activée.
          </li>
          <li>
            Ces données sont{" "}
            <strong className="text-gray-900 dark:text-white">
              affichées uniquement dans le panneau DevTools de votre propre
              navigateur
            </strong>
            . Elles ne sont écrites sur aucun disque de manière persistante
            par l'extension, ne sont envoyées à aucun serveur, et disparaissent
            dès que l'onglet DevTools est fermé ou rechargé.
          </li>
          <li>
            L'extension ne dispose d'aucun serveur, backend ou service tiers.
            Elle ne contient aucun outil d'analyse d'usage (analytics), aucun
            traceur, aucun SDK publicitaire.
          </li>
        </ul>

        <h2 className="text-xl font-semibold mt-9 mb-3 pb-2 border-b border-gray-200 dark:border-gray-700">
          Permissions utilisées
        </h2>
        <p className="mb-6 text-gray-700 dark:text-gray-300">
          L'extension ne demande que la permission{" "}
          <code className="bg-gray-100 dark:bg-gray-800 rounded px-1.5 py-0.5 text-sm">
            debugger
          </code>
          , strictement nécessaire pour attacher le protocole de débogage
          Chrome à l'onglet inspecté et intercepter ses requêtes réseau.
          Aucune permission d'accès au stockage, à l'historique de
          navigation, aux cookies en dehors du contexte de la requête
          interceptée, ou à d'autres données du navigateur n'est demandée.
        </p>

        <h2 className="text-xl font-semibold mt-9 mb-3 pb-2 border-b border-gray-200 dark:border-gray-700">
          Partage des données
        </h2>
        <p className="mb-6 text-gray-700 dark:text-gray-300">
          Aucune donnée n'est partagée avec des tiers, pour quelque raison que
          ce soit (publicité, revente, amélioration de produit, etc.),
          puisque l'extension ne transmet aucune donnée en dehors du
          navigateur de l'utilisateur.
        </p>

        <h2 className="text-xl font-semibold mt-9 mb-3 pb-2 border-b border-gray-200 dark:border-gray-700">
          Conservation des données
        </h2>
        <p className="mb-6 text-gray-700 dark:text-gray-300">
          Aucune donnée n'est conservée par l'extension au-delà de la session
          DevTools en cours. Fermer l'onglet DevTools ou recharger la page
          efface immédiatement toutes les requêtes/réponses capturées.
        </p>

        <h2 className="text-xl font-semibold mt-9 mb-3 pb-2 border-b border-gray-200 dark:border-gray-700">
          Enfants
        </h2>
        <p className="mb-6 text-gray-700 dark:text-gray-300">
          L'extension est un outil de développement logiciel non destiné aux
          enfants et ne collecte aucune donnée, quel que soit l'âge de
          l'utilisateur.
        </p>

        <h2 className="text-xl font-semibold mt-9 mb-3 pb-2 border-b border-gray-200 dark:border-gray-700">
          Modifications de ces règles
        </h2>
        <p className="mb-6 text-gray-700 dark:text-gray-300">
          Ces règles de confidentialité peuvent être mises à jour si les
          fonctionnalités de l'extension évoluent. La date de dernière mise à
          jour en haut de cette page reflète la version en vigueur.
        </p>

        <h2 className="text-xl font-semibold mt-9 mb-3 pb-2 border-b border-gray-200 dark:border-gray-700">
          Contact
        </h2>
        <p className="mb-6 text-gray-700 dark:text-gray-300">
          Pour toute question relative à ces règles de confidentialité, vous
          pouvez contacter l'éditeur à l'adresse suivante :{" "}
          <a
            href="mailto:contact@gaboflo.fr"
            className="text-blue-600 dark:text-blue-400 hover:underline"
          >
            contact@gaboflo.fr
          </a>
        </p>
      </main>
      <Footer />
    </div>
  );
}

export default IntercepteurReseauConfidentialite;
