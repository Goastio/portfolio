import React from "react";
import { Helmet } from "react-helmet";
import About from "./About";
import Footer from "./Footer";
import MySkills from "./MySkills";
import MyWork from "./MyWork";

function Main() {
  return (
    <>
      <Helmet>
        <title>Home | Brandon M.</title>
        <meta name="description" content="Custom website development." />
      </Helmet>
      <div className="h-[90vh] w-full pb-[80px]">
        <div className="w-full h-full mx-auto px-8 relative right-[1px] max-w-screen-xl font-extrabold tracking-tight text-7xl">
          <div className="flex flex-col items-center justify-center h-full text-[#eee]">
            <div className="flex flex-col lg:flex-row">
              Hello, I'm
              <span className="text-transparent bg-clip-text bg-gradient-to-br from-[#8b5cf6] to-[#6366F1]">
                &nbsp;Brandon
              </span>
              !
            </div>
            <img
              className="h-[250px] w-[250px] pointer-events-none"
              src="./undraw_dev.svg"
              alt="Undraw_Image"
            />
          </div>
        </div>
      </div>
      <About />
      <MySkills />
      <MyWork />
      <Footer />
    </>
  );
}

export default Main;
