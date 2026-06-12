import { Planet } from "./Planet";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
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

export function Scene() {
  const [myDilemma, setMyDilemma] = useState("0");
  const [isPlaying, setIsPlaying] = useState(false);
  const planetGroupRef = useRef<Group>(null!);

  // Consequences
  const [unfloodPlanet, setUnfloodPlanet] = useState<boolean>(false);
  const [turnPlanetGreen, setTurnPlanetGreen] = useState<boolean>(false);
  const [growTrees, setGrowTrees] = useState<boolean>(false);
  const [unmeltIce, setUnmeltIce] = useState<boolean>(false);
  const [cleanAir, setCleanAir] = useState<boolean>(false);
  const [cleanWater, setCleanWater] = useState<boolean>(false);
  const [replaceBuildings, setReplaceBuildings] = useState<boolean>(false);
  const [cleanWaste, setCleanWaste] = useState<boolean>(false);
  const [transitionEnergy, setTransitionEnergy] = useState<boolean>(false);
  const [extinguishFire, setExtinguishFire] = useState<boolean>(false);
  const [addAnimals, setAddAnimals] = useState<boolean>(false);

  // Progression — ids des dilemmes répondus correctement (Set évite les doublons)
  const [correctIds, setCorrectIds] = useState<Set<string>>(new Set());
  const addCorrectId = (id: string) =>
    setCorrectIds((prev) => new Set(prev).add(id));

  const UIRef = useRef<HTMLDivElement>(null!);
  const buttonRef = useRef<HTMLDivElement>(null!);

  const { gl, camera } = useThree();

  // Form : caméra zoomée, planète centrée (OrbitControls gère l'orientation)
  // Dilemme : caméra reculée qui regarde toujours l'origine (pour ancrer les <Html>),
  // on déplace la planète dans le monde pour qu'elle apparaisse en haut-gauche
  useEffect(() => {
    if (!planetGroupRef.current) return;
    const isFormVisible = myDilemma === "0" || myDilemma === "NaN";

    if (isFormVisible) {
      // Form : caméra zoomée + planète centrée
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
    } else if (isPlaying) {
      // Étape Continuer/Terminer : planète recentrée pour bien voir le résultat
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
      // Dilemme actif (avant clic réponse) : planète décalée pour laisser place aux panneaux
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

  //Animate
  useFrame((state, delta) => {
    if (isPlaying) {
      if ((UIRef.current, buttonRef.current)) {
        UIRef.current.classList.add("hidden");
        buttonRef.current.classList.remove("hidden");
      }
    }
    if (!isPlaying) {
      // planet constantly rotating
      planetGroupRef.current.rotateX(delta * 0.1);
      planetGroupRef.current.rotateY(delta * 0.1);
      planetGroupRef.current.rotateZ(delta * 0.1);
      if ((UIRef.current, buttonRef.current)) {
        UIRef.current.classList.remove("hidden");
        buttonRef.current.classList.add("hidden");
      }
    }
  });

  //Audio
  const oceanAudio = new Audio("/audio/ocean.mp3");
  const waveAudio = new Audio("/audio/ocean-waves.mp3");
  const fireAudio = new Audio("/audio/fire.mp3");
  const buildingAudio = new Audio("/audio/building.mp3");
  const birdsAudio = new Audio("/audio/birds.mp3");
  const treesAudio = new Audio("/audio/trees.mp3");
  const cicadasAudio = new Audio("/audio/cicadas.mp3");
  const sparkleAudio = new Audio("/audio/sparkle.mp3");
  const wasteAudio = new Audio("/audio/waste.mp3");

  const fadeInAudio = (audio: HTMLAudioElement, volume?: number) => {
    audio.loop = true;
    audio.volume = 0;
    audio.play();
    gsap.to(audio, {
      volume: volume ? volume : 1,
      duration: 1,
      delay: 1,
    });
  };

  const fadeOutAudio = (audio: HTMLAudioElement) => {
    gsap.to(audio, {
      volume: 0,
      duration: 2,
      delay: 2,
    });
    setTimeout(() => {
      audio.pause();
    }, 4000);
  };

  // Audio
  useEffect(() => {
    fadeInAudio(oceanAudio, 0.1);
  }, []);

  useEffect(() => {
    if (addAnimals) {
      fadeInAudio(birdsAudio, 0.5);
    }
  }, [addAnimals]);

  useEffect(() => {
    if (unfloodPlanet || cleanWater) {
      setTimeout(() => {
        waveAudio.play();
        fadeOutAudio(waveAudio);
      }, 2000);
    }
  }, [unfloodPlanet, cleanWater]);

  useEffect(() => {
    if (turnPlanetGreen || growTrees) {
      // setTimeout(() => {
      fadeInAudio(treesAudio, 0.7);
      fadeInAudio(cicadasAudio, 0.7);
      // }, 2000);
    }
  }, [turnPlanetGreen, growTrees]);

  useEffect(() => {
    if (cleanWaste) {
      fadeInAudio(wasteAudio, 0.7);
      setTimeout(() => {
        wasteAudio.pause();
      }, 2500);
    }
  }, [cleanWaste]);

  useEffect(() => {
    if (replaceBuildings || transitionEnergy) {
      setTimeout(() => {
        buildingAudio.play();
      }, 1500);
    }
  }, [replaceBuildings, transitionEnergy]);

  return (
    <>
      {/* OrbitControls actif uniquement quand le formulaire est visible */}
      {/* {(myDilemma === "0" || myDilemma === "NaN") && <OrbitControls />} */}

      {/* Pour le dev */}
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
          {/* Total = nb dilemmas */}
          {/* <ProgressBar current={correctIds.size} total={data.length} /> */}

          {/* Total = nb consequences */}
          <ProgressBar current={correctIds.size} total={10} />
          <Button setIsPlaying={setIsPlaying} setMyDilemma={setMyDilemma} />
        </div>
      </Html>
    </>
  );
}
