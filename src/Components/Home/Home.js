import React from "react";
import "./Home .css";
import image from "../../prf-removebg-preview.png";
import { Loading } from "../Loading/Loading";
import { MultipleLoadings } from "../MultipleLoadings/MultipleLoadings";
import { Info } from "../Details.js/Info";

export const Home = (props) => {
  const { darkMode, setDarkMode } = props;
  return (
    <div>
      <section className={`home ${darkMode && "bg-white"}`} id="home">
        <div className="w-[50%] h-[40rem] flex justify-center items-center">
          <Info darkMode={darkMode}/>
        </div>
        <div className="w-[50%] flex justify-center items-center">
          <div
            className={`home-content ${
              darkMode ? "bg-gray-300" : "bg-white"
            }  rounded-full h-[80%] w-[80%] flex justify-center items-center  `}
          >
            <img className="w-[60%] h-[70%]" src={image} />
          </div>
        </div>
      </section>
      <section className={`home ${darkMode && "bg-white"}`} id="home">
        <Loading darkMode={darkMode}/>
      </section>
      <section className={`home ${darkMode && "bg-white"}`} id="home">
        <div className="w-[100%] flex justify-center items-center">
          <MultipleLoadings darkMode={darkMode}/>
        </div>
      </section>
    </div>
  );
};
