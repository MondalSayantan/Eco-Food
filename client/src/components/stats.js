import React from "react";
import Countup from "react-countup";
import Footer from "./footer";

const Stats = () => {
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-10 mx-auto flex flex-wrap">
          <div className="flex flex-wrap -mx-4 mt-auto mb-auto lg:w-1/2 sm:w-2/3 content-start sm:pr-10">
            <div className="w-full sm:p-4 px-4 mb-6">
              <h1 className="title-font font-medium text-4xl mb-2 text-gray-900">
                We Have Reached Soo Far !!
              </h1>
              <div className="leading-relaxed">
                Every day No Food Waste Team and Volunteers serve 5000+ needy
                people on an average!
              </div>
            </div>
            <div className="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
              <h2 className="title-font font-medium text-3xl text-gray-900">
                <Countup end={10000} duration={10} />+
              </h2>
              <p className="leading-relaxed">Plates Serverd</p>
            </div>
            <div className="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
              <h2 className="title-font font-medium text-3xl text-gray-900">
                <Countup end={19} duration={5} />
              </h2>
              <p className="leading-relaxed">NGO's tie's</p>
            </div>
            <div className="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
              <h2 className="title-font font-medium text-3xl text-gray-900">
                <Countup end={988} duration={10} />
              </h2>
              <p className="leading-relaxed">Members/Team</p>
            </div>
            <div className="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
              <h2 className="title-font font-medium text-3xl text-gray-900">
                <Countup end={12} duration={5} />
              </h2>
              <p className="leading-relaxed">Awards</p>
            </div>
          </div>
          <div className="lg:w-1/2 sm:w-1/3 w-full rounded-lg overflow-hidden mt-6 sm:mt-0">
            <img
              className="object-cover object-center w-full h-full"
              src="https://i.postimg.cc/23R06htn/Screenshot-2022-10-08-at-10-31-59-AM.png"
              alt="stats"
            />
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};
export default Stats;
