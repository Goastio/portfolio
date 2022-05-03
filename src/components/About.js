import React from "react";
import { TiArrowRightThick } from "react-icons/ti";

function About() {
  function hoverOpen() {
    const targetDiv = document.getElementById("funFacts");
    const btn = document.getElementById("toggle");
    btn.onmouseover = function () {
      if (targetDiv.style.opacity !== "1") {
        targetDiv.style.opacity = "1";
      }
    };
  }

  function hoverOut() {
    const targetDiv = document.getElementById("funFacts");
    const btn = document.getElementById("toggle");
    btn.onmouseout = function () {
      if (targetDiv.style.opacity === "1") {
        targetDiv.style.opacity = "0";
      }
    };
  }

  function clickOpen() {
    const targetDiv = document.getElementById("funFacts");
    const btn = document.getElementById("toggle");
    btn.onclick = function () {
      if (targetDiv.style.display !== "none") {
        targetDiv.style.display = "none";
      } else {
        targetDiv.style.display = "block";
      }
    };
  }

  function btnFunction() {
    const scrollAbout = document.getElementById("about");
    scrollAbout.scrollIntoView();
  }

  return (
    <>
      <div className="h-[90vh] w-full border-[#845EF5] border-t-4 bg-[#2e2e2e] flex flex-col">
        <div className="max-w-screen-xl w-[10%] mx-auto text-center rounded-t-md bg-[#313131] mt-[-52px] text-[#eee]">
          <button
            onClick={btnFunction}
            id="myBtn"
            title="Scroll Down"
            className="hidden md:block w-full py-2 bg-[#2E2E2E] rounded-t-md hover:scale-x-105 hover:rounded-t-md  active:scale-100 transition text-2xl font-medium border-[#845EF5] border-t-4 border-x-4"
          >
            About
          </button>
        </div>

        <div id="about" className="h-full w-full">
          <div className="w-3/4 h-full mx-auto">
            <div className="md:h-full md:w-full items-center grid md:grid-cols-2 gap-4">
              <div className="text-[#eee] h-full items-center">
                <div className="md:h-1/2">
                  <div className="text-2xl lg:text-7xl text-[#eee] h-full font-extrabold flex items-center tracking-tight">
                    A little about
                    <span className="text-transparent bg-clip-text bg-gradient-to-br from-[#8b5cf6] to-[#6366F1] leading-normal">
                      &nbsp;myself
                    </span>
                  </div>
                </div>

                <div className="mt-[-48px]">
                  <div className="grid gap-16 text-2xl">
                    <div className="flex">
                      <TiArrowRightThick className="h-full items-center" />
                      &nbsp; I am 25 years old
                    </div>
                    <div className="flex">
                      <TiArrowRightThick className="h-full items-center" />
                      &nbsp; Born and raised in Chicago, currently residing in
                      Florida
                    </div>

                    <div className="flex">
                      <TiArrowRightThick className="h-full items-center" />
                      &nbsp;
                      <button
                        onClick={clickOpen}
                        onMouseOver={hoverOpen}
                        onMouseOut={hoverOut}
                        id="toggle"
                        className=""
                      >
                        <span className="text-transparent bg-clip-text bg-gradient-to-br from-[#8b5cf6] to-[#6366F1] leading-normal">
                          &nbsp;Fun Facts & Hobbies
                        </span>
                        &nbsp;(Hover/Click)
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div
                id="funFacts"
                className="h-full mx-auto transition opacity-0"
              >
                <div className="bg-[#252525] p-16 mt-[205px] rounded-lg flex justify-center">
                  <div className="text-2xl text-[#eee] justify-center flex flex-col gap-6">
                    <div className="flex items-center">
                      <TiArrowRightThick className="h-full items-center" />
                      &nbsp; I am 6'8" tall
                    </div>

                    <div className="flex items-center">
                      <TiArrowRightThick className="h-full" />
                      &nbsp; I love playing video games
                    </div>

                    <div className="flex items-center">
                      <TiArrowRightThick className="h-full items-center" />
                      &nbsp;
                      <div>&nbsp;I love learning anything tech related</div>
                    </div>

                    <div className="flex items-center">
                      <TiArrowRightThick className="h-full items-center" />
                      &nbsp;
                      <div>&nbsp;I play disc golf</div>
                    </div>

                    <div className="flex items-center">
                      <TiArrowRightThick className="h-full items-center" />
                      &nbsp;
                      <div>&nbsp;My father is from Chile</div>
                    </div>

                    <div className="flex items-center">
                      <TiArrowRightThick className="h-full items-center" />
                      &nbsp;
                      <div>&nbsp;My mom is 6'3"</div>
                    </div>

                    <div className="flex items-center">
                      <TiArrowRightThick className="h-full items-center" />
                      &nbsp;
                      <div>&nbsp;Math is my favorite subject</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
