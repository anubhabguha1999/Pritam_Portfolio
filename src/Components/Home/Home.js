import React from "react";
import './Home .css'
import image from '../../prf-removebg-preview.png'
export const Home = () => {
  return (
    // sdfsdf
    <section className="home" id="home" >
      <div className="w-[50%] h-[40rem] flex justify-center items-center">
        <div className="home-content">
          <div className="text-1">Hello, <span>my name is</span></div>
          <div className="text-2">Pritam Guha</div>
          <div className="text-3">
            And I'm a <span>Programmar</span>
          </div>
        </div>
      </div>
      <div className="w-[50%] flex justify-center items-center">
        <div className="home-content bg-white rounded-full h-[80%] w-[80%] flex justify-center items-center">
          <img
          className="w-[60%] h-[70%]"
          src={image}
          />
        </div>
      </div>
    </section>
  );
};

