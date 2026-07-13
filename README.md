# gaboflo.fr

Site portfolio personnel de Florian Gaboriaud, déployé sur GitHub Pages.

## Stack

- [Vite](https://vitejs.dev/) + [React](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS v4](https://tailwindcss.com/)
- Icônes via [lucide-react](https://lucide.dev/)

## Commandes

```bash
npm install
npm run dev       # serveur de dev Vite
npm run build     # type-check + build de production dans dist/
npm run lint      # eslint sur tout le repo
npm run preview   # prévisualiser le build de production
```

## Déploiement

Le déploiement se fait automatiquement via GitHub Actions (`.github/workflows/deploy.yml`) à chaque publication d'une release GitHub : build du projet puis publication du contenu de `dist/` sur GitHub Pages.
