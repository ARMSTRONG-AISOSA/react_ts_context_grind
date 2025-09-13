import React from "react";
import { useToggleBox, } from "../context/ToggleBoxContext";
import ToggleBoxSwitch from "../components/ToggleBoxSwitch";

const BoxSwitch: React.FC = () => {
  const { isBlue } = useToggleBox();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      {/* Box */}
      <div
        className={`w-40 h-40 rounded-lg border-2 transition-colors duration-300 ${isBlue ? "bg-blue-500 border-blue-700" : "bg-white border-gray-400"
          }`}
      ></div>

      {/* Toggle Switch */}
      <div className="mt-6">
        <ToggleBoxSwitch />
      </div>

      {/* Label */}
      <p className="mt-3 text-gray-700 font-medium">
        {isBlue ? "Blue Mode" : "White Mode"}
      </p>
    </div>
  );
};

export default BoxSwitch;
