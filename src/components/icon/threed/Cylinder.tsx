/* eslint-disable react/no-unknown-property */
"use client";
import React from "react";
import type { Mesh } from "three";
import { OrbitControls } from "@react-three/drei";
import { useControls } from "leva";
import { useFrame } from "@react-three/fiber";

const Cylinder = () => {
  const meshRef = React.useRef<Mesh | null>(null);
  const wireRef = React.useRef<Mesh | null>(null);
  const {
    cylinderTop,
    cylinderBottom,
    cylinderHeight,
    devideHeight,
    devideWidth,
    widthOpen,
    thetaStart,
    thetaLength,
  } = useControls({
    cylinderTop: { value: 1, min: 0, max: 10, step: 0.1 },
    cylinderBottom: { value: 1, min: 0, max: 10, step: 0.1 },
    cylinderHeight: { value: 1, min: 0, max: 10, step: 0.1 },
    devideWidth: { value: 32, min: 0, max: 100, step: 1 },
    devideHeight: { value: 32, min: 0, max: 100, step: 1 },
    widthOpen: { value: false },
    thetaStart: { value: 360, min: 0, max: 360, step: 1 },
    thetaLength: { value: 360, min: 0, max: 360, step: 1 },
  });

  useFrame(() => {
    if (wireRef.current && meshRef.current) {
      wireRef.current.rotation.x += 0.01;
      meshRef.current.rotation.x += 0.01;
    }
  });
  React.useEffect(() => {
    if (wireRef.current?.geometry && meshRef.current?.geometry)
      wireRef.current.geometry = meshRef.current?.geometry;
  }, [
    cylinderTop,
    cylinderBottom,
    cylinderHeight,
    devideHeight,
    devideWidth,
    widthOpen,
    thetaStart,
    thetaLength,
  ]);

  return (
    <>
      <OrbitControls />
      <pointLight position={[10, 10, 1]} />

      <mesh ref={meshRef} position={[-2, 0, -2]} scale={[1, 1, 1]}>
        <cylinderGeometry
          args={[
            cylinderTop,
            cylinderBottom,
            cylinderHeight,
            devideWidth,
            devideHeight,
            widthOpen,
            (thetaStart * Math.PI) / 180,
            (thetaLength * Math.PI) / 180,
          ]}
        />
        <meshLambertMaterial
          color="grey"
          attach="material"
          opacity={0.5}
          transparent={true}
        />
      </mesh>
      <mesh ref={wireRef} position={[-2, 0, -2]} scale={[1, 1, 1]}>
        <meshStandardMaterial color="#e67e22" wireframe={true} />
      </mesh>
    </>
  );
};

export default Cylinder;
