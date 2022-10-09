import React from "react";
import Headerclone from "./headerclone";
import { useNavigate } from "react-router-dom";

const ThankingPage = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Headerclone />
      <div className="bg">
        <div className="flex justify-center items-center overflow-x-auto relative rounded-lg ">
          <div class="p-6 max-w-sm bg-white rounded-xl border border-yellow-500 border-4 shadow-md dark:bg-gray-800 dark:border-gray-700  mt-28">
            <div className="flex order-first lg:order-none  title-font font-medium items-center text-gray-900 lg:items-center lg:justify-center md:mb-0">
              <img
                src="https://i.postimg.cc/MKmfv2VJ/Screenshot-2022-10-09-at-10-37-39-AM-removebg-preview.png"
                alt="logo"
                width={100}
                height={100}
              />
            </div>

            <h5 class="mb-2 text-3xl tracking-tight text-Yellow-800 dark:text-white uppercase flex justify-center items-center mt-4 text-center text-yellow-800 font-bold">
              Thank You For Your Donation
            </h5>
            <hr className="width=30% mb-2"></hr>
            <p class="mb-3 font-normal text-gray-500 dark:text-gray-400 text-center">
              Donating to the needy is a noble cause. It is a way of giving back
            </p>
            <div className="flex justify-center items-center mt-4">
              <button
                className="bg-yellow-700 hover:bg-yellow-500 text-white font-bold py-2 px-4 rounded-full flex justify-center items-center"
                onClick={() => {
                  navigate("/");
                }}
              >
                Back to Home
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThankingPage;
