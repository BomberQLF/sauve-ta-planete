import { useState } from "react";
import { Canvas } from "@react-three/fiber";
import { Scene } from "./components/Scene";
import StartScreen from "./components/StartScreen/StartScreen";
import InstructionsScreen from "./components/InstructionsScreen/InstructionsScreen";
import "./App.css";

type Screen = "start" | "instructions" | "game";

export default function App() {
  const [screen, setScreen] = useState<Screen>("start");

  if (screen === "start") {
    return <StartScreen onStart={() => setScreen("instructions")} />;
  }

  if (screen === "instructions") {
    return <InstructionsScreen onStart={() => setScreen("game")} />;
  }

  return (
    <>
      <div className="canvas-container">
        <Canvas
          camera={{
            fov: 705,
            near: 0.1,
            far: 100,
            position: [0, -0.35, 4],
          }}
        >
          <Scene />
        </Canvas>
      </div>
    </>
  );
}
