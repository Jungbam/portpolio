import React from "react";

const ServiceTag = ({
  status,
}: {
  status: "develop" | "service" | "closed" | "POC";
}) => {
  if (status === "service")
    return (
      <div className="absolute bottom-1 left-2 px-1 bg-yellow-200 text-stone-600 border shadow-md">
        {status}
      </div>
    );
  if (status === "closed")
    return (
      <div className="absolute bottom-1 left-2 px-1 bg-black text-white border shadow-md shadow-white">
        {status}
      </div>
    );
  if (status === "POC")
    return (
      <div className="absolute bottom-1 left-2 px-1 bg-black text-white border shadow-md shadow-white">
        {status}
      </div>
    );
  return (
    <div className="absolute bottom-1 left-2 px-1 bg-blue-600 text-white border shadow-md shadow-white">
      {status}
    </div>
  );
};

export default ServiceTag;
