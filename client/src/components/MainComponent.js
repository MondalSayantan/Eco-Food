import React from "react";
import Stats from "./stats";

const MainComponent = () => {
  return (
    <div>
      <section class="text-gray-600 body-font">
        <div class="container px-5 mx-auto">
          <div class="text-center mb-20">
            <h1 class="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4">
              Our works are designed to provide essential food support to
              underserved areas in the form of food or packaged food products
              depending on the need.
            </h1>
            <p class="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500s">
              Our goal is to ensure, Feed people not landfills.
            </p>
            <div class="flex mt-6 justify-center">
              <div class="w-16 h-1 rounded-full bg-indigo-500 inline-flex"></div>
            </div>
          </div>
          <div class="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
            <div class="p-4 md:w-1/3 flex flex-col text-center items-center">
              <div class="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0">
                <img
                  src="https://i.postimg.cc/HxyR3YbW/20340289291547546467-128.png"
                  alt="addproduct"
                  height={50}
                  width={50}
                />
              </div>
              <div class="flex-grow">
                <h2 class="text-gray-900 text-lg title-font font-medium mb-3">
                  Add Ingredients
                </h2>
                <p class="leading-relaxed text-base">
                  Add Items such as Raw materials, Fruits, Snacks, Drinkables
                  etc.
                </p>
                <a class="mt-3 text-indigo-500 inline-flex items-center">
                  Add Ingredients
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    class="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div>
            <div class="p-4 md:w-1/3 flex flex-col text-center items-center">
              <div class="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0">
                <img
                  src="https://i.postimg.cc/pLSs7NWm/2292958011594444098-128.png"
                  alt="status"
                  height={50}
                  width={50}
                />
              </div>
              <div class="flex-grow">
                <h2 class="text-gray-900 text-lg title-font font-medium mb-3">
                  Ingredients Status
                </h2>
                <p class="leading-relaxed text-base">
                  Monitor and manage the Shelflife of the Ingredients.
                </p>
                <a class="mt-3 text-indigo-500 inline-flex items-center py-8">
                  See Status
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    class="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div>
            <div class="p-4 md:w-1/3 flex flex-col text-center items-center">
              <div class="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0">
                <img
                  src="https://i.postimg.cc/3x0Xkkhw/5641833081639632574-128.png"
                  alt="status"
                  height={50}
                  width={50}
                />
              </div>
              <div class="flex-grow">
                <h2 class="text-gray-900 text-lg title-font font-medium mb-3">
                  Contact Food Distributers
                </h2>
                <p class="leading-relaxed text-base">
                  Contact the Food Distributers and various NGO's to donate the
                  food.
                </p>
                <a class="mt-3 text-indigo-500 inline-flex items-center">
                  Contact
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    class="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          {/* <button class="flex mx-auto mt-16 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
            Button
          </button> */}
        </div>
      </section>
      <Stats />
    </div>
  );
};
export default MainComponent;
