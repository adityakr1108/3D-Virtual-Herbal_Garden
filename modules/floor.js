import * as THREE from "three";
// Removed floor texture for herbal garden

export const setupFloor = (scene) => {
  // Add a simple ground plane (no texture)
  const planeGeometry = new THREE.PlaneGeometry(45, 45);
  const planeMaterial = new THREE.MeshStandardMaterial({ color: 0x228B22, side: THREE.DoubleSide }); // green for garden
  const floor = new THREE.Mesh(planeGeometry, planeMaterial);
  floor.rotation.x = -Math.PI / 2;
  floor.position.y = 0;
  floor.receiveShadow = true;
  scene.add(floor);

  // Add a test object (cube) to represent a future herbal plant
  const cubeGeometry = new THREE.BoxGeometry(1, 1, 1);
  const cubeMaterial = new THREE.MeshStandardMaterial({ color: 0x8B4513 }); // brown for plant base
  const testPlant = new THREE.Mesh(cubeGeometry, cubeMaterial);
  testPlant.position.set(0, 0.5, 0); // center of garden, slightly above ground
  testPlant.castShadow = true;
  scene.add(testPlant);
};
