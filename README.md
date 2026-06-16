# 🌍 Terra : Sauvons la planète

Un jeu interactif 3D éducatif qui sensibilise les jeunes aux enjeux environnementaux liés aux choix numériques et à l'utilisation responsable de l'Intelligence Artificielle.

**Version en ligne :** [https://terra.nicolasmdc.eu](https://terra.nicolasmdc.eu)

---

## 📖 Description

Conçu comme support à l'atelier et jeu de cartes Terra, il s'agit d'une expérience interactive immersive en 3D qui invite les joueurs à explorer les conséquences de leurs choix numériques sur la planète. À travers une série de dilemmes du quotidien, le jeu enseigne comment utiliser les services numériques de manière responsable et durable.

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

Les éléments de la scène (animaux, arbres, nuages) s'animent en fonction de l'état environnemental.

---

## 👥 Auteurs

Thuy Hang Nguyen, Tom Murphy et Nicolas Molduch.

---

## 📄 Licence

Ce projet est fourni à des fins éducatives dans le cadre de notre projet de SAE Terra.

---

## Attributions

### Assets 3D

La Terre, les abres par Jesse François.

[Low Poly Bird (Animated)](https://skfb.ly/6n6vx) par [Charlie Tinley](https://sketchfab.com/Tnkii).

[Fuel/Gas Barrel - Low Poly Game Ready](https://skfb.ly/opFzS) par [Gobby](https://sketchfab.com/thegobby).

[Trash Can and Garbage Bag low poly](https://skfb.ly/owyLr) par [daniel.2U](https://sketchfab.com/daniel.2U).

[Cartoon Low Poly Solar Panel](https://skfb.ly/6VGYL) par [antonmoek](https://sketchfab.com/antonmoek).

[Éolienne](https://skfb.ly/oTRUW) par [danhoallia17](https://sketchfab.com/danhoallia17).

[Stylized fire](https://www.cgtrader.com/free-3d-models/exterior/landscape/low-poly-campfire-a3b075d3-d9df-4101-9d04-9806db4b1613) par [Thiennguyen2106](https://www.cgtrader.com/designers/thiennguyen2106).

[Polar Bear Low Poly Free low-poly 3D model](https://www.cgtrader.com/free-3d-models/animal/mammal/polar-bear-low-poly) par [LiQiye](https://www.cgtrader.com/designers/liqiye).

[Penguin - NPR Free low-poly 3D model](https://www.cgtrader.com/free-3d-models/animal/bird/npr-animal-penguin) par [ibryn](https://www.cgtrader.com/designers/ibryn).

[Low Poly Factory](https://skfb.ly/6Tx7C) par [Fishboe](https://sketchfab.com/ministephen).

[Low poly house 1](https://skfb.ly/p9LtO), [Low poly house 4](https://skfb.ly/p9LtQ) par [assetfactory](https://sketchfab.com/assetfactory).

### Textures

[Fish Background Nature Vector Texture Vector](https://pngtree.com/freepng/fish-background-nature-vector-texture-vector_11041732.html) par [yayimage](https://pngtree.com/yayimage_4689602?type=1).

[Vector seamless rippled swimming pool abstract illustration.](https://www.magnific.com/fr/vecteurs-libre/illustration-abstraite-piscine-ridee-sans-soudure-vecteur-repetable-horizontalement-verticalement_38449309.htm#fromView=keyword&page=7&position=11&uuid=c28e4091-eab7-4efe-a1a9-cf767e157953&query=Texture+eau+piscine) par [callmetak](https://www.magnific.com/fr/auteur/callmetak).

[Clouds in the sky on transparent background](https://www.vecteezy.com/png/10124424-clouds-in-the-sky-on-transparent-background-png-file) par [Surut Wattanamaetee](https://www.vecteezy.com/members/studio2013).

### Effets de son

[Birds](https://pixabay.com/sound-effects/nature-birds-19624/), [WoodCutting](https://pixabay.com/sound-effects/household-woodcutting-35994/), [Trees](https://pixabay.com/sound-effects/nature-trees-69029/), [Trash](https://pixabay.com/sound-effects/film-special-effects-trash-taken-out-1-2-89971/) par [freesound_community](https://pixabay.com/users/freesound_community-46691455/?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=19624).

[Wind In Trees](https://pixabay.com/sound-effects/search/wind%20in%20trees/).

[Forceful ocean waves crashing on the shore](https://pixabay.com/fr/sound-effects/nature-forceful-ocean-waves-crashing-on-the-shore-512571/) par [Mollyroselee](https://pixabay.com/fr/users/mollyroselee-9214707/).

### Typographie

[Big Zubo Font](https://www.1001fonts.com/big-zubo-font.html) par [Fathi Al Ghazi | Youthlabs Studio](https://www.1001fonts.com/users/youthlabs/).

---
