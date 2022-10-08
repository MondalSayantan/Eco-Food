import React, { useState, useEffect } from "react";
import Headerclone from "./headerclone";
import axios from "axios";
import Footer from "../components/footer";
import { useSnackbar } from "notistack";

const Joinwithus = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [address, setAddress] = useState("");
  const [message, setMessage] = useState("");

  const { enqueueSnackbar } = useSnackbar();

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      name,
      email,
      mobile,
      address,
      message,
    };
    //try catch block
    try {
      const response = axios
        .post("http://localhost:8080/ngo", data)
        .then((response) => {
          enqueueSnackbar("NGO added successfully", {
            variant: "success",
          });
        })
        .catch((error) => {
          enqueueSnackbar("Error occured", {
            variant: "error",
          });
        });
    } catch (error) {
      enqueueSnackbar("Error occured", {
        variant: "error",
      });
    }
  };

  return (
    <div>
      <Headerclone />
      <div className="bg">
        <div>
          <section className="text-gray-600 body-font relative">
            <div className="container px-5 py-24 mx-auto">
              <div className="flex flex-col text-center w-full mb-12">
                <h1 className="text-4xl title-font mb-4 text-yellow-700 font-extrabold">
                  Join Us
                </h1>
                <p className="lg:w-2/3 mx-auto leading-relaxed text-lg font-bold text-gray-700">
                  WE ARE NOT A TEAM BECAUSE WE WORK TOGETHER. WE ARE A TEAM
                  BECAUSE WE RESPECT, TRUST, AND CARE FOR EACH OTHER.
                </p>
              </div>
              <div className="lg:w-1/2 md:w-2/3 mx-auto">
                <div className="flex flex-wrap -m-2">
                  <div className="p-2 w-1/2">
                    <div className="relative">
                      <label
                        for="name"
                        className="leading-7 text-lg text-gray-700"
                      >
                        Name of Organization
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        className="w-full bg-white bg-opacity-50 rounded border border-gray-500 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                        onChange={(e) => setName(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="p-2 w-1/2">
                    <div className="relative">
                      <label
                        for="email"
                        className="leading-7 text-lg text-gray-700"
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="w-full bg-white bg-opacity-50 rounded border border-gray-500 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="p-2 w-1/2">
                    <div className="relative">
                      <label
                        for="name"
                        className="leading-7 text-lg text-gray-700"
                      >
                        Contact Number
                      </label>
                      <input
                        type="number"
                        id="mobile"
                        name="mobile"
                        className="w-full bg-white bg-opacity-50 rounded border border-gray-500 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                        onChange={(e) => setMobile(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="p-2 w-1/2">
                    <div className="relative">
                      <label
                        for="email"
                        className="leading-7 text-lg text-gray-700"
                      >
                        Address
                      </label>
                      <input
                        type="text"
                        id="address"
                        name="address"
                        className="w-full bg-white bg-opacity-50 rounded border border-gray-500 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                        onChange={(e) => setAddress(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="p-2 w-full">
                    <div className="relative">
                      <label
                        for="message"
                        className="leading-7 text-lg text-gray-700"
                      >
                        Message or Query
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        className="w-full bg-white bg-opacity-50 rounded border border-gray-500 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                        onChange={(e) => setMessage(e.target.value)}
                      ></textarea>
                    </div>
                  </div>
                  <div className="p-2 w-full">
                    <button
                      className="flex mx-auto shadow bg-yellow-600 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                      onClick={handleSubmit}
                    >
                      Register NGO
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Joinwithus;
