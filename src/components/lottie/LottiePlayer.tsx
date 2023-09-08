"use client";
import React from "react";
import Lottie from "react-lottie-player";
interface LottieAnimationData {
  v: string;
  fr: number;
  ip: number;
  op: number;
  w: number;
  h: number;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  layers: any[];
}
interface AnimationProps {
  animationData: LottieAnimationData;
}

const LottiePlayer: React.FC<AnimationProps> = ({ animationData }) => {
  return <Lottie loop animationData={animationData} play />;
};

export default LottiePlayer;
