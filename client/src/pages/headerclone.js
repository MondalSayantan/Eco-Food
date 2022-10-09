import React from "react";
import { Link } from "react-router-dom";

const Headerclone = () => {
  return (
    <div>
      <header className="text-gray-600 body-font relative">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <nav className="flex lg:w-2/5 flex-wrap items-center text-base md:ml-auto">
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
          <div className="flex order-first lg:order-none lg:w-1/5 title-font font-medium items-center text-gray-900 lg:items-center lg:justify-center mb-4 md:mb-0">
            <img
              src="https://i.postimg.cc/MKmfv2VJ/Screenshot-2022-10-09-at-10-37-39-AM-removebg-preview.png"
              alt="logo"
              width={100}
              height={100}
              //   className="w-20 h-20 text-white p-2 rounded-full"
            />
          </div>
          <div className="lg:w-2/5 inline-flex lg:justify-end ml-5 lg:ml-0">
            <button className="inline-flex items-center bg-yellow-600 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0 text-white">
              Login
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                className="w-4 h-4 ml-1"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </button>
          </div>
        </div>
      </header>
      <div className="bg-yellow-500 text-l font-serif">
        <marquee behavior="scroll" direction="right" scrollamount="10">
          Save Food Save Future !! Donate Food to the Needy!!
        </marquee>
      </div>
    </div>
  );
};
export default Headerclone;
