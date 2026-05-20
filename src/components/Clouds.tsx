import {
  Mesh,
  MeshStandardMaterial,
  MeshBasicMaterial,
  Group,
  SphereGeometry,
  TextureLoader,
} from "three";
import { useRef, type JSX } from "react";
import { useGLTF } from "@react-three/drei";
import type { GLTF } from "three-stdlib";
import { gsap } from "gsap";
import { useFrame, useLoader } from "@react-three/fiber";

export function Clouds({ cleanAir }: { cleanAir: boolean }) {
  const cloudColorMap = useLoader(TextureLoader, "/clouds-color-map.webp");
  const cloudsRef = useRef<Mesh>(null!);
  const smokeRef = useRef<Mesh>(null!);

  useFrame((_, delta) => {
    cloudsRef.current.rotateX(delta * 0.15);
    smokeRef.current.rotateX(delta * 0.15);
  });

  if (cleanAir) {
    gsap.to(smokeRef.current.material, {
      opacity: 0,
      duration: 1,
    });
    gsap.to(cloudsRef.current.material, {
      opacity: 0.5,
      duration: 1,
      delay: 1,
    });
  }

  return (
    <group>
      <mesh ref={smokeRef}>
        <sphereGeometry args={[1.5]} />
        <meshBasicMaterial
          map={cloudColorMap}
          color={"black"}
          transparent
          opacity={0.3}
        />
      </mesh>
      <mesh ref={cloudsRef}>
        <sphereGeometry args={[1.5]} />
        <meshBasicMaterial
          map={cloudColorMap}
          color={"white"}
          transparent
          opacity={0}
        />
      </mesh>
    </group>
  );
}
