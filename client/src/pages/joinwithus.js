import React, { useState, useEffect } from "react";
import Headerclone from "./headerclone";
import axios from "axios";

const Joinwithus = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [address, setAddress] = useState("");
  const [message, setMessage] = useState("");

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
      const response = axios.post("http://localhost:8080/ngo", data);
      console.log(response);
      alert("Your message has been sent successfully");
    } catch (error) {
      console.log(error);
      alert("Error sending message");
    }
  };

  return (
    <div>
      <Headerclone />
      <div className="bg">
        <div>
          <section class="text-gray-600 body-font relative">
            <div class="container px-5 py-24 mx-auto">
              <div class="flex flex-col text-center w-full mb-12">
                <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
                  Join Us
                </h1>
                <p class="lg:w-2/3 mx-auto leading-relaxed text-base">
                  WE ARE NOT A TEAM BECAUSE WE WORK TOGETHER. WE ARE A TEAM
                  BECAUSE WE RESPECT, TRUST, AND CARE FOR EACH OTHER.
                </p>
              </div>
              <div class="lg:w-1/2 md:w-2/3 mx-auto">
                <div class="flex flex-wrap -m-2">
                  <div class="p-2 w-1/2">
                    <div class="relative">
                      <label for="name" class="leading-7 text-l text-gray-600">
                        Name of Organization
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        class="w-full bg-white bg-opacity-50 rounded border border-gray-500 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                        onChange={(e) => setName(e.target.value)}
                      />
                    </div>
                  </div>
                  <div class="p-2 w-1/2">
                    <div class="relative">
                      <label for="email" class="leading-7 text-l text-gray-600">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        class="w-full bg-white bg-opacity-50 rounded border border-gray-500 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                  </div>
                  <div class="p-2 w-1/2">
                    <div class="relative">
                      <label for="name" class="leading-7 text-l text-gray-600">
                        Contact Number
                      </label>
                      <input
                        type="number"
                        id="mobile"
                        name="mobile"
                        class="w-full bg-white bg-opacity-50 rounded border border-gray-500 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                        onChange={(e) => setMobile(e.target.value)}
                      />
                    </div>
                  </div>
                  <div class="p-2 w-1/2">
                    <div class="relative">
                      <label for="email" class="leading-7 text-l text-gray-600">
                        Address
                      </label>
                      <input
                        type="text"
                        id="address"
                        name="address"
                        class="w-full bg-white bg-opacity-50 rounded border border-gray-500 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                        onChange={(e) => setAddress(e.target.value)}
                      />
                    </div>
                  </div>
                  <div class="p-2 w-full">
                    <div class="relative">
                      <label
                        for="message"
                        class="leading-7 text-l text-gray-600"
                      >
                        Message or Query
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        class="w-full bg-white bg-opacity-50 rounded border border-gray-500 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                        onChange={(e) => setMessage(e.target.value)}
                      ></textarea>
                    </div>
                  </div>
                  <div class="p-2 w-full">
                    <button
                      class="flex mx-auto shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                      onClick={handleSubmit}
                    >
                      Button
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Joinwithus;
