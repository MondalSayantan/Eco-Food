import React from "react";
import Hero from "./hero";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <header className="text-gray-600 body-font">
        <div className=" mx-10 flex flex-wrap p-5 flex-col md:flex-row items-center">
          <nav className="flex lg:w-2/5 flex-wrap items-center text-l md:ml-auto">
            <Link to="/" className="mr-5 hover:text-gray-900">
              Home
            </Link>
            <Link to="/addingredients" className="mr-5 hover:text-gray-900">
              Add Ingredients
            </Link>
            <Link to="/joinwithus" className="mr-5 hover:text-gray-900">
              Get Help
            </Link>
            <Link to="/statustable" className="mr-5 hover:text-gray-900">
              All Items
            </Link>
            <Link to="/expiringitems" className="mr-5 hover:text-gray-900">
              Expiring items
            </Link>
          </nav>
          <div className="flex order-first lg:order-none lg:w-1/5 title-font font-medium items-center text-gray-900 lg:items-center lg:justify-center md:mb-0">
            <img
              src="https://i.postimg.cc/MKmfv2VJ/Screenshot-2022-10-09-at-10-37-39-AM-removebg-preview.png"
              alt="logo"
              width={100}
              height={100}
              //   className="w-20 h-20 text-white p-2 rounded-full"
            />
          </div>
          <div className="lg:w-2/5 inline-flex lg:justify-end ml-5 lg:ml-0">
            <button className="inline-flex items-center bg-yellow-100 border-2 border-yellow-800 py-1 px-3 focus:outline-none hover:bg-yellow-500 rounded-3xl text-base mt-4 md:mt-0 text-white">
              <img
                src="https://i.postimg.cc/13JyYnXp/16619508041606988090-128.png"
                alt="logo"
                width={35}
                height={35}
              />
            </button>
          </div>
        </div>
      </header>
      <div className="bg-yellow-500 text-l font-serif">
        <marquee behavior="scroll" direction="right" scrollamount="10">
          Save Food Save Future !! Donate Food to the Needy!!
        </marquee>
      </div>
      <Hero />
    </div>
  );
};
export default Header;
