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
  const cloudColorMap = useLoader(
    TextureLoader,
    "/textures/clouds-color-map.png",
  );
  const cloudsRef = useRef<Mesh>(null!);
  const smokeRef = useRef<Mesh>(null!);

  useFrame((_, delta) => {
    cloudsRef.current.rotateX(delta * 0.15);
    smokeRef.current.rotateX(delta * 0.15);
    cloudsRef.current.rotateY(delta * 0.15);
    smokeRef.current.rotateY(delta * 0.15);
  });

  // Animation
  if (cleanAir) {
    gsap.to(smokeRef.current.material, {
      opacity: 0,
      duration: 1,
      delay: 2,
    });
    gsap.to(cloudsRef.current.material, {
      opacity: 0.2,
      duration: 1,
      delay: 3,
    });
  }

  return (
    <group>
      <mesh ref={smokeRef} renderOrder={9}>
        <sphereGeometry args={[1.5]} />
        <meshBasicMaterial
          map={cloudColorMap}
          // color={"black"}
          color={"#614d45"}
          // alphaHash
          transparent
          opacity={0.7}
        />
      </mesh>
      <mesh ref={cloudsRef} renderOrder={10}>
        <sphereGeometry args={[1.5]} />
        <meshBasicMaterial
          map={cloudColorMap}
          color={"white"}
          // alphaHash
          transparent
          opacity={0}
        />
      </mesh>
    </group>
  );
}
