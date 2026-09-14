# PixSnap

**PixSnap** est une application web de réseau social axée sur le partage de photos, développée avec React et TypeScript. Le projet permet aux utilisateurs de publier, découvrir et interagir avec du contenu visuel dans une interface moderne et réactive.

PixSnap propose un système d'authentification complet, un fil d'actualité, la publication et la gestion de photos, ainsi que des fonctionnalités sociales (likes, favoris, profils, découverte d'utilisateurs).

## 🎯 Objectif du projet

PixSnap vise à offrir une plateforme où les utilisateurs peuvent :
- Créer un compte et se connecter en toute sécurité
- Partager des photos avec leur communauté
- Découvrir du contenu et d'autres utilisateurs
- Aimer et sauvegarder des publications
- Gérer et modifier leur profil personnel

## 🛠️ Stack technique

| Technologie | Rôle |
|---|---|
| **React** | Bibliothèque UI pour construire l'interface |
| **TypeScript** | Typage statique pour un code plus robuste |
| **Vite** | Outil de build rapide avec Hot Module Replacement |
| **Tailwind CSS** | Framework CSS utilitaire pour le style |
| **shadcn/ui** | Composants d'interface réutilisables et accessibles |
| **Appwrite** | Backend-as-a-Service : authentification, base de données, stockage des images |
| **ESLint** | Analyse statique du code pour la qualité |

## ✨ Fonctionnalités principales

**Authentification** (`_auth`)
- 🔐 Inscription (`SignupForm`)
- 🔑 Connexion (`SigninForm`)
- 🧭 Layout dédié aux pages d'authentification (`AuthLayout`)

**Réseau social** (`_root/pages`)
- 🏠 Fil d'actualité (`Home`)
- 🔍 Découverte de publications (`Explore`)
- 🔎 Recherche de publications par légende (`SearchResults`)
- 👥 Liste des utilisateurs (`AllUsers`)
- 📸 Création de publication avec upload de fichier (`CreatePost`, `PostForm`, `FileUploader`)
- ✏️ Modification de publication (`EditPost`)
- 📄 Détails d'une publication avec statistiques (`PostDetails`, `PostStats`)
- ❤️ Système de like et de sauvegarde sur chaque publication (`PostCard`)
- 🔖 Publications sauvegardées (`Saved`)
- 👤 Profil utilisateur (`Profile`)
- ⚙️ Modification du profil (`UpdateProfile`)

**Navigation**
- 🧭 Barre supérieure (`Topbar`)
- 📚 Barre latérale gauche pour desktop (`LeftSidebar`)
- 📱 Barre de navigation inférieure pour mobile (`Bottombar`)
- ⏳ Indicateur de chargement (`Loader`)

## 💡 Ce que ce projet peut apporter

- **Pour les utilisateurs** : un espace simple et rapide pour partager des moments visuels et interagir avec une communauté.
- **Pour les développeurs** : une base de code moderne (React + TypeScript + Vite) illustrant de bonnes pratiques de structuration d'une application front-end, avec un système de composants réutilisables via shadcn/ui et une intégration complète à un backend-as-a-service (Appwrite) pour l'authentification, la base de données et le stockage de fichiers.
- **Comme projet portfolio** : une démonstration concrète de compétences en développement front-end complet (authentification, CRUD de publications, gestion de fichiers/images, relations sociales) avec une stack moderne et typée.

## 🧩 Composants réutilisables

- **UI kit** (via shadcn/ui) : `button`, `form`, `input`, `label`, `textarea`, `toast`/`toaster` pour les notifications
- **Formulaires** : `PostForm` (création/édition de publication), `SigninForm`, `SignupForm`
- **Contenu** : `GridPostList` (grille de publications), `PostCard`, `PostStats`, `SearchResults`

## 🚀 Installation

```bash
# Cloner le dépôt
git clone https://github.com/ranivoaritida/PixSnap.git
cd PixSnap

# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev
```

⚠️ Le projet utilise **Appwrite** comme backend. Il faut configurer un projet Appwrite (endpoint, project ID, base de données, buckets de stockage) et renseigner les variables d'environnement correspondantes (fichier `.env`) avant de lancer l'application.

## 📁 Structure du projet

```
PixSnap/
├── public/assets/          # Ressources statiques (images, icônes...)
├── src/
│   ├── _auth/               # Pages et formulaires d'authentification
│   │   ├── forms/
│   │   │   ├── SigninForm.tsx
│   │   │   └── SignupForm.tsx
│   │   └── AuthLayout.tsx
│   └── _root/
│       └── pages/            # Pages principales de l'application
│           ├── Home.tsx
│           ├── Explore.tsx
│           ├── CreatePost.tsx
│           ├── EditPost.tsx
│           ├── PostDetails.tsx
│           ├── LikedPosts.tsx
│           ├── Saved.tsx
│           ├── Profile.tsx
│           ├── UpdateProfile.tsx
│           └── AllUsers.tsx
├── components/
│   ├── forms/
│   │   └── PostForm.tsx
│   ├── shared/               # Topbar, LeftSidebar, Bottombar, PostCard, PostStats,
│   │                          # GridPostList, FileUploader, SearchResults, Loader...
│   └── ui/                   # Composants shadcn/ui (button, form, input, label...)
├── constants/
├── context/
├── hooks/
├── components.json         # Configuration shadcn/ui
├── tailwind.config.js      # Configuration Tailwind CSS
├── vite.config.ts          # Configuration Vite
└── tsconfig.json           # Configuration TypeScript
```