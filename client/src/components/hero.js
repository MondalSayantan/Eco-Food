import React from "react";
import MainComponent from "./MainComponent";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-14 md:flex-row flex-col items-center">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <img
              className="object-cover object-center rounded"
              alt="hero"
              src="https://i.postimg.cc/C597zkRw/Screenshot-2022-10-08-at-9-44-04-AM.png"
            />
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-yellow-800 font-bold">
              Today's Wastage is
              <br className="hidden lg:inline-block" />
              Tomorrow's Shortage
            </h1>
            <p className="mb-8 leading-relaxed text-yellow-700">
              Take charge of your kitchen to ensure nobody goes hungry in this
              world
            </p>
            <div className="flex justify-center">
              <div className="flex justify-center items-center mt-4">
                <button
                  className="bg-yellow-700 hover:bg-yellow-500 text-white font-bold py-2 px-4 rounded-full flex justify-center items-center"
                  onClick={() => {
                    navigate("/expiringitems");
                  }}
                >
                  Donate Now
                  {/* <div className="ml-2 text-white">
                    <img
                      color="white"
                      src="https://i.postimg.cc/7ZcW6wQF/20642841761530177259-128.png"
                      alt="donate"
                      height={20}
                      width={20}
                    />
                  </div> */}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <MainComponent />
    </div>
  );
};

export default Hero;
