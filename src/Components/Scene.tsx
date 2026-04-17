import { Planet } from "./Planet";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Html, OrbitControls } from "@react-three/drei";
import { useRef, useState } from "react";
import { Lights } from "./Lights";
import { Trees } from "./Trees";
import { Field } from "./UI/Field/Field";
import { Dilemma } from "./UI/Dilemma.tsx/Dilemma";
import { Group, Vector3 } from "three";
import { Ice } from "./Ice";
import { gsap } from "gsap";
import { Button } from "./UI/Button/Button";
import { Birds } from "./Birds";
import { Clouds } from "./Clouds";
import { Penguin } from "./Penguin";

export function Scene() {
  const [myDilemma, setMyDilemma] = useState("0");
  const [isPlaying, setIsPlaying] = useState(false);
  const planetGroupRef = useRef<Group>(null!);

  // Consequences
  const [floodPlanet, setFloodPlanet] = useState<boolean>(false);
  const [turnPlanetGreen, setTurnPlanetGreen] = useState<boolean>(false);
  const [growTrees, setGrowTrees] = useState<boolean>(false);
  const [meltIce, setMeltIce] = useState<boolean>(false);

  const UIRef = useRef<HTMLDivElement>(null!);
  const buttonRef = useRef<HTMLDivElement>(null!);

  const { gl, camera } = useThree();

  //Animate
  useFrame((state, delta) => {
    if (isPlaying) {
      //zoom to scene
      // gsap.to(camera.position, {
      //   x: () => -1,
      //   y: () => 2,
      //   z: () => 1,
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
      //   y: () => 2,
      //   z: () => 3,
      //   duration: 2,
      // });
      planetGroupRef.current.rotateX(delta * 0.1);
      planetGroupRef.current.rotateZ(delta * 0.1);
      if ((UIRef.current, buttonRef.current)) {
        UIRef.current.classList.remove("hidden");
        buttonRef.current.classList.add("hidden");
      }
    }
  });

  return (
    <>
      <Lights />
      <OrbitControls />
      <group ref={planetGroupRef}>
        <Clouds />
        <Ice meltIce={meltIce} />
        <Penguin />

        <Planet floodPlanet={floodPlanet} turnPlanetGreen={turnPlanetGreen} />
        <Trees growTrees={growTrees} />
        <Birds />
      </group>
      <Html>
        <div ref={UIRef} className="">
          <Field setMyDilemma={setMyDilemma} />
          <Dilemma
            myDilemma={myDilemma}
            setFloodPlanet={setFloodPlanet}
            setGrowTrees={setGrowTrees}
            setMeltIce={setMeltIce}
            setTurnPlanetGreen={setTurnPlanetGreen}
            setIsPlaying={setIsPlaying}
          />
        </div>

        <div ref={buttonRef} className="">
          <Button setIsPlaying={setIsPlaying} setMyDilemma={setMyDilemma} />
        </div>
      </Html>
    </>
  );
}
