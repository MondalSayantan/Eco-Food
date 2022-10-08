import React from "react";
import Hero from "./hero";

const Header = () => {
  return (
    <div>
      <header class="text-gray-600 body-font">
        <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <nav class="flex lg:w-2/5 flex-wrap items-center text-base md:ml-auto">
            <a class="mr-5 hover:text-gray-900">Home</a>
            <a class="mr-5 hover:text-gray-900">Join With Us</a>
            <a class="mr-5 hover:text-gray-900">Contact</a>
          </nav>
          <a class="flex order-first lg:order-none lg:w-1/5 title-font font-medium items-center text-gray-900 lg:items-center lg:justify-center mb-4 md:mb-0">
            <img
              src="https://i.postimg.cc/WbrtBgwT/Screenshot-2022-10-08-at-9-23-36-AM-removebg-preview.png"
              alt="logo"
              width={100}
              height={100}
              //   class="w-20 h-20 text-white p-2 rounded-full"
            />
          </a>
          <div class="lg:w-2/5 inline-flex lg:justify-end ml-5 lg:ml-0">
            <button class="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
              Login
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                class="w-4 h-4 ml-1"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </button>
          </div>
        </div>
      </header>
      <div className="bg-emerald-300 text-l font-serif">
        <marquee behavior="scroll" direction="right" scrollamount="10">
          Save Food Save Future !! Donate Food to the Needy!!
        </marquee>
      </div>
      <Hero />
    </div>
  );
};
export default Header;
