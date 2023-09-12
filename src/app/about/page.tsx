"use client";
import React from "react";
import { Canvas } from "@react-three/fiber";

import Character from "@/components/layout/threed/character";

const AboutPage = () => {
  return (
    <div>
      <Canvas className="w-[200px] h-[200px]">
        <Character />
      </Canvas>
    </div>
  );
};

export default AboutPage;
