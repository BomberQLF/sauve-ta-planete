import { Planet } from "./Planet";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Html, OrbitControls } from "@react-three/drei";
import { useRef, useState, useEffect } from "react";
import { Lights } from "./Lights";
import { Trees } from "./Trees";
import { Field } from "./UI/Field/Field";
import { Dilemma } from "./UI/Dilemma/Dilemma";
import { Group, Vector3 } from "three";
import { gsap } from "gsap";
import { Button } from "./UI/Button/Button";
import { Birds } from "./Birds";
import { Clouds } from "./Clouds";
import { Glacier } from "./Glacier/Glacier";
import { Buildings } from "./Buildings";
import { Waste } from "./Waste";

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

  const UIRef = useRef<HTMLDivElement>(null!);
  const buttonRef = useRef<HTMLDivElement>(null!);

  const { gl, camera } = useThree();

  // Caméra : légèrement plus loin + planète haute quand le formulaire est visible
  useEffect(() => {
    const isFormVisible = myDilemma === "0" || myDilemma === "NaN";
    if (isFormVisible) {
      gsap.to(camera.position, { x: 0, y: -0.8, z: 4, duration: 1, ease: "power2.out" });
    } else {
      gsap.to(camera.position, { x: 0, y: 0, z: 3, duration: 1, ease: "power2.out" });
    }
  }, [myDilemma]);

  //Animate
  useFrame((state, delta) => {
    if (isPlaying) {
      //zoom to scene
      // gsap.to(camera.position, {
      //   x: () => 0,
      //   y: () => 1,
      //   z: () => 1.2,
      //   duration: 2,
      // });
      if ((UIRef.current, buttonRef.current)) {
        UIRef.current.classList.add("hidden");
        buttonRef.current.classList.remove("hidden");
      }
    }
    if (!isPlaying) {
      //zoom to scene
      // gsap.to(camera.position, {
      //   x: () => 0,
      //   y: () => 0,
      //   z: () => 3,
      //   duration: 2,
      // });

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

  return (
    <>
      <OrbitControls />

      <Lights />
      <group ref={planetGroupRef}>
        <Clouds cleanAir={cleanAir} />
        {/* <Ice unmeltIce={unmeltIce} />
        <Penguin /> */}
        <Glacier unmeltIce={unmeltIce} />

        <Planet
          unfloodPlanet={unfloodPlanet}
          turnPlanetGreen={turnPlanetGreen}
          cleanWater={cleanWater}
        />
        <Trees growTrees={growTrees} />
        <Birds />
        <Buildings replaceBuildings={replaceBuildings} />
        <Waste cleanWaste={cleanWaste} />
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
          />
        </div>

        <div ref={buttonRef} className="">
          <Button setIsPlaying={setIsPlaying} setMyDilemma={setMyDilemma} />
        </div>
      </Html>
    </>
  );
}
