import { useFBX } from "@react-three/drei";

export function Terrain() {
  const fbx = useFBX("/surface.fbx");
  return <primitive object={fbx} scale={0.01} />;
}
