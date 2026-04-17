import { Canvas } from "@react-three/fiber";
import { Scene } from "./components/Scene";
import "./App.css";

export default function App() {
  return (
    <>
      <div className="canvas-container">
        <Canvas
          camera={{
            fov: 75,
            near: 0.1,
            far: 100,
            position: [0, 0, 3],
          }}
        >
          <Scene />
        </Canvas>
      </div>
    </>
  );
}
