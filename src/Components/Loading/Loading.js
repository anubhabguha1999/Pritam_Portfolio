import React from "react";
import SimpleBackdrop from "../Loading";
export const Loading = (props) => {
  const { darkMode } = props;
  return (
    <div className="w-[100%] flex justify-center items-center">
      <div
        className={`home-content flex flex-col gap-4 ${
          darkMode ? "bg-gray-300" : "bg-white"
        } ${
          darkMode ? "shadow-md" : "shadow-lg"
        } rounded-full h-[80%] w-[80%] flex justify-center items-center  `}
      >
        <p
          className={`text-[2rem] ${
            !darkMode ? "text-gray-500" : "text-black"
          }`}
        >
          What if i Told You If you click on this You will see a Loading ?
        </p>
        <SimpleBackdrop />
      </div>
    </div>
  );
};
