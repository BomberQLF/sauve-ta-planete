import {
  MeshBasicMaterial,
  MeshStandardMaterial,
  MeshPhongMaterial,
} from "three";

//Terrain

//Ocean

//Clouds
export const whiteMaterial = new MeshBasicMaterial({ color: "white" });

//Waste
export const grayMaterial = new MeshStandardMaterial({
  color: "#717171",
  metalness: 0.9,
});
