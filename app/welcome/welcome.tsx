import { Environment } from "@react-three/drei";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { useEffect, useRef, useState } from "react";
import { Vector3 } from "three";
import { Euler } from "three";
import {
  FontLoader,
  GLTFLoader,
  TextGeometry,
} from "three/examples/jsm/Addons.js";

function Jim() {
  const rose = useLoader(GLTFLoader, "rose/rose.gltf");
  const font = useLoader(FontLoader, "Carry_You_Regular.json");

  const roseMesh = useRef<any>(null);

  useFrame(() => {
    roseMesh.current.rotation.y += 0.002;
  });

  const text = new TextGeometry("Love you Sam", {
    font: font,
    bevelEnabled: true,
    bevelSize: 0.01,
  });

  return (
    <>
      <ambientLight intensity={0.1} />
      <directionalLight color="white" position={[0, 0, 5]} intensity={30} />
      <mesh
        geometry={text}
        scale={new Vector3(0.01, 0.01, 0.001)}
        position={new Vector3(-3, 2)}
      >
        <meshBasicMaterial color={"white"} attach={"material"} />
      </mesh>
      <mesh scale={2} ref={roseMesh}>
        <primitive object={rose.scene} />
        <meshStandardMaterial />
      </mesh>
      <Environment preset="sunset" background />
    </>
  );
}

export function Welcome() {
  return (
    <div style={{ height: "100vh" }}>
      <Canvas>
        <Jim />
      </Canvas>
    </div>
  );
}
