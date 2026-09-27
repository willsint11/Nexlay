# Nexlay

**Le répertoire événementiel qui connecte les talents aux moments importants.**

Nexlay est une marketplace web intuitive pour les événements — un espace où les clients trouvent les meilleurs prestataires (traiteurs, photographes, DJ, décorateurs, fleuristes, etc.) et où les professionnels partagent leur savoir-faire.

## 🎯 C'est quoi Nexlay ?

Une plateforme simple et élégante pour :

- **Clients** : découvrir et contacter directement les professionnels de l'événementiel
- **Prestataires** : créer un profil, montrer vos réalisations et recevoir des demandes
- **Tous** : faciliter les rencontres et les collaborations pour des événements réussis

## ✨ Fonctionnalités principales

### Pour les clients
- 🔍 Explorer par catégories (traiteurs, photos, DJ, décoration, fleurs, etc.)
- 🏷️ Filtrer par zone, tarif et style
- ❤️ Sauvegarder vos prestataires favoris
- 💬 Contacter directement par WhatsApp

### Pour les prestataires
- 📝 Créer et gérer votre profil professionnel
- 🖼️ Ajouter photos et vidéos de vos réalisations
- 💰 Configurer vos tarifs (fixe, formules, devis)
- ⭐ Mettre en avant votre univers et votre style

## 🛠️ Stack technique

- **Frontend** : React + Vite
- **Styling** : Tailwind CSS
- **Design** : Fraunces (serif) & Outfit (sans-serif)
- **Icons** : Lucide React
- **Déploiement** : Compatible avec Netlify, Vercel, GitHub Pages

## 📦 Installation

### 1. Clone le repo
```bash
git clone https://github.com/willsint11/Nexlay.git
cd Nexlay/nexlay-demo
```

### 2. Installe les dépendances
```bash
npm install
```

### 3. Lance le serveur de dev
```bash
npm run dev
```

Ouvre [http://localhost:5173](http://localhost:5173) dans ton navigateur.

## 📁 Structure du projet

```
Nexlay/
├── nexlay-demo/
│   ├── src/
│   │   ├── App.jsx              → Logique principale (landing, client, prestataire)
│   │   ├── main.jsx             → Point d'entrée React
│   │   └── index.css            → Styles Tailwind
│   ├── index.html               → Template HTML
│   ├── package.json             → Dépendances
│   ├── vite.config.js           → Config Vite
│   ├── tailwind.config.js       → Config Tailwind
│   └── postcss.config.js        → Config PostCSS
└── README.md
```

## 🎨 Design & UX

Nexlay utilise une **palette riche et moderne** :

- Bleu principal : `#1769E0` (brand)
- Texte : `#101827` (dark)
- Accents : or, rose, ciel
- Typographie : serif premium + sans-serif épuré

Le prototype inclut des **microinteractions fluides** et une **expérience responsive** sur mobile et desktop.

## 🚀 Fonctionnalités clés du prototype

### Landing page
- Présentation claire du projet
- Deux CTAs : "Je cherche" (client) / "Je propose" (prestataire)
- Design premium et engageant

### Mode Client
- Parcourir 14 catégories d'événementiel
- Voir les profils des prestataires
- Filtrer par zone, tarif, style
- Sauvegarder en favoris
- Contacter via WhatsApp

### Mode Prestataire
- Auth simple (téléphone + mot de passe)
- Formulaire en 6 étapes :
  1. Identité (nom, téléphone, email)
  2. Activité (spécialité, zones, expérience)
  3. Présentation (description, histoire, réseaux)
  4. Tarification (fixe / à partir de / formules / devis)
  5. Portfolio (photos & vidéos)
  6. Récapitulatif

- Dashboard avec status de profil (en attente / publié)
- Possibilité d'éditer le profil

### Sections info
- FAQ
- À propos de Nexlay
- Explication du processus de validation

## 🔧 Personnalisation

Tous les styles et couleurs sont centralisés dans `App.jsx` (objet `c`). Tu peux facilement :

- Changer la palette de couleurs
- Ajouter/retirer des catégories
- Modifier les questions du formulaire prestataire
- Adapter les tarifs ou zones

## 📱 Responsive

Optimisé pour :
- Mobile (320px+)
- Tablette (768px+)
- Desktop (1024px+)

Navigation en barre mobile fixe + menu bottom pour mobile.

## 🌐 Déploiement

### Netlify
```bash
npm run build
# Drag & drop le dossier dist/ sur Netlify
```

### Vercel
```bash
npm run build
vercel --prod
```

### GitHub Pages
Configure les actions GitHub pour build automatiquement depuis `main`.

## 🎓 Catégories supportées

- Traiteurs
- Photographes
- DJ & Musique
- Décoration
- Wedding Planners
- Pâtisserie
- Fleurs
- Vidéo
- Bijoux & beauté
- Lieux de réception
- Service traiteur
- Fille & garçon d'honneur
- Barman
- Cuisinier

Facile d'en ajouter d'autres dans le code.

## 🤝 Contribution

Les contributions sont les bienvenues !

1. Fork le projet
2. Crée une branche : `git checkout -b feature/amélioration`
3. Commit : `git commit -m "Ajout d'une feature"`
4. Push : `git push origin feature/amélioration`
5. Ouvre une pull request

## 📄 Licence

MIT — utilise, modifie et distribue librement.

## 📞 Contact & Support

- **GitHub** : https://github.com/willsint11/Nexlay
- **Auteur** : willsint11

---

**Nexlay** — Les bons talents, au bon moment. 🎉
