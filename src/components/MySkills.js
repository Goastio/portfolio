import React from "react";

function MySkills() {
  function btnFunction() {
    const scrollSkills = document.getElementById("skills");
    scrollSkills.scrollIntoView();
  }

  return (
    <>
      <div className="h-[90vh] w-full border-[#845EF5] border-t-4 flex flex-col">
        <div className="max-w-screen-xl w-[10%] mx-auto text-center rounded-t-md bg-[#313131] mt-[-52px] text-[#eee]">
          <button
            onClick={btnFunction}
            id="myBtn"
            title="Scroll Down"
            className="hidden md:block w-full py-2 bg-[#252525] rounded-t-md hover:scale-x-105 hover:rounded-t-md  active:scale-100 transition text-2xl font-medium border-[#845EF5] border-t-4 border-x-4"
          >
            My Skills
          </button>
        </div>

        <div id="skills" className="h-full w-full">
          <div className="w-3/4 h-full mx-auto">
            <div className="md:h-full md:w-full items-center grid gap-4">
              <div className="text-[#eee] h-full items-center">
                <div className="text-2xl lg:text-7xl text-[#eee] h-full font-extrabold flex items-center tracking-tight">
                  My
                  <span className="text-transparent bg-clip-text bg-gradient-to-br from-[#8b5cf6] to-[#6366F1] leading-normal">
                    &nbsp;skills
                  </span>
                </div>
              </div>
              <div className="flex h-1/2 w-full m-auto gap-8 mt-[-48px] select-none hover:cursor-pointer">
                <div className="flex h-full w-full hover:scale-105 active:scale-100 transition">
                  <img className="pointer-events-none"
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
                    alt=""
                  />
                </div>
                <div className="flex h-full w-full hover:scale-105 active:scale-100 transition">
                  <img className="pointer-events-none"
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg"
                    alt=""
                  />
                </div>
                <div className="flex h-full w-full hover:scale-105 active:scale-100 transition">
                  <img className="pointer-events-none"
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-plain.svg"
                    alt=""
                  />
                </div>
                <div className="flex h-full w-full hover:scale-105 active:scale-100 transition">
                  <img className="pointer-events-none"
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain.svg"
                    alt=""
                  />
                </div>
                <div className="flex h-full w-full hover:scale-105 active:scale-100 transition">
                  <img className="pointer-events-none"
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MySkills;
