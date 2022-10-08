import React from "react";
import MainComponent from "./MainComponent";

const Hero = () => {
  return (
    <div>
      <section class="text-gray-600 body-font">
        <div class="container mx-auto flex px-5 py-14 md:flex-row flex-col items-center">
          <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <img
              class="object-cover object-center rounded"
              alt="hero"
              src="https://i.postimg.cc/C597zkRw/Screenshot-2022-10-08-at-9-44-04-AM.png"
            />
          </div>
          <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              Today's Wastage is
              <br class="hidden lg:inline-block" />
              Tomorrow's Shortage
            </h1>
            <p class="mb-8 leading-relaxed">
              “Good bread is the most fundamentally satisfying of all foods;
              good bread with fresh butter, the greatest of feasts!” – James
              Beard
            </p>
            {/* <div class="flex justify-center">
              <button class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                Button
              </button>
              <button class="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
                Button
              </button>
            </div> */}
          </div>
        </div>
      </section>
      <MainComponent />
    </div>
  );
};

export default Hero;
