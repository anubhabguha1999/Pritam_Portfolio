import React from "react";
import { CircularProgress, LinearProgress } from "@mui/material";
export const MultipleLoadings = (props) => {
  const { darkMode } = props;
  return (
    <div
      className={`home-content flex flex-col pt-2 gap-4 ${
        darkMode ? "bg-gray-300" : "bg-white"
      } ${
        darkMode ? "shadow-md" : "shadow-lg"
      } rounded-[1rem] h-[80%] w-[90%] flex justify-between items-center  `}
    >
      <p
        className={`text-[2rem] ${!darkMode ? "text-gray-500" : "text-black"}`}
      >
        Wanna See the types of loading?
      </p>
      <CircularProgress />
      <CircularProgress color="secondary" />
      <CircularProgress color="success" />
      <CircularProgress color="inherit" />
      <CircularProgress variant="determinate" value={25} />
      <CircularProgress variant="determinate" value={50} />
      <CircularProgress variant="determinate" value={75} />
      <CircularProgress variant="determinate" value={100} />
      <LinearProgress />
      <LinearProgress color="secondary" />
      <LinearProgress color="success" />
      <LinearProgress color="inherit" />
    </div>
  );
};
