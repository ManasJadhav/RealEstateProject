import { useState } from "react";
import { Router, useRouter } from "next/router";
import Link from "next/link";

import ContactUs from "./contactUs";
const Navnew = () => {
  const [navbar, setNavbar] = useState(false);
  const [clicked, setClicked] = useState(false);

  const [toggle, setToggle] = useState(1);

  const handleClicked = () => {
    if (clicked === false) {
      setClicked(true);
    } else {
      setClicked(false);
    }
  };

  const router = useRouter();
  return (
    <nav className="justify-between h-18 bg-white shadow-xl fixed w-full z-10 lg:px-8">
      <div className="md:items-center md:flex lg:grid lg:grid-cols-3">
        <div className="lg:cols-span-1">
          <div className=" flex items-center justify-between py-3 md:py-5 md:block ml-3 lg:ml-0">
            <Link href="/">
              <a>
                {/* <h2 className="text-2xl font-bold text-white">LOGO</h2> */}
                <img
                  src="/logo.png"
                  className=" h-12 sm:h-12"
                  alt="Flowbite Logo"
                ></img>
              </a>
            </Link>
            <div className="md:hidden">
              <button
                className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border mr-2 lg:mr-0"
                onClick={() => setNavbar(!navbar)}
              >
                {navbar ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-[#1a4ea2]"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-[#1a4ea2]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
        <div>
          <div
            className={`flex-1 justify-self-center pb-2 mt-8 md:block md:pb-0 md:mt-0 ${
              navbar ? "block" : "hidden"
            }`}
          >
            <ul className="items-center justify-center space-y-8 md:flex md:space-x-12 md:space-y-0 pl-4">
              <Link href="/">
                <li
                  onClick={() => setToggle(1)}
                  className={
                    router.pathname === "/"
                      ? "bg-body text-white py-3 rounded-md lg:mr-0 mr-2 px-6 cursor-pointer"
                      : "bg-white text-black py-3 rounded lg:mr-0 mr-2 px-6 cursor-pointer"
                  }
                >
                  Home
                </li>
              </Link>

              <Link href="/service">
                <li
                  onClick={() => setToggle(2)}
                  className={
                    router.pathname === "/service"
                      ? "bg-body text-white py-3 rounded-md lg:mr-0 mr-2 px-6 cursor-pointer"
                      : "bg-white text-black py-3 rounded lg:mr-0 mr-2 px-6 cursor-pointer"
                  }
                >
                  Our Services
                </li>
              </Link>
              <Link href="/aboutdummy">
                <li
                  onClick={() => setToggle(3)}
                  className={
                    toggle === 3
                      ? "bg-body text-white py-3 rounded-md lg:mr-0 mr-2 px-6 cursor-pointer"
                      : "bg-white text-black py-3 rounded lg:mr-0 mr-2 px-6 cursor-pointer"
                  }
                >
                  About US
                </li>
              </Link>
            </ul>

            <div className="mt-5 space-y-2 lg:hidden md:inline-block mb-8 px-2 ">
              <button
                onClick={handleClicked}
                className="inline-block  w-full py-2 text-center text-white bg-[#1a4ea2] rounded-full shadow hover:bg-white hover:text-[#1a4ea2] hover:border-blue-800 hover:border-2"
              >
                <a href="javascript:void(0)" className="">
                  Contact us
                </a>
              </button>
              <ContactUs />
            </div>
          </div>
        </div>
        <Link href="javascript:void(0)">
          <div className="hidden space-x-2 md:inline-block lg:ml-auto">
            <button
              onClick={handleClicked}
              className="px-6 py-4 text-white bg-[#1a4ea2] rounded-md font-bold shadow hover:bg-white hover:text-[#1a4ea2] hover:border-blue-800 hover:border-2"
            >
              <a className=""></a>
              Contact us
            </button>
          </div>
        </Link>
      </div>
      <ContactUs clicked={clicked} />
    </nav>
  );
};

export default Navnew;
