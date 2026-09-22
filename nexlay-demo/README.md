# Nexlay — Projet de démonstration

## Installation

1. Ouvre ce dossier dans VS Code (`File > Open Folder`).
2. Ouvre un terminal dans VS Code (`Terminal > New Terminal`).
3. Installe les dépendances :

```bash
npm install
```

4. Lance le serveur de développement :

```bash
npm run dev
```

5. Ouvre l'adresse affichée dans le terminal (en général `http://localhost:5173`) dans ton navigateur.

## Structure du projet

```
nexlay-demo/
├── index.html          → point d'entrée HTML
├── package.json        → dépendances du projet
├── vite.config.js       → configuration de Vite (outil de build)
├── tailwind.config.js   → configuration Tailwind CSS
├── postcss.config.js    → nécessaire pour Tailwind
└── src/
    ├── main.jsx          → point d'entrée React
    ├── index.css         → styles Tailwind de base
    └── App.jsx           → le prototype Nexlay 
```

## Pour continuer le développement

Le fichier à modifier pour faire évoluer le prototype est `src/App.jsx`.
Chaque sauvegarde se reflète automatiquement dans le navigateur (rechargement à chaud).
