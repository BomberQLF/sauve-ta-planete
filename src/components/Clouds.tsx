import {
  Mesh,
  MeshStandardMaterial,
  Group,
  SphereGeometry,
  TextureLoader,
} from "three";
import { useRef, type JSX } from "react";
import { useGLTF } from "@react-three/drei";
import type { GLTF } from "three-stdlib";
import { gsap } from "gsap";
import { useFrame, useLoader } from "@react-three/fiber";

export function Clouds() {
  const cloudColorMap = useLoader(TextureLoader, "/clouds-color-map.webp");
  const cloudsRef = useRef<Mesh>(null!);
  useFrame((_, delta) => {
    cloudsRef.current.rotateX(delta * 0.15);
  });
  return (
    <group ref={cloudsRef}>
      <mesh>
        <sphereGeometry args={[1.5]} />
        <meshBasicMaterial
          map={cloudColorMap}
          color={"white"}
          transparent
          opacity={0.3}
        />
      </mesh>
    </group>
  );
}
