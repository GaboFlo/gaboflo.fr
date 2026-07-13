# Push

Met à jour la documentation du projet (README.md et CLAUDE.md) puis commit et push les changements sur `origin`.

## When to use

Invoke quand l'utilisateur veut pousser ses changements sur le repo, typiquement : "push", "pousse le repo", "commit et push", "/push".

---

## Steps

### 1. État du repo

- `git status` pour lister les fichiers modifiés/untracked.
- `git diff` (staged + unstaged) et `git log origin/main..HEAD --oneline` pour voir ce qui n'est pas encore sur `origin`.
- Si rien à committer et rien en avance sur `origin`, prévenir l'utilisateur et s'arrêter.

### 2. Mettre à jour `CLAUDE.md`

Relire `CLAUDE.md` et le comparer à l'état réel du code (composants dans `src/`, pages/entrées de build dans `vite.config.ts`, scripts `package.json`, workflows `.github/workflows/`). Mettre à jour les sections concernées si :
- une nouvelle page/entrée de build a été ajoutée (ex. nouvelle page légale sous `legal/` + `src/pages/`)
- un composant central de l'architecture a changé de comportement
- les commandes ou le pipeline de déploiement ont changé

Ne pas réécrire les parties encore exactes ; ne pas ajouter de détails non pertinents pour un futur agent (pas d'historique de commits, pas de contenu déjà déductible du code).

### 3. Mettre à jour `README.md`

Le README s'adresse à un humain (pas à Claude) : présentation courte du projet, stack, commandes (`dev`/`build`/`lint`/`preview`), et note de déploiement (GitHub Pages via release). Le garder synchronisé avec `package.json` et `CLAUDE.md` sans dupliquer les détails internes d'architecture — le README reste haut niveau.

### 4. Commit

- `git add` uniquement les fichiers pertinents (jamais `git add -A` aveugle) : les changements applicatifs + `README.md`/`CLAUDE.md` s'ils ont été modifiés.
- Vérifier via `git status`/`git diff --stat` qu'aucun fichier sensible (`.env`, secrets) n'est inclus.
- Message de commit concis en français, focalisé sur le "pourquoi".

### 5. Push

`git push` vers `origin` sur la branche courante. Ne jamais utiliser `--force` ni `--no-verify`.

### 6. Confirmer

Résumer à l'utilisateur : ce qui a été commité, si README/CLAUDE.md ont été mis à jour (et pourquoi), et confirmation du push.
