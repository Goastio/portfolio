import React from "react";
// import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
// import { useState } from "react";

function Nav() {
  // const [mobileMenu, setMobileMenu] = useState(false);
  const navLinks = [
    {
      linkText: "Home",
      url: "/",
    },
    {
      linkText: "Contact",
      url: "/contact",
    },
  ];

  return (
    <>
      <div className="w-full bg-transparent absolute z-10">
        <div className="flex items-center self-center justify-between w-full h-full max-w-screen-xl px-8 py-6 mx-auto">
          <div className="w-[300px]">
            <img
              src="./signature_3.png"
              alt="signature"
              className="pointer-events-none"
            />
          </div>
          <div className="hidden gap-8 text-sm font-semibold sm:flex">
            {navLinks.map((navLink) => {
              return (
                <Link
                  key={navLink.url}
                  to={navLink.url}
                  className="hover-underline-animation text-white"
                >
                  {navLink.linkText}
                </Link>
              );
            })}
          </div>
        </div>
        {/* <button
          className="flex sm:hidden"
          onClick={() => {
            !mobileMenu ? setMobileMenu(true) : setMobileMenu(false);
          }}
        >
          <FaBars />
        </button> */}

        {/* mobile menu
        {mobileMenu ? (
          <div className="flex justify-center w-full border-t border-b absolute bg-[#f2f2f2]">
            <div className="w-full items-center flex flex-col text-xl text-[#3f3f3f]">
              <Link
                to="/"
                className="flex justify-center w-full h-full py-4 font-bold hover:text-indigo-600 hover:bg-gray-200"
                onClick={() => {
                  setMobileMenu(false);
                }}
              >
                Home
              </Link>

              <Link
                to="/contact"
                className="flex justify-center w-full h-full py-4 font-bold hover:text-indigo-600 hover:bg-gray-200"
                onClick={() => {
                  setMobileMenu(false);
                }}
              >
                Contact
              </Link>
            </div>
          </div>
        ) : (
          ""
        )} */}
      </div>
    </>
  );
}

export default Nav;
