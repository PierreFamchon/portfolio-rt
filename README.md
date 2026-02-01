# 🌐 Portfolio Personnel - Pierre Famchon

![Status](https://img.shields.io/badge/Status-Active-success?style=for-the-badge)
![License](https://img.shields.io/badge/License-MIT-blue?style=for-the-badge)
![Version](https://img.shields.io/badge/Version-2.0.4-orange?style=for-the-badge)

### [🚀 Voir le site en ligne (Live Demo)](https://pierrefamchon.github.io/portfolio-rt/)

> **"Concevoir, déployer et administrer des infrastructures réseaux et systèmes complexes."**

Ce dépôt contient le code source de mon portfolio personnel. Conçu avec une esthétique **Cyberpunk / HUD Tactique**, ce site vitrine met en avant mes compétences en Administration Système, Réseaux et Cybersécurité.

<br>

![Capture d'écran du Portfolio](static/assets/img/preview-portfolio.jpg)

<br>

### 📂 Détail des Compétences

Mon portfolio s'articule autour des 5 compétences clés du Bachelor Universitaire de Technologie (R&T), chacune documentée avec des preuves techniques concrètes :

* **⚙️ Infrastructures et système :** Administration Système & Réseau, Virtualisation (Proxmox), Services (AD, DNS) et Cloud.
* **🌐 Ingénierie Réseaux :** Architecture réseau d'entreprise, Routage/Commutation (Cisco), Téléphonie sur IP (VoIP) et Transmissions.
* **💻 Automatisation & Scripting :** Développement web (Flask/HTML/CSS), Scripting (Python/Bash), Automatisation et DevOps (Docker).
* **🛡️ Cybersécurité :** Cybersécurité défensive (Hardening, Firewalling) et offensive (Pentesting, Analyse de risques).
* **📊 Monitoring & Supervision :** Supervision d'infrastructures, Métrologie, Gestion de parc et Analyse de trafic (SNMP, Netflow).

<br>

![Capture d'écran du Portfolio](static/assets/img/skill-portfolio.jpg)

<br>

### 🚀 Autres Sections Clés

En plus des compétences académiques, le portfolio intègre des sections dédiées à la pratique et à la validation des acquis :

* **🧪 Labs & Expérimentations (Zone Restreinte) :** Une section "Sandbox" regroupant des travaux pratiques isolés, des défis CTF et des tests de scripts.
    * *Note :* L'accès à certaines ressources est gamifié via une simulation de terminal Linux (nécessite un code d'accès).

<br>

 ![Capture d'écran du Portfolio](static/assets/img/labs.jpg)

<br>

* **📂 Projets (SAE) :** Présentation détaillée des projets majeurs (Situations d'Apprentissage et d'Évaluation). Chaque projet est documenté avec son contexte, son architecture technique, le code source associé et les rapports en PDF.

<br>

![Capture d'écran du Portfolio](static/assets/img/project.jpg)

<br>

* **🎓 Certifications :** Un tableau de bord regroupant les certifications officielles obtenues (Cisco CCNA, SecNumAcadémie, Pix, etc.) avec des liens de vérification actifs pour attester de la validité des compétences.

<br>

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

<br>

## 🛠️ Stack Technique

Ce projet est réalisé en **Pure Vanilla**, sans framework lourd, pour garantir performance et maîtrise du code.

| Technologie | Usage |
| :--- | :--- |
| ![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white) | Structure sémantique et accessibilité. |
| ![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white) | Design système, Variables CSS (:root), Flexbox/Grid, Animations Keyframes. |
| ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black) | Logique DOM, Modal, Typewriter, Canvas, Gestion des événements. |
| ![FontAwesome](https://img.shields.io/badge/Font_Awesome-339AF0?style=for-the-badge&logo=fontawesome&logoColor=white) | Icônes vectorielles. |

<br>

## 📂 Structure du Projet

```bash
📂
├── 📄 index.html           # Page d'accueil
├── 📄 administrer.html     # Page Compétence : Administrer
├── 📄 connecter.html       # Page Compétence : Connecter
├── 📄 programmer.html      # Page Compétence : Programmer 
├── 📄 securiser.html       # Page Compétence : Securiser 
├── 📄 surveiller.html      # Page Compétence : Surveiller 
├── 📄 labs.html            # Page Compétence : Labs/TP
├── 📄 projets.html         # Page Compétence : Projets/SAE
├── 📄 certification.html   # Page Compétence : Certification
├── 📂 static/
│   ├── 📂 css/
│   │   └── 📄 style.css   # Feuille de style principale
│   ├── 📂 js/
│   │   └── 📄 main.js     # Scripts JS (Typewriter, Modal, Scroll)
│   └── 📂 assets/
│       ├── 📂 img/        # Images des projets
│       ├── 📂 logo/       # Favicons et Logos
│       └── 📂 Rapport/    # Fichiers PDF (CV, Rapports)
└── 📄 README.md
```
<br>

## 🚀 Installation & Utilisation

Ce site est statique. Vous pouvez le visualiser directement en local :

1. **Cloner le dépôt :**
   ```bash
   git clone [https://github.com/PierreFamchon/portfolio-rt.git](https://github.com/PierreFamchon/portfolio-rt.git)
