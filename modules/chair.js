import * as THREE from "three";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader";

export const loadChairModel = (scene) => {
  const loader = new GLTFLoader();

  loader.load(
    "../public/models/chair/padded_chair_GLB2K.glb",
    (gltf) => {
      const chair = gltf.scene;

      // Position the chair on the ground (tweak as needed)
      chair.position.set(2,0, -6);
      chair.rotation.set(0, Math.PI, 0);
      chair.scale.set(8, 8, 8);

      // Enable shadows on meshes
      chair.traverse((child) => {
        if (child.isMesh) {
          child.castShadow = true;
          child.receiveShadow = true;
        }
      });

      scene.add(chair);
    },
    undefined,
    (error) => {
      console.error("An error occurred while loading the chair model.", error);
    }
  );
};
