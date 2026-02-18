import * as THREE from "three";

// create a function that takes a scene and a textureLoader as arguments that will be passed in from main.js where the createCeiling is called
export const createCeiling = (scene, textureLoader) => {
  // Add a simple sky blue ceiling
  const ceilingGeometry = new THREE.PlaneGeometry(45, 40);
  const ceilingMaterial = new THREE.MeshBasicMaterial({ color: 0x87ceeb, side: THREE.DoubleSide }); // sky blue
  const ceilingPlane = new THREE.Mesh(ceilingGeometry, ceilingMaterial);
  ceilingPlane.rotation.x = Math.PI / 2;
  ceilingPlane.position.y = 10;
  scene.add(ceilingPlane);
};
