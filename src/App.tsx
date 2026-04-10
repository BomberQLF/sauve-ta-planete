import { Canvas } from "@react-three/fiber";
import Hero from "./components/Hero/Hero.js";
import { Scene } from "./components/Scene.js";
import "./App.css";

export default function App() {
  return (
    <>
      {/* <Hero /> */}
      <div className="canvas-container">
        <Canvas
          camera={{
            fov: 75,
            near: 0.1,
            far: 100,
            position: [0, 2, 3],
          }}
        >
          <Scene />
        </Canvas>
      </div>
    </>
  );
}
