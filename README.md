# 🌍 Terra : Sauvons la planète

Un jeu interactif 3D éducatif qui sensibilise les jeunes aux enjeux environnementaux liés aux choix numériques et à l'utilisation responsable de l'Intelligence Artificielle.

**Version en ligne :** [https://terra.nicolasmdc.eu](https://terra.nicolasmdc.eu)

---

## 📖 Description

Terra est une expérience interactive immersive en 3D qui invite les joueurs à explorer les conséquences de leurs choix numériques sur la planète. À travers une série de dilemmes du quotidien, le jeu enseigne comment utiliser l'IA et les services numériques de manière responsable et durable.

## 🚀 Installation et démarrage

### Prérequis

- Node.js 16+ et npm/yarn

### Étapes

1. **Cloner le repository**
   ```bash
   git clone https://github.com/BomberQLF/sauve-ta-planete
   cd sauve-ta-planete
   ```

2. **Installer les dépendances**
   ```bash
   npm install
   ```

3. **Lancer le serveur de développement**
   ```bash
   npm run dev
   ```
   Le jeu sera accessible sur `http://localhost:5173`

4. **Build pour la production**
   ```bash
   npm run build
   ```

5. **Prévisualiser la version de production**
   ```bash
   npm run preview
   ```
6. **Récupérer et héberger le dossier dist**

---

## 🛠️ Technologies utilisées

- **React 19** - Bibliothèque UI
- **TypeScript** - Typage statique
- **Three.js** - Moteur 3D
- **React Three Fiber** - Binding React pour Three.js
- **React Three Drei** - Composants et utilitaires 3D
- **GSAP** - Animations fluides
- **Vite** - Bundler et serveur de développement ultra-rapide
- **ESLint** - Linting et vérification du code

---
## 🎮 Comment jouer

1. **Démarrez le jeu** en cliquant sur le bouton "Jouer"
2. **Lisez les instructions** pour comprendre vos objectifs
3. **Affrontez les dilemmes** : chaque dilemme présente deux choix
4. **Choisissez responsablement** : les bonnes décisions aident la planète à se rétablir
5. **Observez les changements** : la planète réagit à vos choix en temps réel
6. **Progressez** en améliorant vos connaissances en technologie durable

---

## 📦 Dépendances principales

- **@react-three/fiber & drei** : Intégration de Three.js dans React
- **three** : Moteur 3D JavaScript
- **gsap** : Bibliothèque d'animation performante
- **react-dom** : Rendu React

---

## 🌟 Fonctionnalités en détail

### Système de dilemmes
Chaque dilemme offre deux choix :
- **Choix durable** ✅ : Réduit l'empreinte carbone
- **Choix insoutenable** ❌ : Augmente la consommation énergétique

### Sauvegarde du progrès
Le jeu sauvegarde automatiquement votre progression grâce au `localStorage` du navigateur. Fermez et rouvrez le navigateur pour reprendre où vous l'aviez laissé.

### Animations 3D
Les éléments de la scène (animaux, arbres, nuages) s'animent en fonction de l'état environnemental. Utilisez GSAP pour des transitions fluides et performantes.

---

## 👥 Auteurs

Thuy hang, Tom et Nicolas.

---

## 📄 Licence

Ce projet est fourni à des fins éducatives dans le cadre de notre projet de SAE Terra.

---