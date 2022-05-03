import React from "react";

function MyWork() {
  function btnFunction() {
    const scrollSkills = document.getElementById("mywork");
    scrollSkills.scrollIntoView();
  }

  return (
    <>
      <div className="h-[100vh] w-full border-[#845EF5] bg-[#2e2e2e] border-t-4 flex flex-col">
        <div className="max-w-screen-xl w-[10%] mx-auto text-center rounded-t-md bg-[#313131] mt-[-52px] text-[#eee]">
          <button
            onClick={btnFunction}
            id="myBtn"
            title="Scroll Down"
            className="hidden md:block w-full py-2 bg-[#2e2e2e] rounded-t-md hover:scale-x-105 hover:rounded-t-md  active:scale-100 transition text-2xl font-medium border-[#845EF5] border-t-4 border-x-4"
          >
            My Work
          </button>
        </div>

        <div id="mywork" className="h-full w-full">
          <p class="option-title w-3/4 mx-auto text-2xl lg:text-7xl mt-[175px] py-2 font-extrabold">
            My
            <span className="text-transparent bg-clip-text bg-gradient-to-br from-[#8b5cf6] to-[#6366F1] leading-normal">
              &nbsp;work
            </span>
          </p>

          <div className="w-full flex gap-32 items-center justify-center py-12 row-auto">
            <div class="main-item border-[#2E2E2E] bg-[#252525] shadow-md rounded-md">
              <div className="w-[500px] h-[175.667px] text-6xl font-bold absolute justify-center mt-[75px] text-transparent bg-clip-text bg-gradient-to-br from-[#8b5cf6] to-[#2e31db] leading-normal hidden lg:flex">
                Hover
              </div>
              <div class="avatar">
                <a href="/">
                  <img className="rounded-md" src="My_Portfolio.jpg" alt="" />
                </a>
              </div>
              <p className="title font-bold">My Portfolio</p>
            </div>

            <div class="main-item border-[#2E2E2E] bg-[#252525] shadow-md rounded-md">
              <div className="w-[500px] h-[175.667px] text-6xl font-bold absolute justify-center mt-[75px] text-transparent bg-clip-text bg-gradient-to-br from-[#8b5cf6] to-[#2e31db] leading-normal hidden lg:flex">
                Hover
              </div>
              <div class="avatar">
                <a href="blackjack">
                  <img className="rounded-md" src="blackjack_pic.jpg" alt="" />
                </a>
              </div>
              <p className="title font-bold">Blackjack App</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MyWork;
