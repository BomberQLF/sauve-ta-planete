import { Planet } from "./Planet";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { CameraControls, Html, OrbitControls } from "@react-three/drei";
import { useRef, useState } from "react";
import { Lights } from "./Lights";
import { Trees } from "./Trees";
import { Field } from "./UI/Field/Field";
import { Dilemma } from "./UI/Dilemma.tsx/Dilemma";
import { Vector3 } from "three";
import { Ice } from "./Ice";
import { gsap } from "gsap";
import { Button } from "./UI/Button/Button";

export function Scene() {
  const [myDilemma, setMyDilemma] = useState("0");
  const [isPlaying, setIsPlaying] = useState(false);

  // Consequences
  const [floodPlanet, setFloodPlanet] = useState<boolean>(false);
  const [growTrees, setGrowTrees] = useState<boolean>(false);
  const [meltIce, setMeltIce] = useState<boolean>(false);

  const prevVec = new Vector3(0, 0, 0);
  const controlsRef = useRef(null!);
  const UIRef = useRef<HTMLDivElement>(null!);
  const buttonRef = useRef<HTMLDivElement>(null!);

  const { gl, camera } = useThree();

  useFrame((state, delta) => {
    if (isPlaying) {
      gsap.to(camera.position, {
        x: () => -1,
        y: () => 2,
        z: () => 1,
        duration: 2,
      });
      if ((UIRef.current, buttonRef.current)) {
        UIRef.current.classList.add("hidden");
        buttonRef.current.classList.remove("hidden");
      }
    }
    if (!isPlaying) {
      gsap.to(camera.position, {
        x: () => 0,
        y: () => 2,
        z: () => 3,
        duration: 2,
      });
      if ((UIRef.current, buttonRef.current)) {
        UIRef.current.classList.remove("hidden");
        buttonRef.current.classList.add("hidden");
      }
    }
  });

  return (
    <>
      <Lights />
      {/* <Terrain /> */}
      <Planet floodPlanet={floodPlanet} />
      <Trees growTrees={growTrees} />
      <Ice meltIce={meltIce} />
      <Html>
        <div ref={UIRef} className="">
          <Field setMyDilemma={setMyDilemma} />
          <Dilemma
            myDilemma={myDilemma}
            setFloodPlanet={setFloodPlanet}
            floodPlanet={floodPlanet}
            setGrowTrees={setGrowTrees}
            setMeltIce={setMeltIce}
            setIsPlaying={setIsPlaying}
            isPlaying={isPlaying}
          />
        </div>

        <div ref={buttonRef} className="">
          <Button setIsPlaying={setIsPlaying} setMyDilemma={setMyDilemma} />
        </div>
      </Html>
    </>
  );
}
