/* eslint-disable react/no-unknown-property */
"use client";
import React from "react";
import type { Mesh } from "three";
import { OrbitControls } from "@react-three/drei";
import { useControls } from "leva";
import { useFrame } from "@react-three/fiber";

const CircleEx = () => {
  const meshRef = React.useRef<Mesh | null>(null);
  const wireRef = React.useRef<Mesh | null>(null);
  const {
    radius,
    divideY,
    divideX,
    phiLength,
    phiStart,
    thetaLength,
    thetaStart,
  } = useControls({
    radius: { value: 1, min: 0, max: 10, step: 0.1 },
    divideX: { value: 32, min: 0, max: 100, step: 1 },
    divideY: { value: 32, min: 0, max: 100, step: 1 },
    phiStart: { value: 360, min: 0, max: 360, step: 1 },
    phiLength: { value: 360, min: 0, max: 360, step: 1 },
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
  }, [radius, divideX, divideY, phiLength, phiStart, thetaLength, thetaStart]);
  return (
    <>
      <OrbitControls />
      <pointLight position={[1, 1, 1]} />

      <mesh ref={meshRef} position={[2, 0, 2]} scale={[2, 2, 2]}>
        <sphereGeometry
          args={[
            radius,
            divideX,
            divideY,
            (phiStart * Math.PI) / 180,
            (phiLength * Math.PI) / 180,
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
      <mesh ref={wireRef} position={[2, 0, 2]} scale={[2, 2, 2]}>
        <meshStandardMaterial color="#e67e22" wireframe={true} />
      </mesh>
    </>
  );
};

export default CircleEx;
