/* eslint-disable react/no-unknown-property */
"use client";
import React from "react";
import type { Mesh } from "three";
import { OrbitControls } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

const Character = () => {
  const meshRef = React.useRef<Mesh | null>(null);

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.01;
    }
  });
  return (
    <>
      <pointLight position={[1, 1, 1]} />
      <axesHelper scale={10} />
      <OrbitControls />
      <mesh ref={meshRef} position={[2, 0, 2]} scale={[2, 2, 2]}>
        <boxGeometry />
        <meshStandardMaterial
          color="#e67e22"
          opacity={0.5}
          transparent={true}
        />
        <axesHelper scale={2} />
      </mesh>
    </>
  );
};

export default Character;
