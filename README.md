# 🌐 Portfolio Personnel - Pierre Famchon

![Status](https://img.shields.io/badge/Status-Active-success?style=for-the-badge)
![License](https://img.shields.io/badge/License-MIT-blue?style=for-the-badge)
![Version](https://img.shields.io/badge/Version-2.0.4-orange?style=for-the-badge)

> **"Concevoir, déployer et administrer des infrastructures réseaux et systèmes complexes."**

Ce dépôt contient le code source de mon portfolio personnel. Conçu avec une esthétique **Cyberpunk / HUD Tactique**, ce site vitrine met en avant mes compétences en Administration Système, Réseaux et Cybersécurité.

![Capture d'écran du Portfolio](static/assets/img/preview-portfolio.jpg)
*(Note : Pensez à ajouter une capture d'écran de votre page d'accueil ici)*

## ⚡ Fonctionnalités Clés

* **Design Immersif :** Thème sombre, effets néon (Glow), typographies "Monospace" et animations CSS inspirées des interfaces de terminaux.
* **Navigation Interactive :** Menu latéral rétractable, système de navigation "Capsule" (HUD) et fil d'ariane.
* **Animations Dynamiques :**
    * Effet "Machine à écrire" (Typewriter) sur les titres.
    * Apparition des éléments au défilement (`reveal-on-scroll`).
    * Curseur personnalisé (Crosshair).
    * Fond animé (Canvas Network).
* **Système de Sécurité Simulé :** Modale "Accès Restreint" avec simulation de terminal pour les sections verrouillées.
* **Responsive Design :** Interface adaptative (Mobile, Tablette, Desktop) avec menu burger personnalisé.

## 🛠️ Stack Technique

Ce projet est réalisé en **Pure Vanilla**, sans framework lourd, pour garantir performance et maîtrise du code.

| Technologie | Usage |
| :--- | :--- |
| ![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white) | Structure sémantique et accessibilité. |
| ![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white) | Design système, Variables CSS (:root), Flexbox/Grid, Animations Keyframes. |
| ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black) | Logique DOM, Modal, Typewriter, Canvas, Gestion des événements. |
| ![FontAwesome](https://img.shields.io/badge/Font_Awesome-339AF0?style=for-the-badge&logo=fontawesome&logoColor=white) | Icônes vectorielles. |

## 📂 Structure du Projet

```bash
.
├── index.html          # Page d'accueil
├── administrer.html    # Page Compétence : Administrer
├── connecter.html      # Page Compétence : Connecter
├── ...                 # Autres pages HTML
├── static/
│   ├── css/
│   │   └── style.css   # Feuille de style principale
│   ├── js/
│   │   └── main.js     # Scripts JS (Typewriter, Modal, Scroll)
│   └── assets/
│       ├── img/        # Images des projets
│       ├── logo/       # Favicons et Logos
│       └── Rapport/    # Fichiers PDF (CV, Rapports)
└── README.md
