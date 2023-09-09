import React from "react";

const LoadingSpinner = () => {
  return (
    <div className="flex flex-col gap-[20px] items-center">
      <div className="w-16 h-16 border-4 border-t-blue-500 border-gray-300 rounded-full animate-spin" />
      데이터를 가져오는 중입니다...
    </div>
  );
};

export default LoadingSpinner;
