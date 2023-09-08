import React from "react";
interface props {
  name: string;
  color: "blue" | "yellow" | "brown" | "gray";
  bounce?: boolean;
}
const ProjectTag: React.FC<props> = ({ name, color, bounce }) => {
  const colorselector = () => {
    switch (color) {
      case "blue":
        return "bg-[#55efc4] dark:bg-[#74b9ff] dark:text-white";
      case "yellow":
        return "bg-[#81ecec] dark:bg-[#0984e3] dark:text-white";
      case "brown":
        return "bg-[#00b894] dark:bg-[#a29bfe] dark:text-white";
      case "gray":
        return "bg-[#00cec9] dark:bg-[#6c5ce7] dark:text-white";
      default:
        return "bg-[#55efc4] dark:bg-[#74b9ff] dark:text-white";
    }
  };
  const colorStyle = colorselector();
  return (
    <div>
      <span
        className={`${
          bounce && "animate-bounce"
        } inline-block ${colorStyle} rounded-full px-3 py-1 text-sm font-semibold text-${color}-900 mr-2 mb-2 shadow-sm border border-gray-400`}
      >
        {name}
      </span>
    </div>
  );
};

export default ProjectTag;
