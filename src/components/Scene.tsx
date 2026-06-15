import { Planet } from "./Planet";
import { useFrame, useThree } from "@react-three/fiber";
import { Html, OrbitControls } from "@react-three/drei";
import { useRef, useState, useEffect } from "react";
import { Lights } from "./Lights";
import { Trees } from "./Trees";
import { Field } from "./UI/Field/Field";
import { Dilemma } from "./UI/Dilemma/Dilemma";
import { Group } from "three";
import { gsap } from "gsap";
import { Button } from "./UI/Button/Button";
import { ProgressBar } from "./UI/ProgressBar/ProgressBar";
import { Birds } from "./Birds";
import { Clouds } from "./Clouds";
import { Glacier } from "./Glacier/Glacier";
import { Buildings } from "./Buildings";
import { Waste } from "./Waste";
import { RenewableEnergy } from "./RenewableEnergy";
import { Fire } from "./Fire";
import {
  saveGameState,
  loadGameState,
  clearGameState,
  hasSavedGame,
} from "../utils/storage";

// ── Initialisation depuis localStorage ──────────────────────
const _saved = loadGameState();

type Screen = "start" | "instructions" | "game";

export function Scene({ setScreen }: { setScreen: (screen: Screen) => void }) {
  const [myDilemma, setMyDilemma] = useState("0");
  const [isPlaying, setIsPlaying] = useState(false);
  const [endGame, setEndGame] = useState(false);
  const planetGroupRef = useRef<Group>(null!);

  // Conséquences — initialisées depuis la sauvegarde si elle existe
  const [unfloodPlanet, setUnfloodPlanet] = useState<boolean>(
    _saved?.unfloodPlanet ?? false,
  );
  const [turnPlanetGreen, setTurnPlanetGreen] = useState<boolean>(
    _saved?.turnPlanetGreen ?? false,
  );
  const [growTrees, setGrowTrees] = useState<boolean>(
    _saved?.growTrees ?? false,
  );
  const [unmeltIce, setUnmeltIce] = useState<boolean>(
    _saved?.unmeltIce ?? false,
  );
  const [cleanAir, setCleanAir] = useState<boolean>(_saved?.cleanAir ?? false);
  const [cleanWater, setCleanWater] = useState<boolean>(
    _saved?.cleanWater ?? false,
  );
  const [replaceBuildings, setReplaceBuildings] = useState<boolean>(
    _saved?.replaceBuildings ?? false,
  );
  const [cleanWaste, setCleanWaste] = useState<boolean>(
    _saved?.cleanWaste ?? false,
  );
  const [transitionEnergy, setTransitionEnergy] = useState<boolean>(
    _saved?.transitionEnergy ?? false,
  );
  const [extinguishFire, setExtinguishFire] = useState<boolean>(
    _saved?.extinguishFire ?? false,
  );
  const [addAnimals, setAddAnimals] = useState<boolean>(
    _saved?.addAnimals ?? false,
  );

  // Historique des conséquences déjà jouées
  const [history, setHistory] = useState<number[]>(() => _saved?.history ?? []);
  const addToHistory = (n: number) => setHistory((prev) => [...prev, n]);

  // Progression
  const [correctIds, setCorrectIds] = useState<Set<string>>(
    () => new Set(_saved?.correctIds ?? []),
  );
  const addCorrectId = (id: string) =>
    setCorrectIds((prev) => new Set(prev).add(id));

  // ── Sauvegarde automatique à chaque changement d'état ───────
  useEffect(() => {
    saveGameState({
      correctIds: Array.from(correctIds),
      history,
      unfloodPlanet,
      turnPlanetGreen,
      growTrees,
      unmeltIce,
      cleanAir,
      cleanWater,
      replaceBuildings,
      cleanWaste,
      transitionEnergy,
      extinguishFire,
      addAnimals,
    });
  }, [
    correctIds,
    history,
    unfloodPlanet,
    turnPlanetGreen,
    growTrees,
    unmeltIce,
    cleanAir,
    cleanWater,
    replaceBuildings,
    cleanWaste,
    transitionEnergy,
    extinguishFire,
    addAnimals,
  ]);

  // ── Reset complet (bouton Recommencer) ─────────────────────────
  const handleRestart = () => {
    clearGameState();
    setCorrectIds(new Set());
    setHistory([]);
    setUnfloodPlanet(false);
    setTurnPlanetGreen(false);
    setGrowTrees(false);
    setUnmeltIce(false);
    setCleanAir(false);
    setCleanWater(false);
    setReplaceBuildings(false);
    setCleanWaste(false);
    setTransitionEnergy(false);
    setExtinguishFire(false);
    setAddAnimals(false);
    setEndGame(false);
    setScreen("start");
  };

  const UIRef = useRef<HTMLDivElement>(null!);
  const buttonRef = useRef<HTMLDivElement>(null!);
  const progressBarRef = useRef<HTMLDivElement>(null!);

  const { camera } = useThree();

  useEffect(() => {
    if (!planetGroupRef.current) return;
    const isFormVisible = myDilemma === "0" || myDilemma === "NaN";

    if (isFormVisible) {
      gsap.to(camera.position, {
        x: 0,
        y: -0.8,
        z: 5,
        duration: 1,
        ease: "power2.out",
      });
      gsap.to(planetGroupRef.current.position, {
        x: 0,
        y: 0,
        z: 0,
        duration: 1,
        ease: "power2.out",
      });
    } else if (isPlaying || endGame) {
      gsap.to(camera.rotation, {
        x: 0,
        y: 0,
        z: 0,
        duration: 1,
        ease: "power2.out",
      });
      gsap.to(planetGroupRef.current.position, {
        x: 0,
        y: 0,
        z: 0,
        duration: 1,
        ease: "power2.out",
      });
    } else {
      gsap.to(camera.position, {
        x: 0,
        y: 0,
        z: 15,
        duration: 1,
        ease: "power2.out",
      });
      gsap.to(camera.rotation, {
        x: 0,
        y: 0,
        z: 0,
        duration: 1,
        ease: "power2.out",
      });
      gsap.to(planetGroupRef.current.position, {
        x: 0.7,
        y: -0.5,
        z: 0,
        duration: 1,
        ease: "power2.out",
      });
    }
  }, [myDilemma, isPlaying]);

  useFrame((state, delta) => {
    if (isPlaying) {
      if (UIRef.current && buttonRef.current) {
        UIRef.current.classList.add("hidden");
        buttonRef.current.classList.remove("hidden");
      }
    }
    if (!isPlaying) {
      planetGroupRef.current.rotateX(delta * 0.1);
      planetGroupRef.current.rotateY(delta * 0.1);
      planetGroupRef.current.rotateZ(delta * 0.1);
      if (endGame) {
        progressBarRef.current.classList.add("hidden");
      } else {
        progressBarRef.current?.classList.remove("hidden");
        UIRef.current?.classList.remove("hidden");
        buttonRef.current?.classList.add("hidden");
      }
    }
  });

  // Audio
  const oceanAudio = new Audio("/audio/ocean.mp3");
  const waveAudio = new Audio("/audio/ocean-waves.mp3");
  const birdsAudio = new Audio("/audio/birds.mp3");
  const treesAudio = new Audio("/audio/trees.mp3");
  const cicadasAudio = new Audio("/audio/cicadas.mp3");
  const buildingAudio = new Audio("/audio/building.mp3");
  const wasteAudio = new Audio("/audio/waste.mp3");

  const fadeInAudio = (audio: HTMLAudioElement, volume = 1) => {
    audio.loop = true;
    audio.volume = 0;
    audio.play();
    gsap.to(audio, { volume: volume, duration: 1, delay: 1 });
  };

  const fadeOutAudio = (audio: HTMLAudioElement) => {
    gsap.to(audio, { volume: 0, loop: false, duration: 2, delay: 2 });
    setTimeout(() => audio.pause(), 4000);
  };

  useEffect(() => {
    fadeInAudio(oceanAudio, 0.1);
  }, []);
  useEffect(() => {
    if (addAnimals) fadeInAudio(birdsAudio, 0.5);
    else fadeOutAudio(birdsAudio);
  }, [addAnimals]);
  useEffect(() => {
    if (unfloodPlanet || cleanWater)
      setTimeout(() => {
        waveAudio.play();
        fadeOutAudio(waveAudio);
      }, 2000);
  }, [unfloodPlanet, cleanWater]);
  useEffect(() => {
    if (turnPlanetGreen || growTrees) {
      fadeInAudio(treesAudio, 0.7);
      fadeInAudio(cicadasAudio, 0.4);
    } else {
      fadeOutAudio(treesAudio);
      fadeOutAudio(cicadasAudio);
    }
  }, [turnPlanetGreen, growTrees]);
  useEffect(() => {
    if (cleanWaste) {
      fadeInAudio(wasteAudio, 0.7);
      setTimeout(() => wasteAudio.pause(), 2500);
    }
  }, [cleanWaste]);
  useEffect(() => {
    if (replaceBuildings || transitionEnergy)
      setTimeout(() => buildingAudio.play(), 1500);
  }, [replaceBuildings, transitionEnergy]);

  return (
    <>
      <OrbitControls />
      <Lights />
      <group ref={planetGroupRef}>
        <Clouds cleanAir={cleanAir} />
        <Glacier unmeltIce={unmeltIce} addAnimals={addAnimals} />
        <Fire extinguishFire={extinguishFire} />
        <Planet
          unfloodPlanet={unfloodPlanet}
          turnPlanetGreen={turnPlanetGreen}
          cleanWater={cleanWater}
          addAnimals={addAnimals}
        />
        <Trees growTrees={growTrees} />
        <Birds addAnimals={addAnimals} />
        <Buildings replaceBuildings={replaceBuildings} />
        <Waste cleanWaste={cleanWaste} />
        <RenewableEnergy transitionEnergy={transitionEnergy} />
      </group>

      <Html>
        <div ref={UIRef} className="">
          {myDilemma === "0" || myDilemma === "NaN" ? (
            <Field setMyDilemma={setMyDilemma} />
          ) : null}
          <Dilemma
            myDilemma={myDilemma}
            history={history}
            onHistoryAdd={addToHistory}
            setUnfloodPlanet={setUnfloodPlanet}
            setGrowTrees={setGrowTrees}
            setUnmeltIce={setUnmeltIce}
            setTurnPlanetGreen={setTurnPlanetGreen}
            setIsPlaying={setIsPlaying}
            setCleanAir={setCleanAir}
            setCleanWater={setCleanWater}
            setReplaceBuildings={setReplaceBuildings}
            setCleanWaste={setCleanWaste}
            setTransitionEnergy={setTransitionEnergy}
            setAddAnimals={setAddAnimals}
            setExtinguishFire={setExtinguishFire}
            onCorrectAnswer={addCorrectId}
          />
        </div>

        <div ref={buttonRef} className="">
          <div ref={progressBarRef} className="">
            <ProgressBar current={correctIds.size} total={10} />
          </div>
          <Button
            setIsPlaying={setIsPlaying}
            setMyDilemma={setMyDilemma}
            setEndGame={setEndGame}
            onRestart={handleRestart}
          />
        </div>
      </Html>
    </>
  );
}
